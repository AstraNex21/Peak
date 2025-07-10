import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, RefreshCw, Zap, Shield, Wrench } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const LiftModernisation = () => {
  const features = [
    'Complete system upgrade',
    'Energy-efficient drives',
    'Modern control systems',
    'Enhanced safety features',
    'Improved ride quality',
    'Reduced maintenance costs',
    'Extended equipment life',
    'Compliance with latest standards'
  ];

  const modernizationAreas = [
    {
      title: 'Control System Upgrade',
      description: 'Replace outdated relay-based controls with modern microprocessor systems',
      icon: Zap
    },
    {
      title: 'Drive System Modernization',
      description: 'Upgrade to energy-efficient VVVF drives for smooth operation',
      icon: RefreshCw
    },
    {
      title: 'Safety System Enhancement',
      description: 'Install latest safety devices and emergency communication systems',
      icon: Shield
    },
    {
      title: 'Cabin & Door Renovation',
      description: 'Modernize cabin interiors and upgrade door operators',
      icon: Wrench
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lift Modernisation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Upgrade your existing elevators with modern technology and enhanced safety features
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
                Transform Your Existing Elevators
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Lift modernisation breathes new life into aging elevator systems, 
                improving performance, safety, and energy efficiency while extending 
                the operational life of your equipment. Our comprehensive modernisation 
                solutions address all aspects of elevator technology.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether your elevator is experiencing frequent breakdowns, lacks 
                modern safety features, or simply needs an aesthetic update, our 
                modernisation services provide cost-effective solutions that deliver 
                immediate improvements.
              </p>
              <div className="flex items-center text-green-600 font-semibold mb-4">
                <RefreshCw className="h-5 w-5 mr-2" />
                <span>Complete System Transformation</span>
              </div>
              <div className="flex items-center text-green-600 font-semibold">
                <Zap className="h-5 w-5 mr-2" />
                <span>Enhanced Performance & Efficiency</span>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Modernisation Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Energy Savings</h4>
                    <p className="text-gray-600">Reduce energy consumption by up to 50%</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Enhanced Safety</h4>
                    <p className="text-gray-600">Latest safety systems and compliance standards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <RefreshCw className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Improved Reliability</h4>
                    <p className="text-gray-600">Reduced breakdowns and maintenance costs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modernization Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modernisation Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive upgrade solutions for every aspect of your elevator system
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modernizationAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <area.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {area.title}
                    </h3>
                    <p className="text-gray-600">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modernisation Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced features and technologies included in our modernisation packages
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modernisation Process
            </h2>
            <p className="text-lg text-gray-600">
              Our systematic approach ensures minimal disruption and maximum results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation of existing elevator systems and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">
                Detailed modernisation plan with timeline and minimal service disruption
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">
                Professional installation of new components and systems
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive testing and commissioning to ensure optimal performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernise Your Elevators?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Transform your aging elevators with our comprehensive modernisation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              Book Free Technical Visit
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
              Request Modernisation Quote
            </h2>
            <p className="text-lg text-gray-600">
              Get a detailed assessment and quote for your elevator modernisation project
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

export default LiftModernisation;