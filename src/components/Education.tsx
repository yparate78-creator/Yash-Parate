import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { EDUCATION_STEPS } from '../data/portfolioData';

export default function Education() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-5 h-5 text-[#F2B33D]" />;
      case 1:
        return <Award className="w-5 h-5 text-[#F2B33D]" />;
      case 2:
        return <BookOpen className="w-5 h-5 text-[#F2B33D]" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#F2B33D]" />;
    }
  };

  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#F2B33D] mb-2 font-mono">
            07 / Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F1E8] tracking-tight">
            Education &amp; Technical Foundation
          </h2>
          <p className="text-base text-[#A9B0C6] mt-3">
            A balanced foundation of academic discipline, electronics hardware intuition, and media studies.
          </p>
        </div>

        {/* 3-Step Vertical Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-[#F5F1E8]/10 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10">
            {EDUCATION_STEPS.map((item, index) => (
              <div key={item.title} className="relative group">
                {/* Node on Vertical Line */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-9 h-9 rounded-full bg-[#252C45] border-2 border-[#F2B33D] flex items-center justify-center text-[#F2B33D] shadow-md shadow-[#F2B33D]/20 group-hover:scale-110 transition-transform">
                  {getIcon(index)}
                </div>

                {/* Content Card */}
                <div className="rounded-2xl bg-[#252C45] border border-[#F5F1E8]/10 p-6 sm:p-7 shadow-lg card-hover-glow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#F5F1E8] group-hover:text-[#F2B33D] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#1C2236] border border-[#F2B33D]/30 text-[#F2B33D] font-medium">
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#A9B0C6] leading-relaxed mt-2">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#F5F1E8]/5 flex items-center gap-2 text-xs font-mono text-[#A9B0C6]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F2B33D]" />
                    <span>Status: {item.status} · Chhindwara, Madhya Pradesh</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
