import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Settings, Building, Shield, Wrench } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const MachineRoomLift = () => {
  const features = [
    'High load capacity up to 2000 kg',
    'Suitable for high-rise buildings',
    'Reliable traction system',
    'Energy-efficient operation',
    'Advanced safety features',
    'Smooth and quiet operation',
    'Customizable cabin designs',
    'Remote monitoring capability'
  ];

  const specifications = [
    { label: 'Load Capacity', value: '630 kg - 2000 kg' },
    { label: 'Speed', value: '1.0 - 2.5 m/s' },
    { label: 'Travel Height', value: 'Up to 200m' },
    { label: 'Stops', value: 'Up to 50 floors' },
    { label: 'Door Type', value: 'Automatic sliding doors' },
    { label: 'Control System', value: 'VVVF drive system' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Machine Room Lift
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Traditional elevator systems with dedicated machine rooms for high-rise buildings
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
                Reliable High-Rise Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Machine Room Lifts are the traditional and most reliable elevator systems, 
                featuring a dedicated machine room that houses the motor, control panel, 
                and other mechanical components. These elevators are ideal for high-rise 
                buildings and heavy-duty applications.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With superior load capacity and proven technology, our Machine Room Lifts 
                provide exceptional performance, durability, and safety for commercial 
                and residential high-rise buildings.
              </p>
              <div className="flex items-center text-green-600 font-semibold mb-4">
                <Building className="h-5 w-5 mr-2" />
                <span>Perfect for High-Rise Buildings</span>
              </div>
              <div className="flex items-center text-green-600 font-semibold">
                <Shield className="h-5 w-5 mr-2" />
                <span>Maximum Safety & Reliability</span>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Settings className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Maintenance</h4>
                    <p className="text-gray-600">Accessible machine room for convenient servicing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Building className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">High Capacity</h4>
                    <p className="text-gray-600">Suitable for heavy loads and high-traffic areas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Technology</h4>
                    <p className="text-gray-600">Time-tested reliability with modern upgrades</p>
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
              Our Machine Room Lifts come with advanced features designed for optimal performance and safety
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
              Detailed specifications for our Machine Room Lift systems
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <h3 className="text-xl font-semibold">Machine Room Lift Specifications</h3>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ideal Applications
            </h2>
            <p className="text-lg text-gray-600">
              Perfect for various building types and applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Commercial Buildings</h3>
              <p className="text-gray-600">
                Office complexes, shopping malls, and commercial towers requiring high-capacity vertical transportation.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Residential Towers</h3>
              <p className="text-gray-600">
                High-rise residential buildings and apartment complexes with multiple floors and heavy usage.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Hotels & Hospitals</h3>
              <p className="text-gray-600">
                Hospitality and healthcare facilities requiring reliable, high-capacity elevator systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Machine Room Lift?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get a customized quote for your Machine Room Lift installation or modernization project.
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
              Get detailed information about our Machine Room Lift solutions
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

export default MachineRoomLift;