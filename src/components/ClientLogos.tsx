import React from 'react';

const ClientLogos = () => {
  const clients = [
    {
      name: 'Taj Hotels',
      logo: '/Taj_Hotels_logo.svg.png',
      alt: 'Taj Hotels Logo'
    },
    {
      name: 'The Times of India',
      logo: '/1113718.jpg',
      alt: 'The Times of India Logo'
    },
    {
      name: 'IndiGo Airlines',
      logo: '/IndiGo-Logo.png',
      alt: 'IndiGo Airlines Logo'
    },
    {
      name: 'Pacific Group',
      logo: '/pacific-logo-png_seeklogo-299033.png',
      alt: 'Pacific Group Logo'
    }
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="py-4 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm text-gray-600 max-w-lg mx-auto">
            Peak Elevator Group proudly serves prestigious clients
          </p>
        </div>

        {/* Moving logos container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-slate-100 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-slate-100 to-transparent z-10"></div>
          
          {/* Scrolling logos */}
          <div className="flex animate-scroll">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-4 flex items-center justify-center"
                style={{ minWidth: '120px', height: '50px' }}
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-h-8 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-80"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Client testimonial highlight */}
        <div className="mt-4 text-center">
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-4 rounded-lg shadow-md border border-slate-200 max-w-2xl mx-auto">
            <blockquote className="text-sm italic text-gray-700 mb-2">
              "Peak Elevator Group has consistently delivered exceptional elevator solutions. 
              Their professionalism and commitment to safety make them our preferred partner."
            </blockquote>
            <div className="text-green-600 font-medium text-xs">
              — Leading Hospitality & Commercial Partners
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-3 text-center">
          <p className="text-gray-600 mb-3 text-xs">
            Join these industry leaders who trust Peak Elevator Group
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-slate-50 px-4 py-2 rounded-md font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 inline-flex items-center justify-center shadow-sm hover:shadow-md transform hover:scale-105 text-xs"
            >
              Become Our Next Success Story
            </a>
            <a 
              href="tel:+919990858886" 
              className="border border-green-600 text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-600 hover:text-slate-50 transition-all duration-300 inline-flex items-center justify-center shadow-sm hover:shadow-md transform hover:scale-105 text-xs"
            >
              Call: +91 9990858886
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClientLogos;