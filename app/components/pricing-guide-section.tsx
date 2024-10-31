'use client';

export default function PricingGuideSection() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6 text-primary-600">Pricing Guide</h2>
      <p className="text-lg text-center mb-12 text-primary-600/80">
        At Pooopa Scooopa, we keep pricing simple and transparent to meet the needs of every pet owner.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-primary-50 p-8 rounded-lg shadow-md border border-primary-100">
          <h3 className="text-2xl font-bold mb-4 text-primary-600">Base Rate</h3>
          <p className="text-primary-600/80">£25 per dog, covering a standard garden clean-up.</p>
        </div>
        
        <div className="bg-primary-50 p-8 rounded-lg shadow-md border border-primary-100">
          <h3 className="text-2xl font-bold mb-4 text-primary-600">Garden Size Adjustments</h3>
          <p className="text-primary-600/80">If your garden is larger than average or requires extra attention, we'll work with you to ensure fair pricing that reflects your specific needs.</p>
        </div>
      </div>

      <div className="bg-accent-400 text-white p-8 rounded-lg shadow-md mb-12">
        <h3 className="text-2xl font-bold mb-4">Discounts Available</h3>
        <p>We're proud to offer discounts to elderly and disabled customers, as part of our commitment to making our service accessible to everyone. Please contact us for more details, and we'll gladly discuss the best options for you.</p>
      </div>

      <div className="text-center space-x-4">
        <a 
          href="#contact" 
          onClick={scrollToContact}
          className="inline-block bg-accent-400 text-white px-8 py-4 rounded-full font-bold hover:bg-accent-500 transition duration-300 transform hover:scale-105"
        >
          Get a Quote
        </a>
        <a 
          href="mailto:thepoooopascooopas@gmail.com" 
          className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-500 transition duration-300 transform hover:scale-105"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
} 