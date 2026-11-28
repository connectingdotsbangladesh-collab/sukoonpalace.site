/**
 * SUKOON PALACE (সুকুন প্যালেস) - CORE APPLICATION JAVASCRIPT
 * Features: Bilingual (BN/EN), Interactive Plan Switcher, Cost & Installment Calculator,
 * Lightbox Modal, Amenity Tabs, Gallery Filter, Booking Form & Smooth Navigation.
 */

// --- 1. FLOOR PLAN DATA DICTIONARY ---
const PLAN_DATA = {
  'plan-a': {
    badge: 'UNIT - A',
    sizeBadge: '1600 SQ. FT.',
    titleBn: 'টাইপ - এ (১৬০০ বর্গফুট)',
    titleEn: 'Type - A (1600 Sq. Ft.)',
    descBn: 'সুবিশাল মাস্টার বেড, ড্রয়িং ও ডাইনিং স্পেস এবং ৩টি নান্দনিক বারান্দা সম্বলিত এক্সক্লুসিভ কর্নার লাক্সারি অ্যাপার্টমেন্ট।',
    descEn: 'Exclusive corner luxury apartment featuring expansive master suite, separate drawing & dining, and 3 scenic verandas.',
    landShareBn: '২১৮.৪ বর্গফুট',
    landShareEn: '218.4 Sq. Ft.',
    bedBathBn: '৩ বেড | ৩ বাথ',
    bedBathEn: '3 Beds | 3 Baths',
    verandaBn: '৩টি বারান্দা',
    verandaEn: '3 Verandas',
    livingBn: "২৮'৬\" x ১৬' ড্রয়িং-ডাইনিং",
    livingEn: "28'6\" x 16' Living-Dining",
    imgSrc: 'assets/floor_plan_a.jpg',
    rooms: [
      { nameBn: 'মাস্টার বেডরুম (M.Bed)', nameEn: 'Master Bedroom', size: "16'-0\" x 12'-6\"", featBn: 'অ্যাটাচড বাথ (৫\'x৯\'৬") ও বারান্দা (৪\'x৭\')', featEn: 'Attached Bath (5\'x9\'6") & Veranda (4\'x7\')' },
      { nameBn: 'চাইল্ড বেডরুম (C.Bed)', nameEn: 'Child Bedroom', size: "13'-0\" x 12'-4\"", featBn: 'অ্যাটাচড বাথ (৪\'x৮\'৮") ও বারান্দা (৪\'x৭\')', featEn: 'Attached Bath (4\'x8\'8") & Veranda (4\'x7\')' },
      { nameBn: 'গেস্ট বেডরুম (G.Bed)', nameEn: 'Guest Bedroom', size: "11'-6\" x 10'-0\"", featBn: 'কমন বাথের সন্নিকটে ও খোলামেলা ভিউ', featEn: 'Adjacent to Common Bath with open view' },
      { nameBn: 'ড্রয়িং ও ডাইনিং হল', nameEn: 'Drawing & Dining Hall', size: "28'-6\" x 16'-0\"", featBn: 'প্যানোরামিক গ্লাস ওয়াল ও পর্যাপ্ত আলো', featEn: 'Panoramic glass wall & ample natural light' },
      { nameBn: 'কিচেন (Kitchen)', nameEn: 'Kitchen', size: "10'-6\" x 9'-6\"", featBn: 'ইউটিলিটি বারান্দা সহ (৮\'x২\')', featEn: 'With attached Utility Veranda (8\'x2\')' },
      { nameBn: 'কমন বাথরুম', nameEn: 'Common Toilet', size: "4'-0\" x 8'-0\"", featBn: 'আধুনিক ফিটিংস ও ভেন্টিলেশন', featEn: 'Modern sanitary fittings & ventilation' }
    ]
  },
  'plan-b': {
    badge: 'UNIT - B',
    sizeBadge: '1419 SQ. FT.',
    titleBn: 'টাইপ - বি (১৪১৯ বর্গফুট)',
    titleEn: 'Type - B (1419 Sq. Ft.)',
    descBn: 'স্বতন্ত্র ড্রয়িং ও ডাইনিং জোন, ৩টি প্রশস্ত বেডরুম এবং ২টি উন্মুক্ত বারান্দা বিশিষ্ট চমৎকার পরিকল্পিত অ্যাপার্টমেন্ট।',
    descEn: 'Thoughtfully designed apartment with segregated drawing & dining spaces, 3 generous bedrooms, and 2 verandas.',
    landShareBn: '১৯৩.৬ বর্গফুট',
    landShareEn: '193.6 Sq. Ft.',
    bedBathBn: '৩ বেড | ৩ বাথ',
    bedBathEn: '3 Beds | 3 Baths',
    verandaBn: '২টি বারান্দা',
    verandaEn: '2 Verandas',
    livingBn: "১০' x ১৭' ডাইনিং + ৯'৬\" x ১৪' ড্রয়িং",
    livingEn: "10' x 17' Dining + 9'6\" x 14' Living",
    imgSrc: 'assets/floor_plan_b.jpg',
    rooms: [
      { nameBn: 'মাস্টার বেডরুম (M.Bed)', nameEn: 'Master Bedroom', size: "11'-0\" x 14'-0\"", featBn: 'অ্যাটাচড বাথ (৪\'x১০\') ও বারান্দা (৪\'x৭\')', featEn: 'Attached Bath (4\'x10\') & Veranda (4\'x7\')' },
      { nameBn: 'চাইল্ড বেডরুম (C.Bed)', nameEn: 'Child Bedroom', size: "11'-0\" x 12'-8\"", featBn: 'অ্যাটাচড বাথ (৪\'x৮\'১০") ও বারান্দা (৪\'x৭\')', featEn: 'Attached Bath (4\'x8\'10") & Veranda (4\'x7\')' },
      { nameBn: 'গেস্ট বেডরুম (G.Bed)', nameEn: 'Guest Bedroom', size: "10'-0\" x 12'-0\"", featBn: 'প্রাকৃতিক আলো-বাতাস সমৃদ্ধ', featEn: 'Abundant cross-breeze and sunlight' },
      { nameBn: 'ড্রয়িং রুম (Drawing)', nameEn: 'Drawing Room', size: "9'-6\" x 14'-0\"", featBn: 'গেস্টদের জন্য সুপরিসর লাউঞ্জ স্পেস', featEn: 'Dedicated guest welcoming lounge' },
      { nameBn: 'ডাইনিং স্পেস (Dining)', nameEn: 'Dining Area', size: "10'-0\" x 17'-0\"", featBn: 'পরিবারের সকলের জন্য আরামদায়ক', featEn: 'Spacious family dining area' },
      { nameBn: 'কিচেন ও কমন বাথ', nameEn: 'Kitchen & Common Bath', size: "7'-0\" x 9'-0\" / 3' x 9'", featBn: 'কার্যকর ও সুবিধাজনক অবস্থান', featEn: 'Functional, ergonomic placement' }
    ]
  },
  'plan-c': {
    badge: 'UNIT - C',
    sizeBadge: '1419 SQ. FT.',
    titleBn: 'টাইপ - সি (১৪১৯ বর্গফুট)',
    titleEn: 'Type - C (1419 Sq. Ft.)',
    descBn: 'খোলামেলা লিভিং এবং আধুনিক ইন্টেরিয়র ওরিয়েন্টেশন সহ ৩ বেড ও ৩ বাথরুমের নিখুঁত আর্কিটেকচারাল লে-আউট।',
    descEn: 'Modern architectural layout with open-concept living, 3 bedrooms, 3 bathrooms, and scenic verandas.',
    landShareBn: '১৯৩.৬ বর্গফুট',
    landShareEn: '193.6 Sq. Ft.',
    bedBathBn: '৩ বেড | ৩ বাথ',
    bedBathEn: '3 Beds | 3 Baths',
    verandaBn: '২টি বারান্দা',
    verandaEn: '2 Verandas',
    livingBn: "১১' x ১৫' ডাইনিং + ১১'৬\" x ১২' ড্রয়িং",
    livingEn: "11' x 15' Dining + 11'6\" x 12' Living",
    imgSrc: 'assets/floor_plan_c.jpg',
    rooms: [
      { nameBn: 'মাস্টার বেডরুম (M.Bed)', nameEn: 'Master Bedroom', size: "13'-6\" x 12'-0\"", featBn: 'অ্যাটাচড বাথ (৪\'x৮\'৭") ও বারান্দা (৪\'x৬\'৬")', featEn: 'Attached Bath (4\'x8\'7") & Veranda (4\'x6\'6")' },
      { nameBn: 'চাইল্ড বেডরুম (C.Bed)', nameEn: 'Child Bedroom', size: "13'-6\" x 11'-0\"", featBn: 'অ্যাটাচড বাথ (৪\'x৭\'৪") ও বারান্দা (৪\'x৬\'৬")', featEn: 'Attached Bath (4\'x7\'4") & Veranda (4\'x6\'6")' },
      { nameBn: 'গেস্ট বেডরুম (G.Bed)', nameEn: 'Guest Bedroom', size: "12'-0\" x 10'-0\"", featBn: 'খোলামেলা ও শান্ত পরিবেশ', featEn: 'Quiet, well-ventilated guest room' },
      { nameBn: 'ড্রয়িং স্পেস', nameEn: 'Drawing Lounge', size: "11'-6\" x 12'-0\"", featBn: 'সোফা ও টিভি লাউঞ্জ সেটআপ', featEn: 'Accommodates full sofa set & media wall' },
      { nameBn: 'ডাইনিং রুম', nameEn: 'Dining Room', size: "11'-0\" x 15'-0\"", featBn: '৬-৮ সিটার ডাইনিং এরিয়া', featEn: '6-8 seater dining space' },
      { nameBn: 'কিচেন (Kitchen)', nameEn: 'Kitchen', size: "7'-0\" x 9'-0\"", featBn: 'ক্যাবিনেট ও স্মোক ভেন্টের সুব্যবস্থা', featEn: 'Modern modular counter arrangement' }
    ]
  },
  'plan-d': {
    badge: 'UNIT - D',
    sizeBadge: '1419 SQ. FT.',
    titleBn: 'টাইপ - ডি (১৪১৯ বর্গফুট)',
    titleEn: 'Type - D (1419 Sq. Ft.)',
    descBn: 'সর্বোচ্চ ক্রস ভেন্টিলেশন ও প্রাকৃতিক আলোর নিশ্চয়তা সহ আধুনিক পরিবারের জন্য মানানসই ৩ বেড ও ৩ বাথ ফ্ল্যাট।',
    descEn: 'Optimal cross-ventilation and natural lighting with 3 bedrooms, 3 baths, and private living zones.',
    landShareBn: '১৯৩.৬ বর্গফুট',
    landShareEn: '193.6 Sq. Ft.',
    bedBathBn: '৩ বেড | ৩ বাথ',
    bedBathEn: '3 Beds | 3 Baths',
    verandaBn: '২টি বারান্দা',
    verandaEn: '2 Verandas',
    livingBn: "১০'৬\" x ১৫' ডাইনিং + ১২'৬\" x ১১'৮\" ড্রয়িং",
    livingEn: "10'6\" x 15' Dining + 12'6\" x 11'8\" Living",
    imgSrc: 'assets/floor_plan_d.jpg',
    rooms: [
      { nameBn: 'মাস্টার বেডরুম (M.Bed)', nameEn: 'Master Bedroom', size: "14'-6\" x 11'-0\"", featBn: 'অ্যাটাচড বাথ (৪\'x৭\'৭") ও বারান্দা (৪\'x৭\')', featEn: 'Attached Bath (4\'x7\'7") & Veranda (4\'x7\')' },
      { nameBn: 'চাইল্ড বেডরুম (C.Bed)', nameEn: 'Child Bedroom', size: "12'-6\" x 11'-6\"", featBn: 'অ্যাটাচড বাথ (৪\'x৭\'৪") ও বারান্দা (৪\'x৭\')', featEn: 'Attached Bath (4\'x7\'4") & Veranda (4\'x7\')' },
      { nameBn: 'গেস্ট বেডরুম (G.Bed)', nameEn: 'Guest Bedroom', size: "13'-0\" x 10'-0\"", featBn: 'প্রশস্ত ও আরামদায়ক', featEn: 'Spacious and comfortable' },
      { nameBn: 'ড্রয়িং রুম (Drawing)', nameEn: 'Drawing Lounge', size: "12'-6\" x 11'-8\"", featBn: 'পারিবারিক বসার জন্য চমৎকার', featEn: 'Welcoming ambiance for guests' },
      { nameBn: 'ডাইনিং স্পেস (Dining)', nameEn: 'Dining Area', size: "10'-6\" x 15'-0\"", featBn: 'কিচেনের সাথে সংলগ্ন', featEn: 'Centrally positioned adjoining kitchen' },
      { nameBn: 'কিচেন (Kitchen)', nameEn: 'Kitchen', size: "8'-6\" x 7'-7\"", featBn: 'সুপরিসর কাউন্টারটপ ও সিংক', featEn: 'Spacious countertop with dual sink' }
    ]
  },
  'plan-typical': {
    badge: 'TYPICAL FLOOR',
    sizeBadge: '4 UNITS PER FLOOR',
    titleBn: 'টিপিক্যাল ফ্লোর প্ল্যান (১৬ তলার প্রতিটি ফ্লোর)',
    titleEn: 'Typical Floor Plan (All 4 Units)',
    descBn: 'প্রতি ফ্লোরে ৪টি সম্পূর্ণ স্বতন্ত্র ইউনিট (Type A, B, C, D), ২টি হাই স্পিড লিফট, ২টি অগ্নিনির্বাপক সিঁড়ি এবং প্রশস্ত লবি।',
    descEn: 'Each floor features 4 standalone private units, 2 high-speed passenger elevators, 2 fire-escape stairwells, and wide central lobby.',
    landShareBn: 'সম্পূর্ণ ফ্লোর প্ল্যান',
    landShareEn: 'Full Floor Architecture',
    bedBathBn: '১২ বেড | ১২ বাথ',
    bedBathEn: '12 Beds | 12 Baths (Total)',
    verandaBn: '৯টি বারান্দা',
    verandaEn: '9 Verandas (Total)',
    livingBn: '৪টি স্বতন্ত্র ড্রয়িং-ডাইনিং',
    livingEn: '4 Independent Living Halls',
    imgSrc: 'assets/typical_floor_plan.jpg',
    rooms: [
      { nameBn: 'ইউনিট এ (Unit A)', nameEn: 'Unit A', size: '1600 Sft', featBn: '৩ বেড, ৩ বাথ, ৩ বারান্দা (দক্ষিণ-পূর্ব কর্নার)', featEn: '3 Bed, 3 Bath, 3 Veranda (Corner)' },
      { nameBn: 'ইউনিট বি (Unit B)', nameEn: 'Unit B', size: '1419 Sft', featBn: '৩ বেড, ৩ বাথ, ২ বারান্দা (দক্ষিণমুখী)', featEn: '3 Bed, 3 Bath, 2 Veranda (South)' },
      { nameBn: 'ইউনিট সি (Unit C)', nameEn: 'Unit C', size: '1419 Sft', featBn: '৩ বেড, ৩ বাথ, ২ বারান্দা (কেন্দ্রীয় দক্ষিণ)', featEn: '3 Bed, 3 Bath, 2 Veranda (Central)' },
      { nameBn: 'ইউনিট ডি (Unit D)', nameEn: 'Unit D', size: '1419 Sft', featBn: '৩ বেড, ৩ বাথ, ২ বারান্দা (দক্ষিণ-পশ্চিম কর্নার)', featEn: '3 Bed, 3 Bath, 2 Veranda (Corner)' },
      { nameBn: 'যাত্রী লিফট (২টি)', nameEn: '2 High-Speed Elevators', size: "7'x5' & 8'x5'", featBn: 'জরুরি পাওয়ার ব্যাকআপ সহ আন্তর্জাতিক মানের লিফট', featEn: 'International standard with solar/generator backup' },
      { nameBn: 'অগ্নিনির্বাপক সিঁড়ি (২টি)', nameEn: 'Dual Staircases', size: "8'-10\" x 17'-0\"", featBn: 'সুপ্রশস্ত জরুরি নির্গমন সিঁড়ি ও ফায়ার ডোর', featEn: 'Fire safety compliant exit stairs' }
    ]
  },
  'plan-ground': {
    badge: 'GROUND FLOOR',
    sizeBadge: '21 PARKING SLOTS',
    titleBn: 'গ্রাউন্ড ফ্লোর প্ল্যান (পার্কিং ও প্রবেশদ্বার)',
    titleEn: 'Ground Floor Plan (Parking & Entry)',
    descBn: '২১টি সুপ্রশস্ত কার পার্কিং, ২টি সিকিউরিটি গার্ড পোস্ট, কমন ওয়েটিং লাউঞ্জ, সাবস্টেশন এবং দ্বৈত প্রবেশ ও প্রস্থান পথ।',
    descEn: '21 spacious car parking slots, 2 security guard posts, guest waiting lounge, power substation, and dual broad entry gates.',
    landShareBn: '১১.১০ কাঠা (১৮.৩১ শতক)',
    landShareEn: '11.10 Katha (18.31 Shatak)',
    bedBathBn: '২১টি পার্কিং',
    bedBathEn: '21 Parking Slots',
    verandaBn: 'কমন লাউঞ্জ ও গার্ড পোস্ট',
    verandaEn: 'Guest Lounge & Guard Posts',
    livingBn: 'সাবস্টেশন ও সাব-সার্ভিস',
    livingEn: 'Substation & Service Quarters',
    imgSrc: 'assets/ground_floor_plan.jpg',
    rooms: [
      { nameBn: 'কার পার্কিং স্লট (২১টি)', nameEn: 'Car Parking Slots (21)', size: '120 Sft (Each)', featBn: 'প্রশস্ত ড্রাইভওয়ে সহ মসৃণ পার্কিং সুবিধা', featEn: 'Easy maneuvering with broad internal driveway' },
      { nameBn: 'সিকিউরিটি গার্ড পোস্ট (২টি)', nameEn: '2 Guard Posts', size: "8'-8\"x9' & 7'-6\"x7'", featBn: 'উত্তর ও দক্ষিণ উভয় প্রবেশদ্বারে সশস্ত্র পাহারা', featEn: 'Guarding both North & South 20ft road entries' },
      { nameBn: 'কমন ওয়েটিং রুম', nameEn: 'Waiting cum Guest Room', size: "10'-0\" x 8'-0\"", featBn: 'ভিজিটর ও মেহমানদের বসার জন্য আরামদায়ক লাউঞ্জ', featEn: 'Elegantly furnished guest welcome reception' },
      { nameBn: 'সাবস্টেশন কক্ষ', nameEn: 'Power Substation', size: "21'-0\" x 9'-0\"", featBn: 'উচ্চ ক্ষমতার বিদ্যুৎ সাবস্টেশন ও সাউন্ডপ্রুফ জেনারেটর', featEn: 'High capacity transformer & soundproof generator' },
      { nameBn: 'লন্ড্রি ও কিউরেটেড জোন', nameEn: 'Laundry & Service Zone', size: 'সুনির্দিষ্ট স্পেস', featBn: 'ইন-হাউস লন্ড্রি ও কোরবানির স্বাস্থ্যসম্মত স্থান', featEn: 'In-house laundry shop & hygienic sacrificial animal area' },
      { nameBn: 'প্রবেশ ও প্রস্থান পথ', nameEn: 'Dual Gates & Roads', size: "20' Wide Roads", featBn: 'উত্তর ও দক্ষিণ উভয় দিকে ২০ ফিট প্রশস্ত রাস্তা', featEn: '20 feet wide paved roads on both sides' }
    ]
  }
};

// --- 2. BILINGUAL DICTIONARY (BN & EN) ---
const TRANSLATIONS = {
  bn: {
    announcement_badge: 'অগ্রিম বুকিং চলমান',
    announcement_text: 'সম্ভাব্য নির্মাণকাজ শুরু: নভেম্বর ২০২৭ | ৩-৪ কর্মদিবসের মধ্যে সাফ-কবলা দলিল হস্তান্তরের সুযোগ',
    nav_videos: 'ভিডিও',
    nav_overview: 'প্রজেক্ট পরিচিতি',
    nav_engineering: 'কাঠামো ও ডিজাইন',
    nav_amenities: 'সুযোগ-সুবিধা',
    nav_plans: 'ফ্লোর প্ল্যান',
    nav_housing: 'আঁটি মডেল টাউন',
    nav_location: 'লোকেশন ও ম্যাপ',
    nav_calculator: 'কিস্তি ক্যালকুলেটর',
    nav_contact: 'যোগাযোগ',
    btn_brochure: 'ব্রোশিওর',
    btn_site_visit: 'সাইট ভিজিট',
    hero_badge_text: 'লাক্সারি রেসিডেন্সিয়াল টাওয়ার',
    hero_subtitle: '"সুকুন প্যালেস — একটি প্রশান্তিময়, আভিজাত্যপূর্ণ ও অনন্য জীবনযাত্রার ঠিকানা।" ঢাকার মোহাম্মদপুর সন্নিকটে আঁটি মডেল টাউনে সম্পূর্ণ নিষ্কণ্টক জমিতে ১৬ তলা বিশিষ্ট রাজকীয় অ্যাপার্টমেন্ট প্রজেক্ট।',
    hero_btn_plans: 'ফ্লোর প্ল্যান দেখুন',
    hero_btn_book: 'সাইট ভিজিট বুকিং',
    hero_btn_download: 'ব্রোশিওর (PDF)',
    stat_floors: '১৬ তলা সুবিশাল টাওয়ার',
    stat_units: 'মোট এক্সক্লুসিভ ফ্ল্যাট',
    stat_land: 'কাঠা কর্নার প্লট',
    stat_sizes: 'বর্গফুট সাইজ (Type A-D)',
    hero_card_1_title: 'BUET & RUET',
    hero_card_1_desc: 'স্ট্রাকচারাল ডিজাইন',
    hero_card_2_title: 'রুফটপ সুইমিং পুল',
    hero_card_2_desc: 'ও স্কাই গার্ডেন',
    fact_loc_title: 'লোকেশন',
    fact_loc_desc: 'প্লট-০২, রোড-৩/বি, ব্লক-সি, আঁটি মডেল টাউন',
    fact_park_title: 'পার্কিং সুবিধা',
    fact_park_desc: '২১টি সুপ্রশস্ত কার পার্কিং (১২০ ব.ফু. প্রতিটি)',
    fact_lifts_title: 'লিফট ও সিঁড়ি',
    fact_lifts_desc: '২টি হাই-স্পিড লিফট ও ২টি ফায়ার সিঁড়ি',
    fact_handover_title: 'সম্ভাব্য শুরু',
    fact_handover_desc: 'নভেম্বর ২০২৭ (৪০ মাসে নির্মাণ শেষ)',
    overview_subbadge: 'প্রকল্প সম্পর্কিত কিছু কথা',
    overview_heading: 'কেন সুকুন প্যালেস আপনার শ্রেষ্ঠ পছন্দ?',
    overview_lead: 'আপনি যদি চান আপনার সন্তান এবং আপনজনেরা ঢাকার যানজটপূর্ণ, ধুলাবালিময়, দূষিত পরিবেশের বাইরে একটি নয়নাভিরাম, সবুজে ঘেরা, স্বাস্থ্যকর ও নিরাপদ পরিবেশে স্বাচ্ছন্দ্যে বেড়ে উঠুক — তবে \'আঁটি মডেল টাউন\'-এ ল্যান্ড শেয়ার ভিত্তিক \'সুকুন প্যালেস\' আপনার সাশ্রয়ী বাজেটের মধ্যে এক অনন্য সুযোগ।',
    legal_badge_title: '১০০% নির্ভেজাল জমি',
    legal_badge_desc: '৪ পর্চা যাচাইকৃত ও আরএস জরিপ চলমান। ৩-৪ কর্মদিবসে সাফ-কবলা দলিল হস্তান্তরের সুযোগ।',
    feat_1_title: 'BUET ও RUET প্রকৌশলী দ্বারা স্ট্রাকচারাল ডিজাইন',
    feat_1_desc: 'প্রকল্প শুরুর পূর্বেই বুয়েটের বিজ্ঞ আর্কিটেক্ট ও রুয়েটের অভিজ্ঞ প্রকৌশলীদের সমন্বয়ে আন্তর্জাতিক বিএনবিসি কোড ও সর্বোচ্চ ভূমিকম্প সহনশীলতা নিশ্চিত করা হয়েছে।',
    feat_2_title: '"এক টুকরো সবুজ বন" - এক্সক্লুসিভ গ্রিন কনসেপ্ট',
    feat_2_desc: 'লবি এরিয়া, কমন স্পেস, গ্রাউন্ড ফ্লোর, রুফটপ, ওয়াকিংওয়ে, সিটিং জোন এবং প্রতিটি ফ্ল্যাটের বারান্দায় নান্দনিক সবুজায়নের অনন্য প্রাকৃতিক আবহ।',
    feat_3_title: 'বহুমাত্রিক নিশ্ছিদ্র নিরাপত্তা ও ফায়ার সেফটি',
    feat_3_desc: 'হাউজিংয়ের নিজস্ব শক্তিশালী সেন্ট্রাল নিরাপত্তা বলয়ের সাথে সুকুন প্যালেসের নিজস্ব বাউন্ডারি প্রাচীর, ২টি গার্ড পোস্ট, সার্বক্ষণিক সিসিটিভি এবং প্রতি ফ্লোরে ফায়ার সেফটি ব্যবস্থা।',
    feat_4_title: 'ল্যান্ড শেয়ারিং মডেলে বিশাল সঞ্চয়',
    feat_4_desc: 'প্রথমে ন্যায্য মূল্যে সরাসরি জমির শেয়ার ক্রয় ও নিজের নামে সাফ-কবলা রেজিস্ট্রেশন; এরপর নির্মাণ খরচ সম্মিলিতভাবে কিস্তিতে পরিশোধের সুযোগ।',
    spec_land_title: 'জমির পরিমাণ',
    spec_land_val: '১১.১০ কাঠা',
    spec_land_sub: '(১৮.৩১ শতক)',
    spec_height_title: 'ভবনের উচ্চতা',
    spec_height_val: 'জি + ১৫ = ১৬ তলা',
    spec_height_sub: 'গ্রাউন্ড ফ্লোর কার পার্কিং',
    spec_units_title: 'ফ্লোরে ইউনিট',
    spec_units_val: '৪ (চার) টি',
    spec_units_sub: 'পর্যাপ্ত আলো-বাতাস',
    spec_total_title: 'মোট অ্যাপার্টমেন্ট',
    spec_total_val: '৬০ টি',
    spec_total_sub: '৩ বেড ও ৩ বাথ লাক্সারি',
    spec_roads_title: 'প্লটের রাস্তা',
    spec_roads_val: "২০' ও ৩০' ফিট",
    spec_roads_sub: 'L-Shaped কর্নার প্লট',
    spec_power_title: 'কমন সার্ভিস',
    spec_power_val: '২৪/৭ বিদ্যুৎ',
    spec_power_sub: 'সোলার + সাবস্টেশন + জেনারেটর',
    amenities_subbadge: 'বিশ্বমানের সুযোগ-সুবিধা',
    amenities_heading: 'আপনার বিলাসবহুল জীবনযাত্রার প্রতিটি উপকরণ',
    amenities_lead: 'সুকুন প্যালেস কেবল একটি আবাসস্থল নয়, এটি একটি পরিপূর্ণ সুস্থ বিনোদন ও অবকাশ যাপনের কেন্দ্র। ছাদ থেকে শুরু করে গ্রাউন্ড ফ্লোর পর্যন্ত প্রতিটি কর্নার পরিকল্পিত।',
    tab_rooftop: 'রুফটপ স্কাই হ্যাভেন',
    tab_ground: 'গ্রাউন্ড ফ্লোর ও কমন সুবিধা',
    tab_apartment: 'ফ্ল্যাটের অভ্যন্তরীণ সুবিধা',
    tab_housing: 'আঁটি মডেল টাউন টাউনশিপ',
    showcase_rooftop_badge: 'এক্সক্লুসিভ রুফটপ হ্যাভেন',
    rooftop_title: 'ভবনের ছাদে যা যা থাকছে:',
    rooftop_desc: 'দিনের ক্লান্তি শেষে পরিবারের সাথে নির্মল বাতাসে সময় কাটানোর জন্য ছাদে তৈরি হচ্ছে অভিজাত লাক্সারি জোন।',
    rf_1: 'রুফটপ সুইমিং পুল ও সান ডেক',
    rf_2: 'নান্দনিক রুফটপ গার্ডেন',
    rf_3: 'আধুনিক জিমনেসিয়াম (Gym)',
    rf_4: 'ইনডোর স্পোর্টস রুম',
    rf_5: 'লাইব্রেরি ও স্টাডি রুম',
    rf_6: 'ডেডিকেটেড প্রেয়ার রুম',
    rf_7: 'নিরাপদ কিডস প্লে জোন',
    rf_8: 'ওপেন-এয়ার বারবিকিউ জোন',
    rf_9: 'কমিউনিটি স্পেস (বিয়ে, জন্মদিন ও পারিবারিক অনুষ্ঠান)',
    rf_10: 'এন্টারটেইনমেন্ট লাউঞ্জ',
    showcase_ground_badge: '২১টি নিরাপদ কার পার্কিং',
    ground_title: 'গ্রাউন্ড ফ্লোর ও কমন সার্ভিসেস:',
    ground_desc: 'প্রবেশপথ থেকে শুরু করে প্রতিটি সুবিধার সর্বোচ্চ আধুনিকায়ন ও দৈনন্দিন স্বাচ্ছন্দ্য নিশ্চিত করা হয়েছে।',
    gf_1: '২টি সুপ্রশস্ত প্রবেশপথ (Entrance)',
    gf_2: '২টি সিকিউরিটি গার্ড পোস্ট',
    gf_3: 'কমন ওয়েটিং কাম গেস্ট লাউঞ্জ',
    gf_4: 'ইন-হাউস লন্ড্রি শপ',
    gf_5: 'সুনির্দিষ্ট পশু কোরবানির জায়গা',
    gf_6: '২১টি কার পার্কিং (১২০ ব.ফু. প্রতিটি)',
    gf_7: 'নিজস্ব সাবস্টেশন ও জেনারেটর',
    gf_8: '২৪/৭ সোলার বিদ্যুৎ সরবরাহ',
    gf_9: 'সার্বক্ষণিক সিসিটিভি ক্যামেরা নজরদারি',
    gf_10: 'ফায়ার হাইড্রেন্ট ও সেফটি ব্যবস্থা',
    showcase_apt_badge: '৩ বেডরুম ও ৩ বাথ স্পেসিফিকেশন',
    apt_title: 'প্রতিটি ফ্ল্যাটে যা যা থাকছে:',
    apt_desc: 'বাতাস ও আলোর অবাধ সঞ্চালন এবং প্রতিটি পরিবারের ব্যক্তিগত প্রাইভেসি ও আরামদায়ক অবস্থানের নিখুঁত ডিজাইন।',
    apt_1: '৩টি সুবিশাল বেডরুম',
    apt_2: '৩টি ওয়াশরুম (২টি অ্যাটাচড ও ১টি কমন)',
    apt_3: '১টি আধুনিক কিচেন',
    apt_4: '১টি প্রশস্ত ড্রয়িং রুম',
    apt_5: '১টি সুবিন্যস্ত ডাইনিং স্পেস',
    apt_6: '২ থেকে ৩টি উন্মুক্ত বারান্দা',
    apt_7: 'ড্রয়িং-ডাইনিং স্পেসে গ্লাস ওয়াল',
    apt_8: 'ক্রস ভেন্টিলেশন ও প্রচুর প্রাকৃতিক আলো',
    showcase_town_badge: 'সবুজে ঘেরা স্বয়ংসম্পূর্ণ টাউনশিপ',
    town_title: 'আঁটি মডেল টাউন মেগাপ্রজেক্টে যা যা পাচ্ছেন:',
    town_desc: 'ঢাকার কাছে একটি সম্পূর্ণ আধুনিক, পরিবেশবান্ধব ও সুপরিকল্পিত নগরীর সকল আন্তর্জাতিক নাগরিক সুযোগ-সুবিধা।',
    tw_1: '৮০ ফিট, ৩০ ফিট ও ২০ ফিটের প্রশস্ত রাস্তা',
    tw_2: '৩০০ কাঠায় আন্তর্জাতিক CBD শপিং কমপ্লেক্স',
    tw_3: '১৮০ কাঠা স্পোর্টস জোন, পার্ক ও খেলার মাঠ',
    tw_4: 'প্রাকৃতিক লেকের পাড়ে ওয়াকিং ও সাইক্লিং ট্র্যাক',
    tw_5: '১৬০ কাঠা জমিতে আধুনিক হাসপাতাল (নির্ধারিত)',
    tw_6: 'হাউজিংয়ের নিজস্ব সার্বক্ষণিক বাস সার্ভিস',
    tw_7: 'সেন্ট্রাল লাইব্রেরি ও সিনিয়র সিটিজেন ক্লাব',
    tw_8: 'পুলিশ স্টেশন, ফায়ার স্টেশন ও সেন্ট্রাল কন্ট্রোল',
    plans_subbadge: 'ফ্লোর ও ইউনিট লে-আউট',
    plans_heading: 'আপনার পছন্দের ফ্ল্যাটটি বেছে নিন',
    plans_lead: 'সুকুন প্যালেসে রয়েছে ৪টি ভিন্নমুখী ও সুপ্রশস্ত ইউনিটের নিখুঁত বিন্যাস। প্রতিটি ফ্লোরে রয়েছে ৪টি ইউনিট, যা সর্বোচ্চ আলো-বাতাস ও গোপনীয়তা প্রদান করে।',
    click_to_zoom: 'ক্লিক করে বড় করে দেখুন',
    label_land_share: 'প্রাপ্য জমির শেয়ার',
    label_bed_bath: 'বেড ও বাথরুম',
    label_veranda: 'বারান্দা',
    label_kitchen: 'কিচেন ও ড্রয়িং',
    room_dimensions_title: 'রুমের সুনির্দিষ্ট মাপ (পরিমাপ)',
    th_room: 'রুমের নাম',
    th_size: 'আকার (দৈর্ঘ্য x প্রস্থ)',
    th_facility: 'সংযুক্ত সুবিধা',
    btn_calc_this: 'কিস্তি হিসাব করুন',
    btn_book_this: 'এই ইউনিটটি বুকিং করুন',
    calc_subbadge: 'সহজ বিনিয়োগ ও পেমেন্ট প্ল্যান',
    calc_heading: 'স্মার্ট কিস্তি ও বাজেট ক্যালকুলেটর',
    calc_lead: 'সুকুন প্যালেসের ল্যান্ড শেয়ারিং ও কিস্তির সুবিধা আপনার আর্থিক পরিকল্পনাকে করবে অত্যন্ত সহজ ও ঝুঁকিমুক্ত। আপনার পছন্দের ফ্ল্যাট অনুযায়ী আনুমানিক বাজেট হিসেব করুন।',
    calc_lbl_unit: 'ফ্ল্যাট টাইপ নির্বাচন করুন',
    calc_lbl_parking: 'কার পার্কিং প্রয়োজন? (১২০ ব.ফু.)',
    opt_parking_yes: 'হ্যাঁ, ১টি ডেডিকেটেড পার্কিং স্পেস প্রয়োজন',
    opt_parking_no: 'না, পার্কিং প্রয়োজন নেই',
    calc_lbl_duration: 'নির্মাণ কিস্তির সময়কাল (মাস)',
    calc_lbl_down: 'প্রাথমিক ডাউন পেমেন্ট / ল্যান্ড শেয়ার অনুপাত',
    calc_disclaimer: '* বি.দ্র.: শুরুতে জমির শেয়ার ক্রয় ও সাফ-কবলা রেজিস্ট্রেশন করতে হবে। ভবন নির্মাণের প্রকৃত খরচ সম্মিলিতভাবে কাজ চলাকালীন সমান কিস্তিতে পরিশোধ করতে হবে।',
    calc_summary_title: 'আনুমানিক বাজেট ও কিস্তি বিবরণী',
    calc_met_unit: 'নির্বাচিত অ্যাপার্টমেন্ট:',
    calc_met_share: 'প্রাপ্য জমির শেয়ার:',
    calc_met_parking: 'কার পার্কিং:',
    calc_met_down: 'প্রাথমিক জমি শেয়ার ও বুকিং:',
    calc_met_remaining: 'অবশিষ্ট নির্মাণ খরচ (কিস্তিতে):',
    calc_met_monthly: 'মাসিক সম্ভাব্য কিস্তি:',
    btn_quotation: 'অফিসিয়াল কোটেশন পান',
    housing_subbadge: 'পরিপূর্ণ পরিকল্পিত আবাসিক এলাকা',
    housing_heading: 'আঁটি মডেল টাউন — আধুনিক জীবনের রূপরেখা',
    housing_lead: 'মোহাম্মদপুর সংলগ্ন সবুজে ঘেরা, স্নিগ্ধ ও আধুনিক পরিকল্পিত টাউনশিপ। যেখানে আপনার পরিবার পাবে খোলা বাতাস, স্বাস্থ্যকর পরিবেশ ও আন্তর্জাতিক নাগরিক জীবনের নিশ্চয়তা।',
    tag_mosque: 'কেন্দ্রীয় জামে মসজিদ',
    card_mosque_title: 'কেন্দ্রীয় সোসাইটি মসজিদ',
    card_mosque_desc: 'সুকুন প্যালেস হতে মাত্র ১০ মিনিট হাঁটা দূরত্বে অবস্থিত চমৎকার ইসলামিক স্থাপত্যের কেন্দ্রীয় মসজিদ।',
    tag_sports: '১৮০ কাঠা স্পোর্টস জোন',
    card_park_title: 'খেলার মাঠ, পার্ক ও টার্ফ',
    card_park_desc: 'ব্লকভিত্তিক পার্ক, ফুটবল ও ক্রিকেট খেলার মাঠ এবং সক্রিয় আধুনিক ফুটবল টার্ফ যা শিশুদের মানসিক ও শারীরিক বিকাশে সহায়ক।',
    tag_campus: 'শিক্ষা প্রতিষ্ঠান বলয়',
    card_campus_title: 'স্কুল, কলেজ ও মাদ্রাসা',
    card_campus_desc: 'প্লটের সন্নিকটেই নামকরা ইংলিশ মিডিয়াম স্কুল, কলেজ এবং উন্নত মাদ্রাসা শিক্ষার সুব্যবস্থা।',
    tag_cbd: '৩০০ কাঠা শপিং CBD',
    card_mall_title: 'সেন্ট্রাল বিজনেস ডিস্ট্রিক্ট',
    card_mall_desc: '৩০০ কাঠা জমির ওপর আন্তর্জাতিক মানের মেগা শপিং কমপ্লেক্স, ব্র্যান্ড আউটলেট, সিনেপ্লেক্স ও ব্যাংক হাব।',
    inf_1_t: 'প্রশস্ত রাস্তা ও ফুটপাত',
    inf_1_d: '৮০ ফিট, ৩০ ফিট ও ২০ ফিটের পরিকল্পিত রাস্তা এবং ওয়ান-ওয়ে ট্রাফিক ব্যবস্থা।',
    inf_2_t: 'প্রাকৃতিক লেক ও ওয়াকওয়ে',
    inf_2_d: 'স্বচ্ছ লেকের দুই পাড়ে স্বাস্থ্যকর হাঁটা ও জগিং/সাইক্লিংয়ের সবুজ পরিবেশ।',
    inf_3_t: '১৬০ কাঠায় আধুনিক হাসপাতাল',
    inf_3_d: 'জরুরি ও বিশেষায়িত স্বাস্থ্যসেবায় ১৬০ কাঠা জমিতে নির্ধারিত হাসপাতাল।',
    inf_4_t: 'হাউজিংয়ের নিজস্ব বাস সার্ভিস',
    inf_4_d: 'ঢাকা শহরের গুরুত্বপূর্ণ পয়েন্টে যাতায়াতের জন্য নিয়মিত বাস সার্ভিস।',
    inf_5_t: 'অসংখ্য ফলদ বৃক্ষের সমারোহ',
    inf_5_d: 'টাউনশিপ জুড়ে সারি সারি ফলদ গাছ যার ফলের অধিকার সকল বাসিন্দাদের।',
    inf_6_t: 'পুলিশ ও ফায়ার স্টেশন',
    inf_6_d: 'আইনশৃঙ্খলা ও সার্বক্ষণিক নিরাপত্তার জন্য পুলিশ স্টেশন ও ফায়ার স্টেশন।',
    loc_subbadge: 'কানেক্টিভিটি ও ম্যাপ',
    loc_heading: 'মোহাম্মদপুর ও ঢাকার কেন্দ্রবিন্দুর অতি সন্নিকটে',
    loc_lead: 'সরকারি ৯টি প্রধান সড়কের সাথে সংযুক্ত আঁটি মডেল টাউন। মোহাম্মদপুর, ধানমন্ডি কিংবা মাওয়া এক্সপ্রেসওয়ে — সব পথেই দ্রুত ও নির্বিঘ্ন যাতায়াত।',
    loc_commute_title: 'প্রধান গন্তব্যে যাতায়াতের সময়:',
    com_1_d: 'কেন্দ্রীয় সোসাইটি জামে মসজিদ',
    com_1_t: 'পায়ে হেঁটে মাত্র ১০ মিনিট',
    com_2_d: 'বসিলা গার্ডেন সিটি ও ৪০ ফিট মেইন রোড',
    com_2_t: 'মাত্র ৫ মিনিট ড্রাইভ',
    com_3_d: 'মোহাম্মদপুর বাস স্ট্যান্ড / টাউন হল',
    com_3_t: 'মাত্র ১২ থেকে ১৫ মিনিট',
    com_4_d: 'ধানমন্ডি (২৭ / জিগাতলা / শংকর)',
    com_4_t: '১৫ থেকে ২০ মিনিট',
    com_5_d: 'মাওয়া এক্সপ্রেসওয়ে ও পদ্মা সেতু লিংক',
    com_5_t: 'সহজ ও জ্যামমুক্ত সংযোগ সড়ক',
    com_6_d: '৮০ ফিট লাবণী পয়েন্ট সংযোগ সড়ক',
    com_6_t: 'নির্মাণকাজ চলমান (শীঘ্রই উন্মুক্ত)',
    office_addr_title: 'কর্পোরেট ও সাইট অফিস:',
    office_addr_desc: 'চন্দ্রিমার হাল্কার পাড়, বসিলা গার্ডেন সিটি, বসিলা ৪০ ফিট মেইন রোড, বসিলা, মোহাম্মদপুর, ঢাকা।',
    timeline_subbadge: 'প্রকল্প বাস্তবায়ন প্রক্রিয়া',
    timeline_heading: 'সহজ ও স্বচ্ছ ৪টি ধাপে ফ্ল্যাটের মালিকানা',
    step_1_title: 'শেয়ার বুকিং ও পছন্দ',
    step_1_desc: 'আপনার পছন্দের ফ্লোর ও ফ্ল্যাট টাইপ (Type A/B/C/D) নির্বাচন করে বুকিং সম্পন্ন করুন।',
    step_2_title: 'সাফ-কবলা জমি রেজিস্ট্রেশন',
    step_2_desc: 'ল্যান্ড শেয়ার ক্রয়ের মাত্র ৩ থেকে ৪ কর্মদিবসের মধ্যে আপনার নামে সাব-রেজিস্ট্রি অফিসে সাফ-কবলা দলিল হস্তান্তরের সুযোগ ।',
    step_3_title: 'নির্মাণকাজ শুরু (নভেম্বর ২০২৭)',
    step_3_desc: 'বুয়েট ও রুয়েট প্রকৌশলীদের তত্ত্বাবধানে সম্মিলিতভাবে পাইলিং ও ভিত্তি স্থাপন কাজ শুরু।',
    step_4_title: '৪০ মাসে চাবি হস্তান্তর',
    step_4_desc: 'সহজ মাসিক কিস্তিতে নির্মাণ খরচ পরিশোধ সম্পন্ন করে স্বপ্নের রাজকীয় অ্যাপার্টমেন্ট বুঝে নিন।',
    gallery_subbadge: 'প্রকল্পের নান্দনিক দৃশ্যপট',
    gallery_heading: 'থ্রিডি রেন্ডার ও আর্কিটেকচারাল গ্যালারি',
    gal_all: 'সকল ছবি',
    gal_ext: 'এক্সটেরিয়র ও টাওয়ার',
    gal_roof: 'রুফটপ হ্যাভেন',
    gal_int: 'ইন্টেরিয়র ভিউ',
    gal_comm: 'টাউনশিপ কমিউনিটি',
    gal_img_1: '১৬ তলা সুবিশাল টাওয়ারের ফ্রন্ট ফেসিড',
    gal_img_2: 'আর্কিটেকচারাল ড্রামাটিক অ্যাঙ্গেল',
    gal_img_3: 'রুফটপ ইনফিনিটি পুল ও সান ডেক',
    gal_img_4: 'প্যানোরামিক গ্লাস ওয়াল লিভিং রুম',
    gal_img_5: 'লাক্সারি মাস্টার বেডরুম ও বারান্দা',
    gal_img_6: 'সোসাইটি কেন্দ্রীয় জামে মসজিদ',
    gal_img_7: '১৮০ কাঠা স্পোর্টস পার্ক ও টার্ফ',
    gal_img_8: '৩০০ কাঠা মেগা শপিং কমপ্লেক্স',
    faq_subbadge: 'সচরাচর প্রশ্নসমূহ',
    faq_heading: 'আপনার সকল প্রশ্নের নির্ভরযোগ্য সমাধান',
    faq_q1: '১. জমির কাগজপত্র কি শতভাগ নির্ভেজাল ও বৈধ?',
    faq_a1: 'হ্যাঁ, শতভাগ। প্রকল্পটি সুপ্রতিষ্ঠিত আঁটি মডেল টাউন হাউজিংয়ের আওতাভুক্ত নিষ্কণ্টক জমি। জমির কাগজপত্র চারপর্চা (CS, SA, RS জরিপ চলমান) পুঙ্খানুপুঙ্খভাবে অভিজ্ঞ আইনজীবীদের মাধ্যমে যাচাইকৃত। ল্যান্ড শেয়ার ক্রয়ের ৩ থেকে ৪ কর্মদিবসের মধ্যে আপনার নামে সাব-রেজিস্ট্রি অফিসে সাফ-কবলা দলিল হস্তান্তরের সুযোগ থাকবে।',
    faq_q2: '২. ভবন নির্মাণকাজ কবে শুরু হবে এবং কত সময় লাগবে?',
    faq_a2: 'প্রকল্পের সম্ভাব্য নির্মাণকাজ শুরু হবে নভেম্বর ২০২৭ সালে। কাজ শুরুর তারিখ থেকে সম্ভাব্য সময়কাল ৪০ মাস (গ্রেস পিরিয়ড ০৬ মাস)।',
    faq_q3: '৩. ল্যান্ড শেয়ারিং ও কিস্তির সুবিধা কীভাবে কাজ করে?',
    faq_a3: 'শুরুতে ফ্ল্যাটের সাইজ অনুযায়ী (Type A: ২১৮.৪ ব.ফু. বা Type B/C/D: ১৯৩.৬ ব.ফু.) জমির আনুপাতিক শেয়ার ক্রয় ও নিজের নামে রেজিস্ট্রি করে নেবেন। পরবর্তীতে ভবন নির্মাণের প্রকৃত খরচ সকল শেয়ারহোল্ডার সম্মিলিতভাবে নির্মাণ কাজ চলাকালীন সহজ মাসিক কিস্তিতে পরিশোধ করবেন। ফলে কোনো বাণিজ্যিক ডেভেলপার মুনাফা ছাড়াই সাশ্রয়ী খরচে বিলাসবহুল ফ্ল্যাটের মালিক হওয়া যায়।',
    faq_q4: '৪. প্রকল্পটির স্ট্রাকচারাল ডিজাইন কারা করেছেন?',
    faq_a4: 'বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET)-এর প্রখ্যাত আর্কিটেক্ট এবং রাজশাহী প্রকৌশল বিশ্ববিদ্যালয় (RUET)-এর অভিজ্ঞ স্ট্রাকচারাল ইঞ্জিনিয়ারদের দ্বারা প্রকল্পের পূর্ণাঙ্গ ড্রইং ও ডিজাইন প্রণীত হয়েছে। এতে বাংলাদেশ ন্যাশনাল বিল্ডিং কোড (BNBC) অনুযায়ী সর্বোচ্চ মাত্রার ভূমিকম্প সহনশীলতা ও ফায়ার সেফটি নিশ্চিত করা হয়েছে।',
    faq_q5: '৫. প্রকল্পে বিদ্যুৎ, পানি ও ইউটিলিটি ব্যবস্থা কেমন থাকবে?',
    faq_a5: 'প্রকল্পে নিজস্ব উচ্চ ক্ষমতাসম্পন্ন সাবস্টেশন, অটোমেটিক সাউন্ডপ্রুফ জেনারেটর এবং ভবনের ছাদে পরিবেশবান্ধব সোলার প্যানেলের সমন্বয়ে সার্বক্ষণিক ২৪/৭ নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ থাকবে। এছাড়া বিশুদ্ধ ভূগর্ভস্থ পানির ডিপ টিউবওয়েল ও আধুনিক রিজার্ভ ট্যাংক নিশ্চিত করা হবে।',
    faq_q6: '৬. ছাদ ও কমন এরিয়ায় কী কী সুযোগ-সুবিধা উপভোগ করা যাবে?',
    faq_a6: 'ভবনের ছাদে থাকছে রুফটপ ইনফিনিটি সুইমিং পুল, সান ডেক, জিমনেসিয়াম, লাইব্রেরি, স্টাডি রুম, ইনডোর স্পোর্টস, সালাত/প্রেয়ার রুম, কিডস প্লে জোন, ওপেন-এয়ার বারবিকিউ টেরেস এবং বিয়ে বা জন্মদিন পালনের জন্য সুবিশাল কমিউনিটি স্পেস।',
    booking_title: 'আজই বুকিং করুন আপনার স্বপ্নের ফ্ল্যাট',
    booking_desc: 'সরাসরি প্রকল্প এলাকা পরিদর্শন করুন এবং আমাদের প্রতিনিধির সাথে কথা বলে আপনার জন্য উপযুক্ত অ্যাপার্টমেন্ট নির্বাচন করুন।',
    lbl_hotline: 'হটলাইন ও বুকিং নম্বর:',
    lbl_wa: 'হোয়াটসঅ্যাপ সাপোর্ট:',
    lbl_site_addr: 'প্রজেক্ট লোকেশন:',
    lbl_site_office: 'সেলস ও সাইট অফিস:',
    form_title: 'সাইট ভিজিট ও বুকিং আবেদন',
    f_name: 'আপনার নাম *',
    f_phone: 'মোবাইল নম্বর *',
    f_email: 'ইমেইল ঠিকানা (যদি থাকে)',
    f_unit: 'পছন্দের ফ্ল্যাট ইউনিট',
    f_parking: 'পার্কিং সুবিধা প্রয়োজন?',
    f_date: 'সাইট ভিজিটের সুবিধাজনক তারিখ',
    f_msg: 'আপনার কোনো প্রশ্ন বা বিশেষ মতামত',
    btn_submit_form: 'আবেদন জমা দিন',
    help_title: 'প্রকল্প সম্পর্কে সরাসরি কথা বলতে চান?',
    help_desc: 'আমাদের সিনিয়র প্রজেক্ট কনসালট্যান্ট সার্বক্ষণিক আপনার সেবায় নিয়োজিত।',
    footer_tagline: 'Live Beyond Luxury, Live in Sukoon. আঁটি মডেল টাউনে সম্পূর্ণ নিষ্কণ্টক জমিতে আপনার আজীবনের পরম নির্ভরতার ঠিকানা।',
    f_col_quick: 'প্রয়োজনীয় লিংক',
    f_col_units: 'ফ্ল্যাট ক্যাটাগরি',
    f_col_contact: 'যোগাযোগ ও ঠিকানা',
    f_terms: 'শর্তাবলী',
    f_privacy: 'প্রাইভেসি পলিসি',
    f_brochure_view: 'ব্রোশিওর দেখুন',
    tick_24m: '২৪ মাস',
    tick_36m: '৩৬ মাস',
    tick_40m: '৪০ মাস (ব্রোশিওর সময়)',
    tick_48m: '৪৮ মাস',
    tick_20p: '২০%',
    tick_30p: '৩০%',
    tick_40p: '৪০%',
    tick_50p: '৫০%',
    step_num_1: '০১',
    step_num_2: '০২',
    step_num_3: '০৩',
    step_num_4: '০৪',
    phone_1: '০১৯১৪-৫১৪০১৯',
    phone_2: '০১৭৫৭-০৩১৪৪০',
    phone_3: '০১৫১৬-১৬০৬৯৮',
    addr_site_val: 'প্লট-০২, রোড-৩/বি, ব্লক-সি, আঁটি মডেল সোসাইটি, কেরানীগঞ্জ, ঢাকা-১৩১২।',
    addr_office_val: 'চন্দ্রিমার হাল্কার পাড়, বসিলা গার্ডেন সিটি, বসিলা ৪০ ফিট মেইন রোড, বসিলা, মোহাম্মদপুর, ঢাকা।',
    btn_wa_chat: 'হোয়াটসঅ্যাপে চ্যাট করুন',
    f_cat_1: 'Type A: ১৬০০ বর্গফুট (৩ বেড, ৩ বাথ, ৩ বারান্দা)',
    f_cat_2: 'Type B: ১৪১৯ বর্গফুট (৩ বেড, ৩ বাথ, ২ বারান্দা)',
    f_cat_3: 'Type C: ১৪১৯ বর্গফুট (৩ বেড, ৩ বাথ, ২ বারান্দা)',
    f_cat_4: 'Type D: ১৪১৯ বর্গফুট (৩ বেড, ৩ বাথ, ২ বারান্দা)',
    f_cat_5: 'গ্রাউন্ড ফ্লোর কার পার্কিং (২১টি)',
    f_cat_6: 'ব্রোশিওর ডাউনলোড (PDF)',
    f_addr_site: 'প্লট-০২, রোড-৩/বি, ব্লক-সি, আঁটি মডেল সোসাইটি, কেরানীগঞ্জ, ঢাকা-১৩১২।',
    f_addr_office: 'চন্দ্রিমার হাল্কার পাড়, বসিলা গার্ডেন সিটি, বসিলা ৪০ ফিট মেইন রোড, মোহাম্মদপুর, ঢাকা।',
    f_phones: '০১৯১৪-৫১৪০১৯ / ০১৭৫৭-০৩১৪৪০ / ০১৫১৬-১৬০৬৯৮',
    f_copyright: '© 2026 Sukoon Palace. All Rights Reserved. (সুকুন প্যালেস)',
    tip_wa: 'WhatsApp চ্যাট',
    tip_call: 'সরাসরি কল করুন',
    modal_success_title: 'ধন্যবাদ! আপনার আবেদন গৃহীত হয়েছে',
    modal_success_desc: 'আমাদের সিনিয়র রিলেশনশিপ অফিসার অতি দ্রুত আপনার সাথে যোগাযোগ করবেন।',
    modal_btn_close: 'ঠিক আছে',
    video_subbadge: 'অফিসিয়াল ভিডিও গ্যালারি',
    video_heading: 'সুকুন প্যালেস ভিডিও স্টোরি ও সাইট ট্যুর',
    video_lead: 'আমাদের অফিসিয়াল YouTube চ্যানেলের এক্সক্লুসিভ প্রমো ও আঁটি মডেল টাউন সোসাইটি পরিচিতি ভিডিও দেখে প্রকল্পের বাস্তব পরিবেশ অনুভব করুন।',
    video_channel_badge: 'ইউটিউব চ্যানেল: @SukoonPalacebd',
    video_badge_promo: 'অফিসিয়াল প্রমো',
    video_badge_society: 'আঁটি মডেল টাউন',
    video_badge_channel: 'সকল ভিডিও',
    video_1_title: 'সুকুন প্যালেস - ১৬ তলা লাক্সারি রেসিডেন্সিয়াল প্রজেক্ট প্রমো',
    video_1_desc: '১৬ তলা সুবিশাল রাজকীয় অ্যাপার্টমেন্ট টাওয়ার, ছাদের ইনফিনিটি পুল এবং পরিবেশের ড্রামাটিক উপস্থাপনা।',
    video_2_title: 'আঁটি মডেল টাউন সোসাইটি পরিচিতি ও সুযোগ-সুবিধা',
    video_2_desc: 'প্রকল্প এলাকার সুপ্রশস্ত ৬০ ফুট এভিনিউ, কেন্দ্রীয় মসজিদ, পার্ক এবং শতভাগ সুপরিকল্পিত পরিবেশের সফর।',
    video_3_title: 'অফিসিয়াল ইউটিউব চ্যানেল (@SukoonPalacebd)',
    video_3_desc: 'নতুন প্রজেক্ট আপডেট, নির্মাণ অগ্রগতি ও ভিডিও দেখতে আমাদের অফিসিয়াল চ্যানেলটি এখনই সাবস্ক্রাইব করে রাখুন।',
    btn_play_now: 'প্লে করুন',
    btn_watch_yt: 'ইউটিউবে দেখুন',
    btn_subscribe_yt: 'চ্যানেলে সাবস্ক্রাইব করুন'
  },
  en: {
    announcement_badge: 'Pre-Booking Ongoing',
    announcement_text: 'Estimated Construction Start: November 2027 | Saf-Kabla Deed within 3-4 Working Days',
    nav_videos: 'Videos',
    nav_overview: 'Overview',
    nav_engineering: 'Engineering',
    nav_amenities: 'Amenities',
    nav_plans: 'Floor Plans',
    nav_housing: 'Ati Model Town',
    nav_location: 'Location & Map',
    nav_calculator: 'Cost Calculator',
    nav_contact: 'Contact',
    btn_brochure: 'Brochure',
    btn_site_visit: 'Site Visit',
    hero_badge_text: 'Luxury Residential Tower',
    hero_subtitle: '"Sukoon Palace — An address of grace, calm, and timeless distinction." G+15 storied 16-floor luxury high-rise condominium project on 100% dispute-free land at Ati Model Town, near Mohammadpur, Dhaka.',
    hero_btn_plans: 'View Floor Plans',
    hero_btn_book: 'Book Site Visit',
    hero_btn_download: 'Brochure (PDF)',
    stat_floors: '16 Storied Landmark Tower',
    stat_units: 'Total Exclusive Condos',
    stat_land: 'Katha Prime Corner Plot',
    stat_sizes: 'Sq. Ft. Sizes (Type A-D)',
    hero_card_1_title: 'BUET & RUET',
    hero_card_1_desc: 'Structural Design & Safety',
    hero_card_2_title: 'Rooftop Infinity Pool',
    hero_card_2_desc: '& Sky Haven Garden',
    fact_loc_title: 'Location',
    fact_loc_desc: 'Plot-02, Road-3/B, Block-C, Ati Model Society',
    fact_park_title: 'Parking Slots',
    fact_park_desc: '21 Dedicated Car Parking Slots (120 Sqft)',
    fact_lifts_title: 'Elevators & Stairs',
    fact_lifts_desc: '2 High-Speed Lifts & 2 Fire Safety Staircases',
    fact_handover_title: 'Estimated Start',
    fact_handover_desc: 'Nov 2027 (40-Month Completion Period)',
    overview_subbadge: 'Project Highlights',
    overview_heading: 'Why Sukoon Palace is Your Ideal Sanctuary?',
    overview_lead: 'If you want your family to thrive away from congested, dusty, and noisy surroundings into a serene, green, healthy, and ultra-secure modern oasis — Sukoon Palace under our shared land ownership model is your ultimate golden opportunity.',
    legal_badge_title: '100% Clear Title Land',
    legal_badge_desc: 'Verified by seasoned lawyers across 4-porchas (RS ongoing). Saf-Kabla deed handover opportunity within 3-4 working days.',
    feat_1_title: 'Structural Engineering by BUET & RUET Experts',
    feat_1_desc: 'Designed strictly according to BNBC codes by BUET architects and RUET structural engineers to ensure maximum earthquake resilience.',
    feat_2_title: '"A Slice of Green Forest" Nature Concept',
    feat_2_desc: 'Lush greenery thoughtfully woven into the reception lobby, common spaces, ground floor, walkway, sky terrace, and private verandas.',
    feat_3_title: 'Multi-Tier Security & Active Fire Safety',
    feat_3_desc: 'Township central security perimeter, combined with Sukoon Palace\'s private boundary, dual guard posts, 24/7 CCTV, and floor-wise fire systems.',
    feat_4_title: 'Tremendous Savings with Land Share Model',
    feat_4_desc: 'Purchase your legitimate land share directly with immediate Saf-Kabla deed registration, then pay pure construction costs in convenient monthly installments.',
    spec_land_title: 'Total Land Area',
    spec_land_val: '11.10 Katha',
    spec_land_sub: '(18.31 Shatak)',
    spec_height_title: 'Building Height',
    spec_height_val: 'G + 15 = 16 Floors',
    spec_height_sub: 'Ground Floor Parking',
    spec_units_title: 'Units per Floor',
    spec_units_val: '4 Units',
    spec_units_sub: 'Optimal Cross-Breeze',
    spec_total_title: 'Total Apartments',
    spec_total_val: '60 Units',
    spec_total_sub: '3 Bed & 3 Bath Luxury',
    spec_roads_title: 'Adjoining Roads',
    spec_roads_val: "20' & 30' Roads",
    spec_roads_sub: 'L-Shaped Corner Plot',
    spec_power_title: 'Power Backup',
    spec_power_val: '24/7 Power Supply',
    spec_power_sub: 'Solar + Substation + Gen',
    amenities_subbadge: 'World-Class Amenities',
    amenities_heading: 'Every Element of Regal Living Included',
    amenities_lead: 'Sukoon Palace is far more than a residential building; it is a holistic wellness and leisure sanctuary designed meticulously from rooftop to ground.',
    tab_rooftop: 'Rooftop Sky Haven',
    tab_ground: 'Ground Floor & Facilities',
    tab_apartment: 'Apartment Features',
    tab_housing: 'Ati Model Town Township',
    showcase_rooftop_badge: 'Exclusive Sky Sanctuary',
    rooftop_title: 'On the Rooftop Sky Terrace:',
    rooftop_desc: 'Unwind with your family amidst refreshing breezes in our private resort-style rooftop amenity complex.',
    rf_1: 'Rooftop Infinity Swimming Pool & Sun Deck',
    rf_2: 'Lush Landscaped Sky Garden',
    rf_3: 'Fully-Equipped Fitness Gymnasium',
    rf_4: 'Indoor Sports & Recreation Room',
    rf_5: 'Quiet Library & Study Room',
    rf_6: 'Dedicated Community Prayer Room',
    rf_7: 'Safe Children\'s Play Zone',
    rf_8: 'Open-Air Rooftop BBQ Terrace',
    rf_9: 'Multipurpose Community Hall for Family Gatherings',
    rf_10: 'Entertainment & Leisure Lounge',
    showcase_ground_badge: '21 Secure Parking Slots',
    ground_title: 'Ground Floor & Common Infrastructure:',
    ground_desc: 'From wide welcoming gateways to everyday conveniences, designed for effortless elegance.',
    gf_1: '2 Wide Gated Entrances',
    gf_2: '2 24/7 Security Guard Posts',
    gf_3: 'Common Waiting & Guest Reception Lounge',
    gf_4: 'In-House Professional Laundry Shop',
    gf_5: 'Hygienic Designated Sacrificial (Qurbani) Zone',
    gf_6: '21 Reserved Car Parking Spaces (120 Sq. Ft. each)',
    gf_7: 'Dedicated Substation & Generator Room',
    gf_8: '24/7 Solar Power Augmentation',
    gf_9: 'Continuous CCTV Surveillance Coverage',
    gf_10: 'Full Fire Hydrant & Life-Safety Network',
    showcase_apt_badge: '3-Bed & 3-Bath Specifications',
    apt_title: 'Every Apartment Features:',
    apt_desc: 'Maximized privacy, expansive cross-ventilation, and generous natural daylight throughout every living quarter.',
    apt_1: '3 Expansive Bedrooms',
    apt_2: '3 Bathrooms (2 Attached & 1 Common)',
    apt_3: '1 Contemporary Gourmet Kitchen',
    apt_4: '1 Grand Formal Drawing Room',
    apt_5: '1 Well-Appointed Family Dining Space',
    apt_6: '2 to 3 Scenic Open Verandas',
    apt_7: 'Glass Wall Separation for Drawing & Dining',
    apt_8: 'Unobstructed Cross-Breeze & Natural Daylight',
    showcase_town_badge: 'Self-Sustaining Green Township',
    town_title: 'Ati Model Town Megaproject Amenities:',
    town_desc: 'A futuristic master-planned eco-smart township equipped with every international urban amenity.',
    tw_1: '80 Ft, 30 Ft & 20 Ft Paved Roads with Footpaths',
    tw_2: '300-Katha Central Business District (CBD) Shopping Mall',
    tw_3: '180 Katha Dedicated to Parks, Playgrounds & Sports Turfs',
    tw_4: 'Twin Waterfront Walkways & Cycling Tracks on Natural Lake',
    tw_5: '160-Katha Super-Specialty Modern Hospital (Designated)',
    tw_6: 'Township Private Shuttle Bus Transit Service',
    tw_7: 'Central Public Library & Senior Citizens Club',
    tw_8: 'Police Station, Fire Station & Central Control Station',
    plans_subbadge: 'Floor & Unit Layouts',
    plans_heading: 'Select Your Dream Apartment',
    plans_lead: 'Sukoon Palace offers 4 uniquely oriented apartment types on each typical floor, delivering maximum privacy and scenic vistas.',
    click_to_zoom: 'Click to Enlarge / Zoom',
    label_land_share: 'Land Share Entitlement',
    label_bed_bath: 'Beds & Baths',
    label_veranda: 'Verandas',
    label_kitchen: 'Living & Dining',
    room_dimensions_title: 'Exact Room Measurements',
    th_room: 'Space / Room',
    th_size: 'Dimensions (L x W)',
    th_facility: 'Attached Features',
    btn_calc_this: 'Calculate Installments',
    btn_book_this: 'Book This Unit',
    calc_subbadge: 'Flexible Investment & Payment Plan',
    calc_heading: 'Smart Installment & Budget Calculator',
    calc_lead: 'Our direct land share and installment system eliminates developer margins. Compute your custom financial forecast in seconds.',
    calc_lbl_unit: 'Choose Apartment Type',
    calc_lbl_parking: 'Car Parking Slot Required? (120 Sqft)',
    opt_parking_yes: 'Yes, include 1 dedicated car parking space',
    opt_parking_no: 'No parking required',
    calc_lbl_duration: 'Construction Installment Duration (Months)',
    calc_lbl_down: 'Initial Land Share / Down Payment Ratio',
    calc_disclaimer: '* Note: Land share is purchased upfront with deed registration. Construction cost is shared equally and paid in monthly installments during the construction timeline.',
    calc_summary_title: 'Budget & Payment Breakdown',
    calc_met_unit: 'Selected Apartment:',
    calc_met_share: 'Entitled Land Share:',
    calc_met_parking: 'Car Parking:',
    calc_met_down: 'Initial Land Share & Booking:',
    calc_met_remaining: 'Remaining Construction Cost:',
    calc_met_monthly: 'Estimated Monthly Installment:',
    btn_quotation: 'Get Official Quotation',
    housing_subbadge: 'Master-Planned Residential Township',
    housing_heading: 'Ati Model Town — Blueprint of Modern Living',
    housing_lead: 'Nestled near Mohammadpur and Bosila, a green eco-smart haven where your family enjoys fresh clean air and uncompromised security.',
    tag_mosque: 'Central Jame Mosque',
    card_mosque_title: 'Central Society Mosque',
    card_mosque_desc: 'Located just a 10-minute walk from Sukoon Palace, showcasing stunning Islamic architecture and tranquil prayer halls.',
    tag_sports: '180 Katha Sports Zone',
    card_park_title: 'Parks, Playgrounds & Sports Turf',
    card_park_desc: 'Block-wise community parks, expansive football & cricket fields, and active modern turfs.',
    tag_campus: 'Educational Hub',
    card_campus_title: 'Schools, Colleges & Madrasas',
    card_campus_desc: 'Reputed English medium schools, colleges, and renowned educational institutions in close proximity.',
    tag_cbd: '300 Katha Shopping Mall',
    card_mall_title: 'Central Business District (CBD)',
    card_mall_desc: 'Megasized shopping center, premier retail brands, cineplex, and financial bank branches on 300 Katha.',
    inf_1_t: 'Spacious Roads & Paved Footpaths',
    inf_1_d: '80ft, 30ft, and 20ft wide paved avenues with planned one-way traffic management.',
    inf_2_t: 'Natural Lake & Twin Walkways',
    inf_2_d: 'Scenic waterfront walking trails and cycling tracks surrounding the serene lake.',
    inf_3_t: 'Modern Hospital on 160 Katha',
    inf_3_d: 'Dedicated land reserved for multi-specialty healthcare and 24/7 medical emergencies.',
    inf_4_t: 'Township Private Bus Service',
    inf_4_d: 'Regular shuttle bus service connecting directly to key hubs across Dhaka.',
    inf_5_t: 'Abundant Fruit Orchards',
    inf_5_d: 'Avenues lined with diverse fruiting trees whose harvests belong to residents.',
    inf_6_t: 'Police & Fire Station Support',
    inf_6_d: 'Dedicated law enforcement and emergency response infrastructure within the township.',
    loc_subbadge: 'Strategic Connectivity',
    loc_heading: 'Minutes Away from Mohammadpur & Central Dhaka',
    loc_lead: 'Directly linked to 9 government arterial highways. Fast, effortless commute to Mohammadpur, Dhanmondi, and Mawa Expressway.',
    loc_commute_title: 'Commute Times to Major Hubs:',
    com_1_d: 'Central Society Jame Mosque',
    com_1_t: '10 Minutes Walk',
    com_2_d: 'Bosila Garden City (40ft Main Road)',
    com_2_t: '5 Minutes Drive',
    com_3_d: 'Mohammadpur Bus Stand / Town Hall',
    com_3_t: '12 - 15 Minutes',
    com_4_d: 'Dhanmondi (Road 27 / Jigatola)',
    com_4_t: '15 - 20 Minutes',
    com_5_d: 'Mawa Expressway & Padma Bridge Link',
    com_5_t: 'Direct, congestion-free arterial route',
    com_6_d: '80 Ft Laboni Point Connecting Avenue',
    com_6_t: 'Under construction (opening shortly)',
    office_addr_title: 'Corporate & Site Office:',
    office_addr_desc: 'Chandrima Halkar Par, Bosila Garden City, 40 Ft Main Road, Bosila, Mohammadpur, Dhaka.',
    timeline_subbadge: 'Project Roadmap',
    timeline_heading: 'Homeownership in 4 Clear, Transparent Steps',
    step_1_title: 'Unit & Land Share Booking',
    step_1_desc: 'Select your preferred floor and layout (Type A/B/C/D) to initiate booking.',
    step_2_title: 'Saf-Kabla Land Deed Registration',
    step_2_desc: 'Within 3 to 4 working days of land share purchase, obtain your registered Saf-Kabla title deed handover at the sub-registry office.',
    step_3_title: 'Construction Kick-Off (Nov 2027)',
    step_3_desc: 'Piling and foundation commence under full supervision of BUET & RUET structural experts.',
    step_4_title: 'Key Handover in 40 Months',
    step_4_desc: 'Settle remaining building costs in comfortable monthly installments and receive your keys.',
    gallery_subbadge: 'Visual Experience',
    gallery_heading: '3D Architectural Renders & Photography',
    gal_all: 'All Visuals',
    gal_ext: 'Exterior Tower',
    gal_roof: 'Rooftop Haven',
    gal_int: 'Interior Views',
    gal_comm: 'Community',
    gal_img_1: '16-Storied Majestic Facade View',
    gal_img_2: 'Dramatic Architectural Perspective',
    gal_img_3: 'Rooftop Infinity Swimming Pool & Deck',
    gal_img_4: 'Panoramic Glass-Walled Living Lounge',
    gal_img_5: 'Luxury Master Bedroom & Balcony',
    gal_img_6: 'Society Central Jame Mosque',
    gal_img_7: '180-Katha Sports Turf & Community Park',
    gal_img_8: '300-Katha Megamall Shopping Hub',
    faq_subbadge: 'Frequently Asked Questions',
    faq_heading: 'Everything You Need to Know',
    faq_q1: '1. Are the land documents 100% verified and free of dispute?',
    faq_a1: 'Yes, absolutely. The project is situated on fully clear, undisputed land inside Ati Model Town Housing. All four historic records (CS, SA, and current RS survey) have been thoroughly verified by legal counsels. Saf-Kabla title deed registration handover opportunity directly in your name within 3 to 4 working days of purchasing land share.',
    faq_q2: '2. When will construction begin and what is the handover duration?',
    faq_a2: 'Physical construction is scheduled to commence in November 2027. The estimated construction duration is 40 months from the start date (with an additional 6-month grace period).',
    faq_q3: '3. How does the shared land ownership model work?',
    faq_a3: 'You initially purchase the proportionate land share (Type A: 218.4 sqft, Type B/C/D: 193.6 sqft) and receive registered deed ownership. Next, actual construction expenses are divided proportionally and paid in transparent monthly installments during construction, saving you up to 35-45% compared to commercial developer pricing.',
    faq_q4: '4. Who engineered the structural and architectural design?',
    faq_a4: 'The project\'s structural architecture is engineered by prominent architects from BUET and seasoned structural engineers from RUET, strictly obeying BNBC seismic standards and life-safety codes.',
    faq_q5: '5. What utilities and backup power are provided?',
    faq_a5: 'The tower includes a high-capacity electrical substation, soundproof commercial generator, rooftop solar panel array for common services, deep tube-well water supply, and modern water storage systems.',
    faq_q6: '6. What amenities can my family enjoy on the rooftop and ground floor?',
    faq_a6: 'Residents enjoy an infinity swimming pool, fitness gym, sky garden, indoor games, quiet library, prayer room, barbecue terrace, kids\' play zone, community banquet hall, 21 car parking spaces, and double security checkpoints.',
    booking_title: 'Reserve Your Dream Residence Today',
    booking_desc: 'Visit our project site and consult with our senior advisors to secure your preferred unit.',
    lbl_hotline: 'Hotline & Booking Contact:',
    lbl_wa: 'WhatsApp Support:',
    lbl_site_addr: 'Project Location:',
    lbl_site_office: 'Corporate & Sales Office:',
    form_title: 'Site Visit & Booking Request',
    f_name: 'Full Name *',
    f_phone: 'Mobile Number *',
    f_email: 'Email Address (Optional)',
    f_unit: 'Preferred Unit Type',
    f_parking: 'Car Parking Required?',
    f_date: 'Preferred Date of Site Visit',
    f_msg: 'Questions or Special Notes',
    btn_submit_form: 'Submit Request',
    help_title: 'Speak Directly with Our Project Consultants',
    help_desc: 'Our relationship directors are ready to assist you seven days a week.',
    footer_tagline: 'Live Beyond Luxury, Live in Sukoon. An address of timeless grace, serenity, and lifelong heritage at Ati Model Town, Keraniganj, Dhaka.',
    f_col_quick: 'Quick Navigation',
    f_col_units: 'Apartment Categories',
    f_col_contact: 'Contact & Addresses',
    f_terms: 'Terms of Service',
    f_privacy: 'Privacy Policy',
    f_brochure_view: 'View Brochure',
    tick_24m: '24 Months',
    tick_36m: '36 Months',
    tick_40m: '40 Months (Brochure Plan)',
    tick_48m: '48 Months',
    tick_20p: '20%',
    tick_30p: '30%',
    tick_40p: '40%',
    tick_50p: '50%',
    step_num_1: '01',
    step_num_2: '02',
    step_num_3: '03',
    step_num_4: '04',
    phone_1: '01914-514019',
    phone_2: '01757-031440',
    phone_3: '01516-160698',
    addr_site_val: 'Plot-02, Road-3/B, Block-C, Ati Model Society, Keraniganj, Dhaka-1312.',
    addr_office_val: 'Chandrima Halkar Par, Bosila Garden City, 40 Ft Main Road, Bosila, Mohammadpur, Dhaka.',
    btn_wa_chat: 'Chat on WhatsApp',
    f_cat_1: 'Type A: 1600 Sqft (3 Bed, 3 Bath, 3 Veranda)',
    f_cat_2: 'Type B: 1419 Sqft (3 Bed, 3 Bath, 2 Veranda)',
    f_cat_3: 'Type C: 1419 Sqft (3 Bed, 3 Bath, 2 Veranda)',
    f_cat_4: 'Type D: 1419 Sqft (3 Bed, 3 Bath, 2 Veranda)',
    f_cat_5: 'Ground Floor Car Parking (21 Slots)',
    f_cat_6: 'Download Brochure (PDF)',
    f_addr_site: 'Plot-02, Road-3/B, Block-C, Ati Model Society, Keraniganj, Dhaka-1312.',
    f_addr_office: 'Chandrima Halkar Par, Bosila Garden City, 40 Ft Main Road, Mohammadpur, Dhaka.',
    f_phones: '01914-514019 / 01757-031440 / 01516-160698',
    f_copyright: '© 2026 Sukoon Palace. All Rights Reserved.',
    tip_wa: 'WhatsApp Chat',
    tip_call: 'Call Directly',
    modal_success_title: 'Thank You! Your Request Has Been Received',
    modal_success_desc: 'Our senior relationship officer will contact you shortly to coordinate your site visit.',
    modal_btn_close: 'Got It',
    video_subbadge: 'Official Video Gallery',
    video_heading: 'Sukoon Palace Video Stories & Site Tour',
    video_lead: 'Experience the grandeur of Sukoon Palace and Ati Model Town through our official YouTube video showcase.',
    video_channel_badge: 'YouTube Channel: @SukoonPalacebd',
    video_badge_promo: 'Official Promo',
    video_badge_society: 'Ati Model Town',
    video_badge_channel: 'All Videos',
    video_1_title: 'Sukoon Palace - 16-Storied Luxury Condominium Promo',
    video_1_desc: 'A visual walkthrough of the landmark residential tower, rooftop infinity pool, and serene green living.',
    video_2_title: 'Ati Model Town - Master-Planned Community Tour',
    video_2_desc: 'Explore the 60ft wide society avenue, central mosque, greenery, and scenic residential security.',
    video_3_title: 'Official YouTube Channel (@SukoonPalacebd)',
    video_3_desc: 'Subscribe to our official YouTube channel for regular construction updates and video tours.',
    btn_play_now: 'Play Video',
    btn_watch_yt: 'Watch on YouTube',
    btn_subscribe_yt: 'Subscribe on YouTube'
  }
};

