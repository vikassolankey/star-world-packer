export interface Branch {
  id: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
  externalMapUrl: string;
  heroImage: string;
  icon: string;
  nearbyAreas: string[];
}

export const branches: Branch[] = [
  {
    id: "haridwar",
    city: "Haridwar",
    state: "Uttarakhand",
    address: "Type-2, C-27, Police Line, Roshnabad, Haridwar, Uttarakhand 249412",
    phone: "+91 7080825666",
    email: "Starworldpackers1988@gmail.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.7654321!2d78.0578273!3d29.9775289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39094910f6da53eb%3A0xc6dd611a06118a7c!2sStar+world+Packers+and+Movers+Haridwar!5e0!3m2!1sen!2sin!4v1710400000000!5m2!1sen!2sin",
    externalMapUrl: "https://www.google.com/maps/place/Star+world+Packers+and+Movers+Haridwar/@29.9775289,78.0578273,17z/data=!4m14!1m7!3m6!1s0x39094910f6da53eb:0xc6dd611a06118a7c!2sStar+world+Packers+and+Movers+Haridwar!8m2!3d29.9775289!4d78.0578273!16s%2Fg%2F11fw9shtg3!3m5!1s0x39094910f6da53eb:0xc6dd611a06118a7c!8m2!3d29.9775289!4d78.0578273!16s%2Fg%2F11fw9shtg3",
    heroImage: "https://freekaamaal.com/blog/wp-content/uploads/2022/05/haridwar-1024x576.jpg",
    icon: "🏔️",
    nearbyAreas: ["Shivalik Nagar", "Ranipur", "SIDCUL", "Kankhal", "Jwalapur", "Rishikesh", "Roorkee"]
  },
  {
    id: "rishikesh",
    city: "Rishikesh",
    state: "Uttarakhand",
    address: "House nbr 365, bankhandi gram, gali nbr 10, Anand Vihar Dhalwala Colony, Chauda Bigha, Rishikesh, Uttarakhand 249137",
    phone: "+91 7080825666",
    email: "Starworldpackers1988@gmail.com",
    

    
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.129215017267!2d78.301421!3d30.114637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909176cae266079%3A0xdb56d27686424319!2sStar+World+Packers+and+Movers+Rishikesh!5e0!3m2!1sen!2sin!4v1710400000001!5m2!1sen!2sin",
    externalMapUrl: "https://www.google.com/maps/place/Star+World+Packers+and+Movers+Rishikesh/@30.114637,78.301421,17z/data=!4m14!1m7!3m6!1s0x3909176cae266079:0xdb56d27686424319!2sStar+World+Packers+and+Movers+Rishikesh!8m2!3d30.114637!4d78.301421!16s%2Fg%2F11gmsrzg1j!3m5!1s0x3909176cae266079:0xdb56d27686424319!8m2!3d30.114637!4d78.301421!16s%2Fg%2F11gmsrzg1j",
    heroImage: "https://i.ytimg.com/vi/7s3KbkETxnw/maxresdefault.jpg",
    icon: "🧘",
    nearbyAreas: ["Tapovan", "Laxman Jhula", "Muni Ki Reti", "Raiwala", "Dehradun", "Haridwar", "Chamba"]
  },
  {
    id: "jhansi",
    city: "Jhansi",
    state: "Uttar Pradesh",
    address: "Plot S-214, Jhansi, Uttar Pradesh 284003",
    phone: "+91 7080825666",
    email: "Starworldpackers1988@gmail.com",

 
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.2234!2d78.5525036!3d25.4712704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397771385add40f9%3A0xa902b7500ae0ee83!2sStar+world+Packers+And+Movers+Jhansi!5e0!3m2!1sen!2sin!4v1710400000002!5m2!1sen!2sin",
    externalMapUrl: "https://www.google.com/maps/place/Star+world+Packers+And+Movers+Jhansi/@25.4712704,78.5525036,17z/data=!4m14!1m7!3m6!1s0x397771385add40f9:0xa902b7500ae0ee83!2sStar+world+Packers+And+Movers+Jhansi!8m2!3d25.4712704!4d78.5525036!16s%2Fg%2F11bv1t81f9!3m5!1s0x397771385add40f9:0xa902b7500ae0ee83!8m2!3d25.4712704!4d78.5525036!16s%2Fg%2F11bv1t81f9",
    heroImage: "https://wallpapercave.com/wp/wp7023856.jpg",
    icon: "🏰",
    nearbyAreas: ["Civil Lines", "Sipri Bazaar", "Elite Crossing", "Gwalior Road", "Datia", "Orchha", "Babina"]
  },
  {
    id: "delhi",
    city: "Delhi",
    state: "NCR",
    address: "Plot No. 12, Okhla Phase III, New Delhi - 110020",
    phone: "+91 7080825666",
    email: "Starworldpackers1988@gmail.com",

 
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392319277!2d77.0688975!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71873292b1!2sDelhi!5e0!3m2!1sen!2sin!4v1710400000003!5m2!1sen!2sin",
    externalMapUrl: "https://www.google.com/maps/place/Delhi",
    heroImage: "https://th.bing.com/th/id/OIP.T-XOFPHx4lR8YBeaZTtfgwHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    icon: "🏙️",
    nearbyAreas: ["Okhla", "Noida", "Gurgaon", "Ghaziabad", "Faridabad", "Dwarka", "Rohini"]
  },
  {
    id: "kotdwar",
    city: "Kotdwar",
    state: "Uttarakhand",
    address: "House no-11 Shibunagar, tariyal chowk, Kotdwar, Uttarakhand 246149",
    phone: "+91 7080825666",
    email: "Starworldpackers1988@gmail.com",

    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.23456789!2d78.5269027!3d29.7525131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39097b2f22c3399b%3A0x955650fefdc50bd0!2sstar+world+packers+kotdwara!5e0!3m2!1sen!2sin!4v1710400000004!5m2!1sen!2sin",
    externalMapUrl: "https://www.google.com/maps/place/star+world+packers+kotdwara/@29.7525131,78.5269027,17z/data=!4m14!1m7!3m6!1s0x39097b2f22c3399b:0x955650fefdc50bd0!2sstar+world+packers+kotdwara!8m2!3d29.7525131!4d78.5269027!16s%2Fg%2F11fj7qkgg2!3m5!1s0x39097b2f22c3399b:0x955650fefdc50bd0!8m2!3d29.7525131!4d78.5269027!16s%2Fg%2F11fj7qkgg2",
    heroImage: "https://tse1.mm.bing.net/th/id/OIP.13-BD43m81ROSU2okcXTGgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    icon: "🌳",
    nearbyAreas: ["Main Market", "Najibabad Road", "Pauri Garhwal", "Lansdowne", "Dugadda", "Rishikesh", "Haridwar"]
  },
  {
    id: "gwalior",
    city: "Gwalior",
    state: "Madhya Pradesh",
    address: "Govt. Qtr no 41A, Shastri Bhawan Wali Gali Jawahar Colony Kampo, Lashkar, Gwalior, Madhya Pradesh 474001",
    phone: "+91 7080825666",
    email: "Starworldpackers1988@gmail.com",

 
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.936!2d78.1517437!3d26.1893608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5c516c9c21b%3A0x589c90242f15fe0c!2sPackers+and+Movers+Gwalior+star+world!5e0!3m2!1sen!2sin!4v1710400000005!5m2!1sen!2sin",
    externalMapUrl: "https://www.google.com/maps/place/Packers+and+Movers+Gwalior+star+world/@26.1893608,78.1517437,17z/data=!4m14!1m7!3m6!1s0x3976c5c516c9c21b:0x589c90242f15fe0c!2sPackers+and+Movers+Gwalior+star+world!8m2!3d26.1893608!4d78.1517437!16s%2Fg%2F11g4d6cmhm!3m5!1s0x3976c5c516c9c21b:0x589c90242f15fe0c!8m2!3d26.1893608!4d78.1517437!16s%2Fg%2F11g4d6cmhm",
    heroImage: "https://th.bing.com/th/id/R.f8fba301351ddbf0552103a0fa941be1?rik=gwVPRfl9wNvTFg&riu=http%3a%2f%2fphotos.wikimapia.org%2fp%2f00%2f05%2f18%2f87%2f25_full.jpg&ehk=ofeji1iyt7kuVypErhfO3Y28VfICoVoYoUta3wzwhLI%3d&risl=&pid=ImgRaw&r=0",
    icon: "🏛️",
    nearbyAreas: ["City Centre", "Thatipur", "Hazira", "Morar", "Jhansi Road", "Morena", "Dholpur"]
  },
  {
    id: "roorkee",
    city: "Roorkee",
    state: "Uttarakhand",
    address: "Civil Lines, Near IIT Roorkee, Roorkee, Uttarakhand - 247667",
    phone: "+91 7080825666",
    email: "Starworldpackers1988@gmail.com",
    
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.5!2d77.88!3d29.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3653c9734f%3A0x513e12f69e8d2d2a!2sRoorkee%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1710400000006!5m2!1sen!2sin",
    externalMapUrl: "https://www.google.com/maps/place/Roorkee",
    heroImage: "https://tse3.mm.bing.net/th/id/OIP.C_uFY4pX3xDEbEU6iJNLNQHaD5?rs=1&pid=ImgDetMain&o=7&rm=3",
    icon: "🎓",
    nearbyAreas: ["Civil Lines", "IIT Roorkee", "Ganga Canal", "Haridwar Road", "Saharanpur", "Muzaffarnagar", "Manglaur"]
  },
  {
    id: "raiwala",
    city: "Raiwala",
    state: "Uttarakhand",
    address: "Main Market, Raiwala, Dehradun Road, Uttarakhand - 249205",
    phone: "+91 7080825666",
    email: "Starworldpackers1988@gmail.com",

    
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.5!2d78.2!3d30.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909163653c9734f%3A0x513e12f69e8d2d2a!2sRaiwala%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1710400000007!5m2!1sen!2sin",
    externalMapUrl: "https://www.google.com/maps/place/Raiwala",
    heroImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/75/44/a1/sapt-rishi-ashram.jpg?w=400&h=-1&s=1",
    icon: "🛤️",
    nearbyAreas: ["Main Market", "Dehradun Road", "Motichur", "Haridwar", "Rishikesh", "Nepali Farm", "Doiwala"]
  },
  {
    id: "chamba",
    city: "Chamba",
    state: "Uttarakhand",
    address: "Main Square, Chamba, Tehri Garhwal, Uttarakhand - 249145",
    phone: "+91 7080825666",
    email: "Starworldpackers1988@gmail.com",

    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.5!2d78.4!3d30.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909163653c9734f%3A0x513e12f69e8d2d2a!2sChamba%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1710400000008!5m2!1sen!2sin",
    externalMapUrl: "https://www.google.com/maps/place/Chamba",
    heroImage: "https://cdn.wallpapersafari.com/48/77/gMabmG.jpg",
    icon: "⛰️",
    nearbyAreas: ["Main Square", "New Tehri", "Kanatal", "Dhanaulti", "Mussoorie", "Rishikesh", "Uttarkashi"]
  },
  {
    id: "najibabad",
    city: "Najibabad",
    state: "Uttar Pradesh",
    address: "Kotdwar Road, Near Railway Station, Najibabad, Uttar Pradesh - 246763",
    phone: "+91 7080825666",
    email: "Starworldpackers1988@gmail.com",

    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.5!2d78.33!3d29.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909163653c9734f%3A0x513e12f69e8d2d2a!2sNajibabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710400000009!5m2!1sen!2sin",
    externalMapUrl: "https://www.google.com/maps/place/Najibabad",
    heroImage: "https://tse3.mm.bing.net/th/id/OIP.Q6J0EoQgFz_q4_mombnDIwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    icon: "🏬",
    nearbyAreas: ["Kotdwar Road", "Bijnor", "Kiratpur", "Nagal", "Haridwar", "Kotdwar", "Dhampur"]
  }
];
