import { ArrowRight, Sparkles, Film, Wand2, ChevronDown, PlayCircle } from 'lucide-react';
import HeroPortrait from './HeroPortrait';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Soft Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#F2B33D]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#4E5896]/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Small uppercase section label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#252C45] border border-[#F5F1E8]/10 text-xs font-semibold tracking-wider uppercase text-[#F2B33D] mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2B33D] animate-ping" />
              <span>Video Editor & AI Video Creator</span>
              <span className="text-[#A9B0C6]/60">·</span>
              <span className="text-[#A9B0C6] font-normal normal-case">Chhindwara, MP</span>
            </div>

            {/* Greeting */}
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F1E8] mb-3 flex items-center gap-2">
              <span>Hi, I'm Yash</span>
              <span className="inline-block hover:rotate-12 transition-transform cursor-default">👋</span>
            </h2>

            {/* Confident Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#F5F1E8] leading-[1.15] tracking-tight mb-6 text-balance">
              I turn ideas into{' '}
              <span className="text-[#F2B33D] relative inline-block">
                cinematic AI videos
              </span>{' '}
              &amp; scroll-stopping Reels.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#A9B0C6] leading-relaxed max-w-2xl mb-8">
              Specialized in AI cinematic video pipelines, high-retention short-form editing, precision color grading, and dynamic sound design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#1C2236] bg-[#F2B33D] hover:bg-[#ffc657] rounded-xl transition-all shadow-md shadow-[#F2B33D]/25 hover:shadow-lg hover:shadow-[#F2B33D]/30 active:scale-95"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#F5F1E8] bg-[#252C45] hover:bg-[#2e3757] border border-[#F5F1E8]/10 hover:border-[#F2B33D]/40 rounded-xl transition-all shadow-sm active:scale-95"
              >
                <span>Contact Me</span>
              </a>

              <a
                href="https://drive.google.com/drive/folders/1fiyuTs6KRdWg1SYdjqG3ELVepLXm3SHA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-[#A9B0C6] hover:text-[#F2B33D] transition-colors"
              >
                <PlayCircle className="w-4 h-4 text-[#F2B33D]" />
                <span>Watch Reel on Drive</span>
              </a>
            </div>

            {/* Quick Trust Anchor */}
            <div className="mt-10 pt-6 border-t border-[#F5F1E8]/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A9B0C6]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available for Freelance Projects
              </span>
              <span>·</span>
              <span>1 Year Proven Experience</span>
              <span>·</span>
              <span>CapCut · Google Veo · Omni</span>
            </div>
          </div>

          {/* Right Photo Column with Floating Chips */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            {/* Soft Ambient Amber Halo */}
            <div className="relative w-full max-w-[420px]">
              <HeroPortrait />

              {/* Chip 1: AI Video Creator (Floating Top-Left) */}
              <div className="absolute -top-4 -left-3 sm:-left-6 z-20 animate-float-slow">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#252C45]/90 backdrop-blur-md border border-[#F2B33D]/30 shadow-xl shadow-black/40 text-xs font-semibold text-[#F5F1E8]">
                  <div className="w-6 h-6 rounded-lg bg-[#F2B33D]/20 flex items-center justify-center text-[#F2B33D]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span>AI Video Creator</span>
                </div>
              </div>

              {/* Chip 2: Video Editor (Floating Bottom-Left) */}
              <div className="absolute top-1/2 -left-4 sm:-left-8 z-20 -translate-y-1/2 animate-float-delay">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#252C45]/90 backdrop-blur-md border border-[#F5F1E8]/15 shadow-xl shadow-black/40 text-xs font-semibold text-[#F5F1E8]">
                  <div className="w-6 h-6 rounded-lg bg-[#4E5896]/30 flex items-center justify-center text-[#90CDF4]">
                    <Film className="w-3.5 h-3.5" />
                  </div>
                  <span>Video Editor</span>
                </div>
              </div>

              {/* Chip 3: Character Consistency (Floating Right Side) */}
              <div className="absolute -bottom-3 -right-2 sm:-right-6 z-20 animate-float-slow">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#252C45]/90 backdrop-blur-md border border-[#F2B33D]/30 shadow-xl shadow-black/40 text-xs font-semibold text-[#F5F1E8]">
                  <div className="w-6 h-6 rounded-lg bg-[#F2B33D]/20 flex items-center justify-center text-[#F2B33D]">
                    <Wand2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Character Consistency</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Cue at Bottom */}
        <div className="mt-14 sm:mt-20 flex flex-col items-center justify-center text-center">
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-2 text-xs font-medium text-[#A9B0C6] hover:text-[#F2B33D] transition-colors"
          >
            <span className="tracking-widest uppercase text-[10px]">Scroll to explore</span>
            <div className="w-8 h-8 rounded-full border border-[#F5F1E8]/10 flex items-center justify-center group-hover:border-[#F2B33D]/40 transition-colors">
              <ChevronDown className="w-4 h-4 text-[#A9B0C6] group-hover:text-[#F2B33D] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
