import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, MessageSquare } from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

export function HomeFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-24 sm:py-32 select-none border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 sm:p-16 text-center text-white shadow-2xl shadow-blue-500/25 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Have an Idea? Let's Build It.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-blue-100 leading-relaxed font-normal">
              Tell us what you're trying to build. We'll help you turn it into a scalable, production-ready digital product.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <MagneticButton
                  href="/contact"
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-900 font-bold px-9 py-4 rounded-2xl shadow-lg shadow-black/10 text-sm"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </MagneticButton>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <MagneticButton
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-blue-300/60 bg-blue-800/40 hover:bg-blue-800/60 text-white px-8 py-4 rounded-2xl text-sm shadow-md backdrop-blur-md"
                >
                  Talk to an Architect
                </MagneticButton>
              </motion.div>
            </div>

            <div className="mt-12 pt-8 border-t border-blue-400/40 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-blue-100 font-mono">
              <span className="flex items-center gap-1.5 font-bold">
                <ShieldCheck className="h-4 w-4 text-blue-200" />
                NDA Protected
              </span>
              <span className="flex items-center gap-1.5 font-bold">
                <Zap className="h-4 w-4 text-blue-200" />
                24-Hour Response
              </span>
              <span className="flex items-center gap-1.5 font-bold">
                <MessageSquare className="h-4 w-4 text-blue-200" />
                Direct Architect Chat
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
