import { useState, useEffect } from 'react';
import { X, Play, Pause, ExternalLink, Sparkles, Film, Clock, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface WorkModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function WorkModal({ project, onClose }: WorkModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Simulate video playback progress
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 150);
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-[#1C2236] border border-[#F5F1E8]/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F5F1E8]/10 bg-[#252C45]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F2B33D]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#F2B33D]">
              {project.category}
            </span>
            <span className="text-xs text-[#A9B0C6]">·</span>
            <span className="text-xs text-[#A9B0C6] font-mono">{project.duration}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A9B0C6] hover:text-[#F5F1E8] hover:bg-[#1C2236] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Screen Simulation */}
        <div className="relative bg-black aspect-video sm:max-h-[380px] w-full flex items-center justify-center overflow-hidden group">
          {/* Animated Cinematic Background Scene */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientTheme} opacity-80`} />

          {/* Film Grain & Scanlines */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Center Visual Art / Showcase */}
          <div className="relative z-10 text-center px-6">
            <div className="w-16 h-16 rounded-full bg-[#F2B33D]/20 border border-[#F2B33D]/40 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 text-[#F2B33D]" />
              ) : (
                <Play className="w-7 h-7 text-[#F2B33D] ml-1" />
              )}
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#F5F1E8] drop-shadow-md">
              {project.title}
            </h4>
            <div className="text-xs text-[#F2B33D] font-mono mt-1">
              {isPlaying ? 'Playing Preview Simulation' : 'Preview Paused'}
            </div>
          </div>

          {/* Simulated Player Controls Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col gap-2 z-20">
            {/* Timeline Bar */}
            <div
              className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickPos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.round(clickPos * 100));
              }}
            >
              <div
                className="h-full bg-[#F2B33D] transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-[#F5F1E8]">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#F2B33D] transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-[#F2B33D] transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] text-[#A9B0C6]">
                  00:{String(Math.floor((progress / 100) * 45)).padStart(2, '0')} / {project.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-[#F2B33D] px-2 py-0.5 rounded bg-black/40 border border-white/10">
                  {project.aspectRatio}
                </span>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#F2B33D] transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body: Project Details & Google Drive Link */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-[#F5F1E8]">
              {project.title}
            </h3>
            <p className="text-sm text-[#A9B0C6] mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* AI Prompt Snippet if available */}
          {project.promptSnippet && (
            <div className="p-4 rounded-xl bg-[#252C45] border border-[#F5F1E8]/10 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F2B33D]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Prompt Blueprint</span>
              </div>
              <p className="text-xs font-mono text-[#F5F1E8]/90 italic leading-relaxed">
                "{project.promptSnippet}"
              </p>
            </div>
          )}

          {/* Tools & Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#A9B0C6] mb-2 flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-[#F2B33D]" />
                <span>Software &amp; Models Used</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-[#F5F1E8]">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-[#252C45] border border-[#F5F1E8]/10 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#A9B0C6] mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#F2B33D]" />
                <span>Key Techniques</span>
              </div>
              <div className="space-y-1 text-xs text-[#A9B0C6]">
                {project.keyFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#F2B33D]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 border-t border-[#F5F1E8]/10 flex flex-wrap items-center justify-between gap-4">
            <a
              href="https://drive.google.com/drive/folders/1fiyuTs6KRdWg1SYdjqG3ELVepLXm3SHA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F2B33D] hover:bg-[#ffc657] text-[#1C2236] font-semibold text-xs transition-colors shadow-md"
            >
              <span>View Full Quality Video on Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs text-[#A9B0C6] hover:text-[#F5F1E8] transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
