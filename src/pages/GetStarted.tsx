import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  PieChart, 
  Calculator, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  Lock,
  Mail,
  Phone,
  User,
  Briefcase,
  Target,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import PageTransition from '../components/PageTransition';

const steps = [
  { id: 1, title: 'Your Goal', description: 'What are you looking to achieve?' },
  { id: 2, title: 'About You', description: 'Tell us a bit about yourself' },
  { id: 3, title: 'Financial Profile', description: 'Help us understand your situation' },
  { id: 4, title: 'Confirmation', description: 'Ready to start your journey' }
];

const goals = [
  { id: 'investment', title: 'Investment Planning', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 'tax', title: 'Tax Consulting', icon: Calculator, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { id: 'wealth', title: 'Wealth Management', icon: ShieldCheck, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { id: 'retirement', title: 'Retirement Planning', icon: Target, color: 'text-orange-600', bg: 'bg-orange-50' },
  { id: 'insurance', title: 'Insurance Advisory', icon: Lock, color: 'text-rose-600', bg: 'bg-rose-50' },
  { id: 'business', title: 'Business Advisory', icon: Briefcase, color: 'text-slate-600', bg: 'bg-slate-50' },
];

const GetStarted = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    goal: '',
    name: '',
    email: '',
    phone: '',
    investmentRange: '',
    riskTolerance: 'moderate',
    message: ''
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 font-bold text-sm uppercase tracking-widest mb-6"
            >
              <Sparkles size={16} />
              Start Your Journey
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
              Let's Build Your <span className="gradient-text">Financial Future</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Complete this short guide to help us understand your needs and match you with the right expert.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12 relative">
            <div className="flex justify-between items-center relative z-10">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center gap-3">
                  <div 
                    className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-500 shadow-xl",
                      currentStep >= step.id 
                        ? "bg-brand-600 text-white scale-110" 
                        : "bg-white text-slate-400 border border-slate-200"
                    )}
                  >
                    {currentStep > step.id ? <CheckCircle2 size={24} /> : step.id}
                  </div>
                  <span className={cn(
                    "text-xs font-black uppercase tracking-widest hidden md:block",
                    currentStep >= step.id ? "text-brand-600" : "text-slate-400"
                  )}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200 -z-0">
              <motion.div 
                className="h-full bg-brand-600"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Form Content */}
          <div className="glass-card p-8 md:p-12 rounded-[3rem] border-slate-200/60 shadow-2xl bg-white/80 backdrop-blur-xl">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">What's your primary goal?</h2>
                    <p className="text-slate-500 font-medium">Select the service that best matches your current needs.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {goals.map((goal) => (
                      <button
                        key={goal.id}
                        onClick={() => {
                          setFormData({ ...formData, goal: goal.id });
                          handleNext();
                        }}
                        className={cn(
                          "p-8 rounded-[2.5rem] border-2 text-left transition-all group hover:shadow-2xl hover:-translate-y-1",
                          formData.goal === goal.id 
                            ? "border-brand-600 bg-brand-50/50 shadow-xl" 
                            : "border-slate-100 bg-white hover:border-brand-200"
                        )}
                      >
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform", goal.bg, goal.color)}>
                          <goal.icon size={28} />
                        </div>
                        <h3 className="text-xl font-display font-bold text-slate-900 mb-2">{goal.title}</h3>
                        <div className="flex items-center gap-2 text-brand-600 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                          Select <ChevronRight size={16} />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="max-w-2xl mx-auto space-y-8"
                >
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Personal Details</h2>
                    <p className="text-slate-500 font-medium">We'll use this to reach out and schedule your consultation.</p>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input 
                          type="text" 
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-6 font-bold text-slate-900 focus:border-brand-600 focus:bg-white outline-hidden transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-2">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <input 
                            type="email" 
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-6 font-bold text-slate-900 focus:border-brand-600 focus:bg-white outline-hidden transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-2">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                          <input 
                            type="tel" 
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-6 font-bold text-slate-900 focus:border-brand-600 focus:bg-white outline-hidden transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-6">
                    <button 
                      onClick={handleBack}
                      className="flex-1 bg-white text-slate-900 py-5 rounded-2xl font-bold border-2 border-slate-100 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                    >
                      <ArrowLeft size={20} /> Back
                    </button>
                    <button 
                      onClick={handleNext}
                      disabled={!formData.name || !formData.email}
                      className="flex-3 bg-brand-600 text-white py-5 rounded-2xl font-bold shadow-xl shadow-brand-600/20 hover:bg-brand-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="max-w-2xl mx-auto space-y-8"
                >
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Financial Profile</h2>
                    <p className="text-slate-500 font-medium">This helps us prepare the right strategy for our first meeting.</p>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-2">Estimated Investment Amount</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['$10k - $50k', '$50k - $250k', '$250k - $1M', '$1M+'].map((range) => (
                          <button
                            key={range}
                            onClick={() => setFormData({ ...formData, investmentRange: range })}
                            className={cn(
                              "py-4 rounded-2xl font-bold border-2 transition-all",
                              formData.investmentRange === range 
                                ? "border-brand-600 bg-brand-50 text-brand-600" 
                                : "border-slate-100 bg-slate-50 text-slate-600 hover:border-brand-200"
                            )}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-2">Risk Tolerance</label>
                      <div className="flex flex-col gap-4">
                        <input 
                          type="range" 
                          min="0" 
                          max="2" 
                          step="1"
                          value={formData.riskTolerance === 'conservative' ? 0 : formData.riskTolerance === 'moderate' ? 1 : 2}
                          onChange={(e) => {
                            const val = parseInt(e.target.value);
                            setFormData({ ...formData, riskTolerance: val === 0 ? 'conservative' : val === 1 ? 'moderate' : 'aggressive' });
                          }}
                          className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                        />
                        <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                          <span className={cn(formData.riskTolerance === 'conservative' && "text-brand-600")}>Conservative</span>
                          <span className={cn(formData.riskTolerance === 'moderate' && "text-brand-600")}>Moderate</span>
                          <span className={cn(formData.riskTolerance === 'aggressive' && "text-brand-600")}>Aggressive</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-2">Any specific notes? (Optional)</label>
                      <textarea 
                        rows={4}
                        placeholder="Tell us about any specific concerns or requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-6 font-bold text-slate-900 focus:border-brand-600 focus:bg-white outline-hidden transition-all resize-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 pt-6">
                    <button 
                      onClick={handleBack}
                      className="flex-1 bg-white text-slate-900 py-5 rounded-2xl font-bold border-2 border-slate-100 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                    >
                      <ArrowLeft size={20} /> Back
                    </button>
                    <button 
                      onClick={handleNext}
                      disabled={!formData.investmentRange}
                      className="flex-3 bg-brand-600 text-white py-5 rounded-2xl font-bold shadow-xl shadow-brand-600/20 hover:bg-brand-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Finish Setup <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-10"
                >
                  <div className="w-24 h-24 bg-brand-100 text-brand-600 rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                    <CheckCircle2 size={48} />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">You're All Set!</h2>
                    <p className="text-xl text-slate-600 max-w-lg mx-auto font-medium leading-relaxed">
                      Thank you, <span className="text-brand-600 font-bold">{formData.name}</span>. We've received your information and our team is already reviewing your profile.
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-3xl p-8 max-w-md mx-auto border border-slate-100 text-left space-y-4">
                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">Next Steps</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                        <p className="text-slate-700 font-medium">An advisor will call you within 24 business hours.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                        <p className="text-slate-700 font-medium">We'll send a welcome kit to <span className="font-bold">{formData.email}</span>.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                        <p className="text-slate-700 font-medium">Prepare any existing financial documents for our call.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-6">
                    <Link 
                      to="/" 
                      className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-brand-600 transition-all inline-flex items-center gap-2"
                    >
                      Return to Dashboard <ArrowRight size={20} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-display font-bold text-slate-900">
              <ShieldCheck size={24} /> SECURED DATA
            </div>
            <div className="flex items-center gap-2 font-display font-bold text-slate-900">
              <Award size={24} /> LICENSED ADVISORS
            </div>
            <div className="flex items-center gap-2 font-display font-bold text-slate-900">
              <PieChart size={24} /> SMART STRATEGY
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default GetStarted;