let currentLang = 'bn';

// --- 3. DOM READY INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initNavigation();
  initVideoCarousel();
  initFloorPlanExplorer();
  initAmenitiesTabs();
  initCostCalculator();
  initGalleryFilter();
  initLightbox();
  initFaqAccordion();
  initBookingForm();
  initBackToTop();
});

// --- 4. LANGUAGE SWITCHER ---
function initLanguageToggle() {
  const langToggleBtn = document.getElementById('langToggleBtn');
  const currentLangLabel = document.getElementById('currentLangLabel');

  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'bn' ? 'en' : 'bn';
    document.documentElement.lang = currentLang;
    currentLangLabel.textContent = currentLang === 'bn' ? 'English' : 'বাংলা';

    applyTranslations();
    updatePlanDisplay(currentActivePlan);
    calculateCosts();
  });
}

function applyTranslations() {
  const t = TRANSLATIONS[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Top Phone Numbers
  const topPhone1 = document.getElementById('topPhone1');
  const topPhone2 = document.getElementById('topPhone2');
  if (topPhone1) topPhone1.textContent = currentLang === 'bn' ? '০১৯১৪-৫১৪০১৯' : '01914-514019';
  if (topPhone2) topPhone2.textContent = currentLang === 'bn' ? '০১৭৫৭-০৩১৪৪০' : '01757-031440';

  // Calculator Select Options
  const calcUnitType = document.getElementById('calcUnitType');
  if (calcUnitType) {
    if (currentLang === 'bn') {
      calcUnitType.options[0].text = 'Type A - 1600 Sq. Ft. (জমির শেয়ার: ২১৮.৪ ব.ফু.)';
      calcUnitType.options[1].text = 'Type B - 1419 Sq. Ft. (জমির শেয়ার: ১৯৩.৬ ব.ফু.)';
      calcUnitType.options[2].text = 'Type C - 1419 Sq. Ft. (জমির শেয়ার: ১৯৩.৬ ব.ফু.)';
      calcUnitType.options[3].text = 'Type D - 1419 Sq. Ft. (জমির শেয়ার: ১৯৩.৬ ব.ফু.)';
    } else {
      calcUnitType.options[0].text = 'Type A - 1600 Sq. Ft. (Land Share: 218.4 Sqft)';
      calcUnitType.options[1].text = 'Type B - 1419 Sq. Ft. (Land Share: 193.6 Sqft)';
      calcUnitType.options[2].text = 'Type C - 1419 Sq. Ft. (Land Share: 193.6 Sqft)';
      calcUnitType.options[3].text = 'Type D - 1419 Sq. Ft. (Land Share: 193.6 Sqft)';
    }
  }

  // Booking Form Selects
  const clientUnit = document.getElementById('clientUnit');
  if (clientUnit) {
    if (currentLang === 'bn') {
      clientUnit.options[0].text = 'Type A - 1600 Sft (Corner Unit)';
      clientUnit.options[1].text = 'Type B - 1419 Sft';
      clientUnit.options[2].text = 'Type C - 1419 Sft';
      clientUnit.options[3].text = 'Type D - 1419 Sft';
      clientUnit.options[4].text = 'সিদ্ধান্ত নেইনি / পরামর্শ চাই';
    } else {
      clientUnit.options[0].text = 'Type A - 1600 Sft (Corner Unit)';
      clientUnit.options[1].text = 'Type B - 1419 Sft';
      clientUnit.options[2].text = 'Type C - 1419 Sft';
      clientUnit.options[3].text = 'Type D - 1419 Sft';
      clientUnit.options[4].text = 'Undecided / Need Consultation';
    }
  }

  const clientParkingReq = document.getElementById('clientParkingReq');
  if (clientParkingReq) {
    if (currentLang === 'bn') {
      clientParkingReq.options[0].text = 'হ্যাঁ, ১টি ডেডিকেটেড পার্কিং প্রয়োজন';
      clientParkingReq.options[1].text = 'না, প্রয়োজন নেই';
    } else {
      clientParkingReq.options[0].text = 'Yes, 1 dedicated parking slot needed';
      clientParkingReq.options[1].text = 'No, parking not required';
    }
  }

  // Booking Form Placeholders
  const clientName = document.getElementById('clientName');
  const clientPhone = document.getElementById('clientPhone');
  const clientEmail = document.getElementById('clientEmail');
  const clientMessage = document.getElementById('clientMessage');
  if (clientName) clientName.placeholder = currentLang === 'bn' ? 'উদাঃ মোঃ আনিসুর রহমান' : 'e.g. Md. Anisur Rahman';
  if (clientPhone) clientPhone.placeholder = currentLang === 'bn' ? 'উদাঃ 017xxxxxxxx' : 'e.g. +88017xxxxxxxx';
  if (clientEmail) clientEmail.placeholder = 'name@example.com';
  if (clientMessage) clientMessage.placeholder = currentLang === 'bn' ? 'আপনার কোনো নির্দিষ্ট চাহিদা বা প্রশ্ন থাকলে লিখুন...' : 'Write any specific inquiries or preferences...';

  // Slider dynamic labels
  const calcMonths = document.getElementById('calcMonths');
  const calcMonthsVal = document.getElementById('calcMonthsVal');
  const calcDownRatio = document.getElementById('calcDownPaymentRatio');
  const calcDownVal = document.getElementById('calcDownVal');
  if (calcMonths && calcMonthsVal) {
    calcMonthsVal.textContent = currentLang === 'bn' ? `${formatBnNumber(calcMonths.value)} মাস` : `${calcMonths.value} Months`;
  }
  if (calcDownRatio && calcDownVal) {
    calcDownVal.textContent = currentLang === 'bn' ? `${formatBnNumber(calcDownRatio.value)}%` : `${calcDownRatio.value}%`;
  }

  // Dynamic Document Title
  document.title = currentLang === 'bn' 
    ? 'সুকুন প্যালেস | Sukoon Palace - Live Beyond Luxury' 
    : 'Sukoon Palace | Live Beyond Luxury - Official Website';
}

// --- 5. NAVIGATION & SCROLL ---
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('open');
  });

  // Auto-close menu on link click
  document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileMenuBtn.classList.remove('open');
    });
  });

  // Close when clicking outside mobile menu
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      navMenu.classList.remove('active');
      mobileMenuBtn.classList.remove('open');
    }
  });
}

