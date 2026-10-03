export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI Cinematic' | 'Reels & Shorts';
  duration: string;
  tools: string[];
  description: string;
  aspectRatio: '16:9' | '9:16';
  promptSnippet?: string;
  keyFeatures: string[];
  gradientTheme: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'cyberpunk-chronicles',
    title: 'Neon Odyssey: Cyberpunk Cinematic Short',
    category: 'AI Cinematic',
    duration: '0:45',
    tools: ['Google Veo', 'ChatGPT', 'CapCut PC'],
    description: 'A multi-shot futuristic narrative exploring artificial memory in a neon-drenched metropolis. Features complex camera tracking and synchronized synth sound design.',
    aspectRatio: '16:9',
    promptSnippet: 'Anamorphic 35mm lens, low-angle tracking shot through neon rain-slicked futuristic alleys, cinematic teal and amber lighting, volumetric haze, hyper-detailed cyberpunk city.',
    keyFeatures: ['Multi-shot character consistency', 'Anamorphic depth of field', 'Dynamic sound FX sync'],
    gradientTheme: 'from-[#1a233a] via-[#1f3158] to-[#121727]'
  },
  {
    id: 'viral-travel-reel',
    title: 'Himalayan Solitude — Vertical Travel Reel',
    category: 'Reels & Shorts',
    duration: '0:32',
    tools: ['CapCut Mobile', 'Claude', 'Color Grading'],
    description: 'High-energy vertical travel reel engineered for maximum retention. Uses rhythm-matched speed ramps, sound impact pulses, and high-contrast nature color grading.',
    aspectRatio: '9:16',
    promptSnippet: 'Golden hour drone descent through misty pine canopy, morning light rays, cinematic landscape composition.',
    keyFeatures: ['Speed-ramped transitions', 'Foley wind & footstep sync', 'Custom kinetic typography'],
    gradientTheme: 'from-[#2b2416] via-[#3d321d] to-[#1b1e2e]'
  },
  {
    id: 'character-nomad-saga',
    title: 'The Desert Nomad: Character Continuity Study',
    category: 'AI Cinematic',
    duration: '1:10',
    tools: ['Google Omni', 'Google Veo', 'CapCut PC'],
    description: 'An AI cinematic short testing character facial and costume continuity across diverse lighting environments, from scorching desert mid-day sun to twilight campfire.',
    aspectRatio: '16:9',
    promptSnippet: 'Close-up medium shot of weathered wanderer in layered textured linen wrap, harsh midday sunlight, realistic skin pores, windblown desert sand.',
    keyFeatures: ['Face & clothing continuity lock', 'Lighting transition adaptation', 'Ambient atmospheric audio'],
    gradientTheme: 'from-[#2d2218] via-[#432d1c] to-[#1a1f33]'
  },
  {
    id: 'luxury-watch-short',
    title: 'Chronos Precision — High-End Commercial Reel',
    category: 'Reels & Shorts',
    duration: '0:25',
    tools: ['Google Veo', 'CapCut PC', 'Sound Design'],
    description: 'Macro-lens luxury timepiece advertisement short with fast mechanical sound design, seamless macro-zoom transitions, and polished studio lighting.',
    aspectRatio: '9:16',
    promptSnippet: 'Extreme macro tracking shot of intricate skeleton watch movement, gear teeth turning with micro-precision, studio rim light reflection.',
    keyFeatures: ['Mechanical gear sync', 'Extreme macro lens simulation', 'Teal & gold cinematic grade'],
    gradientTheme: 'from-[#192233] via-[#24344d] to-[#151c2c]'
  },
  {
    id: 'mythic-warrior-trailer',
    title: 'Age of Embers: Mythic Cinematic Teaser',
    category: 'AI Cinematic',
    duration: '0:50',
    tools: ['Google Veo', 'Google Omni', 'CapCut PC'],
    description: 'Dramatic mythic trailer featuring ancient armor textures, realistic sword fight choreography clips, and deep bass trailer drop impacts.',
    aspectRatio: '16:9',
    promptSnippet: 'Wide epic cinema shot of solitary warrior on mountain crest overlooking burning ancient fortress, smoke clouds, ember particles, 24fps motion blur.',
    keyFeatures: ['Atmospheric ember particle sync', 'Dynamic orchestral drops', 'Controlled camera whip-pans'],
    gradientTheme: 'from-[#351e18] via-[#46271c] to-[#1c2236]'
  },
  {
    id: 'fitness-motivation-short',
    title: 'Iron Mindset — Fast-Cut Motivational Reel',
    category: 'Reels & Shorts',
    duration: '0:28',
    tools: ['CapCut Mobile', 'ChatGPT', 'Foley SFX'],
    description: 'High-tempo vertical short with rhythmic jump cuts, bass hits, visual glitch transitions, and punchy animated keyword highlights.',
    aspectRatio: '9:16',
    promptSnippet: 'Dramatic gym workout montage, chalk dust exploding in slow motion under single overhead spotlight, intense focus expression.',
    keyFeatures: ['Heartbeat sound riser', 'Flash frame pacing', 'Bold animated captions'],
    gradientTheme: 'from-[#212433] via-[#2b3046] to-[#171b2b]'
  }
];

export const SKILLS_DATA = [
  { name: 'Short-Form Editing', level: 95, category: 'Video Editing' },
  { name: 'AI Video Generation', level: 92, category: 'AI Production' },
  { name: 'Character Consistency', level: 90, category: 'AI Production' },
  { name: 'Color Grading', level: 88, category: 'Post-Production' },
  { name: 'Sound Design & Foley', level: 88, category: 'Post-Production' },
  { name: 'AI Prompt Writing', level: 94, category: 'AI Production' },
  { name: 'Visual Continuity', level: 91, category: 'AI Production' },
  { name: 'Shot Planning & Directing', level: 86, category: 'Pre-Production' },
  { name: 'Transitions & Motion Effects', level: 92, category: 'Video Editing' }
];

