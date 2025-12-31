import { MapPin, Mail, Instagram, ArrowUpRight, Sparkles, Globe2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import flowerImage from '../assets/images/flowercontact.png';

export default function ContactPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFD] text-slate-900 font-sans selection:bg-purple-100 overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-100/40 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-pink-50/60 rounded-full blur-[80px]" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-5 pt-20 md:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[280px] md:max-w-[420px]">
              <div className="absolute -inset-3 border border-slate-100 rounded-[2rem] -z-10 hidden md:block" />
              <div className="overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl shadow-purple-900/10">
                <img
                  src={flowerImage}
                  className="w-full h-auto max-h-[35vh] md:max-h-none aspect-[4/5] object-cover"
                  alt="Odelia Lim"
                />
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              Available for Bookings
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6">
              Let’s create <br className="hidden md:block" />
              <span className="italic text-purple-600">magic</span> together.
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Reach out to me below for booking enquiries - instagram DMs for the fastest response.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://instagram.com/avosfilm"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl md:rounded-2xl shadow-xl hover:bg-slate-800 transition-all active:scale-95 overflow-hidden w-full sm:w-auto"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-semibold tracking-wide">DM on Instagram</span>
              </a>

              <a
                href="mailto:odelialim04@gmail.com"
                className="flex items-center justify-center gap-3 bg-white border-2 border-slate-100 text-slate-700 px-8 py-4 rounded-xl md:rounded-2xl font-semibold hover:border-purple-200 transition-all shadow-sm w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <Globe2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Service Areas</h4>
                <p className="text-xl font-medium text-slate-800 mb-1">Sydney & Singapore</p>
                <p className="text-slate-500 text-sm">Location availablility upon request</p>
              </div>
            </div>
          </div>
          <a 
            href="https://instagram.com/avosfilm" 
            target="_blank"
            className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-pink-100 transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Social Presence</h4>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-pink-500 transition-colors" />
                </div>
                <p className="text-xl font-medium text-slate-800 mb-1">@avosfilm</p>
                <p className="text-slate-500 text-sm">Follow for my latest pictures and street photography</p>
              </div>
            </div>
          </a>
        </motion.div>

      </main>

      <footer className="px-6 py-12 text-center border-t border-slate-50">
        <p className="text-[10px] text-black uppercase tracking-[0.3em] font-medium">
          Odelia Lim | @avosfilm
        </p>
      </footer>
    </div>
  );
}