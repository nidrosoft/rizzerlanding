'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Rocket, Users } from 'lucide-react';

export default function StoryPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cyriac Zeh - The Story Behind Rizzer AI Dating Coach",
    "author": {
      "@type": "Person",
      "name": "Cyriac Zeh",
      "jobTitle": ["Founder & CEO", "Product Engineer", "Software Engineer", "AI Engineer"],
      "description": "Full-time entrepreneur and founder of Rizzer, an AI-powered dating coach",
      "url": "https://www.linkedin.com/in/cyriac-zeh/",
      "sameAs": [
        "https://www.linkedin.com/in/cyriac-zeh/",
        "https://rizzer.app"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Rizzer"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rizzer",
      "url": "https://rizzer.app"
    },
    "datePublished": "2025-11-07",
    "description": "The inspiring story of how Cyriac Zeh, a 30-year-old immigrant entrepreneur and AI engineer, built Rizzer - an AI dating coach that helps thousands navigate modern dating.",
    "keywords": "Cyriac Zeh, Rizzer founder, AI dating coach, product engineer, entrepreneur, software engineer, AI engineer, dating app, San Diego",
    "about": {
      "@type": "SoftwareApplication",
      "name": "Rizzer",
      "applicationCategory": "LifestyleApplication",
      "operatingSystem": ["iOS", "Android"]
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Cyriac Zeh - Founder of Rizzer | AI Dating Coach Story</title>
        <meta name="description" content="Meet Cyriac Zeh, the 30-year-old entrepreneur, product engineer, and AI engineer who founded Rizzer. Learn how an immigrant's dating struggles led to building an AI dating coach helping thousands." />
        <meta name="keywords" content="Cyriac Zeh, Rizzer founder, AI dating coach founder, product engineer, software engineer, AI engineer, entrepreneur, San Diego entrepreneur, dating app founder" />
        <meta name="author" content="Cyriac Zeh" />
        <link rel="canonical" href="https://rizzer.app/story" />
      </head>

      <div className="min-h-screen bg-white">
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Header */}
      <header className="bg-gradient-to-r from-rizzer-pink to-rizzer-salmon text-white py-6 sticky top-0 z-50">
        <div className="container-custom">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            ← Back to Rizzer
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-pink-50 via-white to-orange-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Story Behind <span className="text-gradient">Rizzer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              How <strong>Cyriac Zeh</strong>, a full-time entrepreneur and AI engineer, turned a personal struggle into a mission to help millions navigate modern dating
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Chapter 1: The Problem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-rizzer rounded-2xl flex items-center justify-center text-white">
                  <Heart className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-0">The Struggle Was Real</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Hi, I'm <strong>Cyriac Zeh</strong> a 30 year old full time entrepreneur, product engineer, software engineer, and AI engineer. Like many immigrants, I came to America with dreams and ambitions, but dating here? That was a whole different challenge.
                </p>
                <p className="text-lg">
                  The dating culture in America was completely different from what I knew back home. I struggled to understand how to approach American women, how to come up with date ideas that felt natural, and most importantly, how to be consistent. I was shy about asking for help because, honestly, I didn't even know where to start.
                </p>
                <p className="text-lg">
                  Then I discovered something that blew my mind: in America, you can date multiple people at once. Coming from a different culture, this was overwhelming. How do you remember important details about one person, let alone three, four, or five people at the same time? The details matter they show you care but keeping track of everything felt impossible.
                </p>
                <p className="text-lg">
                  And dating apps? Don't even get me started. I'd stare at my phone, not knowing how to start a conversation or what to say next. Every message felt like a test I wasn't prepared for.
                </p>
              </div>
            </motion.div>

            {/* Chapter 2: The Lightbulb Moment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-rizzer rounded-2xl flex items-center justify-center text-white">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-0">The Idea</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  That's when it hit me: what if I had a dating coach? Someone who could guide me through dates, help me understand the culture, and give me confidence when I needed it most. But coaches are expensive, and I was too shy to ask friends for help.
                </p>
                <p className="text-lg">
                  The idea for Rizzer was born about four years ago. I envisioned an AI powered dating coach that could help people like me navigate modern dating someone available 24/7, non judgmental, and always ready with advice.
                </p>
                <p className="text-lg">
                  I also realized I needed a way to track important details about the people I was dating. Not to be creepy, but to genuinely remember what matters to them their interests, important dates, conversation topics. Because when you're talking to multiple people, those details get lost, and that's when connections fall apart.
                </p>
                <p className="text-lg">
                  The vision was clear: an app that would help with conversation starters, date ideas, gift suggestions, and keeping track of meaningful details. Everything I wished I had when I first started dating in America.
                </p>
              </div>
            </motion.div>

            {/* Chapter 3: Building Rizzer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-rizzer rounded-2xl flex items-center justify-center text-white">
                  <Rocket className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-0">Building the Solution</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Here's where the journey got interesting. I had the idea, the vision, and the passion but there was one problem: I was only a web developer. I didn't know how to code iOS apps.
                </p>
                <p className="text-lg">
                  So I did what any determined founder would do: I started designing. I spent three months researching, designing the entire app flow, and putting together every screen. As a designer, I could visualize exactly what Rizzer should look like and how it should work.
                </p>
                <p className="text-lg">
                  Then came the hard part actually building it. I tried learning iOS development, but after a few months, I got discouraged. The learning curve was steep, and progress was slow. The project sat on hold for almost a year.
                </p>
                <p className="text-lg">
                  Then AI changed everything. With AI-powered coding tools, I could finally build mobile apps even without deep iOS expertise. What took me three months to design, I built in just two days. Two days! The entire app came together, and this landing page? Built in just two hours.
                </p>
                <p className="text-lg">
                  I tested it with a few friends, and their reactions were incredible. They loved it. They actually used it. That's when I knew Rizzer was going to be something special.
                </p>
              </div>
            </motion.div>

            {/* Chapter 4: The Impact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-rizzer rounded-2xl flex items-center justify-center text-white">
                  <Users className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-0">The Mission</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Rizzer is now my ninth product launch, but it's the one I'm most proud of. Why? Because it solves a real problem that I lived through. Every feature in Rizzer exists because I needed it myself.
                </p>
                <p className="text-lg">
                  Today, Rizzer is helping thousands of people date with confidence. We're seeing amazing success stories people finding meaningful connections, planning unforgettable dates, and building relationships that matter. And we're just getting started.
                </p>
                <p className="text-lg">
                  I'm currently in San Diego, still single, still dating, and yes still using Rizzer myself. Hoping to find someone special one day, maybe even through the app I built. How cool would that be?
                </p>
                <p className="text-lg">
                  Our mission is simple: help people navigate modern dating with confidence, authenticity, and a little AI powered support. Whether you're an immigrant like me trying to understand a new culture, someone who's shy about dating, or just looking to level up your game Rizzer is here for you.
                </p>
                <p className="text-lg">
                  We're collecting success stories now, and I can't wait to share them with the world. Because at the end of the day, Rizzer isn't just an app it's a community of people supporting each other in the journey to find love.
                </p>
              </div>
            </motion.div>

            {/* Closing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 md:p-12 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join Us on This Journey
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're just starting your dating journey or looking to level up your game, Rizzer is here to help you every step of the way.
              </p>
              <Link
                href="/"
                className="inline-block btn-gradient text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Try Rizzer Today
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-custom text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Rizzer. All rights reserved. Made with ❤️ by{' '}
            <a 
              href="https://www.linkedin.com/in/cyriac-zeh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rizzer-pink hover:text-rizzer-salmon transition-colors duration-200 font-semibold"
            >
              Cyriac Zeh
            </a>{' '}
            for modern daters.
          </p>
        </div>
      </footer>
      </div>
    </>
  );
}
