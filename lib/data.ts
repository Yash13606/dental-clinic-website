// Static data for the dental clinic website

export const services = [
    {
        id: "general",
        title: "General Dentistry",
        description: "Comprehensive oral health care including routine exams, professional cleanings, digital X-rays, and preventive treatments to keep your smile healthy.",
        icon: "Stethoscope",
        features: ["Routine Exams", "Professional Cleanings", "Digital X-Rays", "Fluoride Treatments"]
    },
    {
        id: "restorative",
        title: "Restorative Dentistry",
        description: "Advanced treatments to restore damaged or missing teeth, including fillings, crowns, bridges, and dental implants for a complete, functional smile.",
        icon: "Wrench",
        features: ["Fillings", "Crowns & Bridges", "Dental Implants", "Root Canals"]
    },
    {
        id: "cosmetic",
        title: "Cosmetic Dentistry",
        description: "Transform your smile with teeth whitening, veneers, and smile makeovers designed to enhance your confidence and appearance.",
        icon: "Sparkles",
        features: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers", "Bonding"]
    },
    {
        id: "orthodontics",
        title: "Orthodontics",
        description: "Straighten your teeth and correct bite issues with traditional braces, clear aligners, and other orthodontic solutions.",
        icon: "AlignJustify",
        features: ["Traditional Braces", "Clear Aligners", "Retainers", "Bite Correction"]
    },
    {
        id: "pediatric",
        title: "Pediatric Dentistry",
        description: "Gentle, specialized dental care for children of all ages in a fun, friendly environment that makes visits enjoyable.",
        icon: "Baby",
        features: ["Child Exams", "Sealants", "Fluoride Treatments", "Early Orthodontics"]
    },
    {
        id: "emergency",
        title: "Emergency Care",
        description: "Immediate dental care for urgent situations including severe pain, broken teeth, and dental trauma. We're here when you need us.",
        icon: "AlertCircle",
        features: ["24/7 Emergency Line", "Same-Day Appointments", "Pain Relief", "Trauma Care"]
    }
];

export const teamMembers = [
    {
        id: 1,
        name: "Dr. Emily Smith",
        title: "DDS, Pediatric Dentist",
        specialty: "Pediatric Dentistry",
        bio: "Dr. Smith has 12 years of experience caring for children's dental health. She loves working with young patients and is certified in child sedation dentistry. Her gentle approach makes every visit a positive experience.",
        education: "Harvard School of Dental Medicine",
        image: "/dr-emily-smith.png"
    },
    {
        id: 2,
        name: "Dr. Michael Lee",
        title: "DDS, Cosmetic Specialist",
        specialty: "Cosmetic Dentistry",
        bio: "With over 15 years of experience, Dr. Lee specializes in smile transformations. He has completed advanced training in veneers, whitening, and full mouth reconstructions.",
        education: "UCLA School of Dentistry",
        image: "/dr-michael-lee.png"
    },
    {
        id: 3,
        name: "Dr. Sarah Johnson",
        title: "DMD, Orthodontist",
        specialty: "Orthodontics",
        bio: "Dr. Johnson is passionate about creating beautiful, healthy smiles through orthodontic treatment. She offers both traditional braces and clear aligner therapy.",
        education: "University of Pennsylvania",
        image: "/dr-sarah-johnson.png"
    },
    {
        id: 4,
        name: "Dr. James Chen",
        title: "DDS, Implant Specialist",
        specialty: "Dental Implants",
        bio: "Dr. Chen is a board-certified implant specialist with expertise in complex cases. He has placed over 2,000 successful implants and uses the latest 3D imaging technology.",
        education: "Columbia University",
        image: "/dr-james-chen.png"
    }
];

