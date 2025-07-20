import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Play, ArrowRight, TrendingUp, DollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate the dollar value
    const interval = setInterval(() => {
      setAnimatedValue(prev => {
        if (prev < 2847) return prev + 47;
        return 2847;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('live-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 lg:pt-32 pb-20 lg:pb-28 bg-gradient-to-br from-mint-50 to-white overflow-hidden relative mb-[-30px] ">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-bounce-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-[40px] ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 mt-[40px]'}`}>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Get Real Feedback.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                Real Fast.
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Launch gamified surveys and get visual results in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://forms.gle/VpjWXet6adTKfDwY7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center group"
              >
              Join the Beta
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button 
                onClick={scrollToDemo}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-teal-500 hover:text-teal-600 hover:shadow-lg transition-all duration-200 flex items-center justify-center group"
              >
                <Play className="mr-2 w-5 h-5" />
                See It In Action
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Beta is open
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Real-time results
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Gamified experience
              </div>
            </div>
          </div>

          {/* Right Side - Visual Animation */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Survey Interface */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-teal-600 font-medium">🎮 Quick Survey</span>
                    <span className="text-sm text-gray-500">1 of 1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Would you use a feature like this?
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white p-4 rounded-lg font-medium hover:from-teal-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg">
                      ✅ Yes, absolutely!
                    </button>
                    <button className="w-full bg-gray-100 border-2 border-gray-200 text-gray-700 p-4 rounded-lg font-medium hover:border-gray-300 transition-all">
                      🤔 Maybe, tell me more
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Animation */}
              <div className="absolute -right-8 lg:-right-16 top-16 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-500 w-72">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                  <span className="text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-ping"></div>
                    Live Results
                  </span>
                </div>
                
                {/* Animated Chart */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Yes, absolutely!</span>
                    <span className="text-sm font-bold text-emerald-600">73%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full animate-pulse" style={{width: '73%'}}></div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Maybe, tell me more</span>
                    <span className="text-sm font-bold text-gray-600">27%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gray-400 h-3 rounded-full" style={{width: '27%'}}></div>
                  </div>
                </div>

                {/* Animated Dollar Value */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-yellow-600" />
                    <div>
                      <div className="text-sm text-gray-600">Potential Revenue</div>
                      <div className="text-lg font-bold text-yellow-600">
                        ${animatedValue.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;