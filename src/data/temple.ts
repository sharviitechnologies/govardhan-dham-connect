export const temple = {
  name: "Hare Krishna Marwar Mandir",
  subtitle: "Govardhan Dham",
  city: "Jodhpur, Rajasthan",
  phone: "+91 98290 45120",
  phoneHref: "tel:+919829045120",
  email: "seva@marwarmandir.org",
  whatsapp: "https://wa.me/919829045120",
  address: "Govardhan Dham, Kudi Bhagtasni Housing Board, Pal Road, Jodhpur 342008, Rajasthan",
  raised: 74_60_00_00 / 100, // ₹7.46 crore expressed in rupees
  goal: 12_50_00_000,
  openingDate: "2027-03-14T09:00:00+05:30",
};

export const fundedPercent = 60;

export const donorTicker = [
  { name: "Rajeev Bhandari", amount: "₹25,000", category: "Mandir Nirman", time: "2 min ago" },
  { name: "Sunita Devi", amount: "₹1,100", category: "Annadanam", time: "9 min ago" },
  { name: "Mehta Family", amount: "₹51,000", category: "Sponsor a Pillar", time: "26 min ago" },
  { name: "Anonymous Devotee", amount: "₹5,001", category: "Gau Seva", time: "41 min ago" },
  { name: "Kailash Purohit", amount: "₹2,100", category: "Festival Seva", time: "1 hr ago" },
  { name: "Neha Rathore", amount: "₹11,000", category: "Sponsor Marble", time: "2 hrs ago" },
];

export const todayStrip = {
  artis: [
    { label: "Mangala Aarti", time: "4:45 AM" },
    { label: "Raj Bhog Aarti", time: "12:15 PM" },
    { label: "Sandhya Aarti", time: "7:00 PM" },
  ],
  activity: "Bhagavad Gita Study Circle · 6:30 PM · Community Hall",
  nextFestival: { name: "Radhashtami", days: 23 },
  quotes: [
    "“Chant Hare Krishna and be happy.” — Srila Prabhupada",
    "“Whatever you do, do it as an offering unto Me.” — Bhagavad Gita 9.27",
    "“Service to the cow, the land and the Lord is the wealth of Marwar.”",
  ],
};

export const exploreCards = [
  {
    title: "Deity Darshan",
    body: "Sri Sri Radha Govardhannath will preside over a hand-carved marble sanctum with three altars.",
    tag: "Sanctum",
  },
  {
    title: "Annadanam Kitchen",
    body: "A sattvic kitchen designed to serve 5,000 free prasadam meals a day at full capacity.",
    tag: "Prasadam",
  },
  {
    title: "Goshala",
    body: "Home for rescued indigenous Marwari and Tharparkar cows, with grazing land and a care shed.",
    tag: "Gau Seva",
  },
  {
    title: "Guest House",
    body: "42 simple, clean rooms for pilgrims travelling from across Marwar and beyond.",
    tag: "Stay",
  },
  {
    title: "Temple Garden",
    body: "Tulsi courtyards, desert-hardy shade trees and a quiet parikrama path around the sanctum.",
    tag: "Grounds",
  },
  {
    title: "Gift & Prasadam Shop",
    body: "Japa beads, deity paraphernalia, scripture and boxed prasadam to carry the temple home.",
    tag: "Shop",
  },
];

export const darshanTimings = [
  { label: "Mangala Aarti", time: "4:45 AM – 5:15 AM" },
  { label: "Sringar Darshan", time: "7:30 AM – 8:15 AM" },
  { label: "Raj Bhog Aarti", time: "12:15 PM – 12:45 PM" },
  { label: "Uthapan Darshan", time: "4:30 PM – 5:00 PM" },
  { label: "Sandhya Aarti", time: "7:00 PM – 7:45 PM" },
  { label: "Shayan Aarti", time: "8:30 PM – 8:45 PM" },
];

export const fundUtilisation = [
  { label: "Sanctum & stone carving", percent: 42 },
  { label: "Annadanam kitchen & hall", percent: 21 },
  { label: "Guest wing", percent: 16 },
  { label: "Goshala & grounds", percent: 13 },
  { label: "Administration & audit", percent: 8 },
];

export const milestones = [
  {
    title: "Foundation Complete",
    date: "Completed · Nov 2024",
    status: "done" as const,
    body: "3.2 acre site levelled, raft foundation poured and blessed with a bhoomi puja.",
  },
  {
    title: "Sanctum In Progress",
    date: "Ongoing · 2025–26",
    status: "active" as const,
    body: "Jodhpur sandstone pillars carved on site; shikhara stonework at 38% completion.",
  },
  {
    title: "Guest Wing Upcoming",
    date: "Planned · Late 2026",
    status: "upcoming" as const,
    body: "42 pilgrim rooms, dining hall and Annadanam kitchen fit-out to begin after monsoon.",
  },
  {
    title: "Grand Opening",
    date: "March 2027",
    status: "upcoming" as const,
    body: "Pratishtha Mahotsav with a week of kirtan, yajna and Annadanam for all of Marwar.",
  },
];