// --- 6. FLOOR PLAN EXPLORER ---
let currentActivePlan = 'plan-a';

function initFloorPlanExplorer() {
  const planTabs = document.querySelectorAll('.plan-tab');
  const currentPlanImg = document.getElementById('currentPlanImg');

  planTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      planTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const planKey = tab.getAttribute('data-plan');
      currentActivePlan = planKey;
      updatePlanDisplay(planKey);
    });
  });

  // Initial populate with Plan A
  updatePlanDisplay('plan-a');

  // Pre-select unit when clicking 'Book this unit' from floor plan
  const bookThisPlanBtn = document.getElementById('bookThisPlanBtn');
  if (bookThisPlanBtn) {
    bookThisPlanBtn.addEventListener('click', () => {
      const clientUnit = document.getElementById('clientUnit');
      if (clientUnit) {
        if (currentActivePlan === 'plan-a') clientUnit.value = 'Type A (1600 Sft)';
        else if (currentActivePlan === 'plan-b') clientUnit.value = 'Type B (1419 Sft)';
        else if (currentActivePlan === 'plan-c') clientUnit.value = 'Type C (1419 Sft)';
        else if (currentActivePlan === 'plan-d') clientUnit.value = 'Type D (1419 Sft)';
      }
    });
  }

  // Click image to zoom in Lightbox
  if (currentPlanImg) {
    currentPlanImg.parentElement.addEventListener('click', () => {
      const data = PLAN_DATA[currentActivePlan];
      const caption = currentLang === 'bn' ? data.titleBn : data.titleEn;
      openLightbox(data.imgSrc, caption);
    });
  }
}

