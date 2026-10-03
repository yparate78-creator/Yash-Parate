import { useEffect, useState, useRef } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export default function Process() {
  const [lineWidth, setLineWidth] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress through this section
      const totalDist = rect.height + windowHeight;
      const currentPos = windowHeight - rect.top;
      const ratio = Math.max(0, Math.min(1, currentPos / (totalDist * 0.75)));
      setLineWidth(ratio * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#F2B33D] mb-2 font-mono">
            05 / Methodology &amp; Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F1E8] tracking-tight">
            The 5-Step Cinematic Pipeline
          </h2>
          <p className="text-base text-[#A9B0C6] mt-3">
            How I transform an abstract idea or raw brief into a cohesive, high-retention video asset.
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Base Inactive Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-0.5 bg-[#F5F1E8]/10 -z-10" />

          {/* Active Drawing Line as user scrolls */}
          <div
            className="hidden lg:block absolute top-7 left-8 h-0.5 bg-gradient-to-r from-[#F2B33D] to-[#ffd47d] -z-10 transition-all duration-300 ease-out"
            style={{ width: `calc(${lineWidth}% - 4rem)` }}
          />

          {/* 5-Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step, index) => {
              const isPassed = (lineWidth / 100) * 5 >= index + 0.3;

              return (
                <div
                  key={step.step}
                  className="rounded-2xl sm:rounded-3xl bg-[#252C45] border border-[#F5F1E8]/10 p-6 shadow-xl card-hover-glow flex flex-col justify-between relative group"
                >
                  {/* Step Header with Node Indicator */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                          isPassed
                            ? 'bg-[#F2B33D] text-[#1C2236] shadow-md shadow-[#F2B33D]/30 scale-105'
                            : 'bg-[#1C2236] text-[#A9B0C6] border border-[#F5F1E8]/10'
                        }`}
                      >
                        {step.step}
                      </div>
                      <span className="text-[11px] font-mono text-[#A9B0C6] group-hover:text-[#F2B33D] transition-colors">
                        Phase 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#F5F1E8] group-hover:text-[#F2B33D] transition-colors">
                      {step.name}
                    </h3>

                    <p className="text-xs text-[#A9B0C6] leading-relaxed mt-2.5">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#F5F1E8]/10 flex items-center gap-1.5 text-[11px] font-mono text-[#A9B0C6]">
                    <CheckCircle2 className="w-3 h-3 text-[#F2B33D]" />
                    <span>Quality Checked</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Bottom Note */}
        <div className="mt-12 text-center text-xs text-[#A9B0C6] flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#F2B33D]" />
          <span>Iterative feedback loops built into every phase for complete alignment.</span>
        </div>
      </div>
    </section>
  );
}
