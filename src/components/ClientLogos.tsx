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
    <div className="py-8 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Peak Elevator Group proudly serves prestigious clients across various industries
          </p>
        </div>

        {/* Moving logos container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
          
          {/* Scrolling logos */}
          <div className="flex animate-scroll">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-6 flex items-center justify-center"
                style={{ minWidth: '160px', height: '80px' }}
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-90"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Client testimonial highlight */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-br from-white to-slate-50/50 p-6 rounded-xl shadow-lg border border-slate-100 max-w-3xl mx-auto">
            <blockquote className="text-base italic text-gray-700 mb-3">
              "Peak Elevator Group has consistently delivered exceptional elevator solutions for our properties. 
              Their professionalism, reliability, and commitment to safety make them our preferred partner."
            </blockquote>
            <div className="text-green-600 font-medium text-sm">
              — Leading Hospitality & Commercial Partners
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4 text-sm">
            Join these industry leaders who trust Peak Elevator Group for their vertical transportation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 text-sm"
            >
              Become Our Next Success Story
            </a>
            <a 
              href="tel:+919990858886" 
              className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 text-sm"
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