export const testimonials = [
    {
        id: 1,
        name: "Maria Garcia",
        rating: 5,
        text: "Dr. Lee and her team always make me feel at ease. My teeth have never looked better! The cosmetic work was absolutely stunning.",
        service: "Cosmetic Dentistry",
        date: "2024-11-15"
    },
    {
        id: 2,
        name: "John Doe",
        rating: 5,
        text: "Dr. Smith and her team are amazing – they made my dental care comfortable and easy! My kids actually look forward to their appointments now.",
        service: "Pediatric Care",
        date: "2024-10-28"
    },
    {
        id: 3,
        name: "Lisa Thompson",
        rating: 5,
        text: "Excellent service, friendly staff, highly recommended. The emergency care I received was prompt and professional.",
        service: "Emergency Care",
        date: "2024-11-02"
    },
    {
        id: 4,
        name: "Robert Martinez",
        rating: 5,
        text: "Dr. Chen's expertise with dental implants is remarkable. The entire process was smooth and the results exceeded my expectations.",
        service: "Dental Implants",
        date: "2024-09-20"
    },
    {
        id: 5,
        name: "Jennifer Wilson",
        rating: 5,
        text: "The orthodontic treatment transformed my smile! Dr. Johnson was patient and explained everything clearly throughout the process.",
        service: "Orthodontics",
        date: "2024-10-10"
    },
    {
        id: 6,
        name: "David Brown",
        rating: 5,
        text: "Best dental clinic I've ever been to. Professional, caring, and they use the latest technology. Highly recommend!",
        service: "General Dentistry",
        date: "2024-11-05"
    }
];

export const blogPosts = [
    {
        id: 1,
        title: "The Importance of Bi-Annual Dental Checkups",
        excerpt: "Regular dental checkups are crucial for maintaining optimal oral health. Learn why visiting your dentist twice a year can prevent serious dental issues.",
        content: "Preventive care is the foundation of good dental health...",
        author: "Dr. Emily Smith",
        date: "2024-11-01",
        category: "Preventive Care",
        image: "/blog-checkup.png",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "How to Prevent Cavities in Children",
        excerpt: "Protecting your child's teeth from cavities starts early. Discover effective strategies and habits that promote lifelong dental health.",
        content: "Cavity prevention in children requires a multi-faceted approach...",
        author: "Dr. Emily Smith",
        date: "2024-10-15",
        category: "Pediatric Dentistry",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=400&fit=crop",
        readTime: "4 min read"
    },
    {
        id: 3,
        title: "Latest Advances in Teeth Whitening",
        excerpt: "Modern teeth whitening technology offers safer, faster, and more effective results than ever before. Explore your options for a brighter smile.",
        content: "Teeth whitening has come a long way in recent years...",
        author: "Dr. Michael Lee",
        date: "2024-10-28",
        category: "Cosmetic Dentistry",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=400&fit=crop",
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "How to Floss Properly – 5 Simple Steps",
        excerpt: "Proper flossing technique is essential for removing plaque and preventing gum disease. Master these five simple steps for optimal oral hygiene.",
        content: "Flossing is just as important as brushing...",
        author: "Dr. Sarah Johnson",
        date: "2024-11-10",
        category: "Oral Hygiene",
        image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&h=400&fit=crop",
        readTime: "3 min read"
    },
    {
        id: 5,
        title: "What to Do in a Dental Emergency",
        excerpt: "Dental emergencies can happen unexpectedly. Learn how to handle common emergencies like knocked-out teeth, severe toothaches, and broken crowns.",
        content: "Knowing what to do during a dental emergency can save your tooth...",
        author: "Dr. James Chen",
        date: "2024-11-15",
        category: "Emergency Care",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop",
        readTime: "7 min read"
    },
    {
        id: 6,
        title: "Invisalign vs Traditional Braces: Which is Right for You?",
        excerpt: "Comparing the benefits and drawbacks of Invisalign clear aligners and traditional metal braces to help you make the best choice for your smile.",
        content: "When it comes to straightening teeth, you have options...",
        author: "Dr. Sarah Johnson",
        date: "2024-11-18",
        category: "Orthodontics",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=400&fit=crop",
        readTime: "8 min read"
    },
    {
        id: 7,
        title: "Understanding Dental Implants: A Complete Guide",
        excerpt: "Dental implants are a permanent solution for missing teeth. Learn about the procedure, benefits, recovery, and what to expect.",
        content: "Dental implants have revolutionized tooth replacement...",
        author: "Dr. Michael Lee",
        date: "2024-11-20",
        category: "Restorative Dentistry",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=400&fit=crop",
        readTime: "10 min read"
    },
    {
        id: 8,
        title: "The Benefits of Electric Toothbrushes",
        excerpt: "Are electric toothbrushes really better than manual ones? Discover the science behind electric brushing and how to choose the right one.",
        content: "Studies consistently show that electric toothbrushes...",
        author: "Dr. Emily Smith",
        date: "2024-11-22",
        category: "Oral Hygiene",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
        readTime: "5 min read"
    }
];