export const TOOLS_DATA = [
  {
    name: 'CapCut (PC & Mobile)',
    category: 'Primary NLE Software',
    highlight: 'Advanced multi-track editing, speed ramps, keyframing, and custom audio sync',
    icon: 'film'
  },
  {
    name: 'Google Veo',
    category: 'Generative AI Video Model',
    highlight: 'High-definition cinematic motion synthesis, camera controls, and realistic physics',
    icon: 'video'
  },
  {
    name: 'Google Omni',
    category: 'Multimodal AI System',
    highlight: 'Deep multimodal scene comprehension, prompt alignment, and visual coherence',
    icon: 'sparkles'
  },
  {
    name: 'ChatGPT',
    category: 'Prompt Engineering & Scripting',
    highlight: 'Detailed scene breakdown, camera angle scripts, and story moodboarding',
    icon: 'bot'
  },
  {
    name: 'Claude',
    category: 'Creative Direction & Narrative',
    highlight: 'Refined prompt architecture, pacing structures, and visual storytelling arcs',
    icon: 'cpu'
  }
];

export const WHAT_I_DO_DATA = [
  {
    id: 'ai-cinematic',
    title: 'AI Cinematic Videos',
    tagline: 'From descriptive prompts to photorealistic cinema.',
    description: 'Building multi-scene cinematic narratives using Google Veo and Omni. I specialize in multi-axis camera movement, atmospheric depth, lighting continuity, and locked character identities across sequential shots.',
    deliverables: ['Cinematic trailers', 'Concept music videos', 'Brand vision films', 'Multi-shot storytelling']
  },
  {
    id: 'short-form-reels',
    title: 'Reels & YouTube Shorts',
    tagline: 'Engineered for viewer retention and virality.',
    description: 'Crafting scroll-stopping vertical videos for creators and businesses. I use psychological hooks, seamless visual loops, custom subtitle styling, and rhythmic audio cuts that keep retention above 80%.',
    deliverables: ['Instagram Reels', 'YouTube Shorts', 'TikTok content', 'Dynamic kinetic typography']
  },
  {
    id: 'post-production',
    title: 'Post-Production Mastery',
    tagline: 'Color harmony, impact sound, and seamless effects.',
    description: 'Transforming raw footage and AI-generated clips into broadcast-grade finishes. Includes fine-tuned color grading (LUT application, skin balance, contrast curves), spatial Foley, risers, drops, and clean transitions.',
    deliverables: ['Cinematic color grading', 'Custom sound design & SFX', 'Speed ramping', 'Seamless visual wipes']
  },
  {
    id: 'hybrid-workflows',
    title: 'AI + Traditional Workflows',
    tagline: 'The speed of AI with the control of human editing.',
    description: 'Combining cutting-edge generative AI models with timeline precision in CapCut. I bridge the gap between unpredictable AI generations and intentional, frame-accurate directorial control.',
    deliverables: ['AI generation pipelines', 'Frame interpolation & upscaling', 'Timeline assembly', 'Custom sound staging']
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Concept & Brief',
    description: 'We establish the visual story, emotional tone, target audience, format (16:9 or 9:16), and key narrative moments.'
  },
  {
    step: '02',
    name: 'Prompt & Shot Plan',
    description: 'Writing precision prompts with specific lens types, lighting conditions, camera moves, and locked character seeds.'
  },
  {
    step: '03',
    name: 'Generate & Curate',
    description: 'Running generative iterations with Google Veo and Omni, curating only the highest-fidelity outputs with zero artifacts.'
  },
  {
    step: '04',
    name: 'Edit, Grade & Sync',
    description: 'Assembling in CapCut, color grading for unified tone, pacing cuts to rhythm, and laying rich multi-layer sound design.'
  },
  {
    step: '05',
    name: 'Deliver & Optimize',
    description: 'Exporting crisp, high-bitrate masters calibrated specifically for Instagram, YouTube, or client showcase displays.'
  }
];

export const EXPERIENCE_POINTS = [
  'Edited and delivered high-retention Instagram Reels and YouTube Shorts focusing on hook-to-hold ratios, dynamic pacing, and pattern interrupts.',
  'Pioneered AI cinematic video generation workflows utilizing Google Veo, Google Omni, and advanced LLM prompt engineering pipelines.',
  'Engineered precise multi-paragraph prompt frameworks targeting specific camera movements (pan, tilt, orbit, dolly zoom) and transition points.',
  'Achieved consistent character identity and wardrobe continuity across disparate camera angles and lighting setups in AI generations.',
  'Executed detailed sound design, Foley layering, and audio sync to heighten emotional immersion and viewer retention.'
];

export const EDUCATION_STEPS = [
  {
    title: 'Undergraduate, 2nd Year',
    status: 'Pursuing',
    description: 'Actively continuing higher education with an emphasis on digital technology, computing concepts, and modern media.',
    period: 'Current'
  },
  {
    title: 'ITI Electronics Mechanic',
    status: 'Completed',
    description: 'Gained solid technical grounding in electronic systems, precision circuitry, hardware troubleshooting, and analytical logic.',
    period: 'Graduated'
  },
  {
    title: 'Class 12th',
    status: 'Passed',
    description: 'Completed senior secondary schooling in Madhya Pradesh with a strong foundation in core academic fundamentals.',
    period: 'Completed'
  }
];