export const sevaCategories = [
  {
    title: "Mandir Nirman",
    body: "Directly funds stone, marble, carving and structural work on the main temple.",
    from: "₹2,100",
  },
  {
    title: "Annadanam",
    body: "Sponsor sattvic meals for pilgrims, workers and families in need every single day.",
    from: "₹1,100",
  },
  {
    title: "Gau Seva",
    body: "Fodder, medicine and shelter for the rescued cows and calves of our goshala.",
    from: "₹751",
  },
  {
    title: "Festival Seva",
    body: "Support Janmashtami, Radhashtami, Govardhan Puja and Kartik celebrations.",
    from: "₹1,551",
  },
];

export const paymentMethods = ["UPI", "Cards", "Net Banking", "Scan QR", "International", "Recurring"];

export const donorTiers = [
  {
    tier: "Seva Sathi",
    amount: "₹11,000+",
    benefits: [
      "Name in the digital donor register",
      "Personalised sankalp certificate",
      "Monthly construction update by email",
    ],
  },
  {
    tier: "Nirman Patron",
    amount: "₹1,51,000+",
    benefits: [
      "Name engraved on the donor wall",
      "Archana in your family's name each month",
      "Two nights at the pilgrim guest house",
      "Invitation to the Pratishtha Mahotsav",
    ],
    featured: true,
  },
  {
    tier: "Founding Circle",
    amount: "₹11,00,000+",
    benefits: [
      "Named plaque on a pillar or sanctum element",
      "Front-row seating at all Pratishtha rites",
      "Annual trustee briefing on temple accounts",
      "Lifetime Annadanam remembrance in your family's name",
    ],
  },
];

export const sevaBookings = [
  { title: "Puja Booking", body: "Abhishek, archana or a named yajna performed by our temple priests." },
  { title: "Prasadam Booking", body: "Offer a full prasadam distribution on a date of your choosing." },
  { title: "Birthday Seva", body: "Celebrate a birthday with an abhishek, garland and blessed sweets." },
  { title: "Anniversary Seva", body: "A couple's archana with vastra offering and family blessing." },
  { title: "Sankalp", body: "A vow taken before the deities for health, study or a family intention." },
];

export const sponsorItems = [
  { title: "Sponsor a Stone", amount: "₹5,100", note: "One carved sandstone block" },
  { title: "Sponsor a Square Foot", amount: "₹11,000", note: "Named in the sanctum ledger" },
  { title: "Sponsor a Pillar", amount: "₹2,51,000", note: "Engraved pillar plaque" },
  { title: "Sponsor Marble", amount: "₹51,000", note: "Altar marble panel" },
  { title: "Sponsor a Tree", amount: "₹3,100", note: "Shade tree in the garden" },
];

export const trustBadges = ["80G Registered", "NGO Darpan", "12A Certified", "FCRA Applied", "Annually Audited"];

export const trustBlocks = [
  {
    title: "Temple History",
    body: "Marwar's devotees have gathered for kirtan in a rented hall on Pal Road since 1998. Govardhan Dham is the permanent home that community has been saving towards for a generation.",
  },
  {
    title: "Trust Registration",
    body: "Hare Krishna Marwar Trust · Reg. No. RAJ/JOD/2011/00412 · PAN AAATH4821K · 80G approval AAATH4821KF20214. Placeholder details shown for design review.",
  },
  {
    title: "Leadership & Trustees",
    body: "A nine-member board of local businesspersons, a chartered accountant and two resident monks. Construction spend is reviewed at a public monthly meeting.",
  },
];

