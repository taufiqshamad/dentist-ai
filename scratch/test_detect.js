import { SERVICES, DOCTORS, CLINIC_INFO, TIME_SLOTS, KNOWLEDGE_BASE, SYMPTOM_TRIAGE_ITEMS, PRICING_SUMMARY } from '../js/data.js';

// Setup minimal browser globals for testing ESModule engine
global.window = {
  AudioContext: class {
    createOscillator() { return { frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} }, connect: () => {}, start: () => {}, stop: () => {} }; }
    createGain() { return { gain: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} }, connect: () => {} }; }
    get currentTime() { return 0; }
    get state() { return 'running'; }
  },
  innerWidth: 1200
};
global.document = {
  getElementById: (id) => ({
    id,
    innerHTML: '',
    value: '',
    classList: { add: () => {}, remove: () => {} },
    addEventListener: () => {},
    querySelectorAll: () => [],
    scrollTop: 0,
    scrollHeight: 100,
    getBoundingClientRect: () => ({ top: 100, bottom: 600 })
  }),
  createElement: (tag) => ({
    tagName: tag,
    textContent: '',
    get innerHTML() { return this.textContent.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  }),
  addEventListener: () => {}
};

async function runTests() {
  console.log('--- Starting Dentha Chat Engine Verification ---');
  
  // Dynamically import chat module
  const chatModule = await import('../js/chat.js');
  const engine = new chatModule.DenthaChatEngine();

  let passed = 0;
  let failed = 0;

  function assert(cond, desc) {
    if (cond) {
      console.log('PASS:', desc);
      passed++;
    } else {
      console.error('FAIL:', desc);
      failed++;
    }
  }

  // 1. Initial Greeting Verification
  assert(engine.messages.length === 1, 'Initial greeting is loaded');
  const initial = engine.messages[0];
  assert(initial.author === 'Dr. Sarah Bennett, DDS', 'Author is Dr. Sarah Bennett');
  assert(initial.text.includes('Are you experiencing any tooth discomfort or sensitivity right now'), 'Compelling doctor opening text invites reply');
  assert(initial.rich && initial.rich.type === 'initial_actions', 'Rich type is initial_actions');
  assert(initial.rich.actions.length === 3, 'Exactly 3 action buttons present');
  assert(initial.rich.actions[0].id === 'action_book', 'Action 1 is Book an Appointment');
  assert(initial.rich.actions[1].id === 'action_symptoms', 'Action 2 is Check Tooth Pain & Symptoms');
  assert(initial.rich.actions[2].id === 'action_insurance_pricing', 'Action 3 is Insurance & Pricing Questions');

  // 2. Action Button 1: Book an Appointment
  engine.handleActionClick('action_book');
  const lastMsgAfterBook = engine.messages[engine.messages.length - 1];
  assert(lastMsgAfterBook.rich && lastMsgAfterBook.rich.type === 'service_grid', 'Action 1 triggers service_grid');
  assert(engine.step === 'service_select', 'Engine step is service_select');

  // 3. Action Button 2: Check Tooth Pain & Symptoms
  engine.handleActionClick('action_symptoms');
  const lastMsgAfterSymptoms = engine.messages[engine.messages.length - 1];
  assert(lastMsgAfterSymptoms.rich && lastMsgAfterSymptoms.rich.type === 'symptom_triage', 'Action 2 triggers symptom_triage');
  assert(lastMsgAfterSymptoms.rich.items.length === 3, 'Symptom triage has 3 clinical symptom categories');

  // 4. Action Button 3: Insurance & Pricing Questions
  engine.handleActionClick('action_insurance_pricing');
  const lastMsgAfterPricing = engine.messages[engine.messages.length - 1];
  assert(lastMsgAfterPricing.rich && lastMsgAfterPricing.rich.type === 'pricing_overview', 'Action 3 triggers pricing_overview');
  assert(lastMsgAfterPricing.rich.items.length > 0, 'Pricing table has items');

  // 5. Keyword Matching: "Can I book a cleaning on Friday?"
  engine.messages = [];
  engine.handleUserInput('Can I book a cleaning on Friday?');
  const cleaningMsg = engine.messages[engine.messages.length - 1];
  assert(engine.booking.service && engine.booking.service.id === 'hygiene', 'Directly books hygiene for "cleaning"');
  assert(engine.step === 'doctor_select', 'Progressed to doctor_select');

  // 6. Keyword Matching: "I have a severe toothache and throbbing nerve pain"
  engine.messages = [];
  engine.handleUserInput('I have a severe toothache and throbbing nerve pain');
  const painMsg = engine.messages[engine.messages.length - 1];
  assert(painMsg.rich && painMsg.rich.type === 'symptom_triage', 'Pain keywords trigger symptom triage');

  // 7. Keyword Matching: "How much does clear aligner invisalign cost?"
  engine.messages = [];
  engine.handleUserInput('How much does clear aligner invisalign cost?');
  const costMsg = engine.messages[engine.messages.length - 1];
  assert(costMsg.rich && costMsg.rich.type === 'pricing_overview', 'Cost inquiry triggers transparent pricing spec');

  // 8. Keyword Matching: "Do you accept Delta Dental insurance?"
  engine.messages = [];
  engine.handleUserInput('Do you accept Delta Dental insurance?');
  const insMsg = engine.messages[engine.messages.length - 1];
  assert(insMsg.text.includes('Delta Dental') && insMsg.text.includes('in-network'), 'Insurance query returns in-network PPO info');

  // 9. Keyword Matching: "Tell me about Dr. Marcus"
  engine.messages = [];
  engine.handleUserInput('Tell me about Dr. Marcus');
  const docMsg = engine.messages[engine.messages.length - 1];
  assert(docMsg.rich && docMsg.rich.type === 'doctor_picker', 'Doctor query returns doctor picker');

  // 10. Keyword Matching: "What are your opening hours on Saturday?"
  engine.messages = [];
  engine.handleUserInput('What are your opening hours on Saturday?');
  const hoursMsg = engine.messages[engine.messages.length - 1];
  assert(hoursMsg.text.includes('Saturday: 8:30 AM to 3:30 PM'), 'Hours query returns Saturday hours');

  // 11. Keyword Matching: "Hello doctor"
  engine.messages = [];
  engine.handleUserInput('Hello doctor');
  const greetMsg = engine.messages[engine.messages.length - 1];
  assert(greetMsg.rich && greetMsg.rich.type === 'initial_actions', 'Greeting returns doctor greeting + 3 action buttons');

  // 12. Fallback
  engine.messages = [];
  engine.handleUserInput('xyz random gibberish 123');
  const fallbackMsg = engine.messages[engine.messages.length - 1];
  assert(fallbackMsg.rich && fallbackMsg.rich.type === 'initial_actions', 'Fallback returns helpful doctor guidance + 3 action buttons');

  // 13. End-to-end booking state machine
  engine.selectService('crowns');
  assert(engine.step === 'doctor_select', 'Selects crowns, advances to doctor_select');
  engine.selectDoctor('dr-sarah');
  assert(engine.step === 'date_select', 'Selects Dr. Sarah, advances to date_select');
  const dates = engine.generateDates();
  engine.selectDate(dates[0].iso, dates[0].label);
  assert(engine.step === 'time_select', 'Selects date, advances to time_select');
  engine.selectTime('1030', '10:30 AM');
  assert(engine.step === 'contact_info', 'Selects 10:30 AM, advances to contact_info');
  engine.submitContactForm({ name: 'Jane Doe', phone: '212-555-0100', email: 'jane@example.com', notes: 'Crown check' });
  assert(engine.step === 'confirmed', 'Submits contact form, advances to confirmed');
  const confirmMsg = engine.messages[engine.messages.length - 1];
  assert(confirmMsg.rich && confirmMsg.rich.type === 'confirmation_card', 'Confirmation card is generated');
  assert(confirmMsg.rich.booking.code.startsWith('DNT-'), 'Booking code generated');

  console.log(`\nResults: ${passed} passed, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

runTests();
