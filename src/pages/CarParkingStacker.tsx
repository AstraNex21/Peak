import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Car, Building, Shield, Zap } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const CarParkingStacker = () => {
  const features = [
    'Space-saving design',
    'Automated parking system',
    'Multiple vehicle capacity',
    'Safety sensors and locks',
    'Easy operation',
    'Weather protection',
    'Theft prevention',
    'Cost-effective solution'
  ];

  const specifications = [
    { label: 'Vehicle Capacity', value: '2-8 cars per unit' },
    { label: 'Vehicle Weight', value: 'Up to 2000 kg per car' },
    { label: 'Platform Size', value: '5.5m x 2.3m (standard)' },
    { label: 'Lifting Height', value: '1.8m - 2.1m per level' },
    { label: 'Operation Time', value: '60-90 seconds' },
    { label: 'Power Supply', value: '380V/415V, 3-phase' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Car Parking Stacker
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Automated multi-level parking solutions for maximum space utilization
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
            >
              Book Free Site Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Smart Parking Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Car Parking Stackers are innovative automated parking systems that 
                maximize parking capacity in limited spaces. These systems can 
                accommodate multiple vehicles in the space traditionally required 
                for just one or two cars.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Perfect for urban areas, residential complexes, and commercial 
                buildings where parking space is at a premium. Our stackers 
                offer secure, weather-protected parking with easy operation.
              </p>
              <div className="flex items-center text-green-600 font-semibold mb-4">
                <Building className="h-5 w-5 mr-2" />
                <span>Maximum Space Utilization</span>
              </div>
              <div className="flex items-center text-green-600 font-semibold">
                <Zap className="h-5 w-5 mr-2" />
                <span>Automated Operation</span>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Building className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Space Efficiency</h4>
                    <p className="text-gray-600">Double or triple parking capacity in same area</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Vehicle Security</h4>
                    <p className="text-gray-600">Protected parking with theft prevention</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Operation</h4>
                    <p className="text-gray-600">Simple push-button or remote control operation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Features & Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Car Parking Stackers offer advanced features for modern parking solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Detailed specifications for our Car Parking Stacker systems
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <h3 className="text-xl font-semibold">Car Parking Stacker Specifications</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">{spec.label}</span>
                      <span className="text-gray-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stacker Types
            </h2>
            <p className="text-lg text-gray-600">
              Choose from various configurations to suit your parking needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Car className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">2-Level Stacker</h3>
              <p className="text-gray-600">
                Simple two-level system that doubles parking capacity in the same footprint.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Multi-Level Stacker</h3>
              <p className="text-gray-600">
                Advanced systems with 3-4 levels for maximum space utilization.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Automated Stacker</h3>
              <p className="text-gray-600">
                Fully automated systems with remote control and smart features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Maximize Your Parking Space
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get a customized quote for your Car Parking Stacker installation project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              Book Free Site Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="tel:+919990858886" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
            >
              Call: +91 9990858886
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request Information
            </h2>
            <p className="text-lg text-gray-600">
              Get detailed information about our Car Parking Stacker solutions
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarParkingStacker;