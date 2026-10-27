import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import Products from '@/components/Products';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header & Navigation */}
      <Header />

      <main id="main-content" className="grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section: Story, Why Organic, Values */}
        <About />

        {/* 3. Services: Garden Design, Vegetable Gardens, Maintenance, Irrigation, Soil Care */}
        <Services />

        {/* 4. Packages: Bronze, Silver, Gold (Most Popular), Platinum in AED */}
        <Packages />

        {/* 5. Products: Certified Organic Essentials */}
        <Products />

        {/* 6. Gallery: Masonry Project Grid & Instagram Link */}
        <Gallery />

        {/* 7. Testimonials: Interactive Carousel */}
        <Testimonials />

        {/* 8. FAQ: Interactive Accordion */}
        <Faq />

        {/* 9. Contact: Form Sending to WhatsApp + Phone + Email + Dubai Map + Hours */}
        <Contact />
      </main>

      {/* 10. Footer & Floating WhatsApp Trigger */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
