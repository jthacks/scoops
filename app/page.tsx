import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import PricingCalculator from './components/PricingCalculator';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import ContactNumber from './components/ContactNumber';
import NotificationCard from './components/NotificationCard';
import TestimonialCard from './components/TestimonialCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ContactNumber />
      <Header />
      <Hero />
      <ServicesSection />

      {/* Notifications Section */}
      <section className="py-24 bg-primary-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-600">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <NotificationCard
                icon="📱"
                title="SMS Notification"
                description="We'll send you a text message 60 minutes before arrival so you know when to expect us."
              />
              <NotificationCard
                icon="✨"
                title="Professional Service"
                description="Our trained team will thoroughly clean and sanitize your garden area."
              />
              <NotificationCard
                icon="📸"
                title="Job Completion"
                description="Receive a completion message with a photo, confirming your garden is clean and fresh."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-600">Calculate Your Price</h2>
            <div className="max-w-xl mx-auto">
              <PricingCalculator />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-primary-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-primary-600">About Pooopa Scooopa</h2>
              <p className="text-lg text-primary-600/80 mb-4">
                Founded with a passion for keeping gardens clean and families happy, Pooopa Scooopa is the number one pet waste removal service in South Wales.
              </p>
              <p className="text-lg text-primary-600/80">
                We understand that life gets busy, and cleaning up after your furry friends might not be at the top of your to-do list. That's why we're here to help, providing reliable, professional, and eco-friendly waste removal services that keep your garden clean and fresh.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <TestimonialCard
                name="Sarah Williams"
                location="Cardiff"
                text="Absolutely brilliant service! They're always on time, professional, and my garden has never been cleaner. My two Labs love them too!"
                rating={5}
              />
              <TestimonialCard
                name="David Hughes"
                location="Newport"
                text="As a busy professional with three dogs, this service is a lifesaver. The SMS updates are great, and the photo confirmation gives me peace of mind."
                rating={5}
              />
              <TestimonialCard
                name="Emma Roberts"
                location="Swansea"
                text="I love how they use eco-friendly products and take such care with our garden. The best pet service we've ever used!"
                rating={5}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-600">Get Started</h2>
            <div className="max-w-2xl mx-auto">
              <div data-tf-live="01JBEMQE3ZM29PMVRWV442W7XK"></div>
              <script src="//embed.typeform.com/next/embed.js"></script>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}