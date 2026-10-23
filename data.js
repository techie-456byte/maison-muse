/* ===== EDIT EVERYTHING HERE (text, quotes, models, rates, images) ===== */
const SITE = {
  brand: "Maison Muse",
  tagline: "Professional model booking in Mumbai",
  heroTitle: "Faces that make your moment unforgettable.",
  heroText: "Browse verified male and female models in Mumbai and Andheri, compare services and hourly rates, and book directly on call or WhatsApp.",
  featuredTitle: "Featured profiles",
  featuredQuote: "Handpicked by our team this week.",
  categoriesTitle: "Browse by category",
  categoriesQuote: "Three categories to match your shoot, event or campaign.",
  locationsTitle: "Browse by location",
  locationsQuote: "Available across Mumbai and Andheri.",
  profilesTitle: "All profiles",
  profilesQuote: "Tap a profile to see services, hourly rates and booking options.",
  servicesLabel: "Services",
  rateLabel: "per hour",
  ageTitle: "Are you 18 or older?",
  ageText: "This website is only for adults. Please confirm your age to continue.",
  ageYes: "Yes, I am 18+", ageNo: "No, take me out",
  callText: "Call now", whatsappText: "Book on WhatsApp",
  whatsappMessage: "Hi, I would like to book",
  phone: "919999999999", email: "hello@maisonmuse.in",
  address: "Andheri West, Mumbai, Maharashtra",
  hours: "Every day, 10 AM to 10 PM",
  footerText: "© 2026 Maison Muse. All rights reserved.",
  footerQuote: "All models are 18+ and listed with their consent.",
  stats: [["200+", "Shoots and events completed"], ["40+", "Verified models"], ["8", "Areas covered in Mumbai"], ["24 hrs", "Typical reply time"]],
  steps: [["Choose a model", "Browse by category or location and read each profile."],
          ["Pick your hours", "Select 1, 2, 3 or 5 hours from the rate list on the profile."],
          ["Book in one tap", "Call us or message on WhatsApp to confirm date, time and place."]],
  reviews: [["The team was quick, professional and the model was perfect for our brand shoot.", "Marketing lead, Andheri"],
            ["Booking on WhatsApp took two minutes. Clear rates, no surprises.", "Event organiser, Bandra"],
            ["We booked three hosts for a launch and every one was on time.", "Founder, Powai"]],
  aboutTitle: "About Maison Muse",
  aboutQuote: "A trusted name for model bookings in Mumbai.",
  about: ["Maison Muse connects brands, photographers and event organisers with professional male and female models across Mumbai. Every profile is reviewed by our team before it is listed.",
          "We keep booking simple. Each profile shows services and clear hourly rates, so you know the cost before you call.",
          "Our models work on fashion shoots, brand campaigns, events and promotions. We list only adults who have agreed to be on this website."],
  values: [["Verified profiles", "Every model is checked for age and identity before listing."],
           ["Clear pricing", "Hourly rates are shown on every profile."],
           ["Respect on set", "We expect professional behaviour from clients and models alike."],
           ["Fast support", "Call or WhatsApp us and we reply the same day."]],
  contactTitle: "Contact us",
  contactQuote: "Tell us what you need and we will reply within a day.",
  faqs: [["How do I book?", "Open a profile and tap Call now or Book on WhatsApp. Share your date, time and location."],
         ["Are rates fixed?", "The rates on each profile are for the hours shown. Travel and special requests are confirmed when you book."],
         ["Which areas do you cover?", "Andheri West, Andheri East, Lokhandwala, Bandra, Juhu, Powai, Malad and South Mumbai."]]
};

// rates shown on every profile (a model can have its own "rates" list to override)
const RATES = [["1 hour", 10000], ["2 hours", 18000], ["3 hours", 25000], ["5 hours", 35000]];

const CATEGORIES = [
  { id: "fashion", name: "Fashion Models", text: "Runway, lookbooks and brand shoots." },
  { id: "event", name: "Event Hosts", text: "Hosting, promotions and brand events." },
  { id: "lifestyle", name: "Lifestyle Models", text: "Ads, social content and campaigns." }
];
const LOCATIONS = ["Andheri West", "Andheri East", "Lokhandwala", "Bandra", "Juhu", "Powai", "Malad", "South Mumbai"];

// image: file in the "images" folder. phone: country code, no + or spaces.
const MODELS = [
  { id: "aanya", name: "Aanya", age: 24, category: "fashion", location: "Andheri West", featured: true, image: "images/aanya.jpg", phone: SITE.phone,
    services: ["Fashion photoshoot", "Lookbook shoot", "Runway show"],
    about: "Aanya is a trained fashion model with four years of runway and editorial experience. Calm on set and quick with direction." },
  { id: "kabir", name: "Kabir", age: 27, category: "fashion", location: "Bandra", featured: true, image: "images/kabir.jpg", phone: SITE.phone,
    services: ["Menswear shoot", "Brand campaign", "Ramp walk"],
    about: "Kabir has modelled for menswear labels and fitness brands. Reliable, punctual and easy to direct." },
  { id: "riya", name: "Riya", age: 26, category: "event", location: "Bandra", featured: true, image: "images/riya.jpg", phone: SITE.phone,
    services: ["Event hosting", "Brand promotion", "Exhibition greeter"],
    about: "A confident host who has worked corporate launches and weddings. Fluent in English, Hindi and Marathi." },
  { id: "arjun", name: "Arjun", age: 28, category: "event", location: "Powai", featured: false, image: "images/arjun.jpg", phone: SITE.phone,
    services: ["Conference hosting", "Product demo", "Stage anchor"],
    about: "Experienced anchor for conferences and product launches, with a warm and clear stage voice." },
  { id: "sara", name: "Sara", age: 23, category: "lifestyle", location: "Juhu", featured: true, image: "images/sara.jpg", phone: SITE.phone,
    services: ["Product ads", "Social media content", "Brand campaigns"],
    about: "Sara brings a warm, natural look to lifestyle and product campaigns. Comfortable on camera and on video." },
  { id: "rohan", name: "Rohan", age: 25, category: "lifestyle", location: "Andheri East", featured: false, image: "images/rohan.jpg", phone: SITE.phone,
    services: ["Reels and shorts", "Cafe and food shoots", "Travel content"],
    about: "Rohan is a fresh, energetic face for reels, food and travel content." },
  { id: "meher", name: "Meher", age: 25, category: "fashion", location: "Andheri East", featured: false, image: "images/meher.jpg", phone: SITE.phone,
    services: ["Editorial shoot", "Bridal shoot", "Jewellery shoot"],
    about: "Editorial and bridal specialist with a classic, elegant presence." },
  { id: "vivaan", name: "Vivaan", age: 26, category: "lifestyle", location: "Lokhandwala", featured: false, image: "images/vivaan.jpg", phone: SITE.phone,
    services: ["Fitness shoot", "Fashion e-commerce", "Brand ambassador"],
    about: "Athletic build with strong e-commerce and fitness campaign experience." }
];
