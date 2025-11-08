'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock } from 'lucide-react';

export default function WhyRizzer() {
  return (
    <section id="why-rizzer" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why We Built <span className="text-gradient">Rizzer</span>
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Modern dating is hard. Swiping is easy, but building real
                connections? That's where most people struggle.
              </p>
              <p>
                We created Rizzer because we believe everyone deserves to feel
                confident in their dating life. Whether you're naturally shy,
                overthink your messages, or just want to level up your dating
                game, Rizzer gives you the tools and confidence to succeed.
              </p>
              <p>
                Our AI doesn't just give you generic pickup lines. It learns your
                style, understands your matches, and helps you build authentic
                connections that lead to real relationships.
              </p>
              <p className="font-semibold text-gray-900">
                Think of Rizzer as your wingman, dating coach, and relationship
                manager all in one - always in your pocket, always ready to help.
              </p>
            </div>

            {/* Stats Callout */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <TrendingUp className="w-8 h-8 text-rizzer-pink mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">85%</div>
                <div className="text-sm text-gray-600">
                  More confident conversations
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <Users className="w-8 h-8 text-rizzer-salmon mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">3x</div>
                <div className="text-sm text-gray-600">
                  Increase in successful dates
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <Clock className="w-8 h-8 text-rizzer-yellow mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">2+ hrs</div>
                <div className="text-sm text-gray-600">
                  Saved per week on planning
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-pink-200 via-orange-200 to-yellow-200 p-12 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="text-6xl">❤️</div>
                  <div className="text-2xl font-bold text-gray-800">
                    Built for Real Connections
                  </div>
                  <div className="text-gray-700">
                    Not just matches, meaningful relationships
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 bg-rizzer-pink/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 bg-rizzer-salmon/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
