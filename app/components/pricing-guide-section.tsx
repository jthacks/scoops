export default function PricingGuideSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Guide</h2>
        <p className="text-lg mb-6">
          At Poopa Scoopa, we keep pricing simple and transparent to meet the needs of every pet owner.
        </p>
        
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="font-semibold text-xl mb-2">Base Rate</h3>
            <p>£25 per dog, covering a standard garden clean-up.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-2">Garden Size Adjustments</h3>
            <p>If your garden is larger than average or requires extra attention, we'll work with you to ensure fair pricing that reflects your specific needs.</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-xl mb-2">Discounts Available</h3>
          <p>We're proud to offer discounts to elderly and disabled customers, as part of our commitment to making our service accessible to everyone. Please contact us for more details, and we'll gladly discuss the best options for you.</p>
        </div>

        <div className="text-center space-x-4">
          <a 
            href="https://form.typeform.com/to/01JBEMQE3ZM29PMVRWV442W7XK" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get a Quote
          </a>
          <a 
            href="mailto:thepoooopascooopas@gmail.com" 
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
} 