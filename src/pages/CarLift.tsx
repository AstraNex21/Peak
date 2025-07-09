import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Car, Wrench, Shield, Settings } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const CarLift = () => {
  const features = [
    'Heavy-duty vehicle lifting',
    'Hydraulic or electric drive',
    'Safety lock mechanisms',
    'Wide platform design',
    'Smooth operation',
    'Emergency stop systems',
    'Customizable dimensions',
    'Professional installation'
  ];

  const specifications = [
    { label: 'Load Capacity', value: '2000 kg - 6000 kg' },
    { label: 'Platform Size', value: '5.5m x 2.3m (standard)' },
    { label: 'Lifting Height', value: '1.8m - 2.1m' },
    { label: 'Power Supply', value: '380V/415V, 3-phase' },
    { label: 'Drive Type', value: 'Hydraulic/Electric' },
    { label: 'Safety Features', value: 'Multiple safety locks' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-green-900 to-emerald-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/pexels-artempodrez-8986145.jpg)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Car Lift Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Professional automotive lifting systems for service centers and parking applications
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Quote
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
                Professional Automotive Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Car Lift systems are designed for automotive service centers, 
                parking facilities, and residential garages. These heavy-duty lifts 
                provide safe and efficient vehicle lifting for maintenance, repair, 
                and storage applications.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Available in various configurations including two-post, four-post, 
                and scissor lifts, our car lifts are engineered for reliability, 
                safety, and ease of operation.
              </p>
              <div className="flex items-center text-green-600 font-semibold mb-4">
                <Car className="h-5 w-5 mr-2" />
                <span>Automotive Service Excellence</span>
              </div>
              <div className="flex items-center text-green-600 font-semibold">
                <Shield className="h-5 w-5 mr-2" />
                <span>Maximum Safety Standards</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Car className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Vehicle Compatibility</h4>
                    <p className="text-gray-600">Suitable for cars, SUVs, and light commercial vehicles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Safety Systems</h4>
                    <p className="text-gray-600">Multiple safety locks and emergency stop features</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Operation</h4>
                    <p className="text-gray-600">User-friendly controls and smooth operation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Features & Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Car Lift systems offer professional-grade features for automotive applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center p-6 bg-gradient-to-br from-white to-blue-50/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
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
              Detailed specifications for our Car Lift systems
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl shadow-2xl overflow-hidden border border-blue-100">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                <h3 className="text-xl font-semibold">Car Lift Specifications</h3>
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

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Applications
            </h2>
            <p className="text-lg text-gray-600">
              Perfect for various automotive and parking applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <Car className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Service Centers</h3>
              <p className="text-gray-600">
                Automotive repair shops and service centers for vehicle maintenance and repairs.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-white to-green-50/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100">
              <Settings className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Parking Facilities</h3>
              <p className="text-gray-600">
                Multi-level parking solutions for residential and commercial properties.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-white to-purple-50/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100">
              <Wrench className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Private Garages</h3>
              <p className="text-gray-600">
                Residential garages for car enthusiasts and space optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Car Lift Solution?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get a customized quote for your Car Lift installation project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="tel:+919990858886" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Call: +91 9990858886
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request Information
            </h2>
            <p className="text-lg text-gray-600">
              Get detailed information about our Car Lift solutions
            </p>
          </div>
          <div className="bg-gradient-to-br from-white to-blue-50/30 p-10 rounded-2xl shadow-2xl border border-blue-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarLift;