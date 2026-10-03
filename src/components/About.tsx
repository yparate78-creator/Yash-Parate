import { MapPin, Globe, Briefcase, Clock, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const quickFacts = [
    {
      label: 'Experience',
      value: '1 Year Active',
      subtext: 'Specialized in AI cinematic & short-form video',
      icon: Clock,
    },
    {
      label: 'Location',
      value: 'Chhindwara, MP',
      subtext: 'Madhya Pradesh, India (IST Timezone)',
      icon: MapPin,
    },
    {
      label: 'Languages',
      value: 'Hindi · English',
      subtext: 'Native fluency & professional communication',
      icon: Globe,
    },
    {
      label: 'Availability',
      value: 'Open to Freelance',
      subtext: 'Available for client projects & contracts',
      icon: Briefcase,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#F2B33D] mb-2 font-mono">
            01 / Background &amp; Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F1E8] tracking-tight">
            Bridging AI Imagination with Cinematic Precision
          </h2>
        </div>

        {/* 2-Column Layout: Left Narrative, Right Quick-Facts Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Professional Summary & Resume Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5 text-base sm:text-lg text-[#A9B0C6] leading-relaxed">
              <p>
                I am a dedicated <strong className="text-[#F5F1E8] font-semibold">Video Editor and AI Video Creator</strong> based in Chhindwara, Madhya Pradesh. Over the past year, I have built and refined production workflows that connect prompt-driven artificial intelligence with frame-accurate video editing.
              </p>
              <p>
                My focus lies in two high-impact domains: <span className="text-[#F2B33D] font-medium">cinematic AI worldbuilding</span> and <span className="text-[#F2B33D] font-medium">high-retention vertical short-form content</span> (Instagram Reels, YouTube Shorts). By leveraging advanced models like Google Veo and Google Omni alongside CapCut's robust editing suite, I eliminate the typical disjointed look of AI videos—ensuring seamless character consistency, intentional camera movements, and lifelike physics.
              </p>
              <p>
                Every project I take on receives meticulous attention to color grading, dialogue cadence, sound effects, and rhythm. Whether crafting a cinematic teaser from scratch or producing viral Reels that keep viewers hooked from second one, my goal is always to deliver storytelling that leaves a lasting impression.
              </p>
            </div>

            {/* Core Pillars (clean unboxed list) */}
            <div className="pt-6 border-t border-[#F5F1E8]/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F2B33D] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F1E8]">Character &amp; Scene Consistency</h3>
                  <p className="text-xs text-[#A9B0C6] mt-0.5">Preventing morphing and maintaining face &amp; wardrobe continuity.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F2B33D] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F1E8]">Rhythmic Short-Form Pacing</h3>
                  <p className="text-xs text-[#A9B0C6] mt-0.5">Engineered hooks and audio sync that boost viewer retention.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick-Facts Card */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl sm:rounded-3xl bg-[#252C45] border border-[#F5F1E8]/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl card-hover-glow relative overflow-hidden">
              {/* Subtle amber accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F2B33D] via-[#F2B33D]/60 to-transparent" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#F5F1E8] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#F2B33D]" />
                    <span>Quick Facts</span>
                  </h3>
                  <span className="text-xs font-mono text-[#F2B33D]">Profile Overview</span>
                </div>

                <div className="space-y-5">
                  {quickFacts.map((fact) => {
                    const Icon = fact.icon;
                    return (
                      <div
                        key={fact.label}
                        className="flex items-start gap-4 p-3.5 rounded-xl bg-[#1C2236]/60 border border-[#F5F1E8]/5"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#252C45] flex items-center justify-center text-[#F2B33D] shrink-0 border border-[#F5F1E8]/10">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs uppercase tracking-wider text-[#A9B0C6] font-mono">
                            {fact.label}
                          </div>
                          <div className="text-sm font-semibold text-[#F5F1E8] mt-0.5 truncate">
                            {fact.value}
                          </div>
                          <div className="text-xs text-[#A9B0C6] mt-0.5">
                            {fact.subtext}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status Banner */}
              <div className="mt-6 pt-5 border-t border-[#F5F1E8]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-[#F5F1E8]">Accepting New Projects</span>
                </div>
                <a
                  href="#contact"
                  className="text-xs font-semibold text-[#F2B33D] hover:underline"
                >
                  Start a Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
