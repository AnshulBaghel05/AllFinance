import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  ChevronRight,
  Zap,
  ShieldCheck,
  Award,
  Users,
  Lock,
  Globe,
  CreditCard,
  Target,
  MessageSquare,
  Calendar,
  Clock,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3D } from '../components/3DComponents';
import { cn } from '../lib/utils';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-slate-900 leading-tight">
              Let's Talk <span className="gradient-text">Finance</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Have questions about your financial future? Our experts are here to help. Schedule a free 30-minute consultation today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-4xl font-display font-bold mb-10 text-slate-900 leading-tight">Get in <span className="text-brand-600">Touch</span></h2>
            <p className="text-lg text-slate-600 mb-16 leading-relaxed font-medium">
              Whether you're looking for wealth management, tax advice, or retirement planning, we're ready to build a strategy that works for you.
            </p>

            <div className="space-y-12">
              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-lg">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Email Us</h4>
                  <p className="text-slate-600 font-medium">hello@allfinance.com</p>
                  <p className="text-slate-600 font-medium">support@allfinance.com</p>
                </div>
              </div>
              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-lg">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Call Us</h4>
                  <p className="text-slate-600 font-medium">+1 (555) 123-4567</p>
                  <p className="text-slate-600 font-medium">Mon-Fri: 9am - 6pm EST</p>
                </div>
              </div>
              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-lg">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h4>
                  <p className="text-slate-600 font-medium">123 Financial Plaza, Suite 400</p>
                  <p className="text-slate-600 font-medium">New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-10 bg-slate-900 rounded-[3rem] text-white flex items-center gap-8 shadow-2xl">
              <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center shrink-0">
                <Clock size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Quick Response</h4>
                <p className="text-slate-400 text-sm">We typically respond to all inquiries within 24 business hours.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card3D className="bg-white p-12 rounded-[3.5rem] shadow-3xl border border-slate-100">
              <h3 className="text-3xl font-display font-bold mb-10 text-slate-900">Send a Message</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-500">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-600 outline-hidden font-bold text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-500">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-600 outline-hidden font-bold text-sm" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-500">Service Interested In</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-600 outline-hidden font-bold text-sm appearance-none">
                    <option>Wealth Management</option>
                    <option>Tax Consulting</option>
                    <option>Investment Planning</option>
                    <option>Retirement Planning</option>
                    <option>Loan & Mortgage</option>
                    <option>Insurance Advisory</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-500">Your Message</label>
                  <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-600 outline-hidden font-bold text-sm" placeholder="How can we help you achieve your goals?"></textarea>
                </div>
                <button className="w-full bg-brand-600 text-white py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-brand-500/30 hover:bg-brand-700 transition-all flex items-center justify-center gap-3">
                  Send Message <Send size={22} />
                </button>
              </form>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto h-[500px] bg-slate-200 rounded-[4rem] overflow-hidden shadow-2xl relative border-8 border-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center grayscale opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-[2rem] shadow-3xl text-center max-w-xs border border-slate-100">
              <div className="w-16 h-16 bg-brand-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Our Headquarters</h4>
              <p className="text-slate-500 text-sm font-medium">123 Financial Plaza, Suite 400, New York, NY 10001</p>
              <button className="mt-6 text-brand-600 font-bold text-sm hover:underline">Open in Google Maps</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
