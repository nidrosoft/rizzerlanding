'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is Rizzer free to use?',
    answer:
      'Rizzer offers a free tier with basic features including conversation starters and date ideas. Premium features like unlimited AI coaching, gift investigations, and advanced date profiles are available with Rizzer Pro starting at $9.99/month.',
  },
  {
    question: 'How does the AI work?',
    answer:
      'Rizzer uses advanced AI (powered by Grok) trained on dating psychology and successful conversation patterns. It analyzes context, interests, and relationship dynamics to provide personalized suggestions that feel natural and authentic.',
  },
  {
    question: 'Is my data private and secure?',
    answer:
      'Absolutely. Your conversations, date profiles, and personal information are encrypted and never shared. We take privacy seriously and comply with all data protection regulations.',
  },
  {
    question: 'Can I use Rizzer for multiple dates?',
    answer:
      "Yes! Rizzer is designed to help you manage multiple connections. Create separate date profiles for each person you're talking to, and Rizzer keeps everything organized and private.",
  },
  {
    question: 'Does Rizzer work with dating apps?',
    answer:
      'Yes! Rizzer works alongside any dating app. Use it for Tinder, Bumble, Hinge, or even real-life connections. It\'s your universal dating coach.',
  },
  {
    question: "What's the gift investigation feature?",
    answer:
      'Send Sherlock (our AI detective) to chat with your date via WhatsApp or iMessage. Sherlock naturally discovers their interests and preferences, then gives you personalized gift recommendations. It\'s like having a private investigator for gift ideas!',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-rizzer-pink transition-colors group"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg font-semibold pr-8 group-hover:text-rizzer-pink transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-rizzer-pink" />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <motion.p 
              className="pb-6 text-gray-600 leading-relaxed"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Got Questions? <span className="text-gradient">We've Got Answers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Rizzer
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
