import { useState } from 'react';
import { Play, Film, ExternalLink, Sparkles, Smartphone, Layers } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import WorkModal from './WorkModal';

export default function Work() {
  const [filter, setFilter] = useState<'All' | 'AI Cinematic' | 'Reels & Shorts'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section id="work" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Google Drive Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#F2B33D] mb-2 font-mono">
              04 / Featured Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F1E8] tracking-tight">
              Selected Works &amp; Showreel
            </h2>
            <p className="text-base text-[#A9B0C6] mt-2 max-w-xl">
              Cinematic AI worldbuilding, high-retention vertical reels, sound design, and character continuity studies.
            </p>
          </div>

          {/* Drive Reel Button */}
          <a
            href="https://drive.google.com/drive/folders/1fiyuTs6KRdWg1SYdjqG3ELVepLXm3SHA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#252C45] hover:bg-[#2e3757] border border-[#F2B33D]/40 text-[#F5F1E8] hover:text-[#F2B33D] transition-all text-xs font-semibold shadow-lg group shrink-0"
          >
            <Film className="w-4 h-4 text-[#F2B33D]" />
            <span>View Demo Reel on Google Drive</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Filter Segmented Control (Functional Buttons) */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#252C45] border border-[#F5F1E8]/10 w-fit mb-10">
          {(['All', 'AI Cinematic', 'Reels & Shorts'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === tab
                  ? 'bg-[#F2B33D] text-[#1C2236] shadow-md shadow-[#F2B33D]/20'
                  : 'text-[#A9B0C6] hover:text-[#F5F1E8] hover:bg-[#1C2236]/50'
              }`}
            >
              {tab === 'All' && 'All Projects'}
              {tab === 'AI Cinematic' && 'AI Cinematic (16:9)'}
              {tab === 'Reels & Shorts' && 'Reels & Shorts (9:16)'}
            </button>
          ))}
        </div>

        {/* Project Thumbnail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl sm:rounded-3xl bg-[#252C45] border border-[#F5F1E8]/10 overflow-hidden shadow-xl card-hover-glow cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div
                className={`relative w-full overflow-hidden bg-black ${
                  project.aspectRatio === '9:16' ? 'aspect-[4/3] sm:aspect-[16/10]' : 'aspect-video'
                } flex items-center justify-center`}
              >
                {/* Visual Graphic Representation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientTheme} opacity-90 transition-transform duration-700 group-hover:scale-105`} />

                {/* Subtle Grid / Anamorphic Flares */}
                <div className="absolute inset-0 bg-[radial-gradient(#F2B33D_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

                {/* Stylized Category Motif */}
                <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center select-none">
                  <div className="w-12 h-12 rounded-full bg-[#1C2236]/80 border border-[#F5F1E8]/15 flex items-center justify-center mb-3 shadow-lg group-hover:border-[#F2B33D] transition-colors">
                    {project.category === 'AI Cinematic' ? (
                      <Sparkles className="w-5 h-5 text-[#F2B33D]" />
                    ) : (
                      <Smartphone className="w-5 h-5 text-[#F2B33D]" />
                    )}
                  </div>
                  <span className="text-xs font-mono text-[#F5F1E8]/80 font-medium">
                    {project.aspectRatio === '9:16' ? 'Vertical 9:16 Format' : 'Widescreen 16:9'}
                  </span>
                </div>

                {/* Hover Play-Icon Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-[2px]">
                  <div className="w-14 h-14 rounded-full bg-[#F2B33D] text-[#1C2236] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-lg shadow-[#F2B33D]/40">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>

                {/* Duration & Aspect Ratio Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-[#F5F1E8] border border-white/10">
                    {project.duration}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#1C2236]/80 backdrop-blur-md text-[11px] font-mono text-[#F2B33D] border border-[#F2B33D]/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Meta & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#F5F1E8] group-hover:text-[#F2B33D] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#A9B0C6] mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#F5F1E8]/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-[#A9B0C6]">
                    <Layers className="w-3.5 h-3.5 text-[#F2B33D]" />
                    <span className="truncate max-w-[170px]">{project.tools.join(' · ')}</span>
                  </div>
                  <span className="text-[#F2B33D] font-semibold group-hover:underline">
                    Preview →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Google Drive Reel Callout Box */}
        <div className="mt-14 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#252C45] via-[#2A3350] to-[#252C45] border border-[#F2B33D]/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F2B33D]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full High-Bitrate Master Cuts</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F1E8]">
              Want to see raw edits, 4K exports, and client deliverables?
            </h3>
            <p className="text-sm text-[#A9B0C6] max-w-xl">
              Access the complete Google Drive archive with original short-form reels, AI motion tests, and post-production before/after clips.
            </p>
          </div>

          <a
            href="https://drive.google.com/drive/folders/1fiyuTs6KRdWg1SYdjqG3ELVepLXm3SHA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#F2B33D] hover:bg-[#ffc657] text-[#1C2236] font-bold text-sm transition-all shadow-lg shadow-[#F2B33D]/25 hover:shadow-xl hover:shadow-[#F2B33D]/35 shrink-0 whitespace-nowrap active:scale-95"
          >
            <Film className="w-4 h-4" />
            <span>Open Google Drive Folder</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Interactive Modal Player */}
      <WorkModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
