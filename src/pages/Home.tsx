import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  PieChart, 
  Calculator, 
  Users, 
  ArrowRight, 
  ChevronRight,
  Star,
  CheckCircle2,
  Lock,
  Mail,
  BarChart3,
  Globe,
  Zap,
  Award,
  Calendar,
  BookOpen,
  MessageSquare,
  Search,
  HelpCircle,
  FileText,
  CreditCard,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3D, FloatingElement } from '../components/3DComponents';
import { cn } from '../lib/utils';

const SectionHeader = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={cn("mb-16", centered && "text-center mx-auto max-w-3xl")}
  >
    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 leading-tight">
      {title}
    </h2>
    {subtitle && <p className="text-lg text-slate-600 leading-relaxed">{subtitle}</p>}
  </motion.div>
);

const Home = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Parallax Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
      >
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-brand-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[5%] w-[30rem] h-[30rem] bg-accent-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-accent-gold/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-100/80 backdrop-blur-sm text-brand-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8 border border-brand-200">
              <Zap size={14} className="fill-current" />
              Revolutionizing Financial Management
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-8 text-slate-900 tracking-tight">
              Secure Your <span className="gradient-text">Financial Future</span> with AllFinance
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
              Experience the next generation of wealth management. Transparent, expert-led, and powered by intelligent tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/get-started" className="bg-brand-600 text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-brand-500/40 hover:bg-brand-700 transition-all flex items-center justify-center gap-3 group text-lg">
                Get Started Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="bg-white/80 backdrop-blur-md text-slate-900 px-10 py-5 rounded-full font-bold shadow-lg border border-slate-200 hover:bg-white transition-all flex items-center justify-center gap-3 text-lg">
                Explore Services
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-md">
                    <img src={`https://i.pravatar.cc/150?img=${i+20}`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-accent-gold mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 font-bold text-sm">Trusted by 15,000+ Active Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 25 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block perspective-1000"
          >
            <Card3D className="bg-white/40 border-white/40 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">Total Wealth Managed</p>
                  <h3 className="text-5xl font-display font-bold text-slate-900">$4.2B+</h3>
                </div>
                <div className="bg-green-500/10 text-green-600 p-3 rounded-2xl">
                  <TrendingUp size={32} />
                </div>
              </div>

              <div className="space-y-8">
                {[
                  { label: 'Investment Growth', value: 88, color: 'bg-brand-500', icon: <BarChart3 size={18} /> },
                  { label: 'Client Satisfaction', value: 98, color: 'bg-accent-teal', icon: <Users size={18} /> },
                  { label: 'Asset Protection', value: 100, color: 'bg-accent-gold', icon: <ShieldCheck size={18} /> },
                ].map((item, idx) => (
                  <motion.div 
                    key={item.label}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                  >
                    <div className="flex justify-between text-sm font-bold mb-3 text-slate-700">
                      <span className="flex items-center gap-2">{item.icon} {item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-3 bg-slate-200/50 rounded-full overflow-hidden backdrop-blur-sm">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className={cn("h-full rounded-full shadow-lg", item.color)}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200/50 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">12+</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">50+</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Expert Advisors</p>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-[0.3em] mb-16">Accredited & Regulated By Global Authorities</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['SEBI', 'AMFI', 'IRDAI', 'ISO 9001', 'FCA', 'SEC'].map(logo => (
              <div key={logo} className="font-display font-black text-3xl md:text-4xl tracking-tighter text-slate-900">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Tailored Financial Solutions"
            subtitle="We provide a comprehensive suite of services designed to navigate the complexities of modern finance and build lasting wealth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <TrendingUp />, title: 'Investment Planning', desc: 'Strategic asset allocation to maximize returns while managing your unique risk profile.', color: 'from-blue-500 to-cyan-400' },
              { icon: <ShieldCheck />, title: 'Tax Consulting', desc: 'Expert strategies to minimize liabilities and ensure full compliance with evolving tax laws.', color: 'from-emerald-500 to-teal-400' },
              { icon: <PieChart />, title: 'Wealth Management', desc: 'Holistic management of your financial assets for multi-generational growth and stability.', color: 'from-amber-500 to-orange-400' },
              { icon: <Users />, title: 'Insurance Advisory', desc: 'Protecting what matters most with personalized risk assessment and comprehensive coverage.', color: 'from-indigo-500 to-purple-400' },
              { icon: <ArrowRight />, title: 'Retirement Planning', desc: 'Building a robust nest egg to ensure a comfortable, worry-free, and secure future.', color: 'from-rose-500 to-pink-400' },
              { icon: <Calculator />, title: 'Loan & Mortgage', desc: 'Finding the best financing options for your home, business, or education with ease.', color: 'from-slate-700 to-slate-500' },
            ].map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-5 rounded-[2.5rem] transition-opacity duration-500 -m-2" />
                <div className="glass-card p-10 rounded-[2.5rem] border-slate-200/60 hover:border-brand-300 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 h-full flex flex-col">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg bg-linear-to-br", service.color)}>
                    {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-5 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{service.desc}</p>
                  <Link to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-2 text-brand-600 font-bold group-hover:gap-4 transition-all">
                    Learn More <ChevronRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Tools Preview */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <Card3D className="bg-slate-900 p-12 rounded-[3rem] shadow-3xl text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
              
              <div className="flex items-center gap-5 mb-12">
                <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-600/20">
                  <Calculator size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold">SIP Calculator</h3>
                  <p className="text-slate-400 text-sm font-medium">Plan your wealth growth</p>
                </div>
              </div>
              
              <div className="space-y-10">
                {[
                  { label: 'Monthly Investment', value: '$1,200', pct: 60 },
                  { label: 'Expected Return (p.a)', value: '14%', pct: 75 },
                  { label: 'Time Period', value: '15 Years', pct: 45 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-4 font-bold">
                      <span className="text-slate-400 text-sm uppercase tracking-wider">{item.label}</span>
                      <span className="text-brand-400 text-lg">{item.value}</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-600 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}

                <div className="pt-10 mt-10 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-8">
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-black tracking-[0.2em] mb-2">Estimated Wealth</p>
                    <p className="text-5xl font-display font-bold text-white">$482,150</p>
                  </div>
                  <Link to="/calculators" className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-brand-50 transition-all text-center">
                    Try Full Tool
                  </Link>
                </div>
              </div>
            </Card3D>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader 
              centered={false}
              title="Plan Your Goals with Mathematical Precision"
              subtitle="Stop guessing and start calculating. Our interactive tools provide instant clarity on your financial trajectory."
            />
            <div className="space-y-8 mb-12">
              {[
                { icon: <Target className="text-brand-500" />, title: 'Goal-Based Planning', desc: 'Align your investments with specific life milestones.' },
                { icon: <Zap className="text-accent-teal" />, title: 'Real-Time Projections', desc: 'See how small changes today impact your future wealth.' },
                { icon: <BarChart3 className="text-accent-gold" />, title: 'Visual Roadmaps', desc: 'Intuitive charts that make complex data easy to understand.' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link to="/calculators" className="inline-flex items-center gap-3 text-brand-600 font-bold text-lg group">
              Explore All Financial Tools 
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-3xl border-8 border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80" 
                  alt="Founder" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass-card bg-brand-600/90 border-brand-500/50 p-10 rounded-[2.5rem] shadow-2xl max-w-xs">
                <p className="text-brand-100 italic text-lg mb-6 leading-relaxed">"Our mission is to democratize elite financial advisory and make wealth creation accessible to everyone."</p>
                <h5 className="font-display font-bold text-xl">David Sterling</h5>
                <p className="text-brand-300 text-sm font-bold uppercase tracking-widest">Founder & CEO</p>
              </div>
            </motion.div>

            <div>
              <div className="inline-flex items-center gap-2 text-brand-400 font-bold uppercase tracking-widest text-sm mb-6">
                <Award size={18} /> Our Story & Mission
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">Built on Trust, <span className="text-brand-500">Driven by Results</span></h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Founded in 2014, AllFinance began with a simple goal: to provide transparent, high-quality financial guidance in an industry often clouded by complexity and hidden fees.
              </p>
              <div className="grid grid-cols-2 gap-10 mb-12">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">98%</h4>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Client Retention</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">24/7</h4>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Expert Support</p>
                </div>
              </div>
              <Link to="/about" className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold hover:bg-brand-50 transition-all inline-flex items-center gap-3">
                Learn More About Us <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <SectionHeader 
                centered={false}
                title="Voices of Success"
                subtitle="Join thousands of satisfied clients who have transformed their financial lives with our expert guidance."
              />
            </div>
            <div className="flex gap-4">
              <button className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all group">
                <ChevronRight size={24} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-all group">
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Sarah Johnson', role: 'Business Owner', text: 'AllFinance helped me optimize my business taxes and set up a robust retirement plan. Their transparency is unmatched in this industry.', img: '22' },
              { name: 'Michael Chen', role: 'Software Engineer', text: 'The SIP calculator and personalized investment advice helped me double my portfolio in just 3 years. The onboarding was incredibly smooth.', img: '33' },
              { name: 'Elena Rodriguez', role: 'Medical Professional', text: 'I finally feel in control of my finances. Their goal-based planning made it easy to save for my children\'s education without stress.', img: '44' },
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 relative group hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute -top-6 left-10 w-12 h-12 bg-brand-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageSquare size={24} />
                </div>
                <div className="flex text-accent-gold mb-8 mt-4">
                  {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 text-lg italic mb-10 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-200 overflow-hidden shadow-inner">
                    <img src={`https://i.pravatar.cc/150?img=${t.img}`} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-slate-900 text-lg">{t.name}</h5>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <SectionHeader 
              centered={false}
              title="Market Insights & Tips"
              subtitle="Stay ahead with the latest financial news, tax-saving strategies, and investment guides."
            />
            <Link to="/blog" className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold shadow-md border border-slate-100 hover:bg-slate-50 transition-all shrink-0">
              View All Insights
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: '10 Tax-Saving Strategies for 2026', category: 'Tax Planning', date: 'Mar 15, 2026', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80' },
              { title: 'The Future of Crypto in Your Portfolio', category: 'Investment', date: 'Mar 12, 2026', img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=600&q=80' },
              { title: 'How to Retire Comfortably by Age 50', category: 'Retirement', date: 'Mar 10, 2026', img: 'https://images.unsplash.com/photo-1556742049-02e49f606217?auto=format&fit=crop&w=600&q=80' },
            ].map((post, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-slate-400 font-bold">{post.date}</span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-slate-900 mb-6 group-hover:text-brand-600 transition-colors">{post.title}</h4>
                  <Link to="/blog" className="flex items-center gap-2 text-sm font-bold text-slate-500 group-hover:text-brand-600 transition-all">
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card bg-slate-50/50 p-12 rounded-[3rem] flex flex-col lg:flex-row items-center gap-12">
            <div className="w-24 h-24 bg-green-500/10 text-green-600 rounded-3xl flex items-center justify-center shrink-0">
              <Lock size={48} />
            </div>
            <div className="flex-grow text-center lg:text-left">
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Your Data Security is Our Top Priority</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                We employ bank-grade 256-bit SSL encryption, multi-factor authentication, and privacy-first protocols to ensure your financial information remains confidential and secure.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 shrink-0">
              <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 font-bold text-sm">
                <ShieldCheck className="text-green-500" size={20} /> GDPR Compliant
              </div>
              <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 font-bold text-sm">
                <CheckCircle2 className="text-brand-500" size={20} /> SSL Certified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto bg-brand-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-3xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 leading-tight">Ready to Take <span className="text-brand-200">Control?</span></h2>
            <p className="text-brand-100 text-xl mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
              Book your free 30-minute consultation with our senior advisors and receive a personalized financial roadmap.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/get-started" className="bg-white text-brand-600 px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                Get Started Today <Calendar size={24} />
              </Link>
              <Link to="/calculators" className="bg-brand-700 text-white px-12 py-6 rounded-full font-bold text-xl shadow-xl hover:bg-brand-800 transition-all flex items-center justify-center gap-3">
                Try Calculators <Calculator size={24} />
              </Link>
            </div>
            <div className="mt-16 flex flex-wrap justify-center gap-10 text-sm font-bold text-brand-200 uppercase tracking-widest">
              <div className="flex items-center gap-3"><CheckCircle2 size={18} /> No Hidden Fees</div>
              <div className="flex items-center gap-3"><CheckCircle2 size={18} /> Expert Guidance</div>
              <div className="flex items-center gap-3"><CheckCircle2 size={18} /> Secure & Private</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
