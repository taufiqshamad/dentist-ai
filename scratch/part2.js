const b = require('./builder.js');

b.add(`
  <!-- Flagship Hero Section: AI-Powered Dental Care with Panoramic Visual Window & Conversational CTA Console -->
  <section class="relative pt-24 pb-16 md:pt-28 md:pb-20 min-h-[92vh] flex items-center bg-[#072E2E] overflow-hidden text-white">
    
    <!-- Background Image: Patient on Treatment with Radiant Healthy Teeth -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <img src="assets/images/hero-treatment.jpg" 
        alt="Dentha patient receiving gentle modern dental care with radiant healthy teeth" 
        class="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] saturate-[0.9] scale-[1.01] transition-transform duration-1000">
      
      <!-- Dominant Brand Color: Optical Aperture Overlay (Clear Center Window + Deep Teal Edges) -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_75%_70%_at_50%_45%,rgba(7,46,46,0.18)_0%,rgba(7,46,46,0.65)_55%,#052222_100%)]"></div>
      
      <!-- Animated Brand Color Shimmer Mesh (Teal 900 / Emerald / Warm Amber Shift) -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#052222]/90 via-teal-900/30 to-[#451A03]/40 animate-gradient-shift mix-blend-multiply opacity-80"></div>
      
      <!-- Ambient Dual Atmosphere: Emerald Surgical Precision (Left) & Radiant Amber Studio Rim-Light (Right) -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,72,72,0.5),transparent_50%)]"></div>
      <div class="absolute -bottom-24 left-1/4 w-[500px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl animate-aura-pulse"></div>
      <div class="absolute -top-20 right-1/4 w-[550px] h-[350px] bg-amber-500/15 rounded-full blur-3xl animate-aura-pulse pointer-events-none"></div>
    </div>

    <!-- Dental + AI Diagnostic Scanner Overlay (Centered Over Clinical Scene) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none select-none hidden lg:block">
      <!-- 3D Dental Arch Scanner Positioned in the Upper-Center Visual Zone -->
      <div class="absolute left-1/2 -translate-x-1/2 top-28 w-[380px] h-[380px] opacity-35 xl:opacity-45">
        <svg class="w-full h-full text-teal-300" viewBox="0 0 400 400" fill="none" stroke="currentColor">
          <!-- Dental Arch Parabolic Curves -->
          <path d="M 90 340 C 90 160, 160 60, 200 60 C 240 60, 310 160, 310 340" stroke-width="1.5" stroke-dasharray="4 6" stroke-opacity="0.8" />
          <path d="M 120 330 C 120 180, 170 90, 200 90 C 230 90, 280 180, 280 330" stroke-width="1" stroke-opacity="0.5" />
          
          <!-- Tooth Telemetry Node Pings across Arch (Teal Baseline + Amber Focal Teeth) -->
          <circle cx="188" cy="64" r="4.5" fill="rgba(52, 211, 153, 0.25)" stroke-width="1.5" />
          <circle cx="212" cy="64" r="4.5" fill="rgba(52, 211, 153, 0.25)" stroke-width="1.5" />
          <circle cx="168" cy="76" r="5" fill="rgba(52, 211, 153, 0.25)" stroke-width="1.5" />
          <circle cx="232" cy="76" r="5" fill="rgba(52, 211, 153, 0.25)" stroke-width="1.5" />
          <circle cx="148" cy="100" r="5.5" fill="rgba(52, 211, 153, 0.3)" stroke-width="1.5" />
          <circle cx="252" cy="100" r="5.5" fill="rgba(52, 211, 153, 0.3)" stroke-width="1.5" />
          <circle cx="130" cy="135" r="6" fill="rgba(52, 211, 153, 0.2)" stroke-width="1.5" />
          <circle cx="270" cy="135" r="6" fill="rgba(52, 211, 153, 0.2)" stroke-width="1.5" />
          <circle cx="115" cy="180" r="6.5" fill="rgba(52, 211, 153, 0.2)" stroke-width="1.5" />
          <circle cx="285" cy="180" r="6.5" fill="rgba(52, 211, 153, 0.2)" stroke-width="1.5" />
          <circle cx="105" cy="240" r="7" fill="rgba(52, 211, 153, 0.25)" stroke-width="1.5" />
          <circle cx="295" cy="240" r="7" fill="rgba(52, 211, 153, 0.25)" stroke-width="1.5" />
          <circle cx="98" cy="310" r="7.5" fill="rgba(52, 211, 153, 0.25)" stroke-width="1.5" />
          <circle cx="302" cy="310" r="7.5" fill="rgba(52, 211, 153, 0.25)" stroke-width="1.5" />

          <!-- Dynamic Active Pulse Markers (Dual-Tone Telemetry) -->
          <circle cx="200" cy="60" r="3" fill="#34D399" class="animate-tooth-pulse" style="transform-origin: 200px 60px;" />
          <circle cx="168" cy="76" r="3" fill="#34D399" class="animate-tooth-pulse" style="transform-origin: 168px 76px; animation-delay: 0.8s;" />
          <circle cx="232" cy="76" r="3" fill="#34D399" class="animate-tooth-pulse" style="transform-origin: 232px 76px; animation-delay: 1.4s;" />

          <!-- Facial Midline Coordinates -->
          <line x1="200" y1="20" x2="200" y2="380" stroke-width="0.75" stroke-dasharray="3 5" stroke-opacity="0.4" />
          <text x="206" y="32" fill="rgba(52, 211, 153, 0.9)" font-size="8" font-family="monospace" letter-spacing="1">FACIAL MIDLINE 0.0mm • AI OCCLUSION</text>
        </svg>

        <!-- Sweeping AI Dental Laser Beam with Amber Ion Glow -->
        <div class="absolute left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_12px_#F59E0B] animate-dental-beam pointer-events-none"></div>
      </div>
    </div>

    <!-- Main Content Container with Center Visual Window -->
    <div class="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
      
      <!-- Top Center Live Telemetry Chip (Float over panoramic scene) -->
      <div class="hidden lg:flex justify-center mb-6">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/75 border border-amber-500/40 backdrop-blur-md text-xs font-medium text-amber-200 shadow-lg">
          <span class="w-2 h-2 rounded-full bg-amber-400"></span>
          <span>Live Studio Operatory 1200 • AI Occlusal Diagnostics Active</span>
        </div>
      </div>

      <!-- Spatial Asymmetric Grid: Left Column + Wide Open Center + Right Compact Console -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
        
        <!-- Left: Clinical Authority, AI Thesis & High-Impact Metrics (Cols 1-5) -->
        <div class="lg:col-span-5 xl:col-span-5 space-y-6">
          
          <!-- Live AI Clinical Status Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-700/60 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm shadow-xs">
            <span class="w-2 h-2 rounded-full bg-amber-400"></span>
            <span class="text-emerald-300">Autonomous Clinical AI</span>
            <span class="text-teal-400">•</span>
            <span class="text-amber-300">Dr. Bennett, DDS</span>
          </div>

          <!-- Sturdy Playfair Display Headline (Weight 600, High Contrast with Glowing Amber Secondary Accent) -->
          <h1 class="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.12] tracking-tight drop-shadow-xs">
            AI-Powered Dentistry.<br>
            <span class="italic font-normal text-amber-300">Instant Clinical Care.</span>
          </h1>

          <!-- Focused Narrative (No Fluff, Direct Purpose) -->
          <p class="text-teal-100/90 text-base sm:text-lg max-w-md leading-relaxed font-normal drop-shadow-xs">
            Skip waiting rooms and telephone holds. Our clinical AI immediately evaluates symptoms, checks in-network PPO insurance, and locks private Manhattan studio appointments in seconds.
          </p>

          <!-- 3 High-Impact Proof Tiles with Center Focal Warm Amber Accent -->
          <div class="grid grid-cols-3 gap-2.5 pt-1 max-w-md">
            <div class="p-3 rounded-xl bg-teal-900/55 border border-teal-700/60 backdrop-blur-md shadow-xs">
              <div class="text-emerald-300 font-serif text-xl font-semibold">10s</div>
              <div class="text-[11px] text-teal-100/80 font-medium leading-tight mt-0.5">Symptom Triage</div>
            </div>
            <div class="p-3 rounded-xl bg-amber-950/60 border border-amber-500/50 backdrop-blur-md shadow-xs">
              <div class="text-amber-300 font-serif text-xl font-semibold">100%</div>
              <div class="text-[11px] text-amber-100/90 font-medium leading-tight mt-0.5">PPO Transparent</div>
            </div>
            <div class="p-3 rounded-xl bg-teal-900/55 border border-teal-700/60 backdrop-blur-md shadow-xs">
              <div class="text-emerald-300 font-serif text-xl font-semibold">Same-Day</div>
              <div class="text-[11px] text-teal-100/80 font-medium leading-tight mt-0.5">Relief Reserved</div>
            </div>
          </div>

          <!-- Direct Guidance to the Right Console -->
          <div class="flex items-center gap-2 text-xs text-amber-200/90 font-medium pt-1">
            <svg class="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            <span>Consult directly with Dr. Bennett in the console →</span>
          </div>

        </div>

        <!-- Center Spacer on Large Displays (Keeps Doctor & Smiling Patient 100% Visible) -->
        <div class="hidden xl:block xl:col-span-2"></div>

        <!-- Right: The Elevated Conversational Concierge CTA Console (Cols 8-12) -->
        <div class="lg:col-span-7 xl:col-span-5 flex justify-end w-full">
          <div id="hero-chat-card" class="bg-white/95 backdrop-blur-xl rounded-2xl border border-amber-500/30 shadow-2xl elevation-float p-5 transition-all duration-300 flex flex-col h-[540px] w-full max-w-[425px] relative text-slate-900">
            
            <!-- Chat Header -->
            <div class="pb-3 border-b border-slate-200 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="relative">
                  <img src="assets/images/dr-sarah.jpg" alt="Dr. Sarah Bennett" class="w-10 h-10 rounded-full object-cover border border-slate-300">
                  <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
                </div>
                <div>
                  <div class="text-xs font-semibold text-slate-900">Dr. Sarah Bennett, DDS</div>
                  <div class="text-xs text-teal-900 flex items-center gap-1.5 font-medium">
                    <span>Clinical Director</span>
                    <span>•</span>
                    <span class="text-amber-700 font-semibold">Online & Ready</span>
                  </div>
                </div>
              </div>

              <!-- Dental + AI Scanner Telemetry Indicator & Expand Button -->
              <div class="flex items-center gap-2">
                <span class="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 text-[10px] font-medium border border-amber-200/70">
                  <span class="relative w-3.5 h-3.5 flex items-center justify-center">
                    <svg class="w-3.5 h-3.5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7 3C4.5 3 3 5 3 8c0 3.5 1.5 7 2.5 10 .8 2.5 2.5 3 3.5 3s1.5-1.5 2-3c.5-1.5 1-2 1-2s.5.5 1 2c.5 1.5 1 3 2 3s2.7-.5 3.5-3c1-3 2.5-6.5 2.5-10 0-3-1.5-5-4-5-2 0-3 1.5-4.5 1.5S9 3 7 3z"/>
                    </svg>
                    <span class="absolute w-full h-[1.5px] bg-amber-500 rounded-full animate-tooth-laser shadow-[0_0_4px_#F59E0B]"></span>
                  </span>
                  <span class="font-semibold">AI Dental Triage</span>
                </span>

                <button id="hero-expand-btn" type="button" title="Expand chat dialog" class="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                </button>
              </div>
            </div>

            <!-- Messages Viewport with Pre-Rendered Doctor Greeting & 3 Action Buttons -->
            <div id="hero-chat-messages" class="flex-1 py-3 overflow-y-auto chat-scroll-area space-y-3 text-xs">
              <div class="flex items-start gap-3 mb-4 animate-fade-in">
                <img src="assets/images/dr-sarah.jpg" alt="Dr. Sarah Bennett" class="w-8 h-8 rounded-full object-cover border border-slate-300 shrink-0 mt-0.5">
                <div class="max-w-[88%] w-full">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs font-semibold text-slate-900">Dr. Sarah Bennett, DDS</span>
                    <span class="text-[10px] text-teal-900 bg-teal-50 px-1.5 py-0.5 rounded font-medium border border-teal-200/50">Clinical Director</span>
                    <span class="text-[10px] text-slate-400">Online</span>
                  </div>
                  
                  <!-- Clean Speech Bubble (Zero Nested Card) -->
                  <div class="bg-slate-100 text-slate-800 rounded-2xl rounded-tl-sm p-3.5 text-xs leading-relaxed">
                    <p class="whitespace-pre-line">Hello! I am Dr. Sarah Bennett, Clinical Director at Dentha. Are you experiencing any tooth discomfort or sensitivity right now, or are you looking to schedule a routine cleaning or cosmetic smile consultation?

Tell me what brings you in today, or select an option below to begin directly:</p>

                    <div class="space-y-2 mt-3 pt-1">
                      <button type="button" 
                        class="chat-action-btn w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white hover:bg-teal-50/60 hover:border-teal-900 transition duration-150 text-left group active:scale-[0.99]"
                        data-action-id="action_book">
                        <div class="flex items-center gap-3">
                          <div class="w-8 h-8 rounded-lg bg-teal-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          </div>
                          <div>
                            <div class="text-xs font-semibold text-slate-900 group-hover:text-teal-900 transition-colors">Book an Appointment</div>
                            <div class="text-[11px] text-slate-500">Pick treatment, specialist & reserved time</div>
                          </div>
                        </div>
                        <svg class="w-4 h-4 text-slate-400 group-hover:text-teal-900 group-hover:translate-x-0.5 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                      </button>

                      <button type="button" 
                        class="chat-action-btn w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white hover:bg-amber-50/60 hover:border-amber-700 transition duration-150 text-left group active:scale-[0.99]"
                        data-action-id="action_symptoms">
                        <div class="flex items-center gap-3">
                          <div class="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                          </div>
                          <div>
                            <div class="text-xs font-semibold text-slate-900 group-hover:text-amber-950 transition-colors">Check Tooth Pain & Symptoms</div>
                            <div class="text-[11px] text-slate-500">Same-day emergency exam & relief triage</div>
                          </div>
                        </div>
                        <svg class="w-4 h-4 text-slate-400 group-hover:text-amber-700 group-hover:translate-x-0.5 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                      </button>

                      <button type="button" 
                        class="chat-action-btn w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white hover:bg-teal-50/60 hover:border-teal-900 transition duration-150 text-left group active:scale-[0.99]"
                        data-action-id="action_insurance_pricing">
                        <div class="flex items-center gap-3">
                          <div class="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                          </div>
                          <div>
                            <div class="text-xs font-semibold text-slate-900 group-hover:text-teal-900 transition-colors">Insurance & Pricing Questions</div>
                            <div class="text-[11px] text-slate-500">In-network PPO check & transparent fee schedule</div>
                          </div>
                        </div>
                        <svg class="w-4 h-4 text-slate-400 group-hover:text-teal-900 group-hover:translate-x-0.5 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <!-- Chat Interactive Input -->
            <div class="pt-3 border-t border-slate-200">
              <div class="relative flex items-center">
                <input id="hero-chat-input" type="text" 
                  placeholder="Describe symptoms or request appointment..."
                  class="w-full text-xs pl-3.5 pr-10 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-900 bg-white text-slate-900 placeholder:text-slate-400">
                <button id="hero-send-btn" type="button" aria-label="Send message"
                  class="absolute right-1.5 p-1.5 rounded-lg bg-teal-900 hover:bg-teal-950 text-white transition active:scale-95">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
              <div class="flex items-center justify-between text-xs text-slate-500 mt-2 px-1">
                <span>HIPAA Encrypted & Private</span>
                <span class="text-amber-800 font-medium">Direct interactive booking</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
`);
