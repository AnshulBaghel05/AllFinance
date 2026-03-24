import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  PieChart, 
  Calculator, 
  Users, 
  ArrowRight, 
  Menu, 
  X,
  ChevronRight,
  Star,
  CheckCircle2,
  Lock,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Zap,
  Award,
  Globe,
  CreditCard,
  Target
} from 'lucide-react';
import { Link, NavLink, Routes, Route, useLocation } from 'react-router-dom';
import { cn } from './lib/utils';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Calculators from './pages/Calculators';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']);
  const borderBottom = useTransform(scrollY, [0, 100], ['1px solid rgba(255, 255, 255, 0)', '1px solid rgba(226, 232, 240, 1)']);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Calculators', path: '/calculators' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      style={{ backgroundColor, borderBottom, backdropFilter: 'blur(12px)' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform duration-500">
            <TrendingUp size={28} />
          </div>
          <span className="text-2xl font-display font-black tracking-tighter text-slate-900">
            All<span className="text-brand-600">Finance</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              className={({ isActive }) => cn(
                "text-sm font-black uppercase tracking-widest transition-all hover:text-brand-600",
                isActive ? "text-brand-600" : "text-slate-500"
              )}
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl text-sm font-bold shadow-2xl hover:bg-brand-600 transition-all hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-900 w-12 h-12 flex items-center justify-center bg-slate-100 rounded-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-8 flex flex-col gap-6 lg:hidden shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-xl font-display font-bold text-slate-900 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="bg-brand-600 text-white px-8 py-4 rounded-2xl text-center font-bold text-lg shadow-xl"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-32 pb-12 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-brand-600 via-accent-teal to-accent-gold" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
              <TrendingUp size={28} />
            </div>
            <span className="text-2xl font-display font-black tracking-tighter text-white">
              All<span className="text-brand-600">Finance</span>
            </span>
          </Link>
          <p className="text-lg leading-relaxed font-medium">
            Empowering individuals and businesses with smart, transparent, and expert-led financial strategies. Your trusted partner in wealth creation.
          </p>
          <div className="flex gap-5">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all hover:-translate-y-1 shadow-lg">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-bold text-xl mb-10">Quick Links</h4>
          <ul className="space-y-5 text-sm font-bold uppercase tracking-widest">
            <li><Link to="/about" className="hover:text-brand-500 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand-500 transition-colors">Our Services</Link></li>
            <li><Link to="/calculators" className="hover:text-brand-500 transition-colors">Financial Tools</Link></li>
            <li><Link to="/pricing" className="hover:text-brand-500 transition-colors">Pricing Plans</Link></li>
            <li><Link to="/blog" className="hover:text-brand-500 transition-colors">Market Insights</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold text-xl mb-10">Services</h4>
          <ul className="space-y-5 text-sm font-bold uppercase tracking-widest">
            <li><Link to="/services#investment-planning" className="hover:text-brand-500 transition-colors">Investment Planning</Link></li>
            <li><Link to="/services#tax-consulting" className="hover:text-brand-500 transition-colors">Tax Consulting</Link></li>
            <li><Link to="/services#wealth-management" className="hover:text-brand-500 transition-colors">Wealth Management</Link></li>
            <li><Link to="/services#insurance-advisory" className="hover:text-brand-500 transition-colors">Insurance Advisory</Link></li>
            <li><Link to="/services#retirement-planning" className="hover:text-brand-500 transition-colors">Retirement Planning</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold text-xl mb-10">Newsletter</h4>
          <p className="text-lg mb-8 font-medium">Get the latest financial tips and market updates delivered to your inbox.</p>
          <form className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-slate-800 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-bold focus:ring-2 focus:ring-brand-600 outline-hidden text-white"
              />
            </div>
            <button className="w-full bg-brand-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/20">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-[0.2em]">
        <p>© 2026 AllFinance Advisory Services. All rights reserved.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Main App ---

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-brand-600 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/calculators" element={<PageTransition><Calculators /></PageTransition>} />
              <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
              <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
              <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              {/* Fallback */}
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
