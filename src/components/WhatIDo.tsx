import { Video, Smartphone, Sliders, Cpu, ArrowUpRight } from 'lucide-react';
import { WHAT_I_DO_DATA } from '../data/portfolioData';

export default function WhatIDo() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'ai-cinematic':
        return <Video className="w-6 h-6 text-[#F2B33D]" />;
      case 'short-form-reels':
        return <Smartphone className="w-6 h-6 text-[#F2B33D]" />;
      case 'post-production':
        return <Sliders className="w-6 h-6 text-[#F2B33D]" />;
      case 'hybrid-workflows':
        return <Cpu className="w-6 h-6 text-[#F2B33D]" />;
      default:
        return <Video className="w-6 h-6 text-[#F2B33D]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#F2B33D] mb-2 font-mono">
            03 / Services &amp; Specialization
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F1E8] tracking-tight">
            What I Deliver for Creators &amp; Brands
          </h2>
          <p className="text-base text-[#A9B0C6] mt-3">
            Tailored creative services designed to elevate production value, capture audience attention, and convey impactful stories.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHAT_I_DO_DATA.map((item, index) => (
            <div
              key={item.id}
              className="rounded-2xl sm:rounded-3xl bg-[#252C45] border border-[#F5F1E8]/10 p-7 sm:p-9 shadow-xl card-hover-glow flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1C2236] border border-[#F5F1E8]/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  {getIcon(item.id)}
                </div>
                <span className="font-mono text-xs text-[#A9B0C6] tracking-widest">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F1E8] group-hover:text-[#F2B33D] transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-medium text-[#F2B33D] mt-1 font-mono">
                  {item.tagline}
                </div>
                <p className="text-sm text-[#A9B0C6] leading-relaxed mt-4">
                  {item.description}
                </p>
              </div>

              {/* Deliverables unboxed list */}
              <div className="mt-8 pt-6 border-t border-[#F5F1E8]/10">
                <div className="text-xs font-mono uppercase tracking-wider text-[#A9B0C6] mb-3">
                  Key Deliverables
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#F5F1E8]">
                  {item.deliverables.map((del) => (
                    <div key={del} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#F2B33D]" />
                      <span className="truncate">{del}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F2B33D] hover:text-[#ffc453] transition-colors"
                  >
                    <span>View Related Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
