/**
 * Dentha Clinical Knowledge Base & Data
 */

export const SERVICES = [
  {
    id: 'hygiene',
    name: 'Comprehensive Hygiene & 3D Imaging',
    category: 'Preventive',
    tagline: 'Gentle ultrasonic cleaning, periodontal check, and low-radiation 3D scan.',
    duration: '60 min',
    price: '$210 - $280',
    typicalInsuranceCoverage: '80% to 100%',
    description: 'Our signature preventative wellness visit. Includes zero-pain guided biofilm therapy, digital periodontal charting, and AI-assisted cavity screening.',
    icon: 'sparkles'
  },
  {
    id: 'whitening',
    name: 'Boutique Teeth Whitening & Veneers',
    category: 'Cosmetic',
    tagline: 'In-studio laser brightening or custom hand-layered porcelain veneers.',
    duration: '75 min',
    price: '$450 - $650 (Whitening) / Custom Veneers',
    typicalInsuranceCoverage: 'Elective / HSA Eligible',
    description: 'Medical-grade Phillips Zoom Whitespeed or custom porcelain veneers designed to harmonize naturally with your facial symmetry and skin tone.',
    icon: 'smile'
  },
  {
    id: 'invisalign',
    name: 'Clear Aligners & Orthodontics',
    category: 'Orthodontics',
    tagline: 'Sub-millimeter digital tooth movement with virtually invisible aligners.',
    duration: '45 min consultation',
    price: '$3,800 - $5,900 (Full Course)',
    typicalInsuranceCoverage: '$1,500 - $2,500 Orthodontic benefit',
    description: '3D iTero intraoral scan simulation with Board-Certified Orthodontist Dr. Marcus Vance. See your completed smile transformation before starting.',
    icon: 'aligner'
  },
  {
    id: 'crowns',
    name: 'Single-Day Ceramic Restorations',
    category: 'Restorative',
    tagline: 'Milled ceramic crowns, inlays, and onlays prepared and fitted in one visit.',
    duration: '90 min',
    price: '$1,100 - $1,650',
    typicalInsuranceCoverage: '50% to 80%',
    description: 'No temporary crowns, no second appointments, and no messy goop impressions. High-precision CAD/CAM precision ceramics crafted in our on-site laboratory.',
    icon: 'shield'
  },
  {
    id: 'implants',
    name: 'Surgical Dental Implants',
    category: 'Surgical',
    tagline: 'Permanent biocompatible titanium implants placed with 3D CBCT computer guidance.',
    duration: '60 min consultation',
    price: '$2,400 - $3,900 (Fixture + Abutment)',
    typicalInsuranceCoverage: '50% Major Restorative',
    description: 'Guided keyhole implant placement performed by Dr. Elena Rostova, PhD. High success rate, minimal downtime, and permanent natural tooth restoration.',
    icon: 'anchor'
  },
  {
    id: 'emergency',
    name: 'Urgent Emergency Dental Care',
    category: 'Urgent',
    tagline: 'Same-day relief for severe toothache, broken crowns, or dental trauma.',
    duration: 'Immediate / 45 min',
    price: '$180 (Exam & X-Ray) + Procedure',
    typicalInsuranceCoverage: '80% Emergency Coverage',
    description: 'Priority immediate relief for swelling, sharp nerve pain, chipped enamel, or knocked-out teeth. On-call endodontic and surgical coverage.',
    icon: 'alert'
  }
];

