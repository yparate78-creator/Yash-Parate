import { Film, Video, Sparkles, Bot, Cpu, Check, Layers } from 'lucide-react';
import { SKILLS_DATA, TOOLS_DATA } from '../data/portfolioData';

export default function SkillsAndTools() {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'film':
        return <Film className="w-5 h-5 text-[#F2B33D]" />;
      case 'video':
        return <Video className="w-5 h-5 text-[#F2B33D]" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#F2B33D]" />;
      case 'bot':
        return <Bot className="w-5 h-5 text-[#F2B33D]" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-[#F2B33D]" />;
      default:
        return <Layers className="w-5 h-5 text-[#F2B33D]" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#F2B33D] mb-2 font-mono">
            02 / Capabilities &amp; Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F1E8] tracking-tight">
            Crafting with Modern AI &amp; Cinematic Editing Tools
          </h2>
          <p className="text-base text-[#A9B0C6] mt-3">
            Combining creative editorial instincts with prompt architecture, sound engineering, and multimodal AI pipelines.
          </p>
        </div>

        {/* Two Clean Groups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Group 1: Skills (with thin animated progress bars) */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-[#252C45] border border-[#F5F1E8]/10 p-6 sm:p-8 shadow-xl card-hover-glow">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F5F1E8]/10">
              <div>
                <h3 className="text-xl font-bold text-[#F5F1E8]">Core Editing &amp; AI Skills</h3>
                <p className="text-xs text-[#A9B0C6] mt-0.5">Key technical disciplines and production proficiencies</p>
              </div>
              <span className="text-xs font-mono text-[#F2B33D] px-2.5 py-1 rounded bg-[#1C2236] border border-[#F5F1E8]/5">
                9 Disciplines
              </span>
            </div>

            <div className="space-y-5">
              {SKILLS_DATA.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-[#F5F1E8] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F2B33D]" />
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-[#A9B0C6] hidden sm:inline">{skill.category}</span>
                      <span className="font-mono text-[#F2B33D] tabular-nums font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Thin animated progress line */}
                  <div className="h-1.5 w-full bg-[#1C2236] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#F2B33D] to-[#ffd47d] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group 2: Tools (Cards with icon, role, and highlight) */}
          <div className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-[#252C45] border border-[#F5F1E8]/10 p-6 sm:p-8 shadow-xl card-hover-glow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F5F1E8]/10">
                <div>
                  <h3 className="text-xl font-bold text-[#F5F1E8]">Production Tools</h3>
                  <p className="text-xs text-[#A9B0C6] mt-0.5">Software &amp; AI models utilized in daily workflows</p>
                </div>
                <span className="text-xs font-mono text-[#F2B33D] px-2.5 py-1 rounded bg-[#1C2236] border border-[#F5F1E8]/5">
                  Production Stack
                </span>
              </div>

              <div className="space-y-4">
                {TOOLS_DATA.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-4 rounded-xl bg-[#1C2236]/80 border border-[#F5F1E8]/5 hover:border-[#F2B33D]/30 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-[#252C45] border border-[#F5F1E8]/10 flex items-center justify-center shrink-0 shadow-sm">
                        {getToolIcon(tool.icon)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-[#F5F1E8] truncate">
                            {tool.name}
                          </h4>
                          <span className="text-[11px] font-mono text-[#F2B33D]">
                            {tool.category}
                          </span>
                        </div>
                        <p className="text-xs text-[#A9B0C6] mt-1 leading-snug">
                          {tool.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow highlight footer */}
            <div className="mt-6 pt-5 border-t border-[#F5F1E8]/10 flex items-center gap-2 text-xs text-[#A9B0C6]">
              <Check className="w-4 h-4 text-[#F2B33D] shrink-0" />
              <span>Full cross-platform deployment across desktop timeline and mobile reels.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
