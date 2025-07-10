import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-green-900 to-emerald-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: 'url(/pexels-cottonbro-8453040.jpg)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Get in touch with Peak Elevator Group for all your elevator needs
            </p>
            <a 
              href="tel:+919990858886" 
              className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Call Now: +91 9990858886
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Address</h3>
                    <p className="text-gray-600">
                      Plot No. 915, Krishna Apra Business Square,<br />
                      NSP, Delhi - 110034
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Number</h3>
                    <a 
                      href="tel:+919990858886" 
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      +91 9990858886
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Address</h3>
                    <a 
                      href="mailto:Admin@peakelevatorgroup.com" 
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Admin@peakelevatorgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: Emergency Service Only</p>
                      <p className="text-green-600 font-medium mt-2">24/7 Emergency Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Service Areas */}
              <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg border border-green-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                  <div>
                    <p>• Delhi</p>
                    <p>• Gurgaon</p>
                    <p>• Noida</p>
                  </div>
                  <div>
                    <p>• Greater Noida</p>
                    <p>• Faridabad</p>
                    <p>• Ghaziabad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-white to-blue-50/50 p-10 rounded-2xl shadow-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              Visit our office in Delhi for consultations and project discussions
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-2xl overflow-hidden border border-blue-100">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">
                  Plot No. 915, Krishna Apra Business Square,<br />
                  NSP, Delhi - 110034
                </p>
                <a 
                  href="https://maps.google.com/?q=Plot+No.+915,+Krishna+Apra+Business+Square,+NSP,+Delhi+-+110034" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-green-600 font-semibold hover:text-green-700"
                >
                  View on Google Maps
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-rose-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Emergency Elevator Service
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Elevator stuck or not working? Call our emergency hotline for immediate assistance.
          </p>
          <a 
            href="tel:+919990858886" 
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 inline-flex items-center text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Emergency: +91 9990858886
            <Phone className="ml-2 h-6 w-6" />
          </a>
          <p className="text-red-100 mt-4">
            Available 24/7 across Delhi/NCR
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-2xl shadow-xl border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How quickly can you respond to emergency calls?
              </h3>
              <p className="text-gray-600">
                We provide 24/7 emergency service with response times of 2-4 hours across Delhi/NCR region.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-green-50/50 p-8 rounded-2xl shadow-xl border border-green-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you provide AMC services for elevators installed by other companies?
              </h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive AMC services for all types of elevators regardless of the original installer.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-slate-50/50 p-8 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is the typical installation time for a new elevator?
              </h3>
              <p className="text-gray-600">
                Installation time varies based on the type and complexity, typically ranging from 2-6 weeks for standard installations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-2xl shadow-xl border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer financing options for elevator installations?
              </h3>
              <p className="text-gray-600">
                Yes, we work with various financing partners to provide flexible payment options for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;