export const DOCTORS = [
  {
    id: 'dr-sarah',
    name: 'Dr. Sarah Bennett, DDS',
    role: 'Clinical Director & Aesthetic Dentistry',
    experience: '14+ Years Experience',
    bio: 'Columbia University School of Dental Medicine graduate. Specialized in minimally invasive restorative dentistry, biomimetic materials, and anxiety-free patient care.',
    image: 'assets/images/dr-sarah.jpg',
    specialties: ['Preventive Hygiene', 'Porcelain Veneers', 'Single-Day Crowns', 'Anxiety Care'],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  },
  {
    id: 'dr-marcus',
    name: 'Dr. Marcus Vance, DMD, MS',
    role: 'Board-Certified Orthodontist',
    experience: '12+ Years Experience',
    bio: 'Harvard School of Dental Medicine alumnus and American Board of Orthodontics diplomate. Pioneer in 3D digital clear aligner treatment and airway-focused orthodontics.',
    image: 'assets/images/dr-marcus.jpg',
    specialties: ['Invisalign Studio', 'Comprehensive Orthodontics', 'Bite Optimization'],
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Saturday']
  },
  {
    id: 'dr-elena',
    name: 'Dr. Elena Rostova, DDS, PhD',
    role: 'Oral Surgeon & Implantologist',
    experience: '16+ Years Experience',
    bio: 'NYU College of Dentistry PhD in Biomaterials. Fellow of the International Congress of Oral Implantologists (ICOI) with over 4,500 guided implant procedures performed.',
    image: 'assets/images/dr-elena.jpg',
    specialties: ['Dental Implants', 'Bone Regeneration', 'Wisdom Tooth Extraction', 'Complex Restorations'],
    availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday']
  }
];

export const CLINIC_INFO = {
  name: 'Dentha Dental Studio',
  address: '450 Lexington Ave, Suite 1200',
  city: 'New York, NY 10017',
  crossStreet: 'Corner of 45th St and Lexington Ave (Grand Central proximity)',
  phone: '(212) 584-3900',
  emergencyPhone: '(212) 584-3999',
  email: 'care@dentha.com',
  hours: [
    { days: 'Monday - Thursday', time: '7:30 AM - 7:00 PM' },
    { days: 'Friday', time: '7:30 AM - 5:30 PM' },
    { days: 'Saturday', time: '8:30 AM - 3:30 PM' },
    { days: 'Sunday', time: 'Emergency On-Call Only' }
  ],
  insurances: [
    'Delta Dental Premier & PPO',
    'Cigna Dental Radius',
    'MetLife PDP Plus',
    'Aetna Dental DMO/PPO',
    'Guardian Any Doctor',
    'UnitedHealthcare Dental',
    'Blue Cross Blue Shield Dental'
  ],
  amenities: [
    'Private sound-insulated treatment suites',
    'Ceiling 4K entertainment monitors with noise-canceling audio',
    'Zero-scent air purification and HEPA filtration',
    'Organic warm towel service and calming herbal tea lounge',
    'In-house digital 3D ceramic milling laboratory'
  ]
};

export const TIME_SLOTS = [
  { id: '0900', label: '9:00 AM', period: 'Morning' },
  { id: '1030', label: '10:30 AM', period: 'Morning' },
  { id: '1145', label: '11:45 AM', period: 'Morning' },
  { id: '1330', label: '1:30 PM', period: 'Afternoon' },
  { id: '1500', label: '3:00 PM', period: 'Afternoon' },
  { id: '1630', label: '4:30 PM', period: 'Afternoon' },
  { id: '1745', label: '5:45 PM', period: 'Evening' }
];

export const SYMPTOM_TRIAGE_ITEMS = [
  {
    id: 'symptom_nerve',
    label: 'Sharp or Constant Nerve Pain',
    desc: 'Severe ache, sensitive to hot/cold, throbbing at night',
    advice: 'Sharp or pulsating pain often indicates pulp inflammation or deep decay. Avoid hot or cold foods, keep your head elevated, and take approved anti-inflammatory medication. We strongly recommend immediate clinical examination today.',
    recommendedService: 'emergency',
    badge: 'Urgent Attention'
  },
  {
    id: 'symptom_chipped',
    label: 'Broken Tooth or Lost Filling / Crown',
    desc: 'Chipped enamel, dislodged restoration or sharp edges',
    advice: 'Save any loose fragments in whole milk or saline. Avoid chewing on that side. Through our on-site 3D CAD/CAM laboratory, we can rebuild broken teeth or mill a new permanent ceramic crown in a single 90-minute visit today.',
    recommendedService: 'crowns',
    badge: 'Same-Day Repair'
  },
  {
    id: 'symptom_swelling',
    label: 'Swollen Gums or Facial Pressure',
    desc: 'Localized puffiness, gum soreness or feeling of pressure',
    advice: 'Swelling or pressure can indicate localized infection requiring antibiotic therapy or drainage to prevent systemic spread. Do not apply hot compresses directly to the cheek. Please come in for an emergency evaluation.',
    recommendedService: 'emergency',
    badge: 'Clinical Priority'
  }
];

