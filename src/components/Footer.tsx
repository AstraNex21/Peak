import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ClientLogos from './ClientLogos';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/WhatsApp Image 2025-07-08 at 12.40.39_2eb5158a.jpg" 
              alt="Peak Elevator Group" 
              className="h-12 w-auto mb-4 bg-white p-2 rounded"
            />
            <p className="text-gray-300 mb-4">
              Leading elevator installation, repair, and maintenance services in Delhi/NCR. 
              Your trusted partner for vertical transportation solutions.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">24/7 Emergency Service</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/amc" className="text-gray-300 hover:text-white transition-colors">AMC Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/lift-modernisation" className="text-gray-300 hover:text-white transition-colors">Lift Modernisation</Link></li>
              <li><Link to="/amc" className="text-gray-300 hover:text-white transition-colors">AMC Services</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><Link to="/machine-room-lift" className="text-gray-300 hover:text-white transition-colors">Machine Room Lift</Link></li>
              <li><Link to="/machine-room-less-lift" className="text-gray-300 hover:text-white transition-colors">Machine Room Less Lift</Link></li>
              <li><Link to="/hydraulic-passenger-lift" className="text-gray-300 hover:text-white transition-colors">Hydraulic Passenger Lift</Link></li>
              <li><Link to="/car-lift" className="text-gray-300 hover:text-white transition-colors">Car Lift</Link></li>
              <li><Link to="/car-parking-stacker" className="text-gray-300 hover:text-white transition-colors">Car Parking Stacker</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-green-400" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Plot No. 915, Krishna Apra Business Square,<br />
                    NSP, Delhi - 110034
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-green-400" />
                <a href="tel:+919990858886" className="text-gray-300 hover:text-white transition-colors">
                  +91 9990858886
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-green-400" />
                <a href="mailto:Admin@peakelevatorgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  Admin@peakelevatorgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Peak Elevator Group. All rights reserved. | Serving Delhi/NCR with Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;