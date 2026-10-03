import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { EXPERIENCE_POINTS } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#F2B33D] mb-2 font-mono">
            06 / Track Record &amp; Roles
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F1E8] tracking-tight">
            Professional Experience
          </h2>
          <p className="text-base text-[#A9B0C6] mt-3">
            Real-world creative execution in freelance production and independent digital media.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#252C45] border border-[#F5F1E8]/10 p-7 sm:p-10 shadow-2xl card-hover-glow relative overflow-hidden">
          {/* Subtle amber corner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2B33D]/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Role Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#F5F1E8]/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#F2B33D] uppercase tracking-wider mb-1">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Freelance / Independent Projects</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F1E8]">
                Video Editor &amp; AI Video Creator
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#A9B0C6] mt-2 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#F2B33D]" />
                  1 Year Experience (2025 – Present)
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F2B33D]" />
                  Chhindwara, MP · Remote &amp; Global Clients
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center px-3.5 py-1.5 rounded-full bg-[#1C2236] border border-[#F2B33D]/30 text-xs font-medium text-[#F2B33D]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Active Freelancer</span>
            </div>
          </div>

          {/* Bullets from Resume */}
          <div className="mt-8 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A9B0C6] mb-4">
              Key Responsibilities &amp; Impact
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EXPERIENCE_POINTS.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-[#1C2236]/70 border border-[#F5F1E8]/5 hover:border-[#F2B33D]/25 transition-colors"
                >
                  <div className="w-6 h-6 rounded-md bg-[#252C45] border border-[#F5F1E8]/10 flex items-center justify-center shrink-0 text-[#F2B33D] mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-[#F5F1E8]/90 leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Trust Badge */}
          <div className="mt-8 pt-6 border-t border-[#F5F1E8]/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A9B0C6]">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#F2B33D]" />
              <span>Proven track record across 150+ completed client video assets.</span>
            </div>
            <a
              href="#contact"
              className="text-xs font-semibold text-[#F2B33D] hover:underline"
            >
              Discuss your project scope →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
