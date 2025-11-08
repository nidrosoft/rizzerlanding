'use client';

import { motion } from 'framer-motion';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { PlayStoreButton } from '@/components/ui/PlayStoreButton';

export default function CTABanner() {
  return (
    <section id="download" className="section-padding bg-gradient-rizzer relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Level Up Your Dating Game?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto">
            Join thousands of people who are already dating with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <AppStoreButton className="px-10 py-5 h-auto text-xl shadow-2xl" />
            <PlayStoreButton variant="outline" className="px-10 py-5 h-auto text-xl shadow-2xl" />
          </div>

          <p className="text-white/80 text-lg">
            Available on iOS and Android
          </p>
        </motion.div>
      </div>
    </section>
  );
}
