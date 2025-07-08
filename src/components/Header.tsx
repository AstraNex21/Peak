import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'Machine Room Lift', path: '/machine-room-lift' },
    { name: 'Machine Room Less Lift', path: '/machine-room-less-lift' },
    { name: 'Hydraulic Passenger Lift', path: '/hydraulic-passenger-lift' },
    { name: 'Hydraulic Goods Lift', path: '/hydraulic-goods-lift' },
    { name: 'Car Lift', path: '/car-lift' },
    { name: 'Car Parking Stacker', path: '/car-parking-stacker' },
    { name: 'Lift Modernisation', path: '/lift-modernisation' },
    { name: 'AMC Services', path: '/amc' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/WhatsApp Image 2025-07-08 at 12.40.39_2eb5158a.jpg" 
              alt="Peak Elevator Group" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
              }`}
            >
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="flex items-center font-medium text-gray-700 hover:text-green-700 transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/testimonials" 
              className={`font-medium transition-colors ${
                isActive('/testimonials') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
              }`}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
              }`}
            >
              Contact
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-gray-700 hover:text-green-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-gray-700 hover:text-green-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              <div className="space-y-2">
                <div className="font-medium text-gray-700">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-sm text-gray-600 hover:text-green-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/testimonials" 
                className="font-medium text-gray-700 hover:text-green-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-gray-700 hover:text-green-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Link 
                to="/contact" 
                className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;