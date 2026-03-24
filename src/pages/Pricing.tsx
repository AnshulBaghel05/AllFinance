import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Zap,
  ShieldCheck,
  Award,
  Users,
  Lock,
  Globe,
  CreditCard,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3D } from '../components/3DComponents';
import { cn } from '../lib/utils';

const Pricing = () => {
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
              Transparent <span className="gradient-text">Pricing Plans</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              No hidden fees, no complex structures. Choose the plan that best fits your financial goals and aspirations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { 
              title: 'Essential', 
              price: '$49', 
              desc: 'Perfect for individuals starting their financial journey.', 
              features: ['Basic Investment Advice', 'Tax Filing Support', 'SIP Calculator Access', 'Email Support', 'Monthly Newsletter'],
              color: 'bg-slate-900'
            },
            { 
              title: 'Premium', 
              price: '$149', 
              desc: 'Comprehensive wealth management for growing families.', 
              features: ['Personalized Portfolio', 'Tax Optimization', 'Retirement Planning', 'Priority Support', 'Quarterly Reviews', 'Insurance Advisory'],
              color: 'bg-brand-600',
              popular: true
            },
            { 
              title: 'Elite', 
              price: '$499', 
              desc: 'Full-service financial advisory for high-net-worth individuals.', 
              features: ['Dedicated Advisor', 'Estate Planning', 'Corporate Tax Prep', '24/7 Concierge Support', 'Private Market Access', 'Legacy Planning'],
              color: 'bg-brand-900'
            }
          ].map((plan, i) => (
            <motion.div 
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "glass-card p-12 rounded-[3rem] border-slate-200/60 hover:shadow-3xl transition-all duration-500 flex flex-col relative",
                plan.popular && "border-brand-300 shadow-2xl scale-105 z-10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">{plan.title}</h3>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-5xl font-display font-bold text-slate-900">{plan.price}</span>
                <span className="text-slate-500 font-bold text-sm mb-2">/ Month</span>
              </div>
              <p className="text-slate-600 mb-10 leading-relaxed font-medium">{plan.desc}</p>
              <div className="space-y-6 mb-12 flex-grow">
                {plan.features.map(f => (
                  <div key={f} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <CheckCircle2 className="text-accent-teal" size={18} />
                    {f}
                  </div>
                ))}
              </div>
              <Link 
                to="/get-started"
                className={cn(
                  "w-full py-5 rounded-2xl font-bold text-lg shadow-xl transition-all text-center flex items-center justify-center",
                  plan.popular ? "bg-brand-600 text-white hover:bg-brand-700 shadow-brand-500/30" : "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                Choose {plan.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl font-display font-bold mb-6">Detailed Comparison</h2>
            <p className="text-slate-600">Compare our plans side-by-side to find the perfect fit for your needs.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="py-8 px-6 text-slate-500 font-bold uppercase tracking-widest text-xs">Feature</th>
                  <th className="py-8 px-6 text-slate-900 font-display font-bold text-xl">Essential</th>
                  <th className="py-8 px-6 text-brand-600 font-display font-bold text-xl">Premium</th>
                  <th className="py-8 px-6 text-slate-900 font-display font-bold text-xl">Elite</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 font-bold text-sm">
                {[
                  { name: 'Investment Advice', e: 'Basic', p: 'Advanced', l: 'Premium' },
                  { name: 'Tax Support', e: 'Standard', p: 'Optimization', l: 'Full Concierge' },
                  { name: 'Support', e: 'Email', p: 'Priority', l: '24/7 Dedicated' },
                  { name: 'Reviews', e: 'Annual', p: 'Quarterly', l: 'Monthly' },
                  { name: 'Market Access', e: 'Public', p: 'Public', l: 'Private & Public' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="py-6 px-6 text-slate-900">{row.name}</td>
                    <td className="py-6 px-6">{row.e}</td>
                    <td className="py-6 px-6 text-brand-600">{row.p}</td>
                    <td className="py-6 px-6">{row.l}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
