import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Home, Shield, Wrench } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const MachineRoomLessLift = () => {
  const features = [
    'No machine room required',
    'Space-saving design',
    'Energy-efficient operation',
    'Quiet and smooth ride',
    'Modern control systems',
    'Easy installation',
    'Reduced construction costs',
    'Environmentally friendly'
  ];

  const specifications = [
    { label: 'Load Capacity', value: '320 kg - 1600 kg' },
    { label: 'Speed', value: '0.63 - 1.75 m/s' },
    { label: 'Travel Height', value: 'Up to 75m' },
    { label: 'Stops', value: 'Up to 20 floors' },
    { label: 'Door Type', value: 'Automatic sliding doors' },
    { label: 'Control System', value: 'Microprocessor-based' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Machine Room Less Lift
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Space-saving elevator solutions without requiring a separate machine room
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
                Modern Space-Saving Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Machine Room Less (MRL) Lifts represent the latest in elevator technology, 
                eliminating the need for a separate machine room by integrating the motor 
                and control systems within the hoistway. This innovative design saves valuable 
                building space while maintaining excellent performance.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Perfect for mid-rise buildings, our MRL lifts offer energy efficiency, 
                reduced construction costs, and easier installation while delivering 
                smooth, quiet, and reliable operation.
              </p>
              <div className="flex items-center text-green-600 font-semibold mb-4">
                <Home className="h-5 w-5 mr-2" />
                <span>Ideal for Mid-Rise Buildings</span>
              </div>
              <div className="flex items-center text-green-600 font-semibold">
                <Zap className="h-5 w-5 mr-2" />
                <span>Energy Efficient & Eco-Friendly</span>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Home className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Space Saving</h4>
                    <p className="text-gray-600">No machine room required, maximizing usable space</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Energy Efficient</h4>
                    <p className="text-gray-600">Advanced drive systems reduce energy consumption</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Installation</h4>
                    <p className="text-gray-600">Simplified installation process and reduced costs</p>
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
              Our Machine Room Less Lifts offer cutting-edge features for modern buildings
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
              Detailed specifications for our Machine Room Less Lift systems
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <h3 className="text-xl font-semibold">MRL Lift Specifications</h3>
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
              Perfect for various mid-rise building applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Home className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Residential Buildings</h3>
              <p className="text-gray-600">
                Apartment buildings, condominiums, and residential complexes up to 20 floors.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Home className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Office Buildings</h3>
              <p className="text-gray-600">
                Small to medium office buildings where space optimization is crucial.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Home className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mixed-Use Buildings</h3>
              <p className="text-gray-600">
                Buildings combining retail, office, and residential spaces with space constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MRL Over Traditional Lifts?
            </h2>
            <p className="text-lg text-gray-600">
              Compare the advantages of Machine Room Less technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">MRL Lift Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">No machine room required - saves space</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Lower construction and installation costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Energy-efficient operation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Environmentally friendly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Modern control systems</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Buildings with space constraints</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Mid-rise construction projects</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Energy-conscious developments</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Modern architectural designs</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Cost-effective solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Space-Saving Solution?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Discover how our Machine Room Less Lifts can optimize your building's space and efficiency.
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
              Get detailed information about our Machine Room Less Lift solutions
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

export default MachineRoomLessLift;