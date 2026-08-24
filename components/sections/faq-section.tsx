'use client';

import { motion } from 'framer-motion';
import { faqs } from '@/lib/site-config';
import { SectionHeading } from '@/components/section-heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

export function FAQSection() {
  const filteredFaqs = faqs.slice(0, 8);

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden bg-white border-t border-slate-200">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Frequently Asked Questions"
          title="Everything You Need to Know Before Starting"
          description="Straightforward answers to how we scope, architect, deliver, and support enterprise-grade software."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mt-14"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm transition-colors hover:border-slate-300 data-[state=open]:border-blue-500 data-[state=open]:bg-blue-50/20"
              >
                <AccordionTrigger className="text-left text-base font-bold text-slate-900 hover:no-underline py-5">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed pb-6 pl-7 border-t border-slate-100 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Quick Contact Card */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Have a specific architectural question?</p>
              <p className="text-xs text-slate-500">Our engineering leads are ready to answer your technical inquiries.</p>
            </div>
          </div>
          <MagneticButton href="/contact" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
            Ask an Engineer
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
