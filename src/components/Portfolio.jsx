import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ArrowUpRight, 
  X, 
  ShoppingBag, 
  Palette, 
  FileCheck2,
  TrendingUp,
  Layers,
  Building2
} from 'lucide-react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const conceptProjects = [
    {
      id: 'ecoglow',
      title: 'EcoGlow Natural Skincare',
      category: 'Graphic Design & Branding',
      lead: 'Dhanalakshmi',
      icon: Palette,
      tagColor: 'from-emerald-500 to-teal-500',
      badge: 'Brand Identity',
      summary: 'Minimalist botanical branding, organic color palette, and label designs for a natural skincare line.',
      clientGoal: 'Create a soothing, premium brand identity for a modern organic skincare product line competing in online market channels.',
      solution: 'Dhanalakshmi developed a minimalist botanical logo, curated a warm earthy pastel color palette, designed eco-friendly product labels for cream jars & serum bottles, and produced social media graphics.',
      results: [
        'High brand perception matching premium retail standards',
        '100% vector scalable assets delivered (AI, SVG, PDF)',
        'Product label designs prepared for print specs'
      ],
      stats: '100% Client Brand Rating',
      deliverables: ['Logo & Marks', 'Color Palette & Typography', 'Jar & Bottle Label Prints', 'Social Media Templates']
    },
    {
      id: 'ananya',
      title: 'Ananya Fashion Boutique',
      category: 'Shopify E-Commerce Web Dev',
      lead: 'Kanishkar',
      icon: ShoppingBag,
      tagColor: 'from-cyan-500 to-indigo-500',
      badge: 'Shopify E-Commerce',
      summary: 'Custom high-speed Shopify storefront with payment gateway, size guides, and filterable product catalogs.',
      clientGoal: 'Transition a traditional local clothing boutique into a direct-to-consumer online fashion brand serving customers nationwide.',
      solution: 'Kanishkar built a high-speed, mobile-first Shopify store complete with Razorpay payment gateway integration, custom size guides, filterable product catalogs, and Instagram feed integration.',
      results: [
        '100+ online orders within the first month of store launch',
        'Fast 1.8-second mobile page load speed',
        'Seamless payment gateway and order automated emails'
      ],
      stats: '1.8s Mobile Load Speed',
      deliverables: ['Shopify Theme Customization', 'Payment Gateway Setup', '25+ Product Uploads', 'Mobile Checkout Optimization']
    },
    {
      id: 'globallogistics',
      title: 'Global Logistics Corporate Report',
      category: 'Typing & Data Formatting',
      lead: 'Dhanalakshmi',
      icon: FileCheck2,
      tagColor: 'from-purple-500 to-pink-500',
      badge: 'Document Services',
      summary: '150+ pages of handwritten notes and scanned legacy PDFs digitized into structured Tamil & English reports.',
      clientGoal: 'Convert 150+ pages of handwritten notes and scanned legacy PDFs into formatted, error-free digital reports in English and Tamil for executive review.',
      solution: 'Dhanalakshmi executed rapid typing, structural document formatting, complex table creation, and bilingual proofreading ahead of the client deadline.',
      results: [
        '100% accuracy verified with zero client revision requests',
        'Delivered 2 days ahead of scheduled corporate deadline',
        'Formatted cleanly in Word, PDF & editable Excel tables'
      ],
      stats: '0 Errors / 150+ Pages',
      deliverables: ['PDF to Word & Excel Conversion', 'Tamil & English Typing', 'Corporate Table Styling', 'Executive Report Formatting']
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONCEPT PROJECTS & CASE STUDIES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Demonstrated Excellence Across <span className="text-gradient">Every Discipline</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Explore sample projects showcasing our graphic design skills, web development capabilities, and precision document services.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conceptProjects.map((project) => {
            const IconComp = project.icon;
            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl p-6 border-slate-800 flex flex-col justify-between group hover:border-slate-700 relative"
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300">
                      {project.badge}
                    </span>
                    <span className="text-xs text-purple-400 font-medium">By {project.lead}</span>
                  </div>

                  {/* Icon Header */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${project.tagColor} p-[1px] mb-4`}>
                    <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center text-white">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-6 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-bold text-emerald-400">{project.stats}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-xl glass-panel text-xs font-bold text-slate-200 hover:text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group-hover:border-cyan-500/30"
                >
                  <span>View Case Study Details</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border-slate-800 p-6 sm:p-8 relative shadow-2xl">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-xs font-bold text-cyan-300">
                {selectedProject.badge}
              </span>
              <span className="text-xs text-slate-400">Lead Specialist: <strong>{selectedProject.lead}</strong></span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-4">
              {selectedProject.title}
            </h3>

            <div className="space-y-6">
              
              <div>
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">🎯 Client Goal & Challenge</h4>
                <p className="text-slate-300 text-sm leading-relaxed glass-card p-4 rounded-2xl border-slate-800">
                  {selectedProject.clientGoal}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">💡 Our Solution & Strategy</h4>
                <p className="text-slate-300 text-sm leading-relaxed glass-card p-4 rounded-2xl border-slate-800">
                  {selectedProject.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">🏆 Key Accomplishments & Metrics</h4>
                <ul className="space-y-2">
                  {selectedProject.results.map((res, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">📦 Project Deliverables</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.deliverables.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-all"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
