import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Users, Star, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const services = [
    {
      title: 'Machine Room Lift',
      description: 'Traditional elevator systems with dedicated machine rooms for high-rise buildings.',
      link: '/machine-room-lift',
      image: '/sung-jin-cho--S87hxapFvU-unsplash.jpg'
    },
    {
      title: 'Machine Room Less Lift',
      description: 'Space-saving elevator solutions without requiring a separate machine room.',
      link: '/machine-room-less-lift',
      image: '/bagzhan-sadvakassov-3M8gmoGTnUk-unsplash.jpg'
    },
    {
      title: 'Hydraulic Passenger Lift',
      description: 'Smooth and reliable hydraulic elevators for passenger transportation.',
      link: '/hydraulic-passenger-lift',
      image: '/jason-song-ZWqrfoLJ5Vc-unsplash.jpg'
    },
    {
      title: 'Car Lift Solutions',
      description: 'Specialized automotive lifting systems for parking and service applications.',
      link: '/car-lift',
      image: '/pexels-artempodrez-8986032.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Kumar Builders',
      text: 'Peak Elevator Group delivered exceptional service for our residential complex. Professional installation and excellent after-sales support.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'Sharma Industries',
      text: 'Their AMC service has kept our office elevators running smoothly for over 3 years. Highly recommended for commercial properties.',
      rating: 5
    },
    {
      name: 'Amit Gupta',
      company: 'Metro Mall',
      text: 'Quick response time and professional technicians. They modernized our old elevators with latest technology.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-green-900 to-emerald-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(/sung-jin-cho--S87hxapFvU-unsplash.jpg)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Peak Elevator Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Premier Elevator Solutions in Delhi/NCR
            </p>
            <p className="text-lg mb-10 max-w-3xl mx-auto text-green-50">
              From installation to maintenance, we provide comprehensive elevator services 
              for residential, commercial, and industrial properties across Delhi/NCR region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+919990858886" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Call Now: +91 9990858886
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Peak Elevator Group?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine years of experience with cutting-edge technology to deliver 
              reliable elevator solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 transform hover:scale-105">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Safety First</h3>
              <p className="text-gray-600">
                All installations meet international safety standards with regular 
                inspections and certifications.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 transform hover:scale-105">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock emergency service and maintenance support 
                across Delhi/NCR region.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 transform hover:scale-105">
              <div className="bg-gradient-to-br from-purple-400 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Expert Team</h3>
              <p className="text-gray-600">
                Certified technicians with extensive experience in elevator 
                installation and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(/bagzhan-sadvakassov-3M8gmoGTnUk-unsplash.jpg)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive elevator solutions tailored to your specific needs and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:transform hover:scale-105">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="text-green-600 font-medium hover:text-green-700 inline-flex items-center transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: 'url(/jason-song-ZWqrfoLJ5Vc-unsplash.jpg)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/testimonials" 
              className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center transition-colors duration-300"
            >
              Read More Testimonials
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/30 to-transparent"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: 'url(/shawn-5VQrZbBKMXw-unsplash.jpg)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote for your elevator needs.
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
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Send us a message and we'll get back to you within 24 hours.
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

export default Home;