'use client';

import { motion } from 'framer-motion';
import { Star, MessageCircle, Heart } from 'lucide-react';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { PlayStoreButton } from '@/components/ui/PlayStoreButton';
import { CounterAnimation } from '@/components/ui/CounterAnimation';
import Image from 'next/image';

export default function Hero() {
  const floatingCards = [
    { text: '💬 Perfect Opening Line Generated', delay: 0 },
    { text: '🎯 95% Match Date Idea', delay: 0.2 },
    { text: '🎁 Gift Investigation Complete', delay: 0.4 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-50 pt-20">
      {/* Animated Background Elements with Parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-rizzer-pink/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-rizzer-salmon/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.4, 0.6],
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rizzer-yellow/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Master Modern Dating{' '}
              <span className="text-gradient">with AI</span>
            </motion.h1>

            <motion.h2 
              className="text-xl md:text-2xl text-gray-700 mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your personal dating coach that helps you spark conversations,
              plan perfect dates, and build meaningful connections
            </motion.h2>

            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Rizzer combines AI intelligence with dating psychology to give you
              personalized conversation starters, date ideas, and relationship
              insights that actually work.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <AppStoreButton className="px-6" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <PlayStoreButton variant="outline" className="px-6" />
              </motion.div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Star className="text-rizzer-yellow fill-rizzer-yellow" size={20} />
                <span className="font-semibold">
                  <CounterAnimation end={4.9} decimals={1} />/5 Rating
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="text-rizzer-blue" size={20} />
                <span className="font-semibold">
                  <CounterAnimation end={50} suffix="K+" /> Conversations Started
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Heart className="text-rizzer-pink fill-rizzer-pink" size={20} />
                <span className="font-semibold">
                  <CounterAnimation end={10} suffix="K+" /> Successful Dates
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup with Floating Cards */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.3 },
              scale: { duration: 0.8, delay: 0.3 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Phone Mockup Image */}
            <motion.div 
              className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/Rizzhome.png"
                alt="Rizzer App Interface"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                className="absolute bg-white px-6 py-3 rounded-2xl shadow-xl border border-gray-100 font-semibold text-sm md:text-base whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1 + card.delay,
                  duration: 0.5,
                }}
                style={{
                  top: `${20 + index * 30}%`,
                  left: index % 2 === 0 ? '-10%' : 'auto',
                  right: index % 2 === 1 ? '-10%' : 'auto',
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: card.delay,
                  }}
                >
                  {card.text}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
