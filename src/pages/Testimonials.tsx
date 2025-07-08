import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Kumar Builders',
      location: 'Gurgaon',
      text: 'Peak Elevator Group delivered exceptional service for our residential complex. Their team was professional, punctual, and the installation was completed on time. The elevators have been running smoothly for over 2 years now with excellent after-sales support.',
      rating: 5,
      project: 'Machine Room Less Lift Installation'
    },
    {
      name: 'Priya Sharma',
      company: 'Sharma Industries',
      location: 'Delhi',
      text: 'We have been using Peak Elevator Group\'s AMC services for our office building for over 3 years. Their maintenance team is highly skilled and responsive. The 24/7 support has been invaluable for our business operations.',
      rating: 5,
      project: 'AMC Services'
    },
    {
      name: 'Amit Gupta',
      company: 'Metro Mall',
      location: 'Noida',
      text: 'When our old elevators started giving problems, Peak Elevator Group provided an excellent modernization solution. The upgrade was completed with minimal disruption to our mall operations. Highly recommended for commercial properties.',
      rating: 5,
      project: 'Lift Modernisation'
    },
    {
      name: 'Sunita Verma',
      company: 'Green Valley Apartments',
      location: 'Delhi',
      text: 'The hydraulic passenger lift installed by Peak Elevator Group has been perfect for our 6-floor apartment building. The ride is smooth and quiet, and the maintenance costs are very reasonable. Great value for money.',
      rating: 5,
      project: 'Hydraulic Passenger Lift'
    },
    {
      name: 'Vikram Singh',
      company: 'Singh Auto Service',
      location: 'Gurgaon',
      text: 'The car lift installed at our service center has transformed our operations. We can now service more vehicles efficiently. The installation team was professional and the after-sales support is excellent.',
      rating: 5,
      project: 'Car Lift Installation'
    },
    {
      name: 'Neha Agarwal',
      company: 'Agarwal Logistics',
      location: 'Greater Noida',
      text: 'Our hydraulic goods lift has been a game-changer for our warehouse operations. It handles heavy loads effortlessly and has significantly improved our productivity. Peak Elevator Group\'s service is top-notch.',
      rating: 5,
      project: 'Hydraulic Goods Lift'
    },
    {
      name: 'Rohit Malhotra',
      company: 'Malhotra Residency',
      location: 'Delhi',
      text: 'The car parking stacker installed in our residential complex has doubled our parking capacity. The automated system is easy to use and has solved our parking problems completely. Excellent engineering solution.',
      rating: 5,
      project: 'Car Parking Stacker'
    },
    {
      name: 'Kavita Jain',
      company: 'Jain Enterprises',
      location: 'Faridabad',
      text: 'Peak Elevator Group installed a machine room lift in our corporate office. The installation was professional, and the elevator operates flawlessly. Their team provided excellent training to our facility management staff.',
      rating: 5,
      project: 'Machine Room Lift'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Hear what our satisfied customers have to say about our elevator solutions
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
            >
              Share Your Experience
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from real customers across Delhi/NCR region
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="text-sm text-green-600 font-medium mt-1">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Highlighting some of our most successful projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Metro Mall Modernisation Project
              </h3>
              <p className="text-gray-600 mb-4">
                Successfully modernized 8 elevators in a busy shopping mall with zero 
                downtime during peak hours. The project included complete control system 
                upgrade, new cabin interiors, and energy-efficient drives.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Project Duration: 3 months | Location: Noida
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Green Valley Apartments Complex
              </h3>
              <p className="text-gray-600 mb-4">
                Installed 12 machine room less lifts across 4 residential towers. 
                The project was completed ahead of schedule with excellent resident 
                satisfaction and ongoing AMC services.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Project Duration: 6 months | Location: Gurgaon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Satisfied Customers
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Experience the Peak Elevator Group difference. Contact us for your elevator needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              Get Your Quote
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
              Share Your Experience
            </h2>
            <p className="text-lg text-gray-600">
              We'd love to hear about your experience with Peak Elevator Group
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

export default Testimonials;