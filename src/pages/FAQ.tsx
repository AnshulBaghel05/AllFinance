import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  ChevronRight,
  Zap,
  ShieldCheck,
  Award,
  Users,
  Lock,
  Globe,
  CreditCard,
  Target,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3D } from '../components/3DComponents';
import { cn } from '../lib/utils';

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-slate-100 last:border-none">
    <button 
      onClick={onClick}
      className="w-full py-8 flex justify-between items-center text-left group transition-all"
    >
      <h4 className={cn("text-xl font-display font-bold transition-colors", isOpen ? "text-brand-600" : "text-slate-900 group-hover:text-brand-600")}>
        {question}
      </h4>
      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center transition-all", isOpen ? "bg-brand-600 text-white rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600")}>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="pb-8 text-slate-600 text-lg leading-relaxed font-medium max-w-3xl">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    { question: 'What is the minimum investment required?', answer: 'We work with clients at all stages of their financial journey. While some specific funds have minimums, our general advisory services are accessible to anyone looking to build wealth, starting from as little as $500 monthly.' },
    { question: 'How do you charge for your services?', answer: 'We believe in complete transparency. Depending on your needs, we offer flat monthly subscription plans or a percentage-based fee for managed assets. There are no hidden commissions or exit loads.' },
    { question: 'Are you SEBI registered?', answer: 'Yes, AllFinance is a fully licensed and SEBI-registered Investment Advisory firm. We adhere to the strictest regulatory standards to ensure your protection and peace of mind.' },
    { question: 'Can I manage my investments online?', answer: 'Absolutely. Every client gets access to our secure Client Portal, where you can track your portfolio performance, upload documents, and communicate with your advisor 24/7.' },
    { question: 'How often will I meet with my advisor?', answer: 'This depends on your plan. Essential plan members have annual reviews, while Premium and Elite members have quarterly and monthly deep-dives respectively. However, you can always reach out via the portal.' },
    { question: 'What is your investment philosophy?', answer: 'We focus on long-term wealth creation through diversified asset allocation and disciplined risk management. We don\'t chase short-term trends; we build strategies that stand the test of time.' },
  ];

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
              Common <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Everything you need to know about our services, fees, and how we help you build wealth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-[3.5rem] border-slate-200/60 shadow-2xl">
            {faqs.map((faq, i) => (
              <FAQItem 
                key={i} 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openIndex === i} 
                onClick={() => setOpenIndex(openIndex === i ? null : i)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions? */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-brand-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-3xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">Still Have <span className="text-brand-200">Questions?</span></h2>
          <p className="text-brand-100 text-xl mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
            Our team is ready to provide the answers you need. Reach out today for a personalized consultation.
          </p>
          <Link to="/contact" className="bg-white text-brand-600 px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 inline-flex">
            Contact Support <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
