import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import SectionHeader from './section/section-header';
import { Section } from './section-wrapper';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const BrandNames = ['Vivanti London', 'Decode Age', 'Halemons', 'Define Digitally']

export default function CTASection() {
  return (
    <Section id="contact" className=''>
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            badge={"Let's Work Together"}
            titleP1='Ready to'
            titleP2='Transform'
            titleP3='Your Shopify Store?'
            description={"Book a free 30-minute strategy call. I'll discuss your goals, challenges, and how we can help scale your e-commerce business."}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              className={cn("py-6 px-8! text-base font-semibold group rounded-full",
                `bg-mid-green text-background border-2 border-transparent
                 dark:text-foreground 
                 hover:bg-transparent hover:border-deep-green hover:text-deep-green hover:dark:border-mid-green`
              )}
              asChild
            >
              <Link href='https://cal.com/om-sharma/30min' target='_blank'>
                <Calendar className="w-5 h-5" />
                Book a Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-10 border-t border-deep-pine"
          >
            <p className="text-sm tracking-widest uppercase opacity-60 mb-6 text-foreground">Trusted by leading brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
              {BrandNames.map((b, idx) => (
                <span key={idx} className="font-grotesque uppercase text-lg font-semibold text-foreground">{b}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
