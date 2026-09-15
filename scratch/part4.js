const b = require('./builder.js');

b.add(`
  <!-- Clinical Specialists & Faculty -->
  <section id="specialists" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <div class="max-w-2xl mb-14">
        <h2 class="font-serif-heading text-3xl sm:text-4xl text-slate-950 mb-3 tracking-tight">
          Clinical Specialists & Faculty
        </h2>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          Our clinicians lead academic research and clinical departments in aesthetic restorations, airway orthodontics, and computer-guided surgery.
        </p>
      </div>

      <!-- Editorial Specialists Gallery: 3-Column Profile Architecture -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Specialist 1: Dr. Sarah Bennett (Featured Clinical Director) -->
        <div class="bg-gradient-to-b from-white to-teal-50/30 rounded-2xl border border-teal-900/30 elevation-card flex flex-col justify-between overflow-hidden group hover:border-teal-900 transition duration-300">
          <div>
            <div class="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
              <img src="assets/images/dr-sarah.jpg" alt="Dr. Sarah Bennett, DDS" class="w-full h-full object-cover">
              <span class="absolute bottom-3 left-3 bg-[#072E2E]/90 backdrop-blur-md text-emerald-300 px-3 py-1 rounded-full text-[11px] font-mono font-medium border border-teal-700/60">
                Clinical Director • Columbia Univ
              </span>
            </div>
            
            <div class="p-6 space-y-3">
              <div>
                <span class="text-xs font-mono uppercase tracking-wider text-teal-900 font-bold block mb-0.5">Aesthetic Restorations</span>
                <h3 class="font-serif text-2xl font-semibold text-slate-950">Dr. Sarah Bennett, DDS</h3>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed font-normal">
                Specialized in biomimetic composite bonding, ultra-thin porcelain veneers, and sensory anxiety management. Dedicated to conservative, tooth-preserving aesthetic dentistry.
              </p>
              <div class="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-700">
                <span class="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md font-medium">Biomimetic Veneers</span>
                <span class="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md font-medium">Single-Day Restorations</span>
                <span class="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md font-medium">Anxiety Care</span>
              </div>
            </div>
          </div>

          <div class="p-6 pt-0">
            <button type="button" data-chat-trigger="doctor" data-chat-value="dr-sarah"
              class="w-full bg-teal-900 hover:bg-teal-950 text-white text-xs font-medium py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 active:scale-[0.98] shadow-xs">
              <span>Consult Dr. Sarah in Chat</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        <!-- Specialist 2: Dr. Marcus Vance (Featured Orthodontist with Warm Amber Accent) -->
        <div class="bg-gradient-to-b from-white to-amber-50/30 rounded-2xl border border-amber-600/30 elevation-card flex flex-col justify-between overflow-hidden group hover:border-amber-700 transition duration-300">
          <div>
            <div class="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
              <img src="assets/images/dr-marcus.jpg" alt="Dr. Marcus Vance, DMD, MS" class="w-full h-full object-cover">
              <span class="absolute bottom-3 left-3 bg-amber-950/90 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full text-[11px] font-mono font-medium border border-amber-700/60">
                Board-Certified • Harvard Dental
              </span>
            </div>
            
            <div class="p-6 space-y-3">
              <div>
                <span class="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold block mb-0.5">Digital Orthodontics</span>
                <h3 class="font-serif text-2xl font-semibold text-slate-950">Dr. Marcus Vance, DMD</h3>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed font-normal">
                Diplomate of the American Board of Orthodontics. Pioneer in clear aligner biomechanics and airway-conscious dental alignment for adults and teens.
              </p>
              <div class="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-700">
                <span class="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md font-medium">Invisalign Premier</span>
                <span class="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md font-medium">3D Bite Correction</span>
                <span class="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md font-medium">Airway Health</span>
              </div>
            </div>
          </div>

          <div class="p-6 pt-0">
            <button type="button" data-chat-trigger="doctor" data-chat-value="dr-marcus"
              class="w-full bg-amber-800 hover:bg-amber-900 text-white text-xs font-medium py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 active:scale-[0.98] shadow-xs">
              <span>Consult Dr. Marcus in Chat</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        <!-- Specialist 3: Dr. Elena Rostova -->
        <div class="bg-white rounded-2xl border border-slate-200/90 elevation-card flex flex-col justify-between overflow-hidden group hover:border-teal-900/60 transition duration-300">
          <div>
            <div class="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
              <img src="assets/images/dr-elena.jpg" alt="Dr. Elena Rostova, DDS, PhD" class="w-full h-full object-cover">
              <span class="absolute bottom-3 left-3 bg-[#072E2E]/90 backdrop-blur-md text-emerald-300 px-3 py-1 rounded-full text-[11px] font-mono font-medium border border-teal-700/60">
                Surgeon & PhD • NYU Dental
              </span>
            </div>
            
            <div class="p-6 space-y-3">
              <div>
                <span class="text-xs font-mono uppercase tracking-wider text-teal-900 font-bold block mb-0.5">Implantology & Surgery</span>
                <h3 class="font-serif text-2xl font-semibold text-slate-950">Dr. Elena Rostova, PhD</h3>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed font-normal">
                Fellow of ICOI with over 4,500 successful 3D guided titanium implant procedures. Author of published international studies in biomaterial osseointegration.
              </p>
              <div class="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-700">
                <span class="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md font-medium">Keyhole Implants</span>
                <span class="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md font-medium">Bone Regeneration</span>
                <span class="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md font-medium">Robotic Surgery</span>
              </div>
            </div>
          </div>

          <div class="p-6 pt-0">
            <button type="button" data-chat-trigger="doctor" data-chat-value="dr-elena"
              class="w-full bg-teal-900 hover:bg-teal-950 text-white text-xs font-medium py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 active:scale-[0.98] shadow-xs">
              <span>Consult Dr. Elena in Chat</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Curated Patient Reviews & Clinical Outcomes: Warm Luminous Sandstone Ground -->
  <section class="py-28 bg-[#FDF9F2] border-t border-amber-200/60">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <!-- Architectural Brand Color Metric Strip with Dual-Tone Symphony -->
      <div class="mb-14 p-6 sm:p-8 rounded-2xl bg-[#072E2E] border border-teal-800/80 text-white elevation-card relative overflow-hidden">
        <div class="absolute -left-20 -top-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
          <div>
            <div class="font-serif text-3xl sm:text-4xl font-bold text-amber-300">4,850+</div>
            <div class="text-xs text-amber-100/80 font-medium mt-1">Procedures Completed</div>
          </div>
          <div>
            <div class="font-serif text-3xl sm:text-4xl font-bold text-amber-300">4.98★</div>
            <div class="text-xs text-amber-100/80 font-medium mt-1">Average Patient Rating</div>
          </div>
          <div>
            <div class="font-serif text-3xl sm:text-4xl font-bold text-emerald-300">90 Min</div>
            <div class="text-xs text-teal-100/80 font-medium mt-1">Single-Visit Crowns</div>
          </div>
          <div>
            <div class="font-serif text-3xl sm:text-4xl font-bold text-emerald-300">100%</div>
            <div class="text-xs text-teal-100/80 font-medium mt-1">PPO Claims Handled</div>
          </div>
        </div>
      </div>

      <div class="max-w-2xl mb-12">
        <h2 class="font-serif-heading text-3xl sm:text-4xl text-slate-950 mb-3 tracking-tight">
          Verified Patient Experiences
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed">
          Authentic clinical reviews from our Midtown Manhattan patient community.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="bg-white p-7 rounded-2xl border border-amber-200/80 elevation-card flex flex-col justify-between hover:border-amber-400 transition-colors">
          <div>
            <div class="text-amber-500 text-xs mb-3 font-mono">★★★★★</div>
            <p class="text-xs sm:text-sm text-slate-700 leading-snug italic mb-4">
              "Booking through the AI took seconds, and Dr. Sarah's cleaning was completely painless with noise-canceling headphones."
            </p>
          </div>
          <div class="pt-3 border-t border-amber-100 flex items-center justify-between text-xs">
            <div>
              <div class="font-semibold text-slate-900">Julianne Sterling</div>
              <div class="text-[11px] text-slate-500">Preventive Hygiene</div>
            </div>
            <span class="text-[11px] bg-amber-100 text-amber-950 px-2 py-0.5 rounded font-semibold">Verified</span>
          </div>
        </div>

        <div class="bg-white p-7 rounded-2xl border border-amber-200/80 elevation-card flex flex-col justify-between hover:border-amber-400 transition-colors">
          <div>
            <div class="text-amber-500 text-xs mb-3 font-mono">★★★★★</div>
            <p class="text-xs sm:text-sm text-slate-700 leading-snug italic mb-4">
              "Dr. Marcus completed my Invisalign course in 7 months. Being able to ask questions via chat at night was incredible."
            </p>
          </div>
          <div class="pt-3 border-t border-amber-100 flex items-center justify-between text-xs">
            <div>
              <div class="font-semibold text-slate-900">David K. Chen</div>
              <div class="text-[11px] text-slate-500">Invisalign Patient</div>
            </div>
            <span class="text-[11px] bg-amber-100 text-amber-950 px-2 py-0.5 rounded font-semibold">Verified</span>
          </div>
        </div>

        <div class="bg-white p-7 rounded-2xl border border-amber-200/80 elevation-card flex flex-col justify-between hover:border-amber-400 transition-colors">
          <div>
            <div class="text-amber-500 text-xs mb-3 font-mono">★★★★★</div>
            <p class="text-xs sm:text-sm text-slate-700 leading-snug italic mb-4">
              "I broke a molar on Thursday and walked out with a permanent ceramic crown in under two hours. Zero temporary plastic."
            </p>
          </div>
          <div class="pt-3 border-t border-amber-100 flex items-center justify-between text-xs">
            <div>
              <div class="font-semibold text-slate-900">Priya M.</div>
              <div class="text-[11px] text-slate-500">Single-Day Crown</div>
            </div>
            <span class="text-[11px] bg-amber-100 text-amber-950 px-2 py-0.5 rounded font-semibold">Verified</span>
          </div>
        </div>

      </div>
    </div>
  </section>
`);
