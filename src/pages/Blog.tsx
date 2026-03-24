import React from 'react';
import { motion } from 'motion/react';
import { 
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
  Search,
  BookOpen,
  MessageSquare,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3D } from '../components/3DComponents';
import { cn } from '../lib/utils';

const Blog = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      {/* Hero */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-slate-900 leading-tight">
              Market <span className="gradient-text">Insights & Tips</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Stay ahead with the latest financial news, tax-saving strategies, and investment guides from our expert advisors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-12 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-brand-600 outline-hidden font-bold text-sm"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Investment', 'Tax Planning', 'Retirement', 'Market News'].map(cat => (
              <button key={cat} className="px-6 py-3 rounded-xl font-bold text-sm bg-slate-50 border border-slate-200 hover:bg-brand-600 hover:text-white transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { title: '10 Tax-Saving Strategies for 2026', category: 'Tax Planning', date: 'Mar 15, 2026', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80', desc: 'Discover how to optimize your tax liabilities and keep more of your hard-earned wealth.' },
            { title: 'The Future of Crypto in Your Portfolio', category: 'Investment', date: 'Mar 12, 2026', img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=600&q=80', desc: 'Explore the risks and rewards of digital assets and how they fit into a diversified portfolio.' },
            { title: 'How to Retire Comfortably by Age 50', category: 'Retirement', date: 'Mar 10, 2026', img: 'https://images.unsplash.com/photo-1556742049-02e49f606217?auto=format&fit=crop&w=600&q=80', desc: 'Learn the steps you need to take today to achieve financial independence and retire early.' },
            { title: 'Understanding Market Volatility', category: 'Market News', date: 'Mar 08, 2026', img: 'https://images.unsplash.com/photo-1611974717484-788cff60caad?auto=format&fit=crop&w=600&q=80', desc: 'A deep dive into why markets fluctuate and how to stay calm during downturns.' },
            { title: 'Building a Legacy: Estate Planning 101', category: 'Wealth Management', date: 'Mar 05, 2026', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80', desc: 'Ensure your wealth is passed on to the next generation according to your wishes.' },
            { title: 'The Impact of Global Interest Rates', category: 'Market News', date: 'Mar 02, 2026', img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80', desc: 'How central bank decisions affect your investments, loans, and the broader economy.' },
          ].map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 group flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden relative">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-6 left-6 bg-brand-600 text-white px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg">
                  {post.category}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6 text-xs text-slate-400 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2"><BookOpen size={14} /> 5 min read</span>
                  <span>{post.date}</span>
                </div>
                <h4 className="text-2xl font-display font-bold text-slate-900 mb-6 group-hover:text-brand-600 transition-colors leading-tight">{post.title}</h4>
                <p className="text-slate-600 mb-10 leading-relaxed font-medium flex-grow">{post.desc}</p>
                <Link to="/blog" className="flex items-center gap-2 text-sm font-bold text-brand-600 group-hover:gap-4 transition-all">
                  Read Full Article <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex justify-center gap-4">
          <button className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-900 hover:bg-brand-600 hover:text-white transition-all">1</button>
          <button className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-900 hover:bg-brand-600 hover:text-white transition-all">2</button>
          <button className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-900 hover:bg-brand-600 hover:text-white transition-all">3</button>
          <button className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-900 hover:bg-brand-600 hover:text-white transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
