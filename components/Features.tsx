'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, User, Target, Gift, Brain, Check } from 'lucide-react';
import Image from 'next/image';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  imagePosition: 'left' | 'right';
  image?: string;
}

const features: Feature[] = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'Never Run Out of Things to Say',
    description:
      "Get personalized conversation starters, witty responses, and dating advice powered by advanced AI. Whether you're texting, on a first date, or keeping the spark alive, Rizzer has your back.",
    features: [
      '🧠 Context-aware conversation starters',
      "💝 Personalized to your match's interests",
      '📸 Screenshot analysis for smart replies',
      '🎤 Voice input for on-the-go help',
      '✨ Custom rizz categories you create',
    ],
    imagePosition: 'right',
    image: '/images/RIZZ.PNG',
  },
  {
    icon: <User className="w-8 h-8" />,
    title: 'Organize Your Dating Life Like a Pro',
    description:
      "Create detailed profiles for everyone you're dating. Track conversations, remember important details, and never forget what matters to them.",
    features: [
      '💯 Compatibility scores and insights',
      '📝 Notes, memories, and important dates',
      '🎂 Birthday and milestone reminders',
      '💬 Conversation history tracking',
      '🔒 Private and secure',
    ],
    imagePosition: 'left',
    image: '/images/dateprofile.png',
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'AI-Crafted Date Ideas That Actually Work',
    description:
      "Stop googling 'date ideas near me'. Get personalized date suggestions based on your interests, location, budget, and relationship stage.",
    features: [
      '🤖 AI-generated unique date ideas',
      '📍 Location and season-aware',
      '💰 Budget-friendly options',
      '🎯 Match scores based on shared interests',
      '🗺️ Complete with addresses and timing',
    ],
    imagePosition: 'right',
    image: '/images/discovery.png',
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: 'Find the Perfect Gift Every Time',
    description:
      'Send Sherlock, your AI detective, to investigate what your date really wants. Get personalized gift ideas based on real conversations.',
    features: [
      '🕵️ AI investigates through natural conversation',
      '💬 WhatsApp & iMessage integration',
      '🎁 Personalized gift recommendations',
      '💵 Budget-aware suggestions',
      '💡 Creative and thoughtful ideas',
    ],
    imagePosition: 'left',
    image: '/images/gift.png',
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Your 24/7 Dating Strategist',
    description:
      'Chat with your AI dating coach anytime. Get advice on texting, date planning, relationship questions, and everything in between.',
    features: [
      '⚡ Real-time dating advice',
      '📱 Screenshot analysis for context',
      '🧠 Learn from dating psychology',
      '🔄 Continuous conversation threads',
      '🌍 Multi-language support',
    ],
    imagePosition: 'right',
    image: '/images/coach.png',
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'Match Your Vibe with Perfect Conversation Tones',
    description:
      'Choose from multiple conversation styles to match your personality and the moment. From flirty to funny, smooth to spicy - Rizzer adapts to your unique style.',
    features: [
      '😏 Flirty - Playful and charming',
      '😂 Funny - Humorous and witty',
      '😎 Smooth - Confident and cool',
      '🔥 Spicy - Bold and provocative',
      '💕 Romantic - Sweet and genuine',
    ],
    imagePosition: 'left',
    image: '/images/screenshot.png',
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
    >
      {/* Image Mockup */}
      <div
        className={`${
          feature.imagePosition === 'left' ? 'md:col-start-1 md:row-start-1' : 'md:col-start-2 md:row-start-1'
        }`}
      >
        <div className="relative">
          {feature.image ? (
            // Real screenshot
            <motion.div 
              className="relative w-full aspect-[9/16] max-w-[400px] mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-contain"
              />
              {/* Decorative gradient blob */}
              <motion.div 
                className="absolute -z-10 -top-4 -right-4 w-32 h-32 bg-rizzer-pink/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-rizzer-salmon/20 rounded-full blur-2xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.2, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          ) : (
            // Placeholder mockup
            <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl p-8 shadow-xl">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-rizzer rounded-full flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                </div>
              </div>
              {/* Decorative gradient blob */}
              <div className="absolute -z-10 -top-4 -right-4 w-32 h-32 bg-rizzer-pink/20 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-rizzer-salmon/20 rounded-full blur-2xl"></div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <motion.div
        className={`${
          feature.imagePosition === 'left' ? 'md:col-start-2 md:row-start-1' : 'md:col-start-1 md:row-start-1'
        }`}
        initial={{ opacity: 0, x: feature.imagePosition === 'left' ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: feature.imagePosition === 'left' ? 50 : -50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div 
          className="w-16 h-16 bg-gradient-rizzer rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {feature.icon}
        </motion.div>
        <motion.h3 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {feature.title}
        </motion.h3>
        <motion.p 
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {feature.description}
        </motion.p>
        <ul className="space-y-3">
          {feature.features.map((item, idx) => (
            <motion.li 
              key={idx} 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.6 + (idx * 0.1) }}
              whileHover={{ x: 5 }}
            >
              <span className="text-gray-700 text-lg">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything You Need to{' '}
            <span className="text-gradient">Win at Modern Dating</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rizzer gives you all the tools to feel confident, stay organized, and
            build genuine connections that last.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
