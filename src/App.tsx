/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsRow from './components/StatsRow';
import About from './components/About';
import SkillsAndTools from './components/SkillsAndTools';
import WhatIDo from './components/WhatIDo';
import Work from './components/Work';
import Process from './components/Process';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1C2236] text-[#F5F1E8] selection:bg-[#F2B33D] selection:text-[#1C2236] relative">
      {/* Subtle Background Lighting Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[#4E5896]/15 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] -right-40 w-[500px] h-[500px] bg-[#F2B33D]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[20%] -left-40 w-[600px] h-[600px] bg-[#3F4674]/15 rounded-full blur-[160px]" />
      </div>

      {/* Sticky Minimal Navbar */}
      <Navbar />

      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Stats Row */}
        <StatsRow />

        {/* Section 2: About */}
        <About />

        {/* Section 3: Skills & Tools */}
        <SkillsAndTools />

        {/* Section 4: What I Do */}
        <WhatIDo />

        {/* Section 5: Work */}
        <Work />

        {/* Section 6: Process */}
        <Process />

        {/* Section 7: Experience */}
        <Experience />

        {/* Section 8: Education */}
        <Education />

        {/* Section 9: Contact */}
        <Contact />
      </main>
    </div>
  );
}
