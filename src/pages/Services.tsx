import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  PieChart, 
  Calculator, 
  Users, 
  ArrowRight, 
  ChevronRight,
  CheckCircle2,
  Zap,
  Award,
  BarChart3,
  Target,
  Lock,
  Globe,
  CreditCard
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3D } from '../components/3DComponents';
import { cn } from '../lib/utils';

const ServiceDetail = ({ title, icon, desc, features, img, reverse = false, id }: { title: string; icon: React.ReactNode; desc: string; features: string[]; img: string; reverse?: boolean; id: string }) => (
  <section id={id} className="py-24 border-b border-slate-100 last:border-none scroll-mt-32">
    <div className={cn("max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center", reverse && "lg:flex-row-reverse")}>
      <motion.div 
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={cn("order-2 lg:order-1", reverse && "lg:order-2")}
      >
        <div className="inline-flex items-center gap-3 text-brand-600 font-bold uppercase tracking-widest text-sm mb-6">
          <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
            {React.cloneElement(icon as React.ReactElement, { size: 20 })}
          </div>
          {title}
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-slate-900 leading-tight">{title}</h2>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">{desc}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
              <CheckCircle2 className="text-accent-teal" size={18} />
              {f}
            </div>
          ))}
        </div>
        <Link to="/contact" className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all inline-flex items-center gap-3 shadow-xl">
          Get Started <ArrowRight size={20} />
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={cn("order-1 lg:order-2", reverse && "lg:order-1")}
      >
        <Card3D className="p-0 overflow-hidden rounded-[3rem] shadow-3xl border-8 border-white">
          <img src={img} alt={title} className="w-full h-full object-cover aspect-square" referrerPolicy="no-referrer" />
        </Card3D>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
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
              Our <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Tailored financial services designed to navigate the complexities of modern wealth creation and protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service List */}
      <ServiceDetail 
        id="investment-planning"
        title="Investment Planning"
        icon={<TrendingUp />}
        desc="Strategic asset allocation to maximize returns while managing your unique risk profile. We build portfolios that stand the test of time."
        features={['Asset Allocation', 'Risk Profiling', 'Portfolio Rebalancing', 'Market Analysis', 'Dividend Strategies', 'Growth Focus']}
        img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      />

      <ServiceDetail 
        id="tax-consulting"
        title="Tax Consulting"
        icon={<ShieldCheck />}
        desc="Expert strategies to minimize liabilities and ensure full compliance with evolving tax laws. We help you keep more of what you earn."
        features={['Tax Saving Strategies', 'Compliance Management', 'Audit Support', 'Corporate Tax Planning', 'Estate Tax Prep', 'International Tax']}
        img="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
        reverse
      />

      <ServiceDetail 
        id="wealth-management"
        title="Wealth Management"
        icon={<PieChart />}
        desc="Holistic management of your financial assets for multi-generational growth and stability. We treat your wealth with the care it deserves."
        features={['Multi-Asset Portfolios', 'Legacy Planning', 'Philanthropy Advice', 'Family Office Services', 'Trust Management', 'Real Estate Advisory']}
        img="https://images.unsplash.com/photo-1579621970795-87faff2f9050?auto=format&fit=crop&w=800&q=80"
      />

      <ServiceDetail 
        id="insurance-advisory"
        title="Insurance Advisory"
        icon={<Lock />}
        desc="Protecting what matters most with personalized risk assessment and comprehensive coverage. We ensure you're prepared for the unexpected."
        features={['Life Insurance', 'Health Coverage', 'Disability Protection', 'Business Liability', 'Asset Insurance', 'Critical Illness']}
        img="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
        reverse
      />

      <ServiceDetail 
        id="retirement-planning"
        title="Retirement Planning"
        icon={<ArrowRight />}
        desc="Building a robust nest egg to ensure a comfortable, worry-free, and secure future. We help you transition into your golden years with confidence."
        features={['Pension Schemes', 'Annuity Planning', 'Healthcare Fund', 'Legacy Planning', '401k Optimization', 'Social Security Strategy']}
        img="https://images.unsplash.com/photo-1556742049-02e49f606217?auto=format&fit=crop&w=800&q=80"
      />

      <ServiceDetail 
        id="loan-mortgage"
        title="Loan & Mortgage Consulting"
        icon={<CreditCard />}
        desc="Finding the best financing options for your home, business, or education with ease. We navigate the lending landscape so you don't have to."
        features={['Home Mortgages', 'Business Loans', 'Education Financing', 'Debt Consolidation', 'Refinancing Advice', 'Credit Repair']}
        img="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
        reverse
      />

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-3xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">Need a Personalized <span className="text-brand-500">Strategy?</span></h2>
          <p className="text-slate-400 text-xl mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
            Every financial journey is unique. Let's build a plan that matches your specific goals and risk tolerance.
          </p>
          <Link to="/contact" className="bg-brand-600 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:bg-brand-700 transition-all flex items-center justify-center gap-3 inline-flex">
            Book Free Consultation <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
