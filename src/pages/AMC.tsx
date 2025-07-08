import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Shield, Wrench, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const AMC = () => {
  const features = [
    'Regular preventive maintenance',
    '24/7 emergency support',
    'Genuine spare parts',
    'Certified technicians',
    'Detailed maintenance reports',
    'Priority service response',
    'Cost-effective packages',
    'Extended equipment life'
  ];

  const packages = [
    {
      name: 'Basic AMC',
      price: 'Starting from ₹15,000/year',
      features: [
        'Monthly maintenance visits',
        'Basic cleaning and lubrication',
        'Safety checks',
        'Emergency breakdown support',
        'Maintenance reports'
      ]
    },
    {
      name: 'Comprehensive AMC',
      price: 'Starting from ₹25,000/year',
      features: [
        'Bi-weekly maintenance visits',
        'Complete system inspection',
        'Minor repairs included',
        '24/7 emergency support',
        'Genuine spare parts',
        'Priority response'
      ]
    },
    {
      name: 'Premium AMC',
      price: 'Starting from ₹40,000/year',
      features: [
        'Weekly maintenance visits',
        'Comprehensive system care',
        'All repairs included',
        'Immediate emergency response',
        'Annual modernisation review',
        'Extended warranty'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AMC Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Comprehensive Annual Maintenance Contracts for reliable elevator performance
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
            >
              Get AMC Quote
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
                Reliable Maintenance Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Annual Maintenance Contract (AMC) services ensure your elevators 
                operate safely, efficiently, and reliably throughout the year. With 
                regular preventive maintenance and 24/7 support, we minimize downtime 
                and extend the life of your elevator systems.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Choose from our flexible AMC packages designed to meet different 
                requirements and budgets. All packages include certified technicians, 
                genuine spare parts, and comprehensive maintenance reports.
              </p>
              <div className="flex items-center text-green-600 font-semibold mb-4">
                <Clock className="h-5 w-5 mr-2" />
                <span>24/7 Emergency Support</span>
              </div>
              <div className="flex items-center text-green-600 font-semibold">
                <Shield className="h-5 w-5 mr-2" />
                <span>Certified Professional Service</span>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AMC Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Reduced Downtime</h4>
                    <p className="text-gray-600">Preventive maintenance prevents unexpected breakdowns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Enhanced Safety</h4>
                    <p className="text-gray-600">Regular safety inspections and compliance checks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost Savings</h4>
                    <p className="text-gray-600">Predictable maintenance costs and extended equipment life</p>
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
              AMC Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive maintenance services included in our AMC packages
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

      {/* Packages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AMC Packages
            </h2>
            <p className="text-lg text-gray-600">
              Choose the package that best fits your requirements and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-green-100">{pkg.price}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link 
                      to="/contact" 
                      className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                    >
                      Choose Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              24/7 Emergency Support
            </h2>
            <p className="text-lg text-gray-600">
              Round-the-clock support for all your elevator emergencies
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Emergency Hotline</h3>
                <p className="text-gray-600 mb-4">
                  Call our emergency hotline for immediate assistance
                </p>
                <a 
                  href="tel:+919990858886" 
                  className="text-green-600 font-semibold text-lg"
                >
                  +91 9990858886
                </a>
              </div>
              <div>
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                <p className="text-gray-600">
                  Our technicians respond within 2-4 hours for emergency calls
                </p>
              </div>
              <div>
                <Wrench className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">
                  Certified professionals with extensive elevator experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Secure Your Elevator's Future
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Sign up for our AMC services and ensure reliable elevator performance year-round.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              Get AMC Quote
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
              Request AMC Information
            </h2>
            <p className="text-lg text-gray-600">
              Get detailed information about our AMC packages and pricing
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

export default AMC;