function updatePlanDisplay(planKey) {
  const data = PLAN_DATA[planKey];
  if (!data) return;

  const planImg = document.getElementById('currentPlanImg');
  const planUnitBadge = document.getElementById('planUnitBadge');
  const planSizeBadge = document.getElementById('planSizeBadge');
  const planTitle = document.getElementById('planTitle');
  const planDesc = document.getElementById('planDesc');
  const planLandShare = document.getElementById('planLandShare');
  const planBedBath = document.getElementById('planBedBath');
  const planVeranda = document.getElementById('planVeranda');
  const planLiving = document.getElementById('planLiving');
  const dimensionsTableBody = document.getElementById('dimensionsTableBody');

  if (planImg) {
    planImg.src = data.imgSrc;
    planImg.alt = currentLang === 'bn' ? data.titleBn : data.titleEn;
  }
  if (planUnitBadge) planUnitBadge.textContent = data.badge;
  if (planSizeBadge) planSizeBadge.textContent = data.sizeBadge;
  if (planTitle) planTitle.textContent = currentLang === 'bn' ? data.titleBn : data.titleEn;
  if (planDesc) planDesc.textContent = currentLang === 'bn' ? data.descBn : data.descEn;
  if (planLandShare) planLandShare.textContent = currentLang === 'bn' ? data.landShareBn : data.landShareEn;
  if (planBedBath) planBedBath.textContent = currentLang === 'bn' ? data.bedBathBn : data.bedBathEn;
  if (planVeranda) planVeranda.textContent = currentLang === 'bn' ? data.verandaBn : data.verandaEn;
  if (planLiving) planLiving.textContent = currentLang === 'bn' ? data.livingBn : data.livingEn;

  // Build Dimensions Table rows
  if (dimensionsTableBody) {
    dimensionsTableBody.innerHTML = '';
    data.rooms.forEach(r => {
      const tr = document.createElement('tr');
      const name = currentLang === 'bn' ? r.nameBn : r.nameEn;
      const feat = currentLang === 'bn' ? r.featBn : r.featEn;
      tr.innerHTML = `
        <td><strong>${name}</strong></td>
        <td><code class="size-code">${r.size}</code></td>
        <td>${feat}</td>
      `;
      dimensionsTableBody.appendChild(tr);
    });
  }
}

// --- 7. AMENITIES TABS ---
function initAmenitiesTabs() {
  const tabBtns = document.querySelectorAll('.amenity-tab-btn');
  const tabContents = document.querySelectorAll('.amenity-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      const targetContent = document.getElementById(`tab-${cat}`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// --- 8. SMART COST & INSTALLMENT CALCULATOR ---
function initCostCalculator() {
  const calcUnitType = document.getElementById('calcUnitType');
  const calcParking = document.getElementById('calcParking');
  const calcMonths = document.getElementById('calcMonths');
  const calcMonthsVal = document.getElementById('calcMonthsVal');
  const calcDownRatio = document.getElementById('calcDownPaymentRatio');
  const calcDownVal = document.getElementById('calcDownVal');
  const sendCalcToFormBtn = document.getElementById('sendCalcToFormBtn');

  // Initialize slider labels
  if (calcMonths && calcMonthsVal) {
    calcMonthsVal.textContent = currentLang === 'bn' ? `${formatBnNumber(calcMonths.value)} মাস` : `${calcMonths.value} Months`;
  }
  if (calcDownRatio && calcDownVal) {
    calcDownVal.textContent = currentLang === 'bn' ? `${formatBnNumber(calcDownRatio.value)}%` : `${calcDownRatio.value}%`;
  }

  // Sync Slider outputs
  calcMonths.addEventListener('input', () => {
    const val = calcMonths.value;
    calcMonthsVal.textContent = currentLang === 'bn' ? `${formatBnNumber(val)} মাস` : `${val} Months`;
    calculateCosts();
  });

  calcDownRatio.addEventListener('input', () => {
    const val = calcDownRatio.value;
    calcDownVal.textContent = currentLang === 'bn' ? `${formatBnNumber(val)}%` : `${val}%`;
    calculateCosts();
  });

  calcUnitType.addEventListener('change', calculateCosts);
  calcParking.addEventListener('change', calculateCosts);

  // Send to booking form
  if (sendCalcToFormBtn) {
    sendCalcToFormBtn.addEventListener('click', () => {
      const selectedUnitText = calcUnitType.options[calcUnitType.selectedIndex].getAttribute('data-type');
      const clientUnit = document.getElementById('clientUnit');
      const clientParkingReq = document.getElementById('clientParkingReq');

      if (clientUnit) {
        if (selectedUnitText === 'Type A') clientUnit.value = 'Type A (1600 Sft)';
        else if (selectedUnitText === 'Type B') clientUnit.value = 'Type B (1419 Sft)';
        else if (selectedUnitText === 'Type C') clientUnit.value = 'Type C (1419 Sft)';
        else if (selectedUnitText === 'Type D') clientUnit.value = 'Type D (1419 Sft)';
      }

      if (clientParkingReq) {
        clientParkingReq.value = calcParking.value === 'yes' ? 'Yes' : 'No';
      }

      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Initial calculation
  calculateCosts();
}

function calculateCosts() {
  const calcUnitType = document.getElementById('calcUnitType');
  const calcParking = document.getElementById('calcParking');
  const calcMonths = document.getElementById('calcMonths');
  const calcDownRatio = document.getElementById('calcDownPaymentRatio');

  if (!calcUnitType || !calcParking || !calcMonths || !calcDownRatio) return;

  const isTypeA = calcUnitType.value === '1600';
  const sizeSqft = isTypeA ? 1600 : 1419;
  const landShareSqft = isTypeA ? 218.4 : 193.6;
  const unitTypeName = isTypeA ? 'Type A (1600 Sft)' : `Type ${calcUnitType.value.split('-')[1]} (1419 Sft)`;
  const hasParking = calcParking.value === 'yes';
  const months = parseInt(calcMonths.value, 10);
  const downRatio = parseInt(calcDownRatio.value, 10) / 100.0;

  // Realistic Land share & construction rate estimation in Ati Model Town
  // Land share cost approx: ~7,500 BDT per sqft of land share
  // Construction cost approx: ~2,500 BDT per sqft of build area
  const landShareBase = landShareSqft * 7500;
  const parkingCost = hasParking ? 450000 : 0; // 120 sqft dedicated spot
  const constructionBase = sizeSqft * 2500;

  const totalEstimatedCost = landShareBase + parkingCost + constructionBase;
  const initialDownPayment = Math.round(totalEstimatedCost * downRatio);
  const remainingCost = totalEstimatedCost - initialDownPayment;
  const monthlyInstallment = Math.round(remainingCost / months);

  // Update Result Elements
  const resUnitName = document.getElementById('resUnitName');
  const resLandShare = document.getElementById('resLandShare');
  const resParkingStatus = document.getElementById('resParkingStatus');
  const resDownPayment = document.getElementById('resDownPayment');
  const resRemainingCost = document.getElementById('resRemainingCost');
  const resMonthlyInstallment = document.getElementById('resMonthlyInstallment');
  const resMonthsSummary = document.getElementById('resMonthsSummary');

  if (resUnitName) resUnitName.textContent = unitTypeName;
  if (resLandShare) {
    resLandShare.textContent = currentLang === 'bn' ? `${formatBnNumber(landShareSqft)} বর্গফুট` : `${landShareSqft} Sq. Ft.`;
  }
  if (resParkingStatus) {
    if (hasParking) {
      resParkingStatus.textContent = currentLang === 'bn' ? 'অন্তর্ভুক্ত (১টি স্পেস)' : 'Included (1 Slot)';
    } else {
      resParkingStatus.textContent = currentLang === 'bn' ? 'প্রয়োজন নেই' : 'Not Included';
    }
  }

  if (resDownPayment) {
    resDownPayment.textContent = formatCurrency(initialDownPayment);
  }
  if (resRemainingCost) {
    resRemainingCost.textContent = formatCurrency(remainingCost);
  }
  if (resMonthlyInstallment) {
    const formattedPrice = formatCurrency(monthlyInstallment);
    const perMonthLabel = currentLang === 'bn' ? '/মাস' : '/mo';
    resMonthlyInstallment.innerHTML = `${formattedPrice} <small>${perMonthLabel}</small>`;
  }
  if (resMonthsSummary) {
    resMonthsSummary.textContent = currentLang === 'bn'
      ? `${formatBnNumber(months)} মাসের সমান কিস্তিতে`
      : `Equally divided over ${months} Months`;
  }
}

function formatCurrency(amount) {
  if (currentLang === 'bn') {
    return `৳ ${formatBnNumber(amount.toLocaleString('en-IN'))}`;
  }
  return `BDT ${amount.toLocaleString('en-US')}`;
}

function formatBnNumber(numStr) {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return numStr.toString().replace(/[0-9]/g, d => bnDigits[d]);
}

// --- 9. GALLERY FILTER ---
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      galleryCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Lightbox on gallery click
  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const caption = card.querySelector('.gallery-overlay span');
      if (img) {
        openLightbox(img.src, caption ? caption.textContent : '');
      }
    });
  });
}

// --- 10. LIGHTBOX MODAL ---
function initLightbox() {
  const modal = document.getElementById('imageLightboxModal');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const backdrop = modal ? modal.querySelector('.lightbox-backdrop') : null;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }
  if (backdrop) {
    backdrop.addEventListener('click', closeLightbox);
  }

  // Location map click zoom
  const locMapImage = document.getElementById('locMapImage');
  if (locMapImage) {
    locMapImage.parentElement.addEventListener('click', () => {
      openLightbox(locMapImage.src, 'Sukoon Palace - Strategic Location & Route Map');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

function openLightbox(src, caption) {
  const modal = document.getElementById('imageLightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  if (modal && lightboxImg) {
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('imageLightboxModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- 11. FAQ ACCORDION ---
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(i => {
        i.classList.remove('open');
        const ans = i.querySelector('.faq-answer');
        if (ans) ans.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        if (answer) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      }
    });
  });

  // Open first item by default
  if (faqItems.length > 0) {
    faqItems[0].classList.add('open');
    const firstAns = faqItems[0].querySelector('.faq-answer');
    if (firstAns) {
      firstAns.style.maxHeight = firstAns.scrollHeight + 'px';
    }
  }
}

// --- 12. BOOKING FORM SUBMISSION ---
function initBookingForm() {
  const form = document.getElementById('siteVisitForm');
  const successModal = document.getElementById('successModal');
  const closeSuccessBtn = document.getElementById('closeSuccessModalBtn');
  const visitDate = document.getElementById('visitDate');

  if (visitDate) {
    const today = new Date().toISOString().split('T')[0];
    visitDate.min = today;
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const phone = document.getElementById('clientPhone').value.trim();
      const unit = document.getElementById('clientUnit').value;

      if (!name || !phone) {
        alert(currentLang === 'bn' ? 'অনুগ্রহ করে আপনার নাম ও ফোন নম্বর দিন।' : 'Please enter your name and phone number.');
        return;
      }

      // Show success modal
      if (successModal) {
        const descEl = document.getElementById('modalSuccessDesc');
        if (descEl) {
          descEl.textContent = currentLang === 'bn'
            ? `সম্মানিত ${name}, আপনার আবেদনটি সফলভাবে গৃহীত হয়েছে (${unit})। আমাদের সিনিয়র রিলেশনশিপ অফিসার শীঘ্রই ${phone} নম্বরে যোগাযোগ করবেন।`
            : `Dear ${name}, your site visit request for ${unit} has been received. Our senior consultant will connect with you at ${phone} promptly.`;
        }
        successModal.classList.add('active');
      }

      form.reset();
      if (visitDate) visitDate.min = new Date().toISOString().split('T')[0];
    });
  }

  if (closeSuccessBtn && successModal) {
    closeSuccessBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
    });
  }

  // Close modal when clicking on backdrop
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('active');
      }
    });
  }
}

// --- 13. BACK TO TOP BUTTON ---
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- 14. YOUTUBE VIDEO CAROUSEL & MODAL PLAYER ---
function initVideoCarousel() {
  const videoTrack = document.getElementById('videoCarouselTrack');
  const navPrev = document.getElementById('videoNavPrev');
  const navNext = document.getElementById('videoNavNext');
  const videoModal = document.getElementById('videoModal');
  const videoIframe = document.getElementById('videoIframe');
  const videoModalClose = document.getElementById('videoModalClose');

  // Left/Right Arrow scrolling
  if (videoTrack && navPrev && navNext) {
    navPrev.addEventListener('click', () => {
      const scrollAmt = videoTrack.clientWidth > 600 ? 380 : 300;
      videoTrack.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
    });
    navNext.addEventListener('click', () => {
      const scrollAmt = videoTrack.clientWidth > 600 ? 380 : 300;
      videoTrack.scrollBy({ left: scrollAmt, behavior: 'smooth' });
    });
  }

  // Open Video Modal
  function openVideoModal(videoId) {
    if (!videoModal || !videoIframe) return;
    videoIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close Video Modal
  function closeVideoModal() {
    if (!videoModal || !videoIframe) return;
    videoModal.classList.remove('active');
    videoIframe.src = '';
    document.body.style.overflow = '';
  }

  // Bind click on play buttons & modal buttons
  document.querySelectorAll('.open-video-modal, .play-pulse-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const vid = btn.getAttribute('data-video-id');
      if (vid) openVideoModal(vid);
    });
  });

  // Bind click on thumbnail area (except channel hub)
  document.querySelectorAll('.video-thumb-wrap:not(.channel-thumb-wrap)').forEach((wrap) => {
    wrap.addEventListener('click', (e) => {
      // Don't trigger if clicked button directly (handled above)
      if (e.target.closest('button')) return;
      const vid = wrap.getAttribute('data-video-id');
      if (vid) openVideoModal(vid);
    });
  });

  // Close handlers
  if (videoModalClose) {
    videoModalClose.addEventListener('click', closeVideoModal);
  }

  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
      closeVideoModal();
    }
  });
}
