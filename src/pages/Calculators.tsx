import React from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  TrendingUp, 
  ArrowRight, 
  ChevronRight,
  CheckCircle2,
  PieChart,
  BarChart3,
  Target,
  Zap,
  Lock,
  Globe,
  CreditCard,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3D } from '../components/3DComponents';
import { cn } from '../lib/utils';

const CalculatorTool = ({ title, icon, color }: { title: string; icon: React.ReactNode; color: string }) => {
  const [amount, setAmount] = React.useState(1000);
  const [rate, setRate] = React.useState(12);
  const [time, setTime] = React.useState(10);

  const calculateReturns = () => {
    const monthlyRate = rate / 12 / 100;
    const months = time * 12;
    const futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    return Math.round(futureValue).toLocaleString();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-10 rounded-[3rem] border-slate-200/60 hover:border-brand-300 hover:shadow-2xl transition-all duration-500"
    >
      <div className="flex items-center gap-5 mb-10">
        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", color)}>
          {React.cloneElement(icon as React.ReactElement, { size: 28 })}
        </div>
        <div>
          <h3 className="text-2xl font-display font-bold text-slate-900">{title}</h3>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Interactive Tool</p>
        </div>
      </div>
      
      <div className="space-y-10">
        <div>
          <div className="flex justify-between mb-4 font-bold">
            <span className="text-slate-500 text-sm uppercase tracking-wider">Monthly Investment</span>
            <span className="text-brand-600 text-lg">${amount.toLocaleString()}</span>
          </div>
          <input 
            type="range" 
            min="100" 
            max="10000" 
            step="100"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-600" 
          />
        </div>
        <div>
          <div className="flex justify-between mb-4 font-bold">
            <span className="text-slate-500 text-sm uppercase tracking-wider">Expected Return (p.a)</span>
            <span className="text-brand-600 text-lg">{rate}%</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="30" 
            step="1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-600" 
          />
        </div>
        <div>
          <div className="flex justify-between mb-4 font-bold">
            <span className="text-slate-500 text-sm uppercase tracking-wider">Time Period</span>
            <span className="text-brand-600 text-lg">{time} Years</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="40" 
            step="1"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-600" 
          />
        </div>

        <div className="pt-10 mt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-xs text-slate-400 uppercase font-black tracking-[0.2em] mb-2">Estimated Wealth</p>
            <p className="text-4xl font-display font-bold text-slate-900">${calculateReturns()}</p>
          </div>
          <button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all">
            Get Full Report
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Calculators = () => {
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
              Financial <span className="gradient-text">Calculators</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Stop guessing and start calculating. Our interactive tools provide instant clarity on your financial trajectory.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <CalculatorTool title="SIP Calculator" icon={<TrendingUp />} color="bg-brand-600" />
        <CalculatorTool title="EMI Calculator" icon={<CreditCard />} color="bg-accent-teal" />
        <CalculatorTool title="Tax Planner" icon={<ShieldCheck />} color="bg-accent-gold" />
        <CalculatorTool title="Retirement Planner" icon={<Target />} color="bg-brand-900" />
      </div>

      {/* Why use tools? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8 text-slate-900 leading-tight">Why Use Our <span className="text-brand-600">Financial Tools?</span></h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our calculators are designed to provide you with a clear, data-driven roadmap for your financial journey. They help you visualize the impact of your decisions today on your wealth tomorrow.
            </p>
            <div className="space-y-6">
              {[
                'Instant, accurate projections based on current market data',
                'Visual charts that make complex data easy to understand',
                'Personalized reports tailored to your specific goals',
                'Completely free to use with no hidden obligations'
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                  <CheckCircle2 className="text-accent-teal" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Card3D className="bg-slate-900 p-12 rounded-[3rem] text-white shadow-3xl">
              <h4 className="text-2xl font-display font-bold mb-8">Ready to take the next step?</h4>
              <p className="text-slate-400 mb-10 leading-relaxed">Our calculators are just the beginning. Book a free consultation to build a comprehensive plan with a senior advisor.</p>
              <Link to="/contact" className="bg-brand-600 text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-brand-700 transition-all flex items-center justify-center gap-3 w-full">
                Book Free Consultation <ArrowRight size={20} />
              </Link>
            </Card3D>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculators;
