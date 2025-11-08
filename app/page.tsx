import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyRizzer from '@/components/WhyRizzer';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';


export default function Home() {
  return (
    <>
      <StructuredData />
      <main>
        <Header />
        <Hero />
        <Features />
        <WhyRizzer />
        <Testimonials />
        <FAQ />
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
