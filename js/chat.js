/**
 * Dentha Conversational AI & Booking Engine
 */
import { SERVICES, DOCTORS, CLINIC_INFO, TIME_SLOTS, KNOWLEDGE_BASE, SYMPTOM_TRIAGE_ITEMS, PRICING_SUMMARY } from './data.js';

export class DenthaChatEngine {
  constructor() {
    this.messages = [];
    this.booking = {
      service: null,
      doctor: null,
      date: null,
      time: null,
      name: '',
      phone: '',
      email: '',
      notes: ''
    };
    this.step = 'idle'; // idle, service_select, doctor_select, date_select, time_select, contact_info, confirmed
    this.heroContainer = document.getElementById('hero-chat-messages');
    this.modalContainer = document.getElementById('modal-chat-messages');
    this.heroInput = document.getElementById('hero-chat-input');
    this.modalInput = document.getElementById('modal-chat-input');
    this.modal = document.getElementById('chat-modal');
    this.floatingTrigger = document.getElementById('floating-chat-trigger');

    this.initSound();
    this.bindEvents();
    this.loadInitialGreeting();
  }

  initSound() {
    try {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      this.audioCtx = null;
    }
  }

  playSubtleChime() {
    if (!this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.12); // A5
      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.25);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  bindEvents() {
    // Hero input
    const heroSendBtn = document.getElementById('hero-send-btn');
    if (heroSendBtn && this.heroInput) {
      heroSendBtn.addEventListener('click', () => this.handleUserInput(this.heroInput.value));
      this.heroInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleUserInput(this.heroInput.value);
        }
      });
    }

    // Modal input
    const modalSendBtn = document.getElementById('modal-send-btn');
    if (modalSendBtn && this.modalInput) {
      modalSendBtn.addEventListener('click', () => this.handleUserInput(this.modalInput.value));
      this.modalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleUserInput(this.modalInput.value);
        }
      });
    }

    // Floating trigger button
    if (this.floatingTrigger) {
      this.floatingTrigger.addEventListener('click', () => this.openModal());
    }

    // Modal close button
    const modalCloseBtn = document.getElementById('close-chat-modal');
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => this.closeModal());
    }

    // Expand button from hero chat
    const heroExpandBtn = document.getElementById('hero-expand-btn');
    if (heroExpandBtn) {
      heroExpandBtn.addEventListener('click', () => this.openModal());
    }

    // Global listener for "Inquire with AI" or "Book with Doctor" buttons
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-chat-trigger]');
      if (trigger) {
        const action = trigger.getAttribute('data-chat-trigger');
        const value = trigger.getAttribute('data-chat-value');
        this.handleExternalTrigger(action, value);
      }
    });
  }

  openModal() {
    if (this.modal) {
      this.modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      this.render();
      if (this.modalInput) {
        setTimeout(() => this.modalInput.focus(), 150);
      }
    }
  }

  closeModal() {
    if (this.modal) {
      this.modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  loadInitialGreeting() {
    this.messages = [
      {
        id: 'msg-init',
        sender: 'bot',
        author: 'Dr. Sarah Bennett, DDS',
        avatar: 'assets/images/dr-sarah.jpg',
        role: 'Clinical Director',
        text: "Hello! I am Dr. Sarah Bennett, Clinical Director at Dentha. Are you experiencing any tooth discomfort or sensitivity right now, or are you looking to schedule a routine cleaning or cosmetic smile consultation?\n\nTell me what brings you in today, or select an option below to begin directly:",
        timestamp: this.getFormattedTime(),
        rich: {
          type: 'initial_actions',
          actions: [
            {
              id: 'action_book',
              icon: 'calendar',
              title: 'Book an Appointment',
              subtitle: 'Pick treatment, specialist & reserved time'
            },
            {
              id: 'action_symptoms',
              icon: 'pulse',
              title: 'Check Tooth Pain & Symptoms',
              subtitle: 'Same-day emergency exam & relief triage'
            },
            {
              id: 'action_insurance_pricing',
              icon: 'receipt',
              title: 'Insurance & Pricing Questions',
              subtitle: 'In-network PPO check & transparent fee schedule'
            }
          ]
        }
      }
    ];
    this.render();
  }

  getFormattedTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  generateDates() {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 5; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      // Skip Sundays
      if (d.getDay() !== 0) {
        const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
        const monthName = d.toLocaleDateString('en-US', { month: 'short' });
        const dateNum = d.getDate();
        const iso = d.toISOString().split('T')[0];
        dates.push({
          iso,
          label: `${dayName}, ${monthName} ${dateNum}`,
          isTomorrow: i === 1
        });
      }
    }
    return dates;
  }

  handleExternalTrigger(action, value) {
    if (action === 'service') {
      const s = SERVICES.find(x => x.id === value);
      if (s) {
        this.addUserMessage(`I am interested in ${s.name}. Can I book an appointment?`);
        this.selectService(s.id);
      }
    } else if (action === 'doctor') {
      const d = DOCTORS.find(x => x.id === value);
      if (d) {
        this.addUserMessage(`I would like to book a visit with ${d.name}.`);
        this.selectDoctor(d.id);
      }
    } else if (action === 'question') {
      this.addUserMessage(value);
      this.processQuery(value);
    }

    const heroCard = document.getElementById('hero-chat-card');
    const rect = heroCard ? heroCard.getBoundingClientRect() : null;
    const isHeroVisible = rect && rect.top >= -80 && rect.bottom <= (window.innerHeight + 150) && window.innerWidth >= 1024;
    if (!isHeroVisible) {
      this.openModal();
    } else {
      heroCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  handleUserInput(text) {
    if (!text || !text.trim()) return;
    const cleanText = text.trim();

    if (this.heroInput) this.heroInput.value = '';
    if (this.modalInput) this.modalInput.value = '';

    this.addUserMessage(cleanText);
    this.processQuery(cleanText);
  }

  addUserMessage(text) {
    this.messages.push({
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: text,
      timestamp: this.getFormattedTime()
    });
    this.playSubtleChime();
    this.render();
  }

  addBotMessage(text, rich = null) {
    this.messages.push({
      id: 'msg-' + Date.now(),
      sender: 'bot',
      author: 'Dr. Sarah Bennett, DDS',
      avatar: 'assets/images/dr-sarah.jpg',
      role: 'Clinical Director',
      text: text,
      timestamp: this.getFormattedTime(),
      rich: rich
    });
    this.playSubtleChime();
    this.render();
  }

  handleActionClick(actionId) {
    if (actionId === 'action_book') {
      this.addUserMessage('I would like to book an appointment.');
      this.promptServiceSelection();
    } else if (actionId === 'action_symptoms') {
      this.addUserMessage('I am experiencing tooth pain or symptoms. Can you triage?');
      this.showSymptomTriage();
    } else if (actionId === 'action_insurance_pricing') {
      this.addUserMessage('What are your fees and insurance coverage?');
      this.showInsuranceAndPricing();
    }
  }

  showSymptomTriage() {
    this.addBotMessage(
      'I understand, and tooth pain or sensitivity should never be ignored. We hold daily emergency blocks open specifically for immediate relief. Which of these symptoms best describes what you are feeling?',
      {
        type: 'symptom_triage',
        items: SYMPTOM_TRIAGE_ITEMS
      }
    );
  }

  handleSymptomClick(symptomId) {
    const item = SYMPTOM_TRIAGE_ITEMS.find(s => s.id === symptomId);
    if (!item) return;

    this.addUserMessage(`My symptom: ${item.label}`);
    this.addBotMessage(
      `${item.advice}\n\nWould you like to reserve our next available opening with our clinical team?`,
      {
        type: 'quick_chips',
        chips: [
          { label: `Book ${item.recommendedService === 'emergency' ? 'Emergency Relief' : 'Restoration'} Slot`, action: 'service', value: item.recommendedService },
          { label: 'Call Emergency: (212) 584-3999', action: 'call', value: 'tel:2125843999' },
          { label: 'Ask Another Question', action: 'general_help', value: 'help' }
        ]
      }
    );
  }

  showInsuranceAndPricing() {
    this.addBotMessage(
      'At Dentha, we hold an uncompromising commitment to transparent pricing. We provide itemized fee breakdowns before any clinical procedure begins and coordinate directly with your PPO plan so you never encounter unexpected surprise billing. Here is our overview:',
      {
        type: 'pricing_overview',
        items: PRICING_SUMMARY,
        insurances: CLINIC_INFO.insurances
      }
    );
  }

  processQuery(rawText) {
    if (!rawText) return;
    const text = rawText.toLowerCase().trim();

    // Check greeting if message is conversational opener
    const isGreeting = /^(hi\b|hello\b|hey\b|good morning|good afternoon|good evening|greetings)/i.test(text);
    if (isGreeting && !text.includes('book') && !text.includes('schedule') && !text.includes('appointment')) {
      this.addBotMessage(
        'Hello! It is a pleasure to connect with you. I am Dr. Sarah Bennett, Clinical Director at Dentha. Are you seeking urgent relief for an uncomfortable tooth, or would you like to plan a routine checkup or cosmetic consultation? Tell me what brings you in today, or tap an option below:',
        {
          type: 'initial_actions',
          actions: [
            { id: 'action_book', icon: 'calendar', title: 'Book an Appointment', subtitle: 'Pick treatment, specialist & reserved time' },
            { id: 'action_symptoms', icon: 'pulse', title: 'Check Tooth Pain & Symptoms', subtitle: 'Same-day emergency exam & relief triage' },
            { id: 'action_insurance_pricing', icon: 'receipt', title: 'Insurance & Pricing Questions', subtitle: 'In-network PPO check & transparent fee schedule' }
          ]
        }
      );
      return;
    }

    // 1. Composite service booking intent (e.g. 'book cleaning', 'schedule invisalign', 'reserve crown')
    const isBookingIntent = text.includes('book') || text.includes('schedule') || text.includes('appointment') || text.includes('reserve') || text.includes('visit') || text.includes('see doctor') || text.includes('see dentist') || text.includes('slot');

    if (isBookingIntent) {
      if (text.includes('clean') || text.includes('hygiene') || text.includes('checkup') || text.includes('exam')) {
        this.selectService('hygiene');
        return;
      }
      if (text.includes('invisalign') || text.includes('aligner') || text.includes('straight') || text.includes('brace')) {
        this.selectService('invisalign');
        return;
      }
      if (text.includes('crown') || text.includes('filling') || text.includes('ceramic') || text.includes('cap')) {
        this.selectService('crowns');
        return;
      }
      if (text.includes('implant') || text.includes('surgery') || text.includes('tooth loss') || text.includes('missing')) {
        this.selectService('implants');
        return;
      }
      if (text.includes('whiten') || text.includes('bleach') || text.includes('veneer') || text.includes('cosmetic')) {
        this.selectService('whitening');
        return;
      }
      if (text.includes('emergency') || text.includes('urgent') || text.includes('pain') || text.includes('ache') || text.includes('broken')) {
        this.selectService('emergency');
        return;
      }
      if (text.includes('sarah') || text.includes('bennett')) {
        this.selectDoctor('dr-sarah');
        return;
      }
      if (text.includes('marcus') || text.includes('vance')) {
        this.selectDoctor('dr-marcus');
        return;
      }
      if (text.includes('elena') || text.includes('rostova')) {
        this.selectDoctor('dr-elena');
        return;
      }
      this.promptServiceSelection();
      return;
    }

    // 2. Symptom & Emergency Triage keywords
    const isEmergencyKeywords = ['pain', 'hurt', 'hurts', 'ache', 'aching', 'toothache', 'emergency', 'urgent', 'broken', 'crack', 'cracked', 'chip', 'chipped', 'swell', 'swollen', 'bleeding', 'blood', 'knocked', 'nerve', 'throbbing', 'sensitive', 'sensitivity'].some(k => text.includes(k));
    if (isEmergencyKeywords) {
      this.showSymptomTriage();
      return;
    }

    // 3. Pricing, Cost & Financing keywords
    const isPricingKeywords = ['cost', 'price', 'pricing', 'fee', 'fees', 'how much', 'expensive', 'cheap', 'payment', 'pay', 'finance', 'financing', 'carecredit', 'sunbit', 'installments', 'rates'].some(k => text.includes(k));
    if (isPricingKeywords) {
      this.showInsuranceAndPricing();
      return;
    }

    // 4. Insurance & PPO Coverage keywords
    const isInsuranceKeywords = ['insurance', 'insurances', 'delta', 'cigna', 'metlife', 'aetna', 'guardian', 'united', 'unitedhealthcare', 'bcbs', 'blue cross', 'ppo', 'coverage', 'cover', 'in-network', 'claim', 'claims', 'copay'].some(k => text.includes(k));
    if (isInsuranceKeywords) {
      this.addBotMessage(
        'We participate directly in-network with premier PPO dental plans including Delta Dental, MetLife, Cigna, Aetna, Guardian, and UnitedHealthcare. Our team submits all claims directly on your behalf to maximize your in-network benefits with zero administrative hassle.',
        {
          type: 'quick_chips',
          chips: [
            { label: 'Book Appointment with Insurance', action: 'prompt_booking', value: 'all' },
            { label: 'View Transparent Fee Schedule', action: 'action_pricing', value: 'pricing' },
            { label: 'Check Specific Insurance Plan', action: 'question', value: 'How do I verify my dental insurance plan?' }
          ]
        }
      );
      return;
    }

    // 5. Specific Service Inquiries
    if (text.includes('clean') || text.includes('hygiene') || text.includes('checkup') || text.includes('exam') || text.includes('plaque') || text.includes('cavity')) {
      this.addBotMessage(
        'Our Comprehensive Hygiene visit includes gentle guided ultrasonic biofilm removal, periodontal mapping, and low-dose 3D AI screening. It is designed to be completely pain-free while protecting against gum disease and micro-cavities.',
        {
          type: 'quick_chips',
          chips: [
            { label: 'Reserve Hygiene Visit ($210 - $280)', action: 'service', value: 'hygiene' },
            { label: 'Insurance Coverage for Cleanings', action: 'action_pricing', value: 'pricing' },
            { label: 'Ask Another Question', action: 'general_help', value: 'help' }
          ]
        }
      );
      return;
    }

    if (text.includes('invisalign') || text.includes('aligner') || text.includes('straight') || text.includes('brace') || text.includes('ortho') || text.includes('bite') || text.includes('crowd')) {
      this.addBotMessage(
        'Dr. Marcus Vance leads our Invisalign Studio. Using our 3D iTero intraoral scanner, we generate an instant 3D simulation of your completed smile during your 45-minute consultation. Treatments typically range from 4 to 12 months with discreet, comfortable clear aligners.',
        {
          type: 'quick_chips',
          chips: [
            { label: 'Book 3D Smile Scan with Dr. Marcus', action: 'service', value: 'invisalign' },
            { label: 'Invisalign Pricing ($3,800 - $5,900)', action: 'action_pricing', value: 'pricing' },
            { label: 'Ask Another Question', action: 'general_help', value: 'help' }
          ]
        }
      );
      return;
    }

    if (text.includes('crown') || text.includes('cap') || text.includes('filling') || text.includes('ceramic') || text.includes('restoration') || text.includes('milled')) {
      this.addBotMessage(
        'Through our in-house 5-axis CAD/CAM diamond milling lab, we prepare, mill, and permanently bond biocompatible ceramic crowns in a single 90-minute appointment. No temporary caps, no second numbing, and no impression trays.',
        {
          type: 'quick_chips',
          chips: [
            { label: 'Reserve Single-Day Crown Visit', action: 'service', value: 'crowns' },
            { label: 'Crown Fee ($1,100 - $1,650)', action: 'action_pricing', value: 'pricing' },
            { label: 'Ask Another Question', action: 'general_help', value: 'help' }
          ]
        }
      );
      return;
    }

    if (text.includes('whiten') || text.includes('bleach') || text.includes('bright') || text.includes('yellow') || text.includes('stain') || text.includes('veneer') || text.includes('cosmetic')) {
      this.addBotMessage(
        'For immediate brilliance, we provide Philips Zoom Whitespeed in-studio laser whitening (up to 8 shades brighter in 75 minutes). For structural aesthetic redesigns, we create custom hand-layered porcelain veneers tailored to your facial proportions.',
        {
          type: 'quick_chips',
          chips: [
            { label: 'Reserve Zoom Whitening ($450 - $650)', action: 'service', value: 'whitening' },
            { label: 'Consult on Porcelain Veneers', action: 'service', value: 'whitening' },
            { label: 'Ask Another Question', action: 'general_help', value: 'help' }
          ]
        }
      );
      return;
    }

    if (text.includes('implant') || text.includes('missing') || text.includes('lost tooth') || text.includes('extraction') || text.includes('surgery') || text.includes('bone graft') || text.includes('wisdom')) {
      this.addBotMessage(
        'Dr. Elena Rostova performs computer-guided 3D dental implants. Guided placement is minimally invasive, offers over 98% long-term success, and provides permanent biological stability matching natural tooth function.',
        {
          type: 'quick_chips',
          chips: [
            { label: 'Book Implant Consult with Dr. Elena', action: 'service', value: 'implants' },
            { label: 'Implant Pricing ($2,400 - $3,900)', action: 'action_pricing', value: 'pricing' },
            { label: 'Ask Another Question', action: 'general_help', value: 'help' }
          ]
        }
      );
      return;
    }

    // 6. Doctor profiles & Faculty
    if (text.includes('doctor') || text.includes('dentist') || text.includes('specialist') || text.includes('faculty') || text.includes('team') || text.includes('who') || text.includes('marcus') || text.includes('sarah') || text.includes('elena') || text.includes('dr.') || text.includes('dr ')) {
      this.addBotMessage(
        'Our clinical faculty brings elite Ivy League training and over a decade of specialist practice:\n- Dr. Sarah Bennett, DDS (Clinical Director & Aesthetics, Columbia)\n- Dr. Marcus Vance, DMD, MS (Board-Certified Orthodontist, Harvard)\n- Dr. Elena Rostova, DDS, PhD (Oral Surgeon & Implantologist, NYU)\n\nWho would you like to schedule with?',
        {
          type: 'doctor_picker',
          doctors: DOCTORS
        }
      );
      return;
    }

    // 7. Location, Address, Parking & Directions
    if (text.includes('where') || text.includes('location') || text.includes('address') || text.includes('subway') || text.includes('grand central') || text.includes('parking') || text.includes('valet') || text.includes('directions')) {
      this.addBotMessage(
        'Dentha Dental Studio is located at 450 Lexington Ave (Suite 1200), New York, NY 10017, at the corner of 45th St and Lexington Ave. We are two blocks from Grand Central Terminal (Subway lines 4, 5, 6, 7, S, and Metro-North). Complimentary valet parking validation is available on 45th St.',
        {
          type: 'quick_chips',
          chips: [
            { label: 'Book an Appointment at Lexington Ave', action: 'prompt_booking', value: 'all' },
            { label: 'View Operating Hours', action: 'question', value: 'What are your operating hours?' }
          ]
        }
      );
      return;
    }

    // 8. Hours & Schedule
    if (text.includes('hour') || text.includes('hours') || text.includes('open') || text.includes('time') || text.includes('saturday') || text.includes('weekend') || text.includes('sunday')) {
      this.addBotMessage(
        'Our clinical studio hours are designed for Midtown professionals and families:\n- Monday to Thursday: 7:30 AM to 7:00 PM\n- Friday: 7:30 AM to 5:30 PM\n- Saturday: 8:30 AM to 3:30 PM\n- Sunday: Reserved for emergency on-call\n\nWe offer both early morning 7:30 AM and late evening slots.',
        {
          type: 'quick_chips',
          chips: [
            { label: 'Book a Weekday Slot', action: 'prompt_booking', value: 'all' },
            { label: 'Book Saturday Visit', action: 'prompt_booking', value: 'all' }
          ]
        }
      );
      return;
    }

    // 9. Dental Anxiety & Comfort
    if (text.includes('anxiety') || text.includes('scared') || text.includes('afraid') || text.includes('fear') || text.includes('nervous') || text.includes('phobia') || text.includes('gentle') || text.includes('sedation') || text.includes('nitrous')) {
      this.addBotMessage(
        'Dental anxiety is very common, and Dentha was purpose-built to eliminate stress. Our private suites feature STC-52 acoustic soundproofing, Bose noise-canceling headphones with 4K ceiling screens, warm lighting, whisper-quiet electric handpieces, and nitrous oxide or oral conscious sedation upon request.',
        {
          type: 'quick_chips',
          chips: [
            { label: 'Book a Gentle Introductory Visit', action: 'service', value: 'hygiene' },
            { label: 'Ask About Sedation Options', action: 'question', value: 'What sedation options do you offer?' }
          ]
        }
      );
      return;
    }

    // 10. Greetings
    if (text === 'hi' || text === 'hello' || text === 'hey' || text.startsWith('good morning') || text.startsWith('good afternoon') || text.startsWith('good evening') || text === 'greetings') {
      this.addBotMessage(
        'Hello! It is a pleasure to connect with you. I am Dr. Sarah Bennett, Clinical Director at Dentha. Are you seeking urgent relief for an uncomfortable tooth, or would you like to plan a routine checkup or cosmetic consultation? Tell me what brings you in today, or tap an option below:',
        {
          type: 'initial_actions',
          actions: [
            { id: 'action_book', icon: 'calendar', title: 'Book an Appointment', subtitle: 'Pick treatment, specialist & reserved time' },
            { id: 'action_symptoms', icon: 'pulse', title: 'Check Tooth Pain & Symptoms', subtitle: 'Same-day emergency exam & relief triage' },
            { id: 'action_insurance_pricing', icon: 'receipt', title: 'Insurance & Pricing Questions', subtitle: 'In-network PPO check & transparent fee schedule' }
          ]
        }
      );
      return;
    }

    // 11. Thank you & Closings
    if (text.includes('thank') || text.includes('thanks') || text.includes('appreciate') || text.includes('bye') || text.includes('goodbye')) {
      this.addBotMessage(
        'You are very welcome! If any dental questions arise or you need immediate clinical care, do not hesitate to reach back out or call our studio directly at (212) 584-3900. We look forward to welcoming you to Dentha.',
        {
          type: 'quick_chips',
          chips: [
            { label: 'Book an Appointment', action: 'prompt_booking', value: 'all' },
            { label: 'Start New Conversation', action: 'general_help', value: 'reset' }
          ]
        }
      );
      return;
    }

    // 12. Fallback
    this.addBotMessage(
      'Thank you for your message. As Clinical Director, I want to make sure you get the exact care you need. I can help diagnose symptoms, explain fees and PPO insurance coverage, or reserve an appointment with our specialists. Which of these can I assist you with?',
      {
        type: 'initial_actions',
        actions: [
          { id: 'action_book', icon: 'calendar', title: 'Book an Appointment', subtitle: 'Pick treatment, specialist & reserved time' },
          { id: 'action_symptoms', icon: 'pulse', title: 'Check Tooth Pain & Symptoms', subtitle: 'Same-day emergency exam & relief triage' },
          { id: 'action_insurance_pricing', icon: 'receipt', title: 'Insurance & Pricing Questions', subtitle: 'In-network PPO check & transparent fee schedule' }
        ]
      }
    );
  }

  promptServiceSelection() {
    this.step = 'service_select';
    this.addBotMessage(
      "Let us get you scheduled. Which clinical service would you like to reserve?",
      {
        type: 'service_grid',
        services: SERVICES
      }
    );
  }

  selectService(serviceId) {
    const service = SERVICES.find(s => s.id === serviceId);
    if (!service) return;
    this.booking.service = service;
    this.step = 'doctor_select';

    this.addBotMessage(
      `Selected: ${service.name} (${service.duration}, estimated fee ${service.price}). Do you have a preferred specialist, or would you like the first available opening?`,
      {
        type: 'doctor_picker',
        doctors: DOCTORS
      }
    );
  }

  selectDoctor(doctorId) {
    if (doctorId === 'any') {
      this.booking.doctor = {
        name: 'First Available Specialist',
        role: 'Board-Certified Dental Team',
        image: 'assets/images/dr-sarah.jpg'
      };
    } else {
      const doc = DOCTORS.find(d => d.id === doctorId);
      this.booking.doctor = doc || DOCTORS[0];
    }

    this.step = 'date_select';
    const dates = this.generateDates();

    this.addBotMessage(
      `Noted: ${this.booking.doctor.name}. Next, please select a preferred date for your appointment:`,
      {
        type: 'date_picker',
        dates: dates
      }
    );
  }

  selectDate(dateIso, dateLabel) {
    this.booking.date = { iso: dateIso, label: dateLabel };
    this.step = 'time_select';

    this.addBotMessage(
      `Selected: ${dateLabel}. Which time slot works best for you?`,
      {
        type: 'time_picker',
        slots: TIME_SLOTS
      }
    );
  }

  selectTime(timeId, timeLabel) {
    this.booking.time = { id: timeId, label: timeLabel };
    this.step = 'contact_info';

    this.addBotMessage(
      `Selected: ${timeLabel} on ${this.booking.date.label}. To finalize your reservation with ${this.booking.doctor.name}, please confirm your contact details below:`,
      {
        type: 'contact_form'
      }
    );
  }

  submitContactForm(formData) {
    this.booking.name = formData.name;
    this.booking.phone = formData.phone;
    this.booking.email = formData.email;
    this.booking.notes = formData.notes || '';

    this.step = 'confirmed';
    const bookingCode = 'DNT-' + Math.floor(1000 + Math.random() * 9000);
    this.booking.code = bookingCode;

    this.addBotMessage(
      `Your reservation is confirmed. We have sent a confirmation email and SMS reminder to ${this.booking.email}. Here is your official clinical booking summary:`,
      {
        type: 'confirmation_card',
        booking: this.booking
      }
    );
  }

  resetBooking() {
    this.booking = {
      service: null,
      doctor: null,
      date: null,
      time: null,
      name: '',
      phone: '',
      email: '',
      notes: ''
    };
    this.step = 'idle';
    this.loadInitialGreeting();
  }

  getActionIcon(icon) {
    if (icon === 'calendar') {
      return '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>';
    }
    if (icon === 'pulse') {
      return '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>';
    }
    if (icon === 'receipt') {
      return '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>';
    }
    return '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>';
  }

  render() {
    const htmlContent = this.messages.map(msg => this.renderMessageHTML(msg)).join('');

    if (this.heroContainer) {
      this.heroContainer.innerHTML = htmlContent;
      this.heroContainer.scrollTop = this.heroContainer.scrollHeight;
      this.attachMessageListeners(this.heroContainer);
    }

    if (this.modalContainer) {
      this.modalContainer.innerHTML = htmlContent;
      this.modalContainer.scrollTop = this.modalContainer.scrollHeight;
      this.attachMessageListeners(this.modalContainer);
    }
  }

  renderMessageHTML(msg) {
    if (msg.sender === 'user') {
      return `
        <div class="flex justify-end mb-4 animate-fade-in">
          <div class="max-w-[85%] bg-slate-900 text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm text-xs">
            <p class="leading-relaxed">${this.escapeHTML(msg.text)}</p>
            <span class="block text-[10px] text-slate-400 text-right mt-1">${msg.timestamp}</span>
          </div>
        </div>
      `;
    }

    let richHTML = '';
    if (msg.rich) {
      if (msg.rich.type === 'initial_actions') {
        richHTML = `
          <div class="space-y-2 mt-3 pt-1">
            ${msg.rich.actions.map(act => `
              <button type="button" 
                class="chat-action-btn w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white hover:bg-teal-50/60 hover:border-teal-900 transition duration-150 text-left group active:scale-[0.99]"
                data-action-id="${act.id}">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-teal-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    ${this.getActionIcon(act.icon)}
                  </div>
                  <div>
                    <div class="text-xs font-semibold text-slate-900 group-hover:text-teal-900 transition-colors">${act.title}</div>
                    <div class="text-[11px] text-slate-500">${act.subtitle}</div>
                  </div>
                </div>
                <svg class="w-4 h-4 text-slate-400 group-hover:text-teal-900 group-hover:translate-x-0.5 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            `).join('')}
          </div>
        `;
      } else if (msg.rich.type === 'symptom_triage') {
        richHTML = `
          <div class="space-y-2 mt-3 pt-1">
            ${msg.rich.items.map(item => `
              <button type="button" 
                class="chat-symptom-btn w-full text-left p-3 rounded-xl border border-slate-200 bg-white hover:border-amber-700 hover:bg-amber-50/40 transition duration-150 group active:scale-[0.99]"
                data-symptom-id="${item.id}">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-xs font-semibold text-slate-900 group-hover:text-amber-950 transition-colors">${item.label}</span>
                  <span class="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">${item.badge}</span>
                </div>
                <p class="text-[11px] text-slate-600">${item.desc}</p>
              </button>
            `).join('')}
            
            <div class="pt-1.5 flex flex-col gap-2">
              <button type="button" 
                class="chat-service-btn w-full bg-teal-900 hover:bg-teal-950 text-white text-xs py-2.5 px-4 rounded-xl font-medium transition text-center flex items-center justify-center gap-2 active:scale-95"
                data-service-id="emergency">
                <span>Reserve Same-Day Emergency Relief Slot</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <a href="tel:2125843999" class="block text-center text-[11px] text-amber-800 font-medium hover:underline py-0.5">
                Or call clinical emergency desk directly: (212) 584-3999
              </a>
            </div>
          </div>
        `;
      } else if (msg.rich.type === 'pricing_overview') {
        richHTML = `
          <div class="space-y-3 mt-3 pt-1">
            <div class="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <table class="w-full text-left text-xs">
                <thead class="bg-slate-50 text-slate-500 uppercase font-mono text-[10px] border-b border-slate-200">
                  <tr>
                    <th class="py-2 px-3 font-semibold">Treatment</th>
                    <th class="py-2 px-3 font-semibold">Standard Fee</th>
                    <th class="py-2 px-3 font-semibold">In-Network PPO</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-slate-800 text-[11px]">
                  ${msg.rich.items.map(it => `
                    <tr>
                      <td class="py-2 px-3 font-medium text-slate-900">${it.service}</td>
                      <td class="py-2 px-3 font-mono text-slate-700">${it.fee}</td>
                      <td class="py-2 px-3 text-emerald-700 font-medium">${it.coverage}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
              <div class="font-semibold text-slate-900 mb-1.5">Accepted In-Network PPO Carriers:</div>
              <div class="flex flex-wrap gap-1.5 mb-2">
                ${msg.rich.insurances.map(ins => `<span class="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">${ins.split(' ')[0]}</span>`).join('')}
              </div>
              <p class="text-slate-500">0% APR monthly installments available through CareCredit & Sunbit.</p>
            </div>

            <div class="flex flex-wrap gap-2 pt-1">
              <button type="button" class="chat-chip bg-teal-900 hover:bg-teal-950 text-white rounded-full px-3.5 py-1.5 text-xs font-medium transition active:scale-95"
                data-chip-action="prompt_booking" data-chip-val="all">
                Book an In-Network Visit
              </button>
              <button type="button" class="chat-chip bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 rounded-full px-3.5 py-1.5 text-xs font-medium transition active:scale-95"
                data-chip-action="question" data-chip-val="How do I verify my dental insurance plan?">
                Verify My Insurance
              </button>
            </div>
          </div>
        `;
      } else if (msg.rich.type === 'quick_chips') {
        richHTML = `
          <div class="flex flex-wrap gap-2 mt-3">
            ${msg.rich.chips.map(chip => `
              <button type="button" 
                class="chat-chip bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300/80 rounded-full px-3 py-1.5 text-xs font-medium transition duration-150 active:scale-95"
                data-chip-action="${chip.action}" data-chip-val="${chip.value}">
                ${chip.label}
              </button>
            `).join('')}
          </div>
        `;
      } else if (msg.rich.type === 'service_grid') {
        richHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            ${msg.rich.services.map(s => `
              <button type="button" 
                class="chat-service-btn text-left p-3 rounded-xl border border-slate-200 bg-white hover:border-teal-900 hover:bg-teal-50/40 transition duration-150 group"
                data-service-id="${s.id}">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-xs font-semibold text-slate-900 group-hover:text-teal-900">${s.name}</span>
                  <span class="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">${s.duration}</span>
                </div>
                <p class="text-[11px] text-slate-600 line-clamp-2">${s.tagline}</p>
                <div class="mt-2 text-[11px] font-medium text-teal-900">${s.price}</div>
              </button>
            `).join('')}
          </div>
        `;
      } else if (msg.rich.type === 'doctor_picker') {
        richHTML = `
          <div class="space-y-2 mt-3">
            <button type="button" 
              class="chat-doctor-btn w-full flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 bg-white hover:border-teal-900 hover:bg-teal-50/40 transition text-left"
              data-doctor-id="any">
              <div class="w-10 h-10 rounded-full bg-teal-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                All
              </div>
              <div>
                <div class="text-xs font-semibold text-slate-900">First Available Specialist (Earliest Opening)</div>
                <div class="text-[11px] text-slate-500">Immediate scheduling with Dr. Sarah, Dr. Marcus, or Dr. Elena</div>
              </div>
            </button>
            ${msg.rich.doctors.map(d => `
              <button type="button" 
                class="chat-doctor-btn w-full flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 bg-white hover:border-teal-900 hover:bg-teal-50/40 transition text-left"
                data-doctor-id="${d.id}">
                <img src="${d.image}" alt="${d.name}" class="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200">
                <div>
                  <div class="text-xs font-semibold text-slate-900">${d.name}</div>
                  <div class="text-[11px] text-slate-500">${d.role}</div>
                </div>
              </button>
            `).join('')}
          </div>
        `;
      } else if (msg.rich.type === 'date_picker') {
        richHTML = `
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3">
            ${msg.rich.dates.map(d => `
              <button type="button" 
                class="chat-date-btn p-2.5 rounded-xl border border-slate-200 bg-white hover:border-teal-900 hover:bg-teal-50/40 transition text-center"
                data-date-iso="${d.iso}" data-date-label="${d.label}">
                <span class="block text-[10px] uppercase tracking-wider ${d.isTomorrow ? 'text-teal-900 font-bold' : 'text-slate-500'}">
                  ${d.isTomorrow ? 'Tomorrow' : 'Available'}
                </span>
                <span class="block text-xs font-medium text-slate-900 mt-0.5">${d.label}</span>
              </button>
            `).join('')}
          </div>
        `;
      } else if (msg.rich.type === 'time_picker') {
        richHTML = `
          <div class="space-y-2 mt-3">
            <div class="grid grid-cols-3 gap-2">
              ${msg.rich.slots.map(s => `
                <button type="button" 
                  class="chat-time-btn p-2 rounded-lg border border-slate-200 bg-white hover:border-teal-900 hover:bg-teal-50/50 transition text-center text-xs font-medium text-slate-900"
                  data-time-id="${s.id}" data-time-label="${s.label}">
                  ${s.label}
                </button>
              `).join('')}
            </div>
          </div>
        `;
      } else if (msg.rich.type === 'contact_form') {
        richHTML = `
          <form class="chat-contact-form mt-3 p-4 rounded-xl border border-slate-200 bg-slate-50/80 space-y-3">
            <div>
              <label class="block text-xs font-medium text-slate-700 mb-1">Full Legal Name *</label>
              <input type="text" name="name" required placeholder="Eleanor Vance" 
                class="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-900 bg-white">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label class="block text-xs font-medium text-slate-700 mb-1">Mobile Phone *</label>
                <input type="tel" name="phone" required placeholder="(212) 555-0192" 
                  class="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-900 bg-white">
              </div>
              <div>
                <label class="block text-xs font-medium text-slate-700 mb-1">Email Address *</label>
                <input type="email" name="email" required placeholder="name@domain.com" 
                  class="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-900 bg-white">
              </div>
            </div>
            <div>
              <label class="block text-xs font-medium text-slate-700 mb-1">Clinical Notes or Symptoms (Optional)</label>
              <input type="text" name="notes" placeholder="e.g. Sensitivity on upper molar" 
                class="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-900 bg-white">
            </div>
            <button type="submit" 
              class="w-full bg-teal-900 hover:bg-teal-950 text-white font-medium text-xs py-2.5 px-4 rounded-lg transition duration-150 flex items-center justify-center gap-1.5 mt-2">
              <span>Confirm and Lock Appointment</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </button>
          </form>
        `;
      } else if (msg.rich.type === 'confirmation_card') {
        const b = msg.rich.booking;
        richHTML = `
          <div class="mt-3 p-4 rounded-xl border border-teal-900/30 bg-teal-50/60 space-y-3 animate-fade-in">
            <div class="flex items-center justify-between border-b border-teal-900/20 pb-2.5">
              <div>
                <span class="text-[10px] uppercase tracking-wider font-mono text-teal-900 font-bold">Confirmed Booking</span>
                <h4 class="text-sm font-bold text-slate-950">${b.code}</h4>
              </div>
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 text-emerald-800">
                Reserved Slot
              </span>
            </div>
            
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span class="text-[10px] text-slate-500 uppercase block">Treatment</span>
                <span class="font-medium text-slate-900">${b.service ? b.service.name : 'Consultation'}</span>
              </div>
              <div>
                <span class="text-[10px] text-slate-500 uppercase block">Specialist</span>
                <span class="font-medium text-slate-900">${b.doctor ? b.doctor.name : 'Clinical Staff'}</span>
              </div>
              <div>
                <span class="text-[10px] text-slate-500 uppercase block">Date and Time</span>
                <span class="font-medium text-teal-900">${b.date ? b.date.label : ''} at ${b.time ? b.time.label : ''}</span>
              </div>
              <div>
                <span class="text-[10px] text-slate-500 uppercase block">Patient</span>
                <span class="font-medium text-slate-900">${b.name}</span>
              </div>
            </div>

            <div class="text-[11px] text-slate-700 bg-white/80 p-2.5 rounded-lg border border-slate-200">
              <strong>Dentha Studio:</strong> 450 Lexington Ave, Suite 1200, New York, NY 10017 (Valet parking on 45th St)
            </div>

            <div class="flex flex-wrap gap-2 pt-1">
              <button type="button" class="chat-calendar-btn flex-1 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs py-2 px-3 rounded-lg font-medium transition text-center">
                Add to Calendar (.ics)
              </button>
              <button type="button" class="chat-reset-btn bg-teal-900 hover:bg-teal-950 text-white text-xs py-2 px-3 rounded-lg font-medium transition text-center">
                New Request
              </button>
            </div>
          </div>
        `;
      }
    }

    return `
      <div class="flex items-start gap-3 mb-4 animate-fade-in">
        <img src="${msg.avatar}" alt="${msg.author}" class="w-8 h-8 rounded-full object-cover border border-slate-300 shrink-0 mt-0.5">
        <div class="max-w-[88%] w-full">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-semibold text-slate-900">${msg.author}</span>
            <span class="text-[10px] text-teal-900 bg-teal-50 px-1.5 py-0.5 rounded font-medium border border-teal-200/50">${msg.role}</span>
            <span class="text-[10px] text-slate-400">${msg.timestamp}</span>
          </div>
          <div class="bg-slate-100 text-slate-800 rounded-2xl rounded-tl-sm p-3.5 text-xs leading-relaxed">
            <p class="whitespace-pre-line">${this.escapeHTML(msg.text)}</p>
            ${richHTML}
          </div>
        </div>
      </div>
    `;
  }

  attachMessageListeners(container) {
    // 3 Action buttons
    container.querySelectorAll('.chat-action-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const actionId = btn.getAttribute('data-action-id');
        this.handleActionClick(actionId);
      });
    });

    // Symptom triage items
    container.querySelectorAll('.chat-symptom-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const symptomId = btn.getAttribute('data-symptom-id');
        this.handleSymptomClick(symptomId);
      });
    });

    // Quick chips
    container.querySelectorAll('.chat-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = btn.getAttribute('data-chip-action');
        const val = btn.getAttribute('data-chip-val');
        this.addUserMessage(btn.innerText.trim());

        if (action === 'service') {
          this.selectService(val);
        } else if (action === 'question') {
          this.processQuery(val);
        } else if (action === 'prompt_booking') {
          this.promptServiceSelection();
        } else if (action === 'action_pricing') {
          this.showInsuranceAndPricing();
        } else if (action === 'general_help') {
          if (val === 'reset') {
            this.resetBooking();
          } else {
            this.processQuery(btn.innerText.trim());
          }
        } else if (action === 'call') {
          window.location.href = val;
        } else if (action === 'scroll_section') {
          const el = document.querySelector(val);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          this.closeModal();
        }
      });
    });

    // Service select
    container.querySelectorAll('.chat-service-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sId = btn.getAttribute('data-service-id');
        const service = SERVICES.find(s => s.id === sId);
        this.addUserMessage(`I would like to book: ${service ? service.name : sId}`);
        this.selectService(sId);
      });
    });

    // Doctor select
    container.querySelectorAll('.chat-doctor-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const dId = btn.getAttribute('data-doctor-id');
        const name = dId === 'any' ? 'First Available Specialist' : DOCTORS.find(d => d.id === dId)?.name;
        this.addUserMessage(`Preference: ${name}`);
        this.selectDoctor(dId);
      });
    });

    // Date select
    container.querySelectorAll('.chat-date-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const iso = btn.getAttribute('data-date-iso');
        const label = btn.getAttribute('data-date-label');
        this.addUserMessage(`Selected Date: ${label}`);
        this.selectDate(iso, label);
      });
    });

    // Time select
    container.querySelectorAll('.chat-time-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-time-id');
        const label = btn.getAttribute('data-time-label');
        this.addUserMessage(`Selected Time: ${label}`);
        this.selectTime(id, label);
      });
    });

    // Contact form submit
    container.querySelectorAll('.chat-contact-form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {
          name: form.name.value.trim(),
          phone: form.phone.value.trim(),
          email: form.email.value.trim(),
          notes: form.notes.value.trim()
        };
        this.addUserMessage(`Submitted patient info for: ${data.name}`);
        this.submitContactForm(data);
      });
    });

    // Calendar download
    container.querySelectorAll('.chat-calendar-btn').forEach(btn => {
      btn.addEventListener('click', () => this.downloadICalendar());
    });

    // Reset button
    container.querySelectorAll('.chat-reset-btn').forEach(btn => {
      btn.addEventListener('click', () => this.resetBooking());
    });
  }

  downloadICalendar() {
    const b = this.booking;
    const title = `Dentha Appointment: ${b.service ? b.service.name : 'Dental Visit'}`;
    const desc = `Appointment with ${b.doctor ? b.doctor.name : 'Dentha Specialist'}. Booking Ref: ${b.code}`;
    const location = 'Dentha Dental Studio, 450 Lexington Ave, Suite 1200, New York, NY';
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Dentha Dental Studio//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${desc}`,
      `LOCATION:${location}`,
      `DTSTART:${b.date ? b.date.iso.replace(/-/g, '') : '20260916'}T140000Z`,
      `DTEND:${b.date ? b.date.iso.replace(/-/g, '') : '20260916'}T150000Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `dentha-booking-${b.code || 'appt'}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}

// Instantiate engine when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.denthaChat = new DenthaChatEngine();
});
