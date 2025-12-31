import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight, Sparkles } from 'lucide-react';
import mainImageH from '../assets/images/katong.jpeg';
import odeImage from '../assets/images/odemain.jpg';
import lecturnImage from '../assets/images/portfolioImages/mhedic/mhedicImages/1.jpg';
import weddingMain from '../assets/images/weddingMain.jpg';
import coupleMain from '../assets/images/coupleMain.jpg';

export default function MainPage(props) {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#FDFCFD] text-slate-900 font-sans selection:bg-purple-100 overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] right-[-10%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#bc00dd] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Sparkles className="w-3 h-3" />
              Available for Bookings
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] mb-8">
              Odelia <br />
              <span className="italic text-purple-600">Lim.</span>
            </h1>
            
            <p className="text-lg text-slate-500 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed font-serif italic">
              Freelance Photographer and medicine student. Based in Sydney and Singapore specialising in event photography.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => navigate('/portfolio')} className="group flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-2xl shadow-2xl hover:bg-slate-800 transition-all active:scale-95">
                <span className="font-semibold tracking-wide uppercase text-xs text-nowrap">Explore Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="https://instagram.com/avosfilm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white border-2 border-slate-100 text-slate-700 px-8 py-5 rounded-2xl font-semibold text-xs uppercase tracking-widest hover:border-purple-200 shadow-sm">
                <Instagram className="w-4 h-4" /> @avosfilm
              </a>
            </div>
          </motion.div>
          <div className="lg:col-span-7 mt-12 lg:mt-0">
            <div className="lg:hidden relative w-full max-w-[320px] mx-auto h-[500px] sm:h-[550px]">

              <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[85%] z-10">
                <div className="bg-white p-2 shadow-2xl rounded-sm">
                  <img src={mainImageH} className="w-full aspect-[3/4] object-cover" alt="Katong" />
                </div>
              </div>

              <div className="absolute top-0 left-[-5%] w-[45%] z-50">
                <div className="bg-white p-1.5 shadow-xl rounded-sm -rotate-6">
                  <img src={odeImage} className="w-full aspect-[3/4] object-cover" alt="Odelia" />
                  <div className="absolute -top-12 right-0 pointer-events-none">
                    <div className="relative flex flex-col items-center scale-90">
                      <span className="font-serif italic text-purple-500 text-[10px] whitespace-nowrap mb-1">this is me</span>
                      <svg width="35" height="35" viewBox="0 0 45 45" fill="none" className="text-purple-400 rotate-[120deg]">
                        <path d="M5 5C10 15 20 20 35 30M35 30L25 32M35 30L33 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[5%] right-[-5%] w-[38%] z-30">
                <div className="bg-white p-1.5 shadow-xl rounded-sm rotate-12">
                  <img src={coupleMain} className="w-full aspect-[3/4] object-cover" alt="Couple" />
                </div>
              </div>
              <div className="absolute bottom-[8%] left-[-2%] w-[38%] z-20">
                <div className="bg-white p-1.5 shadow-xl rounded-sm -rotate-12">
                  <img src={lecturnImage} className="w-full aspect-[3/4] object-cover" alt="Event" />
                </div>
              </div>
              
              <div className="absolute bottom-0 right-[-2%] w-[45%] z-20">
                <div className="bg-white p-1.5 shadow-xl rounded-sm rotate-3">
                  <img src={weddingMain} className="w-full aspect-[3/4] object-cover" alt="Wedding" />
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative h-[800px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-[3/4] z-10 bg-white p-3 shadow-2xl">
                <img src={mainImageH} className="w-full h-full object-cover" alt="Katong" />
              </div>

              <div className="absolute top-[5%] left-[5%] w-[32%] aspect-[3/4] z-40 bg-white p-2 shadow-xl -rotate-6">
                <img src={odeImage} className="w-full h-full object-cover" alt="Odelia" />
                <div className="absolute top-0 -left-16 hidden md:block pointer-events-none">
                  <div className="relative flex flex-col items-end">
                    <span className="font-serif italic text-purple-500 text-sm whitespace-nowrap mb-1 -translate-x-4">this is me</span>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" className="text-purple-400">
                      <path d="M5 5C10 15 20 20 35 30M35 30L25 32M35 30L33 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div> 
              </div>

              <div className="absolute bottom-[10%] right-[-4%] w-[38%] aspect-[3/4] z-20 bg-white p-2 shadow-xl rotate-3">
                <img src={weddingMain} className="w-full h-full object-cover" alt="Wedding" />
              </div>
              <div className="absolute top-[10%] right-[8%] w-[28%] aspect-[3/4] z-30 bg-white p-2 shadow-xl rotate-12">
                <img src={coupleMain} className="w-full h-full object-cover" alt="Couple" />
              </div>
              <div className="absolute bottom-[5%] left-[5%] w-[28%] aspect-[3/4] z-20 bg-white p-2 shadow-lg -rotate-12">
                <img src={lecturnImage} className="w-full h-full object-cover" alt="Event" />
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="px-6 py-12 text-center border-t border-slate-50">
        <p className="text-[10px] text-black uppercase tracking-[0.3em] font-medium">
          Odelia Lim | @avosfilm
        </p>
      </footer>
    </div>
  );
}