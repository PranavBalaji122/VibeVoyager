import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faMap, faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';



function Home() {
    console.log('Home component rendering');
    return (
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-green-500 opacity-30 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-white bg-opacity-5 -top-24 -right-24 animate-float"></div>
          <div className="absolute w-80 h-80 rounded-full bg-white bg-opacity-5 -bottom-12 -left-12 animate-float-delay-3"></div>
          <div className="absolute w-64 h-64 rounded-full bg-white bg-opacity-5 top-1/3 right-1/12 animate-float-delay-6"></div>
        </div>
  
        {/* Navigation - Separate from main container */}
        <nav className="relative z-10 w-full px-4 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
              Vibe Voyager
            </div>
            <div className="hidden md:flex space-x-8">
              {['Features', 'How It Works', 'About', 'Contact'].map((item, index) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-white hover:text-green-500 font-medium transition duration-300 relative opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
  
        {/* Main Content Container */}
        <div className="container mx-auto px-4 flex flex-col relative z-10">
          <main className="flex-1 flex flex-col justify-center items-center text-center py-12">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight opacity-0 transform translate-y-5 animate-slide-up bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
              Discover Your <br />Musical Journey
            </h1>
            <p className="text-xl max-w-2xl mb-10 opacity-0 transform translate-y-5 animate-slide-up-delay-2">
              Explore new music territories based on your unique taste profile. Let Vibe Voyager take you on a personalized journey through sounds you'll love.
            </p>
            <a 
              href="#" 
              className="inline-block px-8 py-4 bg-green-500 text-white font-bold rounded-full text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/25 relative overflow-hidden opacity-0 transform translate-y-5 animate-slide-up-delay-3"
            >
              <FontAwesomeIcon icon={faSpotify} className="mr-2" /> Log in with Spotify
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-shimmer"></span>
            </a>
  
            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-10 mt-20 w-full">
              {[
                { 
                  icon: faCompass, 
                  title: "Personalized Discovery", 
                  description: "Discover new artists and songs tailored specifically to your unique taste profile and listening history."
                },
                { 
                  icon: faMap, 
                  title: "Musical Maps", 
                  description: "Visualize your musical journey with interactive maps showing connections between genres and artists."
                },
                { 
                  icon: faHeadphonesAlt, 
                  title: "Weekly Voyages", 
                  description: "Embark on curated musical adventures every week, expanding your horizons one playlist at a time."
                }
              ].map((feature, index) => (
                <div 
                  key={feature.title}
                  className="bg-gray-800/70 backdrop-blur-md rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl border border-white/10 opacity-0 transform translate-y-5"
                  style={{ animationDelay: `${900 + index * 200}ms`, animationFillMode: 'forwards', animationName: 'slideUp', animationDuration: '0.6s', animationTimingFunction: 'ease-out' }}
                >
                  <div className="text-4xl text-green-500 mb-6">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </main>
  
          {/* Footer */}
          <footer className="py-6 text-center border-t border-white/10 mt-12 opacity-0 animate-fade-in-delay-15">
            <p>&copy; 2025 Spotify Vibe Voyager</p>
          </footer>
        </div>
      </div>
    );
  }
  
  export default Home;