export const faqs = [
    {
        id: 1,
        question: "Do you accept my dental insurance?",
        answer: "We accept most major dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, and many others. Please contact our office with your specific insurance information, and our team will verify your coverage and benefits.",
        category: "Insurance"
    },
    {
        id: 2,
        question: "What should I bring to my first visit?",
        answer: "Please bring a valid photo ID, your dental insurance card (if applicable), a list of current medications, and any completed new patient forms. If you have recent dental X-rays from another office, we can request those to avoid unnecessary radiation exposure.",
        category: "Appointments"
    },
    {
        id: 3,
        question: "Do you offer emergency dental care?",
        answer: "Yes, we provide emergency dental care for urgent situations such as severe tooth pain, broken teeth, knocked-out teeth, and dental trauma. We have same-day appointment availability and a 24/7 emergency phone line for after-hours urgent needs.",
        category: "Services"
    },
    {
        id: 4,
        question: "How often should I visit the dentist?",
        answer: "We recommend visiting the dentist every six months for routine checkups and professional cleanings. However, some patients with specific dental conditions may need more frequent visits. Your dentist will create a personalized schedule based on your oral health needs.",
        category: "General"
    },
    {
        id: 5,
        question: "Are dental X-rays safe?",
        answer: "Yes, dental X-rays are very safe. We use digital X-ray technology that reduces radiation exposure by up to 90% compared to traditional film X-rays. The amount of radiation is minimal and comparable to natural background radiation you're exposed to daily.",
        category: "Procedures"
    },
    {
        id: 6,
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans and financing options through CareCredit and other providers. We believe everyone deserves quality dental care, and we'll work with you to find a payment solution that fits your budget.",
        category: "Insurance"
    },
    {
        id: 7,
        question: "What age should my child first visit the dentist?",
        answer: "The American Academy of Pediatric Dentistry recommends that children have their first dental visit by age one or within six months of their first tooth erupting. Early visits help establish good oral health habits and allow us to monitor development.",
        category: "Pediatric"
    },
    {
        id: 8,
        question: "How long does a teeth whitening treatment take?",
        answer: "In-office professional teeth whitening typically takes about 60-90 minutes and can brighten your teeth by several shades in a single visit. We also offer take-home whitening kits that you use over 1-2 weeks for gradual results.",
        category: "Cosmetic"
    }
];

export const contactInfo = {
    phone: "(555) 123-4567",
    email: "info@dentalclinic.com",
    address: "123 Dental Street, Suite 100",
    city: "San Francisco, CA 94102",
    hours: {
        weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
        saturday: "Saturday: 9:00 AM - 3:00 PM",
        sunday: "Sunday: Closed"
    },
    emergencyPhone: "(555) 123-4567",
    social: {
        facebook: "https://facebook.com/dentalclinic",
        instagram: "https://instagram.com/dentalclinic",
        twitter: "https://twitter.com/dentalclinic"
    }
};
