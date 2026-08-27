import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, SlidersHorizontal, Music } from 'lucide-react';

export default function LiquidDock({
  isPlaying,
  isMuted,
  onTogglePlay,
  onToggleMute,
  onOpenJourney
}) {
  const [ambientSound, setAmbientSound] = useState('off'); // 'off' | 'space' | 'rain' | 'waves'
  const [volume, setVolume] = useState(0.4);
  const [showControls, setShowControls] = useState(false);
  
  const audioCtxRef = useRef(null);
  const soundNodesRef = useRef([]);

  // Handle ambient sound synthesis using Web Audio API
  useEffect(() => {
    // Stop previous sound nodes
    soundNodesRef.current.forEach(node => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch (e) {}
    });
    soundNodesRef.current = [];

    if (ambientSound === 'off') return;

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      soundNodesRef.current.push(masterGain);

      if (ambientSound === 'space') {
        // Deep Space Synth Chord (A minor / 432Hz ambient pad)
        const freqs = [108, 162, 216, 324];
        freqs.forEach(freq => {
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          
          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0.12, ctx.currentTime);
          
          const lfo = ctx.createOscillator();
          lfo.frequency.setValueAtTime(0.2, ctx.currentTime);
          const lfoGain = ctx.createGain();
          lfoGain.gain.setValueAtTime(2, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start();
          
          osc.connect(gain);
          gain.connect(masterGain);
          osc.start();
          
          soundNodesRef.current.push(osc, lfo);
        });
      } else if (ambientSound === 'rain') {
        // Rain Noise Filter
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, ctx.currentTime);

        noise.connect(filter);
        filter.connect(masterGain);
        noise.start();

        soundNodesRef.current.push(noise);
      } else if (ambientSound === 'waves') {
        // Ocean Tide Modulation
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (lastOut + (0.02 * white)) / 1.02;
          lastOut = data[i];
          data[i] *= 3.5;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, ctx.currentTime);

        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.12, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.3, ctx.currentTime);

        const waveGain = ctx.createGain();
        waveGain.gain.setValueAtTime(0.2, ctx.currentTime);

        lfo.connect(waveGain.gain);
        noise.connect(filter);
        filter.connect(waveGain);
        waveGain.connect(masterGain);

        noise.start();
        lfo.start();

        soundNodesRef.current.push(noise, lfo);
      }
    } catch (e) {
      console.warn("Audio Context init error", e);
    }
  }, [ambientSound, volume]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
      {/* Expanded Controls Drawer */}
      {showControls && (
        <div className="mb-3 liquid-panel rounded-2xl p-4 border border-white/10 shadow-2xl backdrop-blur-xl animate-fade-rise flex items-center space-x-6">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-mono">Soundscape</span>
            <div className="flex items-center gap-1.5">
              {[
                { id: 'off', label: 'Mute Sound' },
                { id: 'space', label: 'Cosmic Pad' },
                { id: 'rain', label: 'Quiet Rain' },
                { id: 'waves', label: 'Tidal Calm' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setAmbientSound(item.id)}
                  className={`px-2.5 py-1 text-xs rounded-full transition-colors ${
                    ambientSound === item.id
                      ? 'bg-white text-black font-medium'
                      : 'text-white/70 hover:text-white bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="h-8 w-px bg-white/10" />

          {/* Volume slider */}
          <div className="flex flex-col gap-1 w-24">
            <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-mono">Volume</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="accent-white cursor-pointer h-1.5 bg-white/20 rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Main Glass Floating Bar */}
      <div className="liquid-glass rounded-full px-5 py-2.5 flex items-center space-x-5 shadow-2xl border border-white/10">
        {/* Play/Pause Video */}
        <button
          onClick={onTogglePlay}
          className="text-white/80 hover:text-white transition-colors cursor-pointer"
          title={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        {/* Video Mute Toggle */}
        <button
          onClick={onToggleMute}
          className="text-white/80 hover:text-white transition-colors cursor-pointer"
          title={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        <div className="h-4 w-px bg-white/15" />

        {/* Soundscape presets quick toggle */}
        <button
          onClick={() => setShowControls(!showControls)}
          className={`flex items-center gap-1.5 text-xs transition-colors cursor-pointer ${
            ambientSound !== 'off' ? 'text-white font-medium' : 'text-white/70 hover:text-white'
          }`}
        >
          <Music className={`w-3.5 h-3.5 ${ambientSound !== 'off' ? 'animate-pulse text-cyan-300' : ''}`} />
          <span className="hidden sm:inline">
            {ambientSound === 'off' ? 'Soundscapes' : ambientSound.toUpperCase()}
          </span>
        </button>

        <div className="h-4 w-px bg-white/15" />

        {/* Fullscreen */}
        <button
          onClick={toggleFullscreen}
          className="text-white/80 hover:text-white transition-colors cursor-pointer"
          title="Toggle Fullscreen"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Experience journey shortcut */}
        <button
          onClick={onOpenJourney}
          className="flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full transition-colors cursor-pointer"
        >
          <Sparkles className="w-3 h-3 text-cyan-300" />
          <span>Explore</span>
        </button>
      </div>
    </div>
  );
}
