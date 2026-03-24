import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Target, 
  Users, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3D } from '../components/3DComponents';
import { cn } from '../lib/utils';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="py-24 bg-brand-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-slate-900 leading-tight">
              Our <span className="gradient-text">Story & Mission</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Founded on the principles of transparency and expertise, we've been helping clients secure their financial futures for over a decade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8 text-slate-900 leading-tight">Driven by a <span className="text-brand-600">Single Purpose</span></h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              At AllFinance, we believe that everyone deserves access to elite financial advisory. Our mission is to democratize wealth creation and provide the tools and guidance needed to build a secure future.
            </p>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Target size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h4>
                  <p className="text-slate-600 leading-relaxed">To empower individuals and businesses with smart, transparent, and expert-led financial strategies.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Globe size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h4>
                  <p className="text-slate-600 leading-relaxed">To be the world's most trusted partner in wealth management and financial security.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Card3D className="p-0 overflow-hidden rounded-[3rem] shadow-3xl border-8 border-white">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" alt="Team" className="w-full h-full object-cover aspect-square" referrerPolicy="no-referrer" />
            </Card3D>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl font-display font-bold mb-6">Why Choose AllFinance?</h2>
            <p className="text-slate-400">We stand out by putting our clients first and maintaining the highest standards of integrity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <ShieldCheck />, title: 'Expert Guidance', desc: 'Our advisors are senior professionals with decades of market experience.' },
              { icon: <Zap />, title: 'Transparent Fees', desc: 'No hidden charges or complex structures. You always know what you\'re paying for.' },
              { icon: <Award />, title: 'Proven Results', desc: 'A track record of consistent growth and client satisfaction over 12 years.' },
              { icon: <Users />, title: 'Client-First Approach', desc: 'Your goals are our priority. We build strategies tailored to your unique needs.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-brand-600/10 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-brand-600/20">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl font-display font-bold mb-6">Our Leadership Team</h2>
            <p className="text-slate-600">Meet the experts driving our vision and ensuring your financial success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'David Sterling', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
              { name: 'Sarah Jenkins', role: 'Chief Investment Officer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
              { name: 'Michael Ross', role: 'Head of Wealth Management', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-square rounded-[2.5rem] overflow-hidden mb-8 shadow-xl border-4 border-slate-50 group-hover:border-brand-600 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-2xl font-display font-bold text-slate-900 mb-2">{member.name}</h4>
                <p className="text-brand-600 font-bold uppercase tracking-widest text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
