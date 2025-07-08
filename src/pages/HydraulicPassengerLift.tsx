import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Droplets, Users, Shield, Wrench } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const HydraulicPassengerLift = () => {
  const features = [
    'Smooth and quiet operation',
    'Energy-efficient hydraulic system',
    'Suitable for low to mid-rise buildings',
    'Cost-effective installation',
    'Reliable performance',
    'Easy maintenance',
    'Customizable cabin designs',
    'Safety compliance standards'
  ];

  const specifications = [
    { label: 'Load Capacity', value: '320 kg - 1000 kg' },
    { label: 'Speed', value: '0.15 - 0.63 m/s' },
    { label: 'Travel Height', value: 'Up to 18m' },
    { label: 'Stops', value: 'Up to 6 floors' },
    { label: 'Door Type', value: 'Automatic sliding doors' },
    { label: 'Drive System', value: 'Hydraulic pump unit' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hydraulic Passenger Lift
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Smooth and reliable hydraulic elevators for passenger transportation
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
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
                Reliable Hydraulic Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Hydraulic Passenger Lifts use fluid power to provide smooth, quiet, and 
                reliable vertical transportation. These elevators are ideal for low to 
                mid-rise buildings, offering cost-effective installation and excellent 
                performance for passenger transportation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With their proven hydraulic technology, these lifts provide consistent 
                performance, energy efficiency, and are particularly suitable for 
                buildings where a machine room at the top is not feasible.
              </p>
              <div className="flex items-center text-green-600 font-semibold mb-4">
                <Droplets className="h-5 w-5 mr-2" />
                <span>Advanced Hydraulic Technology</span>
              </div>
              <div className="flex items-center text-green-600 font-semibold">
                <Users className="h-5 w-5 mr-2" />
                <span>Comfortable Passenger Experience</span>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Droplets className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Smooth Operation</h4>
                    <p className="text-gray-600">Hydraulic system provides exceptionally smooth rides</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Safety Features</h4>
                    <p className="text-gray-600">Built-in safety systems and emergency features</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Maintenance</h4>
                    <p className="text-gray-600">Simple hydraulic system for straightforward servicing</p>
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
              Our Hydraulic Passenger Lifts offer reliable performance with modern features
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
              Detailed specifications for our Hydraulic Passenger Lift systems
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <h3 className="text-xl font-semibold">Hydraulic Passenger Lift Specifications</h3>
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

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Hydraulic Passenger Lift?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get a customized quote for your Hydraulic Passenger Lift installation project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              Get Free Quote
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
              Get detailed information about our Hydraulic Passenger Lift solutions
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

export default HydraulicPassengerLift;