export const PRICING_SUMMARY = [
  { service: 'Comprehensive Exam & 3D Imaging', fee: '$210 - $280', coverage: 'Covered 80% to 100%' },
  { service: 'Guided Ultrasonic Biofilm Hygiene', fee: '$180 - $240', coverage: 'Covered 100% (2x per year)' },
  { service: 'Philips Zoom Laser Whitening', fee: '$450 - $650', coverage: 'Elective / HSA Eligible' },
  { service: 'Single-Day Ceramic Crown (Milled)', fee: '$1,100 - $1,650', coverage: 'Covered 50% to 80%' },
  { service: 'Clear Aligners / Invisalign Full', fee: '$3,800 - $5,900', coverage: '$1,500 - $2,500 Ortho Benefit' },
  { service: 'Computer-Guided Dental Implant', fee: '$2,400 - $3,900', coverage: 'Covered 50% Major Restorative' }
];

export const KNOWLEDGE_BASE = [
  {
    triggers: ['pain', 'hurt', 'emergency', 'ache', 'broken', 'swollen', 'bleeding', 'urgent', 'knocked', 'toothache', 'throbbing', 'sensitive', 'sensitivity'],
    type: 'emergency',
    title: 'Urgent Clinical Triage',
    reply: "I hear you, and dental pain requires prompt attention. We maintain reserved daily emergency blocks for immediate same-day relief. Let us get you in today or first thing tomorrow so our specialists can diagnose and alleviate the discomfort.",
    actionPrompt: 'Would you like to review specific symptoms or book an Urgent Emergency slot right away?'
  },
  {
    triggers: ['cost', 'price', 'pricing', 'fee', 'fees', 'how much', 'expensive', 'afford', 'payment', 'financing', 'rates'],
    type: 'pricing',
    title: 'Transparent Fees & Financing',
    reply: "At Dentha, we practice 100% upfront fee transparency with zero surprise bills. Preventive checkups with 3D imaging are $210 - $280; Zoom laser whitening is $450 - $650; single-day ceramic crowns are $1,100 - $1,650; and Invisalign plans range from $3,800 - $5,900. We also offer 0% APR monthly financing through CareCredit and Sunbit.",
    actionPrompt: 'Would you like to check your insurance benefits or schedule a visit?'
  },
  {
    triggers: ['insurance', 'delta', 'cigna', 'metlife', 'aetna', 'guardian', 'ppo', 'coverage', 'in-network', 'bill', 'copay'],
    type: 'insurance',
    title: 'Insurance Verification',
    reply: "We work directly with major PPO insurance networks including Delta Dental, MetLife, Cigna, Aetna, Guardian, and UnitedHealthcare. Our administrative team submits all claims directly on your behalf to maximize your in-network benefits.",
    actionPrompt: 'Would you like to schedule an appointment with your insurance?'
  },
  {
    triggers: ['invisalign', 'aligner', 'aligners', 'braces', 'straight', 'straighten', 'crooked', 'orthodontist', 'bite', 'spacing'],
    type: 'service_invisalign',
    title: 'Clear Aligners & Orthodontics',
    reply: "Dr. Marcus Vance leads our Invisalign Studio using high-precision 3D iTero scanners. Treatment plans typically run 4 to 12 months with clear aligners changed weekly. We can map out a 3D digital simulation of your new smile during your initial 45-minute consultation.",
    actionPrompt: 'Shall we schedule an Invisalign 3D Smile Scan with Dr. Marcus?'
  },
  {
    triggers: ['cleaning', 'hygiene', 'checkup', 'exam', 'routine', 'cavity', 'plaque', 'tartar', 'teeth clean'],
    type: 'service_hygiene',
    title: 'Hygiene & Preventive Care',
    reply: "Our comprehensive hygiene visit goes far beyond standard cleanings: we utilize gentle ultrasonic biofilm therapy, digital periodontal mapping, and AI-assisted 3D imaging to catch issues before they turn into pain.",
    actionPrompt: 'Would you like to reserve a hygiene and 3D scan appointment?'
  },
  {
    triggers: ['crown', 'crowns', 'cap', 'caps', 'filling', 'fillings', 'ceramic', 'restoration', 'milled', 'cad/cam'],
    type: 'service_crowns',
    title: 'Single-Day Ceramic Crowns',
    reply: "Through our in-house 5-axis CAD/CAM diamond milling laboratory, we prepare, sculpt, and permanently bond biocompatible ceramic crowns in a single 90-minute visit. No temporary caps, no second numbing, and no gooey impression trays.",
    actionPrompt: 'Would you like to reserve a single-day ceramic restoration visit?'
  },
  {
    triggers: ['whitening', 'whiten', 'bright', 'yellow', 'stain', 'cosmetic', 'veneer', 'veneers'],
    type: 'service_whitening',
    title: 'Boutique Whitening & Porcelain Veneers',
    reply: "We offer in-studio Philips Zoom laser whitening (up to 8 shades brighter in 75 minutes) as well as custom hand-layered porcelain veneers designed to harmonize with your facial aesthetics and smile line.",
    actionPrompt: 'Would you like to book a whitening or cosmetic consultation?'
  },
  {
    triggers: ['implant', 'implants', 'missing tooth', 'tooth loss', 'bone graft', 'denture', 'permanent tooth', 'titanium', 'extraction', 'wisdom'],
    type: 'service_implant',
    title: 'Guided Dental Implants',
    reply: "Dr. Elena Rostova performs computer-guided 3D implant placement. Implants look, feel, and function exactly like natural biological teeth and stimulate jawbone health to prevent facial collapse.",
    actionPrompt: 'Would you like to book an implant consultation with Dr. Elena?'
  },
  {
    triggers: ['doctor', 'doctors', 'dentist', 'dentists', 'specialist', 'specialists', 'team', 'sarah', 'marcus', 'elena', 'who'],
    type: 'doctors',
    title: 'Clinical Faculty',
    reply: "Our clinical leadership includes Dr. Sarah Bennett, DDS (Clinical Director, Columbia University), Dr. Marcus Vance, DMD, MS (Board-Certified Orthodontist, Harvard), and Dr. Elena Rostova, DDS, PhD (Oral Surgeon & Implantologist, NYU). Each brings over a decade of specialized expertise.",
    actionPrompt: 'Would you like to reserve a visit with a specific doctor, or the first available specialist?'
  },
  {
    triggers: ['anxiety', 'nervous', 'scared', 'fear', 'phobia', 'sedation', 'gentle', 'pain free'],
    type: 'comfort',
    title: 'Anxiety-Free Dentistry',
    reply: "Dental anxiety is very common, and our studio was built specifically around calm comfort: private acoustic suites, warm lighting, noise-canceling headphones with 4K ceiling screens, whisper-quiet electric instruments, and nitrous oxide or conscious sedation upon request.",
    actionPrompt: 'Would you like to chat about scheduling a gentle introductory visit?'
  },
  {
    triggers: ['hours', 'open', 'location', 'address', 'where', 'directions', 'parking', 'subway', 'weekend', 'saturday', 'sunday'],
    type: 'location_hours',
    title: 'Studio Location & Hours',
    reply: "We are located at 450 Lexington Ave (Suite 1200), just two blocks from Grand Central Terminal. Open Monday - Thursday 7:30 AM to 7:00 PM, Friday 7:30 AM to 5:30 PM, and Saturday 8:30 AM to 3:30 PM. Valet parking validation is available on 45th St.",
    actionPrompt: 'Would you like to book a time that fits your weekday or weekend schedule?'
  }
];
