import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, Mail, Navigation, ArrowLeft, Shield, Clock, Award, 
  Home, Building2, Truck, Bike, Package, ArrowRight, CheckCircle2,
  ChevronDown, ChevronUp, Star, Map, User, Send,
  Globe,
  ArrowUpCircle,
  Warehouse
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { branches } from '../data/branches';

const BranchDetail = () => {
  const { branchId, citySlug } = useParams();
  const navigate = useNavigate();
  const { openQuoteModal } = useQuote();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  // We check for branch match against ID or city name (case-insensitive)
  const branch = branches.find(b => {
    const slug = branchId || citySlug;
    if (!slug) return false;
    
    // Check ID match
    if (b.id.toLowerCase() === slug.toLowerCase()) return true;
    
    // Check City name match
    if (b.city.toLowerCase() === slug.toLowerCase()) return true;

    // Check if slug is the city name but URL was like /packers-and-movers-in-haridwar
    // although citySlug should only be "haridwar" in that case
    if (slug.toLowerCase().includes(b.city.toLowerCase())) return true;
    
    return false;
  });

  useEffect(() => {
    if (!branch) {
      console.log('Branch not found for slug:', branchId || citySlug);
    } else {
      document.title = `Best Packers and Movers in ${branch.city} | Starworld Packers`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Starworld Packers provides professional packing and moving services in ${branch.city} including household shifting, office relocation and vehicle transport at affordable prices.`);
      }
    }
    window.scrollTo(0, 0);
  }, [branch, branchId, citySlug, navigate]);

  if (!branch) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Branch Not Found</h2>
        <p className="text-slate-600 mb-8">We couldn't find the relocation services page for "{branchId || citySlug}".</p>
        <div className="flex justify-center gap-4">
          <Link to="/branches" className="bg-primary text-white px-8 py-3 rounded-full font-bold">
            View All Our Branches
          </Link>
          <Link to="/" className="bg-slate-200 text-slate-800 px-8 py-3 rounded-full font-bold">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const cityName = branch.city;

  const services = [
  {
    icon: <Home className="w-10 h-10" />,
    title: "Home Relocation",
    desc: "Safe and secure household shifting services with expert packing and handling.",
    image: "https://th.bing.com/th/id/OIP.Y37lRB5GdDZmSfIWbIYndAHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Office Relocation",
    desc: "Professional office shifting with minimal downtime and secure IT equipment moving.",
    image: "https://readytomoves.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-08-13-at-10.23.34_1e6f6f2f.jpg"
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Car Transport",
    desc: "Specialized car carriers for scratch-free transportation of your valuable vehicles.",
    image: "https://as1.ftcdn.net/v2/jpg/09/59/54/04/1000_F_959540419_Kc3xDwShraeI2OlMleApvfzvSiQz6Wsf.jpg"
  },
  {
    icon: <Bike className="w-10 h-10" />,
    title: "Bike Transport",
    desc: "Secure bike packing and moving services across India with door-to-door delivery.",
    image: "https://static.wixstatic.com/media/0157e2_84b418b5b4b44f4293bef05fce420ccc~mv2.png/v1/fill/w_1000,h_666,al_c,q_90,usm_0.66_1.00_0.01/0157e2_84b418b5b4b44f4293bef05fce420ccc~mv2.png"
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: "Packing and Unpacking",
    desc: "High-quality packing materials and techniques to ensure zero damage during transit.",
    image: "https://wallpaperaccess.com/full/5671123.jpg"
  },
  {
    icon: <ArrowUpCircle className="w-10 h-10" />,
    title: "Loading and Unloading",
    desc: "Trained staff for careful loading and unloading of your heavy and fragile items.",
    image: "https://tse4.mm.bing.net/th/id/OIP.B5zOKFn3UsUFaqo6UMJbHwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    icon: <Warehouse className="w-10 h-10" />,
    title: "Warehouse Storage",
    desc: "Safe and climate-controlled storage facilities for short and long-term needs.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <MapPin className="w-10 h-10" />,
    title: "Local Shifting",
    desc: "Quick and efficient local moving services within Haridwar and nearby areas.",
    image: "https://crowdpackers.com/wp-content/uploads/elementor/thumbs/Local-Shifting-r7jbvjxaar6479trsve2heva4bjgsy79wloj86wbds.jpg"
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Interstate Shifting",
    desc: "Reliable domestic relocation services across all major cities in India.",
    image: "https://tse1.mm.bing.net/th/id/OIP.Nn8Sz3wrgA9HfRNleQA-tQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];

  const features = [
    "Professional Packing Team",
    "Affordable Pricing",
    "Safe and Secure Transportation",
    "Timely Delivery",
    "GPS Enabled Transport",
    "24/7 Customer Support"
  ];

  const steps = [
    { title: "Book Your Move", desc: "Schedule a free pre-move survey and get an instant quote." },
    { title: "Packing and Loading", desc: "Our experts pack your items using high-quality materials." },
    { title: "Safe Transportation", desc: "Your belongings are transported in GPS-enabled closed vehicles." },
    { title: "Delivery and Unloading", desc: "On-time delivery and careful unloading at your destination." },
  ];

  const pricing = [
    { type: "1 BHK Moving", price: "₹ 4,000 - 8,000" },
    { type: "2 BHK Moving", price: "₹ 7,000 - 14,000" },
    { type: "3 BHK Moving", price: "₹ 12,000 - 22,000" },
    { type: "Office Relocation", price: "₹ 10,000 - 45,000" },
  ];

  const packingMaterials = [
    { name: "Bubble wrap sheets", img: "https://tse2.mm.bing.net/th/id/OIP.92TfgWCDZd8pi7EaARCVTgHaEt?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Corrugated carton boxes", img: "https://th.bing.com/th/id/OIP._vQ_u3BltPtRwoFjF4hzIwHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Stretch film rolls", img: "https://tse4.mm.bing.net/th/id/OIP.sCKr3orWAMFuhyAOj02mMgAAAA?w=370&h=400&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Foam sheets", img: "https://5.imimg.com/data5/IOS/Default/2022/6/WG/HQ/EW/38772694/product-jpeg-1000x1000.png" },
    { name: "Wooden crates", img: "https://tse1.mm.bing.net/th/id/OIP.UQ4zFIoDVCANure_MxJFcAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Thermocol sheets", img: "https://5.imimg.com/data5/OX/RT/MY-63527002/eps-thermocol-building-insulation-500x500.jpg" },
    { name: "Waterproof covers", img: "https://tse1.mm.bing.net/th/id/OIP.wbXeKc_uZMbGAGqVYOSQfQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Labels and tapes", img: "https://img.freepik.com/premium-photo/close-up-shot-various-packaging-materials-like-boxes-tape-bubble-wrap_933496-15402.jpg?w=2000" },
  ];

  // const relocationTypes = [
  //   { title: "Residential Relocation", desc: "Ideal for home shifting including apartments, villas, and independent houses.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400" },
  //   { title: "Commercial Relocation", desc: "Perfect for shops, warehouses, showrooms, and offices.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" },
  //   { title: "Industrial Relocation", desc: "Suitable for factories and heavy machinery shifting.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" },
  //   { title: "Student Relocation", desc: "Affordable moving solutions for students shifting to hostels or PG accommodations.", img: "https://images.unsplash.com/photo-1523240715639-99a808801828?auto=format&fit=crop&q=80&w=400" },
  //   { title: "Corporate Relocation", desc: "Customized relocation services for employees transferred to new locations.", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400" },
  // ];

  const choosingTips = [
    { title: "Check Experience and Reputation", desc: "Choose companies with years of experience and positive customer reviews." },
    { title: "Verify License and Registration", desc: "Ensure the company is registered and legally authorized." },
    { title: "Compare Price Quotes", desc: "Get multiple quotes to find the best deal." },
    { title: "Ask About Insurance", desc: "Always choose movers offering transit insurance." },
    { title: "Inspect Packing Quality", desc: "Check the quality of packing materials used." },
    { title: "Read Terms and Conditions", desc: "Understand policies before finalizing the company." },
  ];

  const costFactors = [
    "Distance between locations", "Volume of goods", "Type of relocation", 
    "Floor level", "Packing material quality", "Vehicle type", "Insurance requirement"
  ];

  const challenges = [
    { challenge: "Damage Risk", solution: "Solved by professional packing", icon: "❌", solvedIcon: "✔" },
    { challenge: "Heavy Lifting", solution: "Solved by trained staff and equipment", icon: "❌", solvedIcon: "✔" },
    { challenge: "Time Constraints", solution: "Solved by efficient planning", icon: "❌", solvedIcon: "✔" },
    { challenge: "Transportation Issues", solution: "Solved by dedicated moving vehicles", icon: "❌", solvedIcon: "✔" },
  ];

  const whyPrefer = [
    "Growing real estate market", "Increasing job transfers", 
    "Rising student population", "Expanding business opportunities"
  ];

  const faqs = [
    { q: `What are the charges of packers and movers in ${cityName}?`, a: `Charges depend on several factors like the volume of goods, distance, and type of packing required. Generally, local shifting in ${cityName} starts from ₹4,000.` },
    { q: "How long does relocation take?", a: "Local shifting typically takes 4-8 hours. For intercity moves, the time depends on the distance between the two cities." },
    { q: "Is insurance available?", a: "Yes, we provide comprehensive transit insurance to protect your belongings against any unforeseen circumstances during the move." },
    { q: "Do you provide vehicle transport?", a: "Yes, we have specialized carriers for both car and bike transportation to and from ${cityName}." },
  ];

  return (
    <div className="font-sans text-slate-900">
      {/* 1️⃣ Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={branch.heroImage} 
            alt={`Packers and Movers in ${cityName}`}
            className="w-full h-full "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-6 border border-secondary/30">
              <Star size={16} fill="currentColor" />
              <span>#1 Relocation Company in {cityName}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Best <span className="text-secondary">Packers and Movers</span> in {cityName}
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Reliable Packing and Moving Services in {cityName} for Home Shifting, Office Relocation and Vehicle Transportation. We ensure 100% safety and on-time delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => openQuoteModal(cityName)}
                className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all shadow-xl hover:shadow-secondary/20 hover:-translate-y-1 flex items-center gap-2"
              >
                Get Free Quote <ArrowRight size={20} />
              </button>
              <a 
                href="tel:+911234567890"
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://www.thepackersmovers.com/blog/wp-content/uploads/2020/01/packers-and-movers-india.jpg" 
                  alt="About Starworld Packers"
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/10 rounded-3xl -z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                  <div className="text-4xl font-bold text-primary mb-1">10+</div>
                  <div className="text-slate-500 font-medium">Years Experience</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                About Packers and Movers in <span className="text-secondary">{cityName}</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  <span className="font-bold text-primary">Starworld Packers</span> offers trusted and affordable packing and moving services in {cityName}. Our professional team provides safe relocation for homes, offices, and vehicles. We use high-quality packing materials and trained staff to ensure a smooth and damage-free moving experience.
                </p>
                <p>
                  Whether you are shifting locally within {cityName} or moving to another city, we provide reliable logistics solutions at competitive prices. Our customer-centric approach has made us the most preferred packers and movers in {cityName}.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" />
                  <span className="font-bold text-slate-800">ISO Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" />
                  <span className="font-bold text-slate-800">24/7 Support</span>
                </div>
              </div>

              <div className="mt-12 bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-bold text-primary mb-6">Why {cityName} Residents Prefer Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whyPrefer.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="bg-secondary/10 text-secondary p-1 rounded-full mt-1">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-slate-700 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4.1 How to Choose Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">How to Choose the Best Packers and Movers in <span className="text-secondary">{cityName}</span></h2>
            <p className="text-slate-500">Selecting the right moving company is crucial for a successful relocation.</p>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {choosingTips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-secondary/20">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{tip.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.1 Packing Materials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Packing Materials Used by Professional Packers and Movers in <span className="text-secondary">{cityName}</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Professional movers use premium packing materials to ensure maximum protection during transit.</p>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {packingMaterials.map((material, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-md"
              >
                <img src={material.img} alt={material.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-sm">{material.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.2 Types of Relocation Services Section */}
      

      {/* 3️⃣ Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Our Services in <span className="text-secondary">{cityName}</span></h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm text-primary rounded-xl flex items-center justify-center shadow-lg">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Why Choose Us */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Why Choose <span className="text-secondary">Starworld Packers</span> in {cityName}
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                We take the stress out of your move. With our dedicated team and advanced logistics equipment, we ensure that your transition to your new home or office is seamless.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                    <span className="font-bold text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800" 
                alt="Why Choose Us" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Moving Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Our Moving Process</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid lg:grid-cols-4 gap-12">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 text-center"
                >
                  <div className="w-20 h-20 bg-white border-4 border-slate-50 text-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl text-3xl font-black">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                  <p className="text-slate-500">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Pricing Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Packers and Movers Charges in {cityName}</h2>
              <p className="text-slate-500">Estimated relocation costs based on standard requirements.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-8 py-5 text-left font-bold text-lg">Service Type</th>
                    <th className="px-8 py-5 text-right font-bold text-lg">Estimated Charges</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pricing.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-6 font-bold text-slate-800">{item.type}</td>
                      <td className="px-8 py-6 text-right font-bold text-secondary">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-secondary/5 p-8 border-t border-slate-100">
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <Package size={20} className="text-secondary" />
                  Factors Affecting Moving Costs
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {costFactors.map((factor, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {factor}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 italic flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-secondary" />
                  Note: Prices depend on distance, volume of items, floor level, and packing requirements.
                </p>
              </div>
            </div>

            {/* Local vs Domestic Comparison */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-2xl text-primary"><Navigation size={24} /></div>
                  <h3 className="text-2xl font-bold text-primary">Local Shifting</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="text-secondary" size={18} /> Lower cost</li>
                  <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="text-secondary" size={18} /> Same-day delivery</li>
                  <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="text-secondary" size={18} /> Suitable for short distances</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-secondary/10 p-3 rounded-2xl text-secondary"><Map size={24} /></div>
                  <h3 className="text-2xl font-bold text-primary">Domestic Shifting</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="text-secondary" size={18} /> Long-distance relocation</li>
                  <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="text-secondary" size={18} /> Higher cost</li>
                  <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="text-secondary" size={18} /> Delivery time depends on distance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Service Areas Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Service Areas Near {cityName}</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {branch.nearbyAreas.map((area, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center hover:bg-white hover:shadow-md transition-all cursor-default">
                <span className="font-bold text-slate-700 text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Customer Testimonials</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Sharma", role: "Home Relocation", text: `I recently moved my 2 BHK within ${cityName} and the service was exceptional. The team was very professional and handled my fragile items with care.` },
              { name: "Priya Gupta", role: "Office Shifting", text: `Best packers and movers in ${cityName}. They shifted our entire office setup over the weekend with zero damages. Highly recommended!` },
              { name: "Amit Verma", role: "Car Transport", text: `Shifted my car from ${cityName} to Delhi. The GPS tracking feature kept me updated and the delivery was right on time.` },
            ].map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-10 rounded-3xl border border-white/10 relative"
              >
                <div className="flex gap-1 text-secondary mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic mb-8 leading-relaxed">"{testi.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-white text-xl">
                    {testi.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testi.name}</h4>
                    <p className="text-xs text-secondary font-bold uppercase tracking-wider">{testi.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.1 Common Challenges Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Common Challenges in Relocation and How Movers Solve Them</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="font-bold text-slate-800">{item.challenge}</h4>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-green-500 mt-1">{item.solvedIcon}</span>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9️⃣ FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-primary text-lg">{faq.q}</span>
                  {activeAccordion === i ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-secondary" />}
                </button>
                <AnimatePresence>
                  {activeAccordion === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔟 Contact Section */}
      <section className="py-24 bg-slate-50" id="quote-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Get a <span className="text-secondary">Free Quote</span> Today</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Fill out the form below and our experts will get back to you with a customized moving plan and transparent pricing for your relocation in {cityName}.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary text-white p-3 rounded-xl h-fit"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800">Call Support</h4>
                    <p className="text-slate-500">+91 70808 25666</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary text-white p-3 rounded-xl h-fit"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800">Email Us</h4>
                    <p className="text-slate-500">Starworldpackers1988@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary text-white p-3 rounded-xl h-fit"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800">Branch Office</h4>
                    <p className="text-slate-500">{branch.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">From Location</label>
                    <input type="text" placeholder={cityName} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">To Location</label>
                    <input type="text" placeholder="Destination City" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                  <textarea rows={4} placeholder="Briefly describe your requirements..." className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50"></textarea>
                </div>
                <button className="w-full bg-secondary text-white py-5 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/20 flex items-center justify-center gap-2">
                  <Send size={20} /> Get Free Moving Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Integration */}
      <section className="h-[500px] w-full border-t border-slate-100 relative group">
        <iframe
          src={branch.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${cityName} Branch`}
        ></iframe>
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors pointer-events-none" />
        <a 
          href={branch.externalMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-white text-primary px-6 py-3 rounded-xl font-bold shadow-xl flex items-center gap-2 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 z-20"
        >
          <Map size={20} /> View on Google Maps
        </a>
      </section>

      {/* Back to all branches link */}
      <div className="py-12 bg-white text-center">
        <Link 
          to="/branches"
          className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
        >
          <ArrowLeft size={20} /> View All Our Branches Across India
        </Link>
      </div>
    </div>
  );
};

export default BranchDetail;
