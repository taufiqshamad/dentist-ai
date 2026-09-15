const b = require('./builder.js');

b.add(`<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dentha - Modern Dental Studio & Conversational Care</title>
  <meta name="description" content="AI-first modern dental studio in Midtown Manhattan. Explore treatments, verify insurance, and book appointments directly through conversational AI.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            ground: '#F8FAFC',
            'ground-alt': '#F1F5F9',
            teal: {
              850: '#0B3F3F',
              900: '#0D4848',
              950: '#072E2E'
            }
          },
          fontFamily: {
            sans: ['"Figtree"', 'sans-serif'],
            serif: ['"Playfair Display"', 'Georgia', 'serif']
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body class="bg-ground text-slate-900 selection:bg-teal-900 selection:text-white">

  <!-- Top sentinel for IntersectionObserver header elevation (zero scroll jank) -->
  <div id="top-sentinel" class="absolute top-0 left-0 w-full h-4 pointer-events-none"></div>

  <!-- Header -->
  <header id="site-header" class="fixed top-0 left-0 right-0 z-40 transition-all duration-200 py-3.5 px-6 md:px-12 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <a href="#" class="flex items-center gap-2.5 group">
        <span class="w-8 h-8 rounded-lg bg-teal-900 text-white flex items-center justify-center font-serif text-lg font-bold">D</span>
        <span class="font-serif text-2xl font-semibold tracking-tight text-slate-950">Dentha</span>
        <span class="hidden sm:inline-block text-xs font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-teal-50 text-teal-900 border border-teal-200/70 ml-1">Dental Studio</span>
      </a>

      <nav class="hidden lg:flex items-center gap-7 text-xs font-medium text-slate-700">
        <a href="#treatments" class="hover:text-teal-900 transition">Treatments</a>
        <a href="#sanctuary" class="hover:text-teal-900 transition">Sanctuary and Tech</a>
        <a href="#specialists" class="hover:text-teal-900 transition">Specialists</a>
        <a href="#pricing" class="hover:text-teal-900 transition">Pricing and Insurance</a>
        <a href="#location" class="hover:text-teal-900 transition">Studio and Hours</a>
      </nav>

      <div class="hidden sm:flex items-center gap-4">
        <a href="tel:2125843900" class="flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-teal-900 transition">
          <svg class="w-3.5 h-3.5 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          <span>(212) 584-3900</span>
        </a>
        <button type="button" data-chat-trigger="service" data-chat-value="hygiene"
          class="bg-teal-900 hover:bg-teal-950 active:scale-[0.98] text-white text-xs font-medium px-4 py-2 rounded-full transition flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Start Care Dialogue</span>
        </button>
      </div>

      <button id="mobile-menu-toggle" type="button" aria-expanded="false" class="lg:hidden p-2 text-slate-700 hover:text-slate-950">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>

    <div id="mobile-menu" class="hidden lg:hidden pt-4 pb-2 border-t border-slate-200 mt-3 space-y-2.5">
      <a href="#treatments" class="mobile-nav-link block text-xs font-medium text-slate-700 py-1">Treatments</a>
      <a href="#sanctuary" class="mobile-nav-link block text-xs font-medium text-slate-700 py-1">Sanctuary and Tech</a>
      <a href="#specialists" class="mobile-nav-link block text-xs font-medium text-slate-700 py-1">Specialists</a>
      <a href="#pricing" class="mobile-nav-link block text-xs font-medium text-slate-700 py-1">Pricing and Insurance</a>
      <a href="#location" class="mobile-nav-link block text-xs font-medium text-slate-700 py-1">Studio and Hours</a>
      <div class="pt-2 flex flex-col gap-2">
        <a href="tel:2125843900" class="text-xs font-medium text-slate-700 flex items-center gap-1.5 py-1">Direct: (212) 584-3900</a>
        <button type="button" data-chat-trigger="service" data-chat-value="hygiene" class="w-full bg-teal-900 text-white text-xs font-medium py-2 rounded-full text-center">Start Care Dialogue</button>
      </div>
    </div>
  </header>
`);
