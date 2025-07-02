import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Smartphone, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const fullText = 'Turn real opinions into better business decisions';

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => {
      clearInterval(typeInterval);
    };
  }, []);

  return (
    <section className="pt-20 lg:pt-28 pb-16 lg:pb-24 bg-gradient-to-br from-mint-50 to-white overflow-hidden relative">
      {/* Simple background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
              Beta Now Available
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 min-h-[200px] lg:min-h-[240px]">
              <span className="block">{typedText}</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Market-Inn helps small businesses get fast, accurate insights from verified users — 
              with no guesswork and no complex tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center group"
              >
                Join Beta
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-teal-500 hover:text-teal-600 hover:shadow-lg transition-all duration-200 flex items-center justify-center group">
                <Play className="mr-2 w-5 h-5" />
                How It Works
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Verified users only
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                500+ businesses
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Visual insights
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Phone Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="bg-gray-100 rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Smartphone className="w-6 h-6 text-teal-600" />
                    <span className="text-sm text-gray-500">Question 1 of 1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Which price feels more reasonable for our premium coffee?
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full bg-teal-50 border-2 border-teal-500 text-teal-700 p-4 rounded-lg font-medium">
                      $4.50 per cup
                    </button>
                    <button className="w-full bg-gray-50 border-2 border-gray-200 text-gray-700 p-4 rounded-lg font-medium">
                      $6.50 per cup
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Card */}
              <div className="absolute -right-8 lg:-right-16 top-16 bg-white rounded-2xl shadow-xl p-6 transform -rotate-3 hover:rotate-0 transition-all duration-500 w-72">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                  <span className="text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                    Live Results
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">$4.50 per cup</span>
                    <span className="text-sm font-bold text-emerald-600">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full w-2/3"></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">$6.50 per cup</span>
                    <span className="text-sm font-bold text-gray-600">32%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gray-400 h-3 rounded-full w-1/3"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  <span className="text-emerald-600 font-bold">72% of 18-34 year-olds</span> prefer the lower price point
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;