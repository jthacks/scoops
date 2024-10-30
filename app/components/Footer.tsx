import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary-600 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pooopa Scooopa</h3>
            <p className="text-primary-100">Making gardens clean and fresh across South Wales</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-primary-100">Phone: 07578 767786</p>
            <p className="text-primary-100">Email: thepoooopascooopas@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <p className="text-primary-100">Cardiff • Newport • Swansea</p>
            <p className="text-primary-100">And surrounding areas</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-500 text-center text-primary-100">
          <p>&copy; {new Date().getFullYear()} Pooopa Scooopa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}