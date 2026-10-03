import { useEffect, useState, useRef } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

const STATS: StatItem[] = [
  { value: 1, suffix: ' Year', label: 'Active Experience', detail: 'Video editing & AI workflows' },
  { value: 150, suffix: '+', label: 'Short-Form Reels', detail: 'High retention & dynamic pacing' },
  { value: 40, suffix: '+', label: 'AI Video Pipelines', detail: 'Google Veo & multimodal tools' },
  { value: 99, suffix: '%', label: 'Visual Consistency', detail: 'Character & lighting continuity' },
];

export default function StatsRow() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          STATS.forEach((stat, index) => {
            const duration = 1200;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out quad
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.round(stat.value * easeOut);

              setCounts((prev) => {
                const next = [...prev];
                next[index] = currentVal;
                return next;
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="rounded-2xl sm:rounded-3xl bg-[#252C45]/70 border border-[#F5F1E8]/10 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#F5F1E8]/10">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col ${i > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#F5F1E8] tracking-tight tabular-nums flex items-baseline">
                <span>{counts[i]}</span>
                <span className="text-[#F2B33D] ml-0.5 text-2xl sm:text-3xl">{stat.suffix}</span>
              </div>
              <div className="text-sm font-semibold text-[#F5F1E8] mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#A9B0C6] mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
