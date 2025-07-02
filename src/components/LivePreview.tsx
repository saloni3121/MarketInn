import React, { useState, useEffect } from 'react';
import { ChevronRight, PieChart, Users, TrendingUp, Zap, Eye } from 'lucide-react';

const LivePreview: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('live-preview');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setAnimatedCount(prev => {
          if (prev < 127) return prev + 3;
          clearInterval(interval);
          return 127;
        });
      }, 50);
    }
  }, [isInView]);

  useEffect(() => {
    if (selectedOption) {
      const timer = setTimeout(() => setShowResults(true), 800);
      return () => clearTimeout(timer);
    }
  }, [selectedOption]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowResults(false);
  };

  return (
    <section id="live-preview" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-mint-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200 rounded-full opacity-10 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
            <Eye className="w-4 h-4 mr-2" />
            Interactive Demo
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            See it in action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights are clear, visual, and designed for action. <br/> 
            <span className="text-teal-600 font-semibold animate-pulse">Try selecting an option below to see how fast results appear.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Question Interface */}
          <div className={`bg-white rounded-3xl shadow-2xl p-8 lg:p-10 transition-all duration-1000 hover:shadow-3xl hover:scale-105 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-sm text-green-600 font-medium">Live Survey</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-teal-600 animate-bounce" />
                <span className="text-sm text-gray-500 font-medium">Question 1 of 1</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 animate-pulse">
                Which logo design appeals to you more?
              </h3>
              
              <div className="space-y-4">
                <button
                  onClick={() => handleOptionSelect('modern')}
                  className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
                    selectedOption === 'modern'
                      ? 'border-teal-500 bg-teal-50 shadow-lg transform scale-105 animate-pulse'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md hover:scale-102'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">Modern & Minimalist</div>
                      <div className="text-gray-600 text-sm">Clean lines, simple typography</div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform animate-pulse"></div>
                  </div>
                </button>

                <button
                  onClick={() => handleOptionSelect('classic')}
                  className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
                    selectedOption === 'classic'
                      ? 'border-teal-500 bg-teal-50 shadow-lg transform scale-105 animate-pulse'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md hover:scale-102'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">Classic & Bold</div>
                      <div className="text-gray-600 text-sm">Traditional styling, strong presence</div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg group-hover:scale-110 transition-transform animate-pulse"></div>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <Users className="w-4 h-4 mr-2 animate-bounce" />
              <span className="font-medium">
                <span className="text-teal-600 font-bold animate-pulse">{animatedCount}</span> responses so far
              </span>
            </div>
          </div>

          {/* Results Dashboard */}
          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} ${showResults ? 'scale-105' : 'scale-100'}`}>
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Live Results</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                  <span className="text-sm text-green-600 font-medium">Live</span>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="mb-8">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
                  <div 
                    className={`absolute inset-0 rounded-full border-8 border-transparent border-t-teal-500 border-r-teal-500 transition-all duration-1000 ${showResults ? 'animate-spin-slow' : ''}`}
                    style={{ 
                      transform: showResults ? 'rotate(230deg)' : 'rotate(0deg)',
                      borderRightColor: showResults ? 'transparent' : '#14b8a6'
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PieChart className={`w-12 h-12 text-gray-400 ${showResults ? 'animate-pulse' : ''}`} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className={`flex items-center justify-between transition-all duration-500 ${showResults ? 'animate-slide-in-left' : ''}`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-teal-500 rounded-full animate-pulse"></div>
                      <span className="font-medium text-gray-900">Modern & Minimalist</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-teal-600 animate-pulse">
                        {selectedOption === 'modern' ? '64%' : '63%'}
                      </span>
                      {selectedOption === 'modern' && <TrendingUp className="w-4 h-4 text-teal-600 animate-bounce" />}
                    </div>
                  </div>

                  <div className={`flex items-center justify-between transition-all duration-500 delay-200 ${showResults ? 'animate-slide-in-left' : ''}`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="font-medium text-gray-900">Classic & Bold</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-orange-600">
                        {selectedOption === 'classic' ? '37%' : '36%'}
                      </span>
                      {selectedOption === 'classic' && <TrendingUp className="w-4 h-4 text-orange-600 animate-bounce" />}
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Insight */}
              <div className={`bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-6 transition-all duration-700 ${showResults ? 'animate-fade-in-up' : ''}`}>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse">
                    <span className="text-white text-sm font-bold">AI</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      Key Insight
                      <Zap className="w-4 h-4 ml-2 text-yellow-500 animate-bounce" />
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <strong className="text-teal-700 animate-pulse">
                        {selectedOption === 'modern' ? '68% of millennials' : '74% of 35+ respondents'}
                      </strong> prefer the {selectedOption === 'modern' ? 'modern' : 'classic'} approach. 
                      Consider targeting this demographic in your marketing strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-600 font-medium">
            Get insights like this for your business in{' '}
            <span className="text-teal-600 font-bold animate-pulse">under 4 hours</span>
            <span className="inline-block ml-2 animate-bounce">⚡</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default LivePreview;