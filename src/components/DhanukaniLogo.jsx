import React from 'react';

export default function DhanukaniLogo({ className = "w-14 h-12", layout = "vertical" }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 300 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl overflow-visible"
      >
        <defs>
          {/* Subtle drop shadow filter for Monogram D */}
          <filter id="dShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="#000000" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* 1. Crimson / Pink Offset Shadow Shield Layer */}
        <path
          d="M 68 18 C 95 18, 205 18, 232 18 C 246 18, 256 28, 248 42 C 218 95, 178 145, 153 182 C 147 191, 137 191, 131 182 C 106 145, 66 95, 36 42 C 28 28, 38 18, 52 18 Z"
          fill="#C81E3D"
          transform="translate(4, 5)"
        />

        {/* 2. Main Dark Inverted Rounded Triangle Shield */}
        <path
          d="M 68 18 C 95 18, 205 18, 232 18 C 246 18, 256 28, 248 42 C 218 95, 178 145, 153 182 C 147 191, 137 191, 131 182 C 106 145, 66 95, 36 42 C 28 28, 38 18, 52 18 Z"
          fill="#000000"
          stroke="#1E1E32"
          strokeWidth="2"
        />

        {/* 3. Serif Monogram 'D' in White inside Shield */}
        <g filter="url(#dShadow)">
          {/* 'D' Drop Shadow outline line */}
          <text
            x="142"
            y="98"
            fill="#333333"
            fontSize="72"
            fontWeight="600"
            fontFamily="'Lora', 'Georgia', serif"
            textAnchor="middle"
          >
            D
          </text>
          {/* Main White 'D' */}
          <text
            x="140"
            y="96"
            fill="#FFFFFF"
            fontSize="72"
            fontWeight="600"
            fontFamily="'Lora', 'Georgia', serif"
            textAnchor="middle"
          >
            D
          </text>
        </g>

        {/* 4. Logotype: DHANUKANI in Calligraphic Script Typography */}
        <text
          x="142"
          y="208"
          fill="#FFFFFF"
          fontSize="36"
          fontWeight="700"
          fontStyle="italic"
          fontFamily="'Syne', 'Space Grotesk', sans-serif"
          textAnchor="middle"
          letterSpacing="2"
        >
          DHANUKANI
        </text>

        {/* 5. Tagline: TRUST CREATION */}
        <text
          x="142"
          y="232"
          fill="#A0A0C0"
          fontSize="17"
          fontWeight="500"
          fontStyle="italic"
          fontFamily="'Space Grotesk', sans-serif"
          textAnchor="middle"
          letterSpacing="8"
        >
          TRUST CREATION
        </text>
      </svg>
    </div>
  );
}
