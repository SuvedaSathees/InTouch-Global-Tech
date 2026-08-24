import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, MessageSquare } from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

export function CTASection({
  title = "Ready to Build Your System?",
  subtitle = "Tell us your goals. We'll provide a comprehensive technical blueprint and fixed-milestone scope within 24 hours.",
  buttonText = "Start Your Project",
  buttonHref = "/contact",
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white select-none">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 p-8 text-center sm:p-14 shadow-2xl shadow-blue-900/15"
        >
          <div className="relative z-10 mx-auto max-w-2xl text-white">
            <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              {title}
            </h2>

            <p className="mx-auto mt-4 text-balance text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
              {subtitle}
            </p>

            <div className="mt-8 flex items-center justify-center">
              <MagneticButton
                href={buttonHref}
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-900 font-bold shadow-xl px-8 py-3.5 rounded-xl text-sm"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </MagneticButton>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs text-blue-100 border-t border-blue-500/50 pt-6 font-medium">
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
        </motion.div>
      </div>
    </section>
  );
}
