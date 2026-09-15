/**
 * Dentha Main Application Logic
 * Pure IntersectionObserver driven, no scroll-listener jank, zero slop.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderObserver();
  initMobileMenu();
  initChatScrollObserver();
  initFaqAccordion();
  initSmoothScroll();
  initSanctuaryTabs();
  initInsuranceSelector();
});

function initHeaderObserver() {
  const header = document.getElementById('site-header');
  const sentinel = document.getElementById('top-sentinel');
  if (!header || !sentinel) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-slate-200/90', 'shadow-xs');
      } else {
        header.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-slate-200/90', 'shadow-xs');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(sentinel);
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

function initChatScrollObserver() {
  const heroChat = document.getElementById('hero-chat-card');
  const floatingBtn = document.getElementById('floating-chat-trigger');

  if (!heroChat || !floatingBtn) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        floatingBtn.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
        floatingBtn.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
      } else {
        floatingBtn.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
        floatingBtn.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
      }
    });
  }, { threshold: 0.15 });

  observer.observe(heroChat);
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-accordion-btn');
  faqItems.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isOpen = !content.classList.contains('hidden');

      // Close all other faqs
      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 76;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ESC key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('chat-modal');
      if (modal && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    }
  });
}

function initSanctuaryTabs() {
  const tabs = document.querySelectorAll('.sanctuary-tab-btn');
  const panels = document.querySelectorAll('.sanctuary-panel');
  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      tabs.forEach(t => {
        t.classList.remove('bg-amber-800', 'text-white');
        t.classList.add('bg-[#072E2E]', 'text-teal-200');
      });
      tab.classList.remove('bg-[#072E2E]', 'text-teal-200');
      tab.classList.add('bg-amber-800', 'text-white');

      panels.forEach(panel => {
        if (panel.id === `sanctuary-${target}`) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });
}

function initInsuranceSelector() {
  const pills = document.querySelectorAll('.insurance-pill');
  const statusEl = document.getElementById('insurance-check-status');
  if (!pills.length || !statusEl) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('border-teal-900', 'bg-teal-50', 'text-teal-900', 'font-semibold'));
      pill.classList.add('border-teal-900', 'bg-teal-50', 'text-teal-900', 'font-semibold');

      const plan = pill.getAttribute('data-plan');
      const network = pill.getAttribute('data-status') || 'In-Network';
      statusEl.innerHTML = `
        <p class="flex items-center justify-between text-xs p-3 rounded-xl bg-teal-50/80 text-teal-950">
          <span>
            <strong>${plan}:</strong> <span class="text-emerald-800 font-medium">${network}</span>. Typical preventive checkups covered 80% to 100%.
          </span>
          <button type="button" data-chat-trigger="question" data-chat-value="Please verify my ${plan} dental insurance coverage." class="text-[11px] font-semibold text-teal-900 hover:underline shrink-0 ml-2">
            Verify in Chat &rarr;
          </button>
        </p>
      `;
    });
  });
}
