const b = require('./builder.js');

b.add(`
  <!-- Treatments Catalog: Asymmetric Bento Grid with Architectural Brand Color Anchors -->
  <!-- Treatments Catalog: Asymmetric Bento Grid with Architectural Brand Color Anchors -->
  <section id="treatments" class="py-28 bg-[#FAF7F2]">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <!-- Section Header -->
      <div class="max-w-2xl mb-14">
        <h2 class="font-serif-heading text-3xl sm:text-4xl text-slate-950 mb-3 tracking-tight">
          Clinical Treatments & Restorative Art
        </h2>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          From guided ultrasonic biofilm prophylaxis to single-day milled ceramic restorations, every procedure is executed with biomimetic standards and absolute comfort.
        </p>
      </div>

      <!-- Asymmetric Bento Grid: 5 Purposefully Sized Cells -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        <!-- Bento Cell 1: Dominant Architectural Brand Anchor (Span 7 cols) -->
        <div class="md:col-span-7 bg-[#072E2E] border border-teal-800/80 text-white rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden elevation-card">
          <!-- Subtle Atmospheric Glow -->
          <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold">Single-Visit Restoration</span>
              <span class="text-xs font-mono text-teal-200/80">90 MIN ON-SITE</span>
            </div>
            <h3 class="font-serif text-2xl sm:text-3xl text-white mb-3">Same-Day Milled Ceramic Crowns</h3>
            <p class="text-xs sm:text-sm text-teal-100/85 max-w-xl leading-relaxed mb-6 font-normal">
              Our in-house CAD/CAM diamond-milling laboratory designs, manufactures, and permanently bonds custom biocompatible ceramic restorations in a single 90-minute visit. No goop impressions. No temporary plastic crowns.
            </p>
            <div class="grid grid-cols-3 gap-4 py-4 border-t border-teal-800/80 text-xs text-teal-100/90 mb-6">
              <div>
                <span class="text-teal-300/80 block text-[11px] uppercase font-mono mb-0.5">Precision</span>
                <strong class="text-white text-xs sm:text-sm font-semibold">Sub-20 Micron</strong>
              </div>
              <div>
                <span class="text-teal-300/80 block text-[11px] uppercase font-mono mb-0.5">Material</span>
                <strong class="text-white text-xs sm:text-sm font-semibold">Lithium Disilicate</strong>
              </div>
              <div>
                <span class="text-teal-300/80 block text-[11px] uppercase font-mono mb-0.5">Coverage</span>
                <strong class="text-emerald-300 text-xs sm:text-sm font-semibold">50% to 80% PPO</strong>
              </div>
            </div>
          </div>

          <div class="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-teal-800/60">
            <div class="text-xs font-semibold text-teal-200">
              Fee: $1,100 - $1,650
            </div>
            <button type="button" data-chat-trigger="service" data-chat-value="crowns"
              class="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-medium px-5 py-2.5 rounded-xl transition flex items-center justify-center gap-2 shadow-xs active:scale-[0.98]">
              <span>Chat About Same-Day Crowns</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        <!-- Bento Cell 2: Preventive Foundation with Radiant Warm Accent (Span 5 cols) -->
        <div class="md:col-span-5 bg-gradient-to-br from-amber-50/90 via-white to-amber-50/30 border border-amber-200/90 rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden elevation-card">
          <!-- Top Warm Patient Comfort Accent Bar -->
          <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-700 to-amber-500"></div>

          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">Preventive Foundation</span>
              <span class="text-xs font-mono text-amber-900/70 font-semibold">60 MIN</span>
            </div>
            <h3 class="font-serif text-xl sm:text-2xl text-slate-950 mb-2">Guided Biofilm Prophylaxis</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              A revolution in dental hygiene. Gentle warm-water ultrasonic spray removes microscopic bacteria and stains without painful mechanical scraping or enamel erosion.
            </p>
            <div class="text-xs text-slate-600 mb-6 space-y-1.5">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-700"></span>
                <span>Includes ultra-low radiation 3D AI cavity radiograph</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-700"></span>
                <span>Covered 80% to 100% by major in-network PPO carriers</span>
              </div>
            </div>
          </div>
          
          <div class="pt-3 border-t border-amber-100 flex items-center justify-between">
            <span class="text-xs font-bold text-amber-800">$210 - $280</span>
            <button type="button" data-chat-trigger="service" data-chat-value="hygiene"
              class="bg-amber-800 hover:bg-amber-900 text-white text-xs font-medium px-4 py-2 rounded-xl transition active:scale-[0.98]">
              Book Hygiene
            </button>
          </div>
        </div>

        <!-- Bento Cell 3: Clear Aligners (Span 4 cols) -->
        <div class="md:col-span-4 bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between elevation-card">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">Orthodontics</span>
              <span class="text-xs font-mono text-slate-500">45 MIN SCAN</span>
            </div>
            <h3 class="font-serif text-lg font-semibold text-slate-950 mb-1.5">Invisalign Studio</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Led by Board-Certified Orthodontist Dr. Marcus Vance. High-resolution iTero digital scans simulate your finished smile in 3D before treatment begins.
            </p>
            <div class="text-xs font-semibold text-teal-900 mb-4">$3,800 - $5,900 • 0% APR Options</div>
          </div>
          <button type="button" data-chat-trigger="service" data-chat-value="invisalign"
            class="w-full bg-slate-100 hover:bg-teal-50 hover:text-teal-900 text-slate-900 text-xs font-medium py-2 rounded-xl transition text-center active:scale-[0.98]">
            Inquire in Chat
          </button>
        </div>

        <!-- Bento Cell 4: Computer-Guided Implants (Span 4 cols) -->
        <div class="md:col-span-4 bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between elevation-card">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">Surgical</span>
              <span class="text-xs font-mono text-slate-500">60 MIN CONSULT</span>
            </div>
            <h3 class="font-serif text-lg font-semibold text-slate-950 mb-1.5">Guided Keyhole Implants</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">
              Computer-guided 3D robotic accuracy directed by Dr. Elena Rostova, PhD. Permanent tooth replacement that preserves jawbone structure.
            </p>
            <div class="text-xs font-semibold text-teal-900 mb-4">$2,400 - $3,900 • Major PPO Benefit</div>
          </div>
          <button type="button" data-chat-trigger="service" data-chat-value="implants"
            class="w-full bg-slate-100 hover:bg-teal-50 hover:text-teal-900 text-slate-900 text-xs font-medium py-2 rounded-xl transition text-center active:scale-[0.98]">
            Inquire in Chat
          </button>
        </div>

        <!-- Bento Cell 5: Urgent Care Priority High-Contrast Block (Span 4 cols) -->
        <div class="md:col-span-4 bg-[#78350F] border border-amber-600 text-white rounded-2xl p-6 flex flex-col justify-between shadow-md">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-mono uppercase tracking-wider text-amber-200 font-bold">Immediate Priority</span>
              <span class="text-xs font-mono text-amber-300 font-bold">SAME-DAY</span>
            </div>
            <h3 class="font-serif text-lg font-semibold text-white mb-1.5">Urgent Pain & Trauma Triage</h3>
            <p class="text-xs text-amber-100/90 leading-relaxed mb-4">
              Reserved daily emergency operatory suites for severe toothaches, chipped restorations, abscesses, or facial swelling. Rapid diagnostic relief.
            </p>
            <div class="text-xs font-semibold text-amber-200 mb-4">$180 Emergency Triage Exam</div>
          </div>
          <button type="button" data-chat-trigger="service" data-chat-value="emergency"
            class="w-full bg-white hover:bg-amber-100 text-amber-950 font-semibold text-xs py-2.5 rounded-xl transition text-center active:scale-[0.98] shadow-xs">
            Immediate Pain Triage
          </button>
        </div>

      </div>
    </div>
  </section>

  <!-- Interactive Sanctuary & Technology Showcase: Deep Obsidian Acoustic Chamber -->
  <section id="sanctuary" class="py-28 bg-[#031616] text-white relative overflow-hidden border-t border-teal-900/60">
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      
      <div class="max-w-2xl mb-12">
        <h2 class="font-serif-heading text-3xl sm:text-4xl text-white mb-3 tracking-tight">
          The Sanctuary: Pure Soundproofing, Zero Discomfort
        </h2>
        <p class="text-teal-100/80 text-sm sm:text-base leading-relaxed font-normal">
          Dentha was engineered from the architectural blueprint to eliminate sensory stress. Explore our Midtown clinical environment below.
        </p>
      </div>

      <!-- Tab Selectors -->
      <div class="flex flex-wrap gap-2 mb-8">
        <button type="button" data-tab="suite" 
          class="sanctuary-tab-btn px-4 py-2 rounded-xl text-xs font-medium transition bg-amber-800 text-white shadow-xs">
          Private Suite 1200
        </button>
        <button type="button" data-tab="lab" 
          class="sanctuary-tab-btn px-4 py-2 rounded-xl text-xs font-medium transition bg-[#072E2E] text-teal-200 hover:bg-teal-900/80 border border-teal-700/60">
          In-House CAD/CAM Lab
        </button>
        <button type="button" data-tab="cbct" 
          class="sanctuary-tab-btn px-4 py-2 rounded-xl text-xs font-medium transition bg-[#072E2E] text-teal-200 hover:bg-teal-900/80 border border-teal-700/60">
          Low-Dose 3D CBCT Suite
        </button>
      </div>

      <!-- Tab Content Panels -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <!-- Left: Studio Photography Asset in Architectural Frame -->
        <div class="lg:col-span-7">
          <div class="rounded-2xl overflow-hidden border border-teal-800/80 elevation-card bg-[#052020]">
            <img src="assets/images/studio.jpg" alt="Dentha Dental Operatory Suite" class="w-full h-auto object-cover">
            <div class="p-4 sm:p-5 flex items-center justify-between text-xs border-t border-teal-800/80">
              <span class="font-semibold text-white">Midtown Operatory Suite 1200</span>
              <span class="text-amber-300 font-mono text-xs font-semibold">ACOUSTIC RATING: STC-52</span>
            </div>
          </div>
        </div>

        <!-- Right: Technical Specification Clusters -->
        <div class="lg:col-span-5">
          
          <div id="sanctuary-suite" class="sanctuary-panel space-y-5">
            <h3 class="font-serif text-2xl text-white">Acoustic Isolation Suite</h3>
            <p class="text-xs sm:text-sm text-teal-100/85 leading-relaxed font-normal">
              Every operatory is an enclosed architectural sanctuary with double-insulated acoustic drywall, eliminating hallway echoes and drill sounds entirely.
            </p>
            
            <div class="divide-y divide-teal-800/60 pt-2 text-xs text-teal-100/80">
              <div class="py-3">
                <strong class="text-white block text-xs mb-0.5 font-semibold">Whisper-Quiet Electric Handpieces</strong>
                <span class="text-teal-100/75 leading-relaxed">Replaced abrasive air turbines with German electric micromotors that eliminate vibration and high-pitch whine.</span>
              </div>
              <div class="py-3">
                <strong class="text-white block text-xs mb-0.5 font-semibold">Ceiling 4K Streaming Displays</strong>
                <span class="text-teal-100/75 leading-relaxed">Stream films or meditation soundscapes through wireless Bose noise-canceling headphones throughout your care.</span>
              </div>
              <div class="py-3">
                <strong class="text-white block text-xs mb-0.5 font-semibold">Medical HEPA Filtration</strong>
                <span class="text-teal-100/75 leading-relaxed">Continuous air exchange with zero clinical scent or chemical fragrance.</span>
              </div>
            </div>
          </div>

          <div id="sanctuary-lab" class="sanctuary-panel space-y-5 hidden">
            <h3 class="font-serif text-2xl text-white">In-House CAD/CAM Milling Lab</h3>
            <p class="text-xs sm:text-sm text-teal-100/85 leading-relaxed font-normal">
              Why wait two weeks for a third-party laboratory? Our digital milling suite manufactures custom ceramic restorations right before your eyes.
            </p>
            
            <div class="divide-y divide-teal-800/60 pt-2 text-xs text-teal-100/80">
              <div class="py-3">
                <strong class="text-white block text-xs mb-0.5 font-semibold">Sub-20 Micron Precision</strong>
                <span class="text-teal-100/75 leading-relaxed">High-frequency 5-axis diamond milling yields margins tighter than human hands can measure.</span>
              </div>
              <div class="py-3">
                <strong class="text-white block text-xs mb-0.5 font-semibold">Biocompatible Ceramics</strong>
                <span class="text-teal-100/75 leading-relaxed">Metal-free lithium disilicate matching natural tooth translucency and light refraction.</span>
              </div>
            </div>
          </div>

          <div id="sanctuary-cbct" class="sanctuary-panel space-y-5 hidden">
            <h3 class="font-serif text-2xl text-white">Low-Dose 3D CBCT Imaging</h3>
            <p class="text-xs sm:text-sm text-teal-100/85 leading-relaxed font-normal">
              We capture high-definition volumetric diagnostics in 12 seconds with up to 80% less radiation than conventional imaging systems.
            </p>
            
            <div class="divide-y divide-teal-800/60 pt-2 text-xs text-teal-100/80">
              <div class="py-3">
                <strong class="text-white block text-xs mb-0.5 font-semibold">Nerve & Bone Mapping</strong>
                <span class="text-teal-100/75 leading-relaxed">Ensures 100% predictable surgical implant trajectories and airway analysis.</span>
              </div>
              <div class="py-3">
                <strong class="text-white block text-xs mb-0.5 font-semibold">AI-Assisted Radiography</strong>
                <span class="text-teal-100/75 leading-relaxed">Machine learning validates micro-cavities between contacts years before symptoms appear.</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
`);
