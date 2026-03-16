import React from 'react';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { branches } from '../data/branches';

const About = () => {
  return (
    <div>
      <div className="bg-primary py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto px-4">
          Learn more about Star world packer, Haridwar's most trusted packing and moving company.
        </p>
      </div>
      <WhyChooseUs />
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://tse1.mm.bing.net/th/id/OIP.IqsdAe4WQhrAhzO3ukB31QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission & Vision</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our mission is to provide seamless, stress-free, and affordable relocation services to individuals and businesses in Haridwar and beyond through Star world packer. We envision becoming the gold standard in the Indian logistics industry through innovation and customer-centricity.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                With over a decade of experience, we have perfected the art of packing and moving. Whether it's a small apartment or a large corporate office, we treat every item with the respect it deserves.
              </p>
              <ul className="space-y-4">
                {['Customer Satisfaction First', 'Safety & Security Guaranteed', 'Transparent Pricing', 'Professional & Courteous Staff'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-800">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Our <span className="text-secondary">Leadership</span></h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Meet the visionaries behind Star world packer who lead with integrity and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { 
                name: "Narayan Singh Rawat", 
                role: "Owner", 
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
                quote: "Our commitment is to treat every customer's belongings as if they were our own. Trust is the foundation of our business."
              },
              { 
                name: "Sanjay Singh Rawat", 
                role: "Owner", 
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
                quote: "Innovation and customer satisfaction are what drive us forward. We strive to make relocation a pleasant experience for everyone."
              }
            ].map((owner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-slate-50 rounded-3xl p-8 text-center border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-secondary rounded-full transform rotate-6 group-hover:rotate-12 transition-transform" />
                  <img 
                    src={owner.image} 
                    alt={owner.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-1">{owner.name}</h3>
                <p className="text-secondary font-bold uppercase tracking-wider mb-4">{owner.role}</p>
                <div className="relative">
                  <span className="text-5xl text-secondary/20 absolute -top-4 -left-2 font-serif">"</span>
                  <p className="text-slate-600 italic relative z-10 px-4">
                    {owner.quote}
                  </p>
                  <span className="text-5xl text-secondary/20 absolute -bottom-8 -right-2 font-serif">"</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Our <span className="text-secondary">Presence</span></h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              With branches in key locations, we are able to provide swift and reliable services across the region.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {branches.map((branch, i) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition-all border border-slate-100 group"
              >
                <Link to={`/branches/${branch.id}`}>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{branch.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{branch.city}</h3>
                  <p className="text-secondary font-semibold">{branch.state}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-secondary">Dedicated</span> Team</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6" />
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              The hardworking professionals who make every move a success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Nitin Sharma", img: "https://i.pravatar.cc/150?u=nitin" },
              { name: "Sunil Kumar", img: "https://i.pravatar.cc/150?u=sunil" },
              { name: "Ranveer Solanki", img: "https://i.pravatar.cc/150?u=ranveer" },
              { name: "Vishal Pathak", img: "https://i.pravatar.cc/150?u=vishal" },
              { name: "Ram Singh", img: "https://i.pravatar.cc/150?u=ram" },
              { name: "Ravi Choudhry", img: "https://i.pravatar.cc/150?u=ravi" },
              { name: "Vinnu Singh", img: "https://i.pravatar.cc/150?u=vinnu" },
              { name: "Raju Kumar", img: "https://i.pravatar.cc/150?u=raju" },
              { name: "Rahul Yadav", img: "https://i.pravatar.cc/150?u=rahul" },
              { name: "Tanu Singh", img: "https://i.pravatar.cc/150?u=tanu" }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all hover:-translate-y-1 group"
              >
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-secondary rounded-full scale-0 group-hover:scale-110 transition-transform duration-300 opacity-20" />
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-2 border-white/20 shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                <p className="text-slate-400 text-sm">Professional Mover</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