export const activityTabs = [
  {
    id: "education",
    label: "Education & Youth",
    cards: [
      { title: "Gita Study Circle", body: "Weekly scripture classes for 120 college students across three Jodhpur campuses." },
      { title: "Sanskar Balvatika", body: "Sunday values and shloka school for children aged 5 to 13." },
      { title: "Youth Kirtan Nights", body: "Monthly kirtan and Q&A evening for young professionals." },
    ],
  },
  {
    id: "food",
    label: "Food Distribution",
    cards: [
      { title: "Daily Annadanam", body: "1,800 hot sattvic meals served every day to pilgrims and site workers." },
      { title: "School Tiffin Seva", body: "Mid-day prasadam for four municipal schools near Pal Road." },
      { title: "Summer Water Booths", body: "Chhaach and drinking water stalls through the Marwar summer." },
    ],
  },
  {
    id: "cows",
    label: "Cow Protection",
    cards: [
      { title: "Goshala Care", body: "64 rescued cows and calves with a resident vaidya and daily fodder." },
      { title: "Adopt-a-Cow", body: "Devotees sponsor a named cow's fodder and medicine for a year." },
      { title: "Panchagavya Unit", body: "Ghee, dhoop and organic manure made from goshala produce." },
    ],
  },
  {
    id: "culture",
    label: "Cultural Programs",
    cards: [
      { title: "Marwari Bhajan Sandhya", body: "Folk-devotional evenings with local musicians every Purnima." },
      { title: "Rath Yatra", body: "Annual chariot procession through Jodhpur's old city lanes." },
      { title: "Deepotsav", body: "Kartik lamp offering with 11,000 diyas across the temple grounds." },
    ],
  },
  {
    id: "community",
    label: "Community Service",
    cards: [
      { title: "Health Camps", body: "Quarterly eye, dental and general check-up camps for nearby colonies." },
      { title: "Disaster Relief", body: "Rapid kitchen deployment during floods and drought in western Rajasthan." },
      { title: "Vocational Training", body: "Tailoring and stone-carving apprenticeships for local women and youth." },
    ],
  },
];

export const festivals = [
  { date: "26 Aug", name: "Sri Krishna Janmashtami", note: "Midnight abhishek & mahaprasad" },
  { date: "08 Sep", name: "Radhashtami", note: "Flower abhishek for Radharani" },
  { date: "21 Oct", name: "Govardhan Puja", note: "Annakut with 108 preparations" },
  { date: "12 Nov", name: "Kartik Deepotsav", note: "11,000 lamp offering" },
];

export const impactStats = [
  { value: "18,400+", label: "Devotees contributed" },
  { value: "60%", label: "Of goal funded" },
  { value: "54,000", label: "Meals served monthly" },
  { value: "64", label: "Cows at the goshala" },
];

export const testimonial = {
  quote:
    "My grandfather did kirtan in a rented hall on Pal Road. Sponsoring a pillar felt like keeping a promise he made long before I was born.",
  author: "Vikram Singh Rathore",
  role: "Nirman Patron · Jodhpur",
};

export const articles = [
  {
    kind: "Construction Update",
    title: "Shikhara stonework crosses 38% as carvers finish the second tier",
    date: "12 August 2026",
  },
  {
    kind: "Festival Explainer",
    title: "Why Govardhan Puja matters so much in the Marwar tradition",
    date: "04 August 2026",
  },
  {
    kind: "Seva Story",
    title: "The tailoring collective that funds one square foot every month",
    date: "27 July 2026",
  },
];

export const faqs = [
  {
    q: "How exactly is my donation used?",
    a: "Every rupee is allotted to a named head — sanctum stonework, kitchen, guest wing, goshala or audited administration. The monthly utilisation statement is published in the construction portal and reviewed by the trust board in an open meeting.",
  },
  {
    q: "Do I get a tax benefit for donating?",
    a: "Yes. The trust holds 80G approval, so Indian taxpayers can claim the applicable deduction. A receipt with the trust's registration and PAN details is emailed as soon as a contribution is recorded.",
  },
  {
    q: "Can I visit the temple while it is under construction?",
    a: "The temporary darshan hall is open daily from 4:45 AM to 8:45 PM. Guided site visits to the construction area run on Saturdays and Sundays at 10 AM with a hard hat provided.",
  },
  {
    q: "How do I volunteer?",
    a: "Register through the volunteer form and our seva coordinator will call you within two days. Kitchen, goshala, guest relations, teaching and festival crews all need hands.",
  },
  {
    q: "Can devotees outside India contribute?",
    a: "International cards and bank transfers are supported. Foreign contributions are held in a designated account and reported separately in line with statutory requirements.",
  },
  {
    q: "Will my family's name be recorded in the temple?",
    a: "Donor wall engraving begins at the Nirman Patron level, and Founding Circle contributions carry a named plaque on a pillar or sanctum element. All contributors are listed in the digital donor register.",
  },
];

export const footerLinks = [
  { heading: "Temple", items: ["About Govardhan Dham", "Deities & Darshan", "Live Darshan", "Guest House", "Goshala"] },
  { heading: "Give", items: ["Donate Now", "Sponsor a Stone", "Seva Booking", "Donor Recognition", "80G Certificate"] },
  { heading: "Connect", items: ["Activities", "Festival Calendar", "Volunteer", "Blog", "Contact Us"] },
  { heading: "Legal", items: ["Trust Registration", "Refund Policy", "Privacy Policy", "Financial Reports", "Terms of Use"] },
];
