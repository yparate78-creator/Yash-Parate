import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw } from 'lucide-react';

export default function HeroPortrait() {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('yash_custom_photo');
    if (saved) {
      setCustomPhoto(saved);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomPhoto(result);
        try {
          localStorage.setItem('yash_custom_photo', result);
        } catch {
          // In case of quota exceeded for localStorage
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setCustomPhoto(null);
    localStorage.removeItem('yash_custom_photo');
  };

  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[3/4] mx-auto select-none group">
      {/* Background Ambient Glows: Amber + Indigo from photo lighting */}
      <div className="absolute -inset-4 rounded-[42px] bg-gradient-to-tr from-[#4E5896]/35 via-[#F2B33D]/25 to-transparent blur-2xl -z-10 animate-ambient-glow" />
      <div className="absolute top-1/4 -right-6 w-32 h-32 rounded-full bg-[#F2B33D]/20 blur-3xl -z-10" />
      <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full bg-[#3F4674]/40 blur-3xl -z-10" />

      {/* Main Arch / Rounded Frame */}
      <div className="relative w-full h-full rounded-[32px] sm:rounded-[38px] overflow-hidden border border-[#F2B33D]/30 bg-[#171C2E] shadow-2xl shadow-black/60 flex items-center justify-center">
        {customPhoto ? (
          <img
            src={customPhoto}
            alt="Yash Parate - Video Editor & AI Video Creator"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          /* High-Fidelity SVG Recreation of Yash in Cream-to-Yellow Kurta with Indigo Fairy Lights */
          <div className="relative w-full h-full">
            <svg
              viewBox="0 0 400 533"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Portrait of Yash Parate in traditional cream-yellow kurta"
            >
              <defs>
                {/* Night sky background gradient */}
                <linearGradient id="nightBg" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0B0E1A" />
                  <stop offset="45%" stopColor="#13192B" />
                  <stop offset="85%" stopColor="#1A2238" />
                  <stop offset="100%" stopColor="#222B45" />
                </linearGradient>

                {/* Kurta Gradient: Cream at top transitioning to vibrant mustard/yellow at bottom */}
                <linearGradient id="kurtaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F9F6E8" />
                  <stop offset="35%" stopColor="#F6F0DC" />
                  <stop offset="55%" stopColor="#E5C761" />
                  <stop offset="78%" stopColor="#F2B33D" />
                  <stop offset="100%" stopColor="#E29E25" />
                </linearGradient>

                {/* Sleeve Gradient */}
                <linearGradient id="sleeveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F5EFE0" />
                  <stop offset="40%" stopColor="#E2BE57" />
                  <stop offset="85%" stopColor="#F2B33D" />
                </linearGradient>

                {/* Skin Tones */}
                <radialGradient id="faceShade" cx="48%" cy="45%" r="55%">
                  <stop offset="0%" stopColor="#DEAB82" />
                  <stop offset="70%" stopColor="#C98F65" />
                  <stop offset="100%" stopColor="#B37750" />
                </radialGradient>

                {/* Fairy lights blur filter */}
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="bokehBlur" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="7" />
                </filter>
              </defs>

              {/* Background */}
              <rect width="400" height="533" fill="url(#nightBg)" />

              {/* Ambient Festive Bokeh Orbs in Background (Purple, Indigo, Golden) */}
              <circle cx="60" cy="90" r="16" fill="#805AD5" opacity="0.35" filter="url(#bokehBlur)" />
              <circle cx="120" cy="180" r="22" fill="#3182CE" opacity="0.3" filter="url(#bokehBlur)" />
              <circle cx="40" cy="280" r="28" fill="#9F7AEA" opacity="0.3" filter="url(#bokehBlur)" />
              <circle cx="340" cy="120" r="20" fill="#3182CE" opacity="0.35" filter="url(#bokehBlur)" />
              <circle cx="370" cy="260" r="24" fill="#63B3ED" opacity="0.3" filter="url(#bokehBlur)" />
              <circle cx="90" cy="380" r="32" fill="#D69E2E" opacity="0.25" filter="url(#bokehBlur)" />
              <circle cx="330" cy="420" r="28" fill="#F2B33D" opacity="0.22" filter="url(#bokehBlur)" />

              {/* Hanging Vertical Fairy Light Strands (like in the photo) */}
              {/* Strand 1 (Left-most) */}
              <line x1="45" y1="0" x2="45" y2="400" stroke="#718096" strokeWidth="0.8" opacity="0.3" />
              <circle cx="45" cy="40" r="3.5" fill="#EBF8FF" filter="url(#softGlow)" />
              <circle cx="45" cy="90" r="4.5" fill="#3182CE" filter="url(#softGlow)" />
              <circle cx="45" cy="140" r="4" fill="#9F7AEA" filter="url(#softGlow)" />
              <circle cx="45" cy="200" r="4.5" fill="#3182CE" filter="url(#softGlow)" />
              <circle cx="45" cy="270" r="4" fill="#B794F4" filter="url(#softGlow)" />

              {/* Strand 2 */}
              <line x1="110" y1="0" x2="110" y2="350" stroke="#718096" strokeWidth="0.8" opacity="0.3" />
              <circle cx="110" cy="60" r="4.5" fill="#FEFCBF" filter="url(#softGlow)" />
              <circle cx="110" cy="120" r="4" fill="#4299E1" filter="url(#softGlow)" />
              <circle cx="110" cy="170" r="4.5" fill="#805AD5" filter="url(#softGlow)" />

              {/* Strand 3 */}
              <line x1="290" y1="0" x2="290" y2="380" stroke="#718096" strokeWidth="0.8" opacity="0.3" />
              <circle cx="290" cy="50" r="4.5" fill="#FEFCBF" filter="url(#softGlow)" />
              <circle cx="290" cy="110" r="4" fill="#3182CE" filter="url(#softGlow)" />
              <circle cx="290" cy="170" r="4" fill="#90CDF4" filter="url(#softGlow)" />
              <circle cx="290" cy="240" r="4.5" fill="#B794F4" filter="url(#softGlow)" />

              {/* Strand 4 (Right-most) */}
              <line x1="360" y1="0" x2="360" y2="440" stroke="#718096" strokeWidth="0.8" opacity="0.3" />
              <circle cx="360" cy="30" r="4" fill="#FEFCBF" filter="url(#softGlow)" />
              <circle cx="360" cy="85" r="4.5" fill="#4299E1" filter="url(#softGlow)" />
              <circle cx="360" cy="150" r="4" fill="#3182CE" filter="url(#softGlow)" />
              <circle cx="360" cy="220" r="4.5" fill="#63B3ED" filter="url(#softGlow)" />
              <circle cx="360" cy="310" r="4.5" fill="#FAF089" filter="url(#softGlow)" />

              {/* Balcony Railing Details at Bottom */}
              <path d="M 0 460 L 400 460" stroke="#4A5568" strokeWidth="3" opacity="0.4" />
              <path d="M 0 495 L 400 495" stroke="#4A5568" strokeWidth="2" opacity="0.3" />

              {/* Subject: Yash Parate */}
              <g id="yash-figure">
                {/* Shoulders & Torso */}
                {/* Kurta Body */}
                <path
                  d="M 130 250 L 115 340 L 95 480 L 305 480 L 285 340 L 270 250 C 255 242 225 240 200 240 C 175 240 145 242 130 250 Z"
                  fill="url(#kurtaGradient)"
                />

                {/* Left & Right Sleeves (Dipping into Rich Mustard at the Cuffs) */}
                <path
                  d="M 130 250 L 90 320 L 140 400 L 170 365 L 142 315 L 150 250 Z"
                  fill="url(#sleeveGradient)"
                />
                <path
                  d="M 270 250 L 310 320 L 260 400 L 230 365 L 258 315 L 250 250 Z"
                  fill="url(#sleeveGradient)"
                />

                {/* Kurta Collar & Placket */}
                <path
                  d="M 185 220 L 215 220 L 210 245 C 205 248 195 248 190 245 Z"
                  fill="#FFFDF5"
                  stroke="#E2D8C0"
                  strokeWidth="1"
                />
                <rect x="197" y="240" width="6" height="70" fill="#EBE3CD" rx="2" />
                <circle cx="200" cy="252" r="1.6" fill="#A89F88" />
                <circle cx="200" cy="270" r="1.6" fill="#A89F88" />
                <circle cx="200" cy="288" r="1.6" fill="#A89F88" />
                <circle cx="200" cy="305" r="1.6" fill="#A89F88" />

                {/* Silver Elephant & Floral Embroidery Motif Accents on Kurta */}
                <g fill="#EAEAEA" opacity="0.65" stroke="#FFFFFF" strokeWidth="0.5">
                  {/* Chest Motifs */}
                  <circle cx="160" cy="270" r="6" />
                  <circle cx="240" cy="270" r="6" />
                  <circle cx="175" cy="305" r="7" />
                  <circle cx="225" cy="305" r="7" />
                  {/* Mid-Body & Lower Motifs */}
                  <circle cx="150" cy="415" r="8" fill="#FBF5E2" />
                  <circle cx="250" cy="415" r="8" fill="#FBF5E2" />
                  <circle cx="200" cy="445" r="9" fill="#FFF3CD" />
                </g>

                {/* Clasped Hands in Front (Respectful Pose) */}
                <g id="hands">
                  <path
                    d="M 175 365 C 185 360 215 360 225 365 C 228 375 224 400 200 405 C 176 400 172 375 175 365 Z"
                    fill="#C98F65"
                  />
                  {/* Interlocked Fingers */}
                  <path
                    d="M 184 372 C 190 366 210 366 216 372 C 218 382 212 396 200 398 C 188 396 182 382 184 372 Z"
                    fill="#DEAB82"
                  />
                  {/* Finger division lines */}
                  <line x1="195" y1="370" x2="195" y2="388" stroke="#B37750" strokeWidth="1" opacity="0.6" />
                  <line x1="200" y1="368" x2="200" y2="390" stroke="#B37750" strokeWidth="1" opacity="0.6" />
                  <line x1="205" y1="370" x2="205" y2="388" stroke="#B37750" strokeWidth="1" opacity="0.6" />
                </g>

                {/* Neck */}
                <path d="M 188 200 L 212 200 L 214 230 L 186 230 Z" fill="#B37750" />
                <path d="M 190 200 L 210 200 L 210 225 L 190 225 Z" fill="#C98F65" />

                {/* Head / Face */}
                <ellipse cx="200" cy="165" rx="34" ry="43" fill="url(#faceShade)" />
                {/* Jaw contour */}
                <path
                  d="M 168 155 C 168 185 180 208 200 208 C 220 208 232 185 232 155 C 232 135 220 125 200 125 C 180 125 168 135 168 155 Z"
                  fill="url(#faceShade)"
                />

                {/* Ears */}
                <ellipse cx="166" cy="166" rx="4.5" ry="9" fill="#C98F65" />
                <ellipse cx="234" cy="166" rx="4.5" ry="9" fill="#C98F65" />

                {/* Hair - Stylish, combed short dark hair with side sweep */}
                <path
                  d="M 166 148 C 164 125 180 110 200 110 C 224 110 236 125 234 148 C 230 132 216 128 198 128 C 180 128 170 134 166 148 Z"
                  fill="#1C1819"
                />
                <path
                  d="M 168 138 C 175 120 195 116 216 117 C 228 118 233 126 233 138 C 228 126 215 122 200 122 C 184 122 173 128 168 138 Z"
                  fill="#2A2426"
                />
                {/* Fringe accent */}
                <path
                  d="M 172 134 C 182 130 192 132 205 138 C 196 132 184 130 172 134 Z"
                  fill="#110E10"
                />

                {/* Eyebrows */}
                <path d="M 178 150 Q 186 146 193 148" stroke="#1F1B1C" strokeWidth="2.4" strokeLinecap="round" fill="none" />
                <path d="M 207 148 Q 214 146 222 150" stroke="#1F1B1C" strokeWidth="2.4" strokeLinecap="round" fill="none" />

                {/* Eyes - Warm & Expressive */}
                <ellipse cx="186" cy="158" rx="4.5" ry="3" fill="#FFFFFF" />
                <circle cx="186" cy="158" r="2.2" fill="#231917" />
                <circle cx="185.2" cy="157.2" r="0.7" fill="#FFFFFF" />

                <ellipse cx="214" cy="158" rx="4.5" ry="3" fill="#FFFFFF" />
                <circle cx="214" cy="158" r="2.2" fill="#231917" />
                <circle cx="213.2" cy="157.2" r="0.7" fill="#FFFFFF" />

                {/* Nose */}
                <path d="M 200 156 L 198 173 L 204 173" stroke="#A76841" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                {/* Mustache (Neat & Trimmed as in the photo) */}
                <path
                  d="M 191 180 Q 200 178 209 180 Q 205 183 200 182 Q 195 183 191 180 Z"
                  fill="#1F1A1B"
                />

                {/* Smile / Mouth */}
                <path
                  d="M 193 186 Q 200 194 207 186"
                  stroke="#8B4527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Teeth glint */}
                <path d="M 196 187 Q 200 189 204 187" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              </g>

              {/* Soft Rim Light on Yash's outline echoing ambient amber and blue lighting */}
              <path
                d="M 130 250 C 145 242 175 240 200 240 C 225 240 255 242 270 250"
                stroke="#F2B33D"
                strokeWidth="1.2"
                opacity="0.35"
                fill="none"
              />
            </svg>
          </div>
        )}

        {/* Ambient Bottom Gradient Scrim for crisp edge separation */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C2236] via-[#1C2236]/40 to-transparent pointer-events-none" />

        {/* Subtle photo source indicator / custom uploader button in corner */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
            aria-label="Upload photo"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            title="Upload/Replace photo"
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-[#F5F1E8] bg-[#1C2236]/80 hover:bg-[#252C45] backdrop-blur-md rounded-full border border-[#F5F1E8]/15 hover:border-[#F2B33D]/50 transition-all shadow-sm"
          >
            <Camera className="w-3 h-3 text-[#F2B33D]" />
            <span>{customPhoto ? 'Change Photo' : 'Upload Original Photo'}</span>
          </button>

          {customPhoto && (
            <button
              onClick={handleReset}
              title="Reset to default portrait"
              className="p-1 rounded-full text-[#A9B0C6] hover:text-[#F5F1E8] bg-[#1C2236]/80 hover:bg-[#252C45] backdrop-blur-md border border-[#F5F1E8]/15"
            >
              <RefreshCw className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
