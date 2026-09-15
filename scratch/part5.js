const b = require('./builder.js');

b.add(`
  <!-- Pricing & Insurance Section: Architectural Spec Sheet & PPO Checker -->
  <section id="pricing" class="py-24 bg-ground">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <!-- Section Header -->
      <div class="max-w-2xl mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200/70 text-[11px] font-mono uppercase tracking-wider mb-4 font-semibold">
          <span class="w-1.5 h-1.5 rounded-full bg-teal-700"></span>
          Transparent Financial Policy
        </div>
        <h2 class="font-serif-heading text-3xl sm:text-4xl text-slate-950 mb-3 tracking-tight">
          Fee Transparency & Insurance Coordination
        </h2>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          No surprise billing or hidden clinic surcharges. We present itemized treatment schedules before clinical work begins and coordinate directly with your in-network PPO carrier.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Clinical Specification Fee Schedule (Span 7 cols) -->
        <div class="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 elevation-card overflow-hidden relative">
          <!-- Top Architectural Brand Accent Bar -->
          <div class="h-1.5 bg-gradient-to-r from-teal-900 via-emerald-600 to-teal-800"></div>

          <div class="p-6 sm:p-7">
            <div class="flex items-center justify-between mb-5">
              <div>
                <span class="text-[11px] font-mono uppercase tracking-wider text-teal-900 font-bold block">Clinical Schedule // 2026</span>
                <h3 class="font-serif text-xl font-semibold text-slate-950">Procedure Pricing Index</h3>
              </div>
              <span class="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold border border-slate-200/80">
                PPO IN-NETWORK
              </span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead class="bg-[#072E2E] text-teal-100 uppercase font-mono text-[11px] tracking-wider">
                  <tr>
                    <th class="py-3 px-4 font-semibold">Clinical Procedure</th>
                    <th class="py-3 px-4 font-semibold">Standard Fee</th>
                    <th class="py-3 px-4 font-semibold">Typical In-Network PPO</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 text-slate-800">
                  <tr class="hover:bg-slate-50/80 transition-colors">
                    <td class="py-3.5 px-4 font-medium text-slate-950">Comprehensive Exam & 3D Imaging</td>
                    <td class="py-3.5 px-4 font-mono font-semibold text-slate-900">$210 - $280</td>
                    <td class="py-3.5 px-4 text-emerald-800 font-medium">Covered 80% to 100%</td>
                  </tr>
                  <tr class="hover:bg-slate-50/80 transition-colors">
                    <td class="py-3.5 px-4 font-medium text-slate-950">Guided Ultrasonic Biofilm Hygiene</td>
                    <td class="py-3.5 px-4 font-mono font-semibold text-slate-900">$180 - $240</td>
                    <td class="py-3.5 px-4 text-emerald-800 font-medium">Covered 100% (2x per year)</td>
                  </tr>
                  <tr class="hover:bg-slate-50/80 transition-colors">
                    <td class="py-3.5 px-4 font-medium text-slate-950">Philips Zoom Laser Brightening</td>
                    <td class="py-3.5 px-4 font-mono font-semibold text-slate-900">$450 - $650</td>
                    <td class="py-3.5 px-4 text-amber-800 font-medium">Elective / HSA Eligible</td>
                  </tr>
                  <tr class="hover:bg-slate-50/80 transition-colors">
                    <td class="py-3.5 px-4 font-medium text-slate-950">Single-Day Milled Ceramic Crown</td>
                    <td class="py-3.5 px-4 font-mono font-semibold text-slate-900">$1,100 - $1,650</td>
                    <td class="py-3.5 px-4 text-emerald-800 font-medium">Covered 50% to 80%</td>
                  </tr>
                  <tr class="hover:bg-slate-50/80 transition-colors">
                    <td class="py-3.5 px-4 font-medium text-slate-950">Clear Aligners (Full Course)</td>
                    <td class="py-3.5 px-4 font-mono font-semibold text-slate-900">$3,800 - $5,900</td>
                    <td class="py-3.5 px-4 text-emerald-800 font-medium">$1,500 - $2,500 Lifetime Benefit</td>
                  </tr>
                  <tr class="hover:bg-slate-50/80 transition-colors">
                    <td class="py-3.5 px-4 font-medium text-slate-950">Guided Titanium Dental Implant</td>
                    <td class="py-3.5 px-4 font-mono font-semibold text-slate-900">$2,400 - $3,900</td>
                    <td class="py-3.5 px-4 text-emerald-800 font-medium">Major Restorative 50%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-500 gap-2">
              <span>All diagnostic radiograph codes pre-authorized prior to seating.</span>
              <span class="font-mono text-amber-800 font-semibold">HSA / FSA Direct Billing Accepted</span>
            </div>
          </div>
        </div>

        <!-- Right: Interactive Insurance Network Selector (Span 5 cols) -->
        <div class="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 elevation-card flex flex-col justify-between relative overflow-hidden">
          <!-- Top Architectural Accent -->
          <div class="h-1.5 bg-teal-900 absolute top-0 left-0 right-0"></div>

          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-mono uppercase tracking-wider text-teal-900 font-bold block">Benefit Verification</span>
              <span class="text-[11px] font-mono text-emerald-700 font-semibold">INSTANT CHECK</span>
            </div>
            <h3 class="font-serif text-xl font-semibold text-slate-950 mb-2">In-Network Insurance Check</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-5">
              Select your insurance network below to check coverage status, or ask our care concierge in chat for real-time verification.
            </p>
            
            <div class="grid grid-cols-2 gap-2 mb-5">
              <button type="button" data-plan="Delta Dental PPO" data-status="In-Network Premier"
                class="insurance-pill text-left text-xs p-3 rounded-xl border border-slate-200 bg-white hover:border-teal-900 hover:bg-teal-50/30 transition">
                <span class="block font-semibold text-slate-900">Delta Dental</span>
                <span class="text-[11px] text-emerald-700 font-medium">In-Network Premier</span>
              </button>
              <button type="button" data-plan="MetLife PDP Plus" data-status="In-Network Tier 1"
                class="insurance-pill text-left text-xs p-3 rounded-xl border border-slate-200 bg-white hover:border-teal-900 hover:bg-teal-50/30 transition">
                <span class="block font-semibold text-slate-900">MetLife</span>
                <span class="text-[11px] text-emerald-700 font-medium">In-Network Tier 1</span>
              </button>
              <button type="button" data-plan="Cigna Dental Radius" data-status="In-Network"
                class="insurance-pill text-left text-xs p-3 rounded-xl border border-slate-200 bg-white hover:border-teal-900 hover:bg-teal-50/30 transition">
                <span class="block font-semibold text-slate-900">Cigna</span>
                <span class="text-[11px] text-emerald-700 font-medium">In-Network Radius</span>
              </button>
              <button type="button" data-plan="Aetna Dental PPO" data-status="In-Network"
                class="insurance-pill text-left text-xs p-3 rounded-xl border border-slate-200 bg-white hover:border-teal-900 hover:bg-teal-50/30 transition">
                <span class="block font-semibold text-slate-900">Aetna</span>
                <span class="text-[11px] text-emerald-700 font-medium">In-Network PPO</span>
              </button>
              <button type="button" data-plan="Guardian Any Doctor" data-status="In-Network"
                class="insurance-pill text-left text-xs p-3 rounded-xl border border-slate-200 bg-white hover:border-teal-900 hover:bg-teal-50/30 transition">
                <span class="block font-semibold text-slate-900">Guardian</span>
                <span class="text-[11px] text-emerald-700 font-medium">In-Network Preferred</span>
              </button>
              <button type="button" data-plan="UnitedHealthcare" data-status="In-Network"
                class="insurance-pill text-left text-xs p-3 rounded-xl border border-slate-200 bg-white hover:border-teal-900 hover:bg-teal-50/30 transition">
                <span class="block font-semibold text-slate-900">UnitedHealthcare</span>
                <span class="text-[11px] text-emerald-700 font-medium">In-Network National</span>
              </button>
            </div>

            <div id="insurance-check-status" class="mb-5">
              <p class="text-xs p-3.5 rounded-xl bg-teal-50/80 text-teal-950 leading-relaxed">
                Click your insurance provider above to check coverage status, or ask our team in chat.
              </p>
            </div>

            <div class="text-xs text-slate-600 mb-6 leading-relaxed border-t border-slate-100 pt-3">
              <strong class="text-amber-800 font-semibold">0% APR Financing:</strong> Interest-free installment options available via CareCredit and Sunbit (6, 12, or 24 months).
            </div>
          </div>

          <button type="button" data-chat-trigger="question" data-chat-value="Please verify my insurance coverage and copay."
            class="w-full bg-teal-900 hover:bg-teal-950 text-white text-xs font-medium py-3 rounded-xl transition text-center shadow-xs flex items-center justify-center gap-2 active:scale-[0.99]">
            <span>Verify Your Insurance in Chat</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

      </div>

    </div>
  </section>

  <!-- FAQ Section: Asymmetric Editorial Split with Deep Teal Concierge Anchor -->
  <section id="faq" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <!-- Section Header -->
      <div class="max-w-2xl mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200/70 text-[11px] font-mono uppercase tracking-wider mb-4 font-semibold">
          <span class="w-1.5 h-1.5 rounded-full bg-teal-700"></span>
          Clinical Protocols & Practice Standards
        </div>
        <h2 class="font-serif-heading text-3xl sm:text-4xl text-slate-950 mb-3 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          Direct answers regarding our digital workflow, patient comfort amenities, and same-day restorative dentistry.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Deep Teal Concierge Dispatch Anchor (Span 4 cols) -->
        <div class="lg:col-span-4 bg-[#072E2E] border border-teal-800/80 text-white rounded-2xl p-7 elevation-card relative overflow-hidden flex flex-col justify-between">
          <div class="absolute -right-16 -bottom-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold">AI Care Concierge</span>
              <span class="text-xs font-mono text-teal-200/80">ONLINE 24/7</span>
            </div>
            <h3 class="font-serif text-xl sm:text-2xl text-white mb-3">Have a specific clinical question?</h3>
            <p class="text-xs text-teal-100/85 leading-relaxed mb-6 font-normal">
              Our clinical care team and triage system can answer procedure questions, verify PPO copays, or arrange same-day priority appointments in seconds.
            </p>

            <div class="space-y-3 py-4 border-t border-teal-800/80 text-xs text-teal-100/90 mb-6">
              <div class="flex items-center justify-between">
                <span class="text-teal-300/80">Average Triage Time</span>
                <strong class="text-white font-mono font-semibold">&lt; 15 Seconds</strong>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-teal-300/80">Same-Day Priority</span>
                <strong class="text-emerald-300 font-semibold">Active Daily</strong>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-teal-300/80">Direct Telephone</span>
                <strong class="text-white font-mono font-semibold">(212) 584-3900</strong>
              </div>
            </div>
          </div>

          <div class="relative z-10 pt-2">
            <button type="button" data-chat-trigger="service" data-chat-value="hygiene"
              class="w-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-medium py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-xs active:scale-[0.98]">
              <span>Start Live Chat Dialogue</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        <!-- Right: Cohesive Accordion List (Span 8 cols) -->
        <div class="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 elevation-card divide-y divide-slate-200 overflow-hidden">
          
          <div class="p-6">
            <button type="button" class="faq-accordion-btn w-full text-left flex items-center justify-between text-sm font-semibold text-slate-950 hover:text-amber-800 transition-colors">
              <span>How does the AI conversational booking work?</span>
              <svg class="faq-icon w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="faq-content hidden pt-3 text-xs text-slate-600 leading-relaxed">
              Our conversational triage engine allows you to describe symptoms, inquire about restorative procedures, or select a doctor in plain conversational language. It evaluates live operatory availability, gathers your confirmation details, and locks your appointment in seconds without cumbersome multi-page forms.
            </div>
          </div>

          <div class="p-6">
            <button type="button" class="faq-accordion-btn w-full text-left flex items-center justify-between text-sm font-semibold text-slate-950 hover:text-amber-800 transition-colors">
              <span>What if I have dental anxiety or fear of needles?</span>
              <svg class="faq-icon w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="faq-content hidden pt-3 text-xs text-slate-600 leading-relaxed">
              Dentha was engineered specifically for anxiety-free dentistry. We provide private soundproofed suites with STC-52 acoustic isolation, wireless noise-canceling headphones, ceiling entertainment monitors, computer-controlled localized anesthesia, and conscious sedation upon advance request.
            </div>
          </div>

          <div class="p-6">
            <button type="button" class="faq-accordion-btn w-full text-left flex items-center justify-between text-sm font-semibold text-slate-950 hover:text-amber-800 transition-colors">
              <span>Can I get a permanent ceramic crown completed in a single visit?</span>
              <svg class="faq-icon w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="faq-content hidden pt-3 text-xs text-slate-600 leading-relaxed">
              Yes. With our on-site 5-axis CAD/CAM milling lab, Dr. Sarah Bennett scans your tooth digitally, custom mills high-strength lithium disilicate ceramic, and permanently bonds the finished crown in under 90 minutes. You will never need a messy alginate impression or temporary plastic crown.
            </div>
          </div>

          <div class="p-6">
            <button type="button" class="faq-accordion-btn w-full text-left flex items-center justify-between text-sm font-semibold text-slate-950 hover:text-amber-800 transition-colors">
              <span>How does in-network PPO insurance billing work at Dentha?</span>
              <svg class="faq-icon w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="faq-content hidden pt-3 text-xs text-slate-600 leading-relaxed">
              We are in-network with premier PPO plans including Delta Dental, MetLife, Cigna, Aetna, Guardian, and UnitedHealthcare. Our team pre-authorizes your diagnostic codes electronically before your appointment, presents written fee schedules, and files all claims directly on your behalf.
            </div>
          </div>

          <div class="p-6">
            <button type="button" class="faq-accordion-btn w-full text-left flex items-center justify-between text-sm font-semibold text-slate-950 hover:text-amber-800 transition-colors">
              <span>What should I do in an acute dental emergency or severe pain?</span>
              <svg class="faq-icon w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="faq-content hidden pt-3 text-xs text-slate-600 leading-relaxed">
              If you are in severe discomfort, have a fractured tooth, or acute swelling, click Check Tooth Pain & Symptoms in our chat to trigger immediate priority triage, or call our direct emergency line at (212) 584-3999 for immediate dispatch.
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- Location & Hours Section: Architectural Campus & Live Dispatch (Grand Central Limestone Canvas) -->
  <section id="location" class="py-28 bg-[#F6F4EF] border-t border-stone-200/80">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <!-- Section Header -->
      <div class="max-w-2xl mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200/70 text-[11px] font-mono uppercase tracking-wider mb-4 font-semibold">
          <span class="w-1.5 h-1.5 rounded-full bg-teal-700"></span>
          Midtown Manhattan Campus
        </div>
        <h2 class="font-serif-heading text-3xl sm:text-4xl text-slate-950 mb-3 tracking-tight">
          Visit Our Lexington Avenue Studio
        </h2>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          Situated two blocks north of Grand Central Terminal, engineered for quiet clinical focus amidst the energy of Midtown.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Studio Location & Transit Hub (Span 6 cols) -->
        <div class="lg:col-span-6 bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 elevation-card space-y-6">
          <div class="flex items-center justify-between pb-4 border-b border-slate-200/80">
            <h3 class="font-serif text-xl font-semibold text-slate-950">Grand Central Concourse Studio</h3>
            <span class="text-[11px] font-mono text-teal-900 font-semibold">SUITE 1200</span>
          </div>

          <div class="space-y-4 text-xs">
            <div class="flex items-start gap-3">
              <span class="w-8 h-8 rounded-lg bg-teal-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">ST</span>
              <div>
                <strong class="text-slate-950 block text-xs font-semibold">Dentha Dental Studio</strong>
                <span class="text-slate-600 leading-relaxed">450 Lexington Ave, Suite 1200, New York, NY 10017</span>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="w-8 h-8 rounded-lg bg-teal-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">TR</span>
              <div>
                <strong class="text-slate-950 block text-xs font-semibold">Transit Connections</strong>
                <span class="text-slate-600 leading-relaxed">Grand Central Terminal: Subway Lines 4, 5, 6, 7, S, Metro-North Railroad, and Long Island Rail Road (LIRR) Grand Central Madison.</span>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="w-8 h-8 rounded-lg bg-teal-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">PK</span>
              <div>
                <strong class="text-slate-950 block text-xs font-semibold">Validated Valet Parking</strong>
                <span class="text-slate-600 leading-relaxed">Validated parking garage located on 45th Street between Lexington Avenue and 3rd Avenue with elevator access to concourse.</span>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="w-8 h-8 rounded-lg bg-teal-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">PH</span>
              <div>
                <strong class="text-slate-950 block text-xs font-semibold">Direct Concierge & Dispatch</strong>
                <div class="text-slate-600 space-x-2 pt-0.5">
                  <a href="tel:2125843900" class="text-teal-900 hover:underline font-medium">(212) 584-3900</a>
                  <span class="text-slate-400">•</span>
                  <a href="mailto:care@dentha.com" class="text-teal-900 hover:underline font-medium">care@dentha.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Studio Hours & Live Dispatch Card (Span 6 cols) -->
        <div class="lg:col-span-6 bg-white border border-slate-200/90 rounded-2xl elevation-card overflow-hidden">
          
          <!-- Warm Secondary Amber Header Banner -->
          <div class="bg-amber-800 text-white p-6 border-b border-amber-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 class="font-serif text-lg font-semibold text-white">Studio Operating Hours</h3>
              <span class="text-xs text-amber-200/90 font-mono">Eastern Standard Time</span>
            </div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-amber-950 text-amber-300 border border-amber-700/60 w-fit">
              <span class="w-2 h-2 rounded-full bg-amber-400"></span>
              Open Today until 7:00 PM
            </span>
          </div>

          <div class="p-6 sm:p-7 space-y-3.5 text-xs text-slate-700">
            <div class="flex justify-between py-1.5 border-b border-slate-200/80">
              <span class="font-medium text-slate-950">Monday - Thursday</span>
              <span class="font-mono text-slate-900 font-semibold">7:30 AM - 7:00 PM</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-slate-200/80">
              <span class="font-medium text-slate-950">Friday</span>
              <span class="font-mono text-slate-900 font-semibold">7:30 AM - 5:30 PM</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-slate-200/80">
              <span class="font-medium text-slate-950">Saturday</span>
              <span class="font-mono text-slate-900 font-semibold">8:30 AM - 3:30 PM</span>
            </div>
            <div class="flex justify-between py-1.5 text-amber-950 font-medium">
              <span class="font-semibold">Sunday</span>
              <span class="font-mono font-semibold text-amber-800">Emergency On-Call Dispatch</span>
            </div>

            <div class="pt-4 mt-2 border-t border-slate-200">
              <button type="button" data-chat-trigger="service" data-chat-value="hygiene"
                class="w-full bg-amber-800 hover:bg-amber-900 text-white text-xs font-medium py-3 rounded-xl transition text-center shadow-xs flex items-center justify-center gap-2 active:scale-[0.99]">
                <span>Chat to Reserve Your Preferred Time</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- Footer: Deepest Obsidian Night Teal with High-End Studio Index -->
  <footer class="bg-[#031414] text-slate-300 py-16 text-xs border-t border-teal-900/60">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-lg bg-teal-850 text-white flex items-center justify-center font-serif text-sm font-bold border border-teal-700/60">D</span>
            <span class="font-serif text-2xl font-semibold text-white tracking-tight">Dentha</span>
          </div>
          <p class="text-teal-100/75 text-xs leading-relaxed font-normal">
            AI-first modern dental studio blending clinical perfectionism, acoustic architectural tranquility, and seamless conversational care.
          </p>
          <div class="text-[11px] text-teal-300/80 font-mono pt-1">
            Midtown Manhattan • Grand Central
          </div>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-3.5 text-xs font-mono uppercase tracking-wider text-emerald-300">Clinical Specialties</h4>
          <ul class="space-y-2 text-slate-300">
            <li><a href="#treatments" class="hover:text-white transition">Preventive Biofilm Hygiene</a></li>
            <li><a href="#treatments" class="hover:text-white transition">Single-Day Ceramic Crowns</a></li>
            <li><a href="#treatments" class="hover:text-white transition">Invisalign Clear Aligners</a></li>
            <li><a href="#treatments" class="hover:text-white transition">Computer-Guided Implants</a></li>
            <li><a href="#treatments" class="hover:text-white transition">Biomimetic Porcelain Veneers</a></li>
            <li><a href="#treatments" class="hover:text-white transition">Same-Day Urgent Pain Relief</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-3.5 text-xs font-mono uppercase tracking-wider text-emerald-300">Studio & Care</h4>
          <ul class="space-y-2 text-slate-300">
            <li><a href="#sanctuary" class="hover:text-white transition">Acoustic Sanctuary & Tech</a></li>
            <li><a href="#specialists" class="hover:text-white transition">Clinical Specialists & Faculty</a></li>
            <li><a href="#pricing" class="hover:text-white transition">Transparent Fee Schedule</a></li>
            <li><a href="#pricing" class="hover:text-white transition">In-Network PPO Check</a></li>
            <li><a href="#location" class="hover:text-white transition">Grand Central Location</a></li>
            <li><a href="#faq" class="hover:text-white transition">Clinical FAQ & Standards</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-3.5 text-xs font-mono uppercase tracking-wider text-emerald-300">Direct Contact & Urgent</h4>
          <p class="text-slate-300 text-xs leading-relaxed mb-3">
            450 Lexington Ave, Suite 1200<br>New York, NY 10017
          </p>
          <div class="font-medium text-white mb-1">Direct: (212) 584-3900</div>
          <div class="text-emerald-300 text-xs font-mono mb-2">24/7 Urgent: (212) 584-3999</div>
          <div class="text-[11px] text-teal-300/80">NYS Dental License #038492</div>
        </div>
      </div>

      <div class="pt-8 border-t border-teal-900/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-teal-200/60 gap-4">
        <div>© 2026 Dentha Dental Studio, PC. All rights reserved. Registered Professional Corporation.</div>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition">HIPAA Privacy Notice</a>
          <a href="#" class="hover:text-white transition">Terms of Clinical Care</a>
          <a href="#" class="hover:text-white transition">Accessibility Statement</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Floating Chat FAB Trigger -->
  <button id="floating-chat-trigger" type="button" 
    class="fixed bottom-6 right-6 z-50 bg-teal-900 hover:bg-teal-950 text-white rounded-full px-5 py-3.5 shadow-lg border border-teal-700/60 flex items-center gap-2.5 transition-all duration-300 translate-y-24 opacity-0 pointer-events-none group">
    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
    <span class="text-xs font-semibold tracking-wide">Chat with Care Team</span>
    <svg class="w-4 h-4 group-hover:translate-x-0.5 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
  </button>

  <!-- Expanded Full Chat Modal -->
  <div id="chat-modal" class="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 hidden">
    <div class="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 p-5 flex flex-col h-[600px] max-h-[92vh] animate-fade-in">
      
      <div class="pb-3 border-b border-slate-200 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="relative">
            <img src="assets/images/dr-sarah.jpg" alt="Dr. Sarah Bennett" class="w-10 h-10 rounded-full object-cover border border-slate-300">
            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
          </div>
          <div>
            <div class="text-xs font-bold text-slate-900">Dr. Sarah Bennett, DDS</div>
            <div class="text-xs text-teal-900 font-medium">Dentha AI Care Concierge • Ready to help</div>
          </div>
        </div>

        <button id="close-chat-modal" type="button" class="p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <div id="modal-chat-messages" class="flex-1 py-3 overflow-y-auto chat-scroll-area space-y-3 text-xs">
        <div class="flex items-start gap-3 mb-4 animate-fade-in">
          <img src="assets/images/dr-sarah.jpg" alt="Dr. Sarah Bennett" class="w-8 h-8 rounded-full object-cover border border-slate-300 shrink-0 mt-0.5">
          <div class="max-w-[88%] w-full">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-semibold text-slate-900">Dr. Sarah Bennett, DDS</span>
              <span class="text-[10px] text-teal-900 bg-teal-50 px-1.5 py-0.5 rounded font-medium border border-teal-200/50">Clinical Director</span>
              <span class="text-[10px] text-slate-400">Online</span>
            </div>
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

      <div class="pt-3 border-t border-slate-200">
        <div class="relative flex items-center">
          <input id="modal-chat-input" type="text" 
            placeholder="Type your question or booking request..."
            class="w-full text-xs pl-3.5 pr-10 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-900 bg-white text-slate-900">
          <button id="modal-send-btn" type="button" aria-label="Send message"
            class="absolute right-1.5 p-1.5 rounded-lg bg-teal-900 hover:bg-teal-950 text-white transition active:scale-95">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </div>

    </div>
  </div>
`);

const fs = require('fs');
const dataJs = fs.readFileSync('js/data.js', 'utf8').replace(/export\s+/g, '');
const chatJs = fs.readFileSync('js/chat.js', 'utf8').replace(/^import\s+.*?;/m, '').replace(/export\s+class/g, 'class');
const appJs = fs.readFileSync('js/app.js', 'utf8');

b.add(`
  <script>
${dataJs}

${chatJs}

${appJs}
  </script>
</body>
</html>
`);

b.save('./index.html');
console.log('Successfully compiled clean index.html with 0 anti-patterns!');
