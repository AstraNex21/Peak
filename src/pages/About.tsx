import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, MapPin, Clock, Shield, Wrench } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Technicians' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize safety in every installation and maintenance service, adhering to international standards.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Our commitment to quality ensures long-lasting, reliable elevator solutions for all our clients.'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'We understand the importance of time and deliver projects on schedule with 24/7 support.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customer-centric approach ensures personalized solutions tailored to your specific needs.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-green-900 to-emerald-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: 'url(/pexels-cottonbro-8453045.jpg)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Peak Elevator Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Your trusted partner for comprehensive elevator solutions in Delhi/NCR
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading Elevator Solutions Provider
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Peak Elevator Group has been at the forefront of elevator technology and services 
                in the Delhi/NCR region for over 15 years. We specialize in providing comprehensive 
                vertical transportation solutions for residential, commercial, and industrial properties.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to deliver safe, reliable, and efficient elevator systems that enhance 
                the accessibility and value of your property. With a team of certified professionals 
                and state-of-the-art equipment, we ensure every project meets the highest standards 
                of quality and safety.
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Serving Delhi/NCR with Excellence</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Installation Services</h4>
                    <p className="text-gray-600">Complete elevator installation for new constructions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Maintenance & Repair</h4>
                    <p className="text-gray-600">Regular maintenance and emergency repair services</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Modernization</h4>
                    <p className="text-gray-600">Upgrading existing elevators with latest technology</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">AMC Services</h4>
                    <p className="text-gray-600">Comprehensive annual maintenance contracts</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/30 to-transparent"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(/pexels-artempodrez-8986145.jpg)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-green-100">
              Numbers that speak for our commitment and expertise
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
                <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Coverage
            </h2>
            <p className="text-lg text-gray-600">
              We proudly serve the entire Delhi/NCR region with our comprehensive elevator services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-white to-green-50/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Delhi</h3>
              <p className="text-gray-600">
                Complete coverage across all districts of Delhi including residential and commercial areas.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Gurgaon</h3>
              <p className="text-gray-600">
                Serving the rapidly growing commercial and residential sectors in Gurgaon.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-white to-purple-50/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Noida & Greater Noida</h3>
              <p className="text-gray-600">
                Comprehensive elevator solutions for the industrial and IT hubs of Noida region.
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Experience the Peak Elevator Group difference. Contact us today for your elevator needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Free Consultation
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
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Have questions about our services? We'd love to hear from you.
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

export default About;