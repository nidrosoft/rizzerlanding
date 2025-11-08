'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus',
    age: 28,
    location: 'Los Angeles',
    rating: 5,
    text: 'Rizzer literally changed my dating life. I went from awkward conversations to actually having fun texting. Got 3 dates in the first week!',
    avatar: '👨🏾',
  },
  {
    name: 'Sarah',
    age: 25,
    location: 'New York',
    rating: 5,
    text: 'The gift investigation feature is GENIUS. Sherlock found out she loves vintage vinyl records. Best first date gift ever!',
    avatar: '👩🏼',
  },
  {
    name: 'David',
    age: 31,
    location: 'San Francisco',
    rating: 5,
    text: 'As someone who overthinks every message, Rizzer is a lifesaver. The AI suggestions are actually good and feel natural.',
    avatar: '👨🏻',
  },
  {
    name: 'Jessica',
    age: 27,
    location: 'Miami',
    rating: 5,
    text: 'I love the date profile feature. I can keep track of everyone I\'m talking to without getting confused. Game changer!',
    avatar: '👩🏽',
  },
  {
    name: 'Alex',
    age: 29,
    location: 'Chicago',
    rating: 5,
    text: 'The AI date ideas are so creative! Way better than generic \'dinner and a movie\'. My dates are actually memorable now.',
    avatar: '👨🏼',
  },
  {
    name: 'Emily',
    age: 26,
    location: 'Austin',
    rating: 5,
    text: 'Rizzer helped me go from zero confidence to actually enjoying dating. The conversation starters are perfect icebreakers.',
    avatar: '👩🏻',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Real People, <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of people who are already dating with confidence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-rizzer-pink/20 hover:shadow-2xl"
            >
              {/* Avatar */}
              <motion.div 
                className="flex items-center gap-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-rizzer rounded-full flex items-center justify-center text-3xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <div className="font-bold text-lg text-gray-900">
                    {testimonial.name}, {testimonial.age}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.15 + 0.3 + (i * 0.1),
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <Star
                      className="w-5 h-5 fill-rizzer-yellow text-rizzer-yellow"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.4 }}
              >
                "{testimonial.text}"
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
