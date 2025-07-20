import React, { useState, useEffect } from 'react';
import { Users, BarChart } from 'lucide-react';

const LivePreview: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('live-demo');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

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
    <section id="live-demo" className="py-12 lg:py-16 bg-white relative overflow-hidden -mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-teal-900">
             Try it out yourself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This is a demo of our real-time feedback engine.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Survey */}
            <div className={`bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 transition-all duration-1000 hover:shadow-3xl ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Interactive Demo
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  How likely are you to try a new product if it comes with a discount?
                </h3>
                <p className="text-gray-600">Click an option to see instant results!</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => handleOptionSelect('very-likely')}
                  className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
                    selectedOption === 'very-likely'
                      ? 'border-teal-500 bg-teal-50 shadow-lg transform scale-105'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">✅ Very Likely</div>
                      <div className="text-gray-600 text-sm">I love trying new things with savings</div>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg group-hover:scale-110 transition-transform"></div>
                  </div>
                </button>

                <button
                  onClick={() => handleOptionSelect('somewhat-likely')}
                  className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
                    selectedOption === 'somewhat-likely'
                      ? 'border-teal-500 bg-teal-50 shadow-lg transform scale-105'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">🤔 Somewhat Likely</div>
                      <div className="text-gray-600 text-sm">Depends on the discount amount</div>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg group-hover:scale-110 transition-transform"></div>
                  </div>
                </button>

                <button
                  onClick={() => handleOptionSelect('not-likely')}
                  className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
                    selectedOption === 'not-likely'
                      ? 'border-teal-500 bg-teal-50 shadow-lg transform scale-105'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">❌ Not Likely</div>
                      <div className="text-gray-600 text-sm">I prefer to research thoroughly first</div>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg group-hover:scale-110 transition-transform"></div>
                  </div>
                </button>
              </div>

              <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-2" />
                <span>1,247 people have tried this demo</span>
              </div>
            </div>

            {/* Live Results - Pie Chart Style */}
            <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} ${showResults ? 'scale-105' : 'scale-100'}`}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Live Results</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    <span className="text-sm text-green-600 font-medium">Real-time</span>
                  </div>
                </div>

                {/* Pie Chart Visualization */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative w-56 h-56">
                    {/* Pie Chart Background */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Very Likely - 52% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="20"
                        strokeDasharray={`${selectedOption === 'very-likely' ? 53 : 52} ${selectedOption === 'very-likely' ? 247 : 248}`}
                        strokeDashoffset="0"
                        className="transition-all duration-1000 drop-shadow-sm"
                      />
                      {/* Somewhat Likely - 31% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="20"
                        strokeDasharray={`${selectedOption === 'somewhat-likely' ? 32 : 31} ${selectedOption === 'somewhat-likely' ? 268 : 269}`}
                        strokeDashoffset={`-${selectedOption === 'very-likely' ? 53 : 52}`}
                        className="transition-all duration-1000 drop-shadow-sm"
                      />
                      {/* Not Likely - 17% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="20"
                        strokeDasharray={`${selectedOption === 'not-likely' ? 18 : 17} ${selectedOption === 'not-likely' ? 282 : 283}`}
                        strokeDashoffset={`-${(selectedOption === 'very-likely' ? 53 : 52) + (selectedOption === 'somewhat-likely' ? 32 : 31)}`}
                        className="transition-all duration-1000 drop-shadow-sm"
                      />
                    </svg>
                    
                    {/* Center Label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          {selectedOption === 'very-likely' ? '53%' : 
                           selectedOption === 'somewhat-likely' ? '32%' : 
                           selectedOption === 'not-likely' ? '18%' : '52%'}
                        </div>
                        <div className="text-sm text-gray-600">
                          {selectedOption === 'very-likely' ? 'Very Likely' : 
                           selectedOption === 'somewhat-likely' ? 'Somewhat' : 
                           selectedOption === 'not-likely' ? 'Not Likely' : 'Very Likely'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className={`transition-all duration-700 ${showResults ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Very Likely</span>
                    </div>
                    <div className="text-lg font-bold text-emerald-600">
                      {selectedOption === 'very-likely' ? '53%' : '52%'}
                    </div>
                  </div>
                  <div className={`transition-all duration-700 delay-200 ${showResults ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Somewhat</span>
                    </div>
                    <div className="text-lg font-bold text-yellow-600">
                      {selectedOption === 'somewhat-likely' ? '32%' : '31%'}
                    </div>
                  </div>
                  <div className={`transition-all duration-700 delay-400 ${showResults ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Not Likely</span>
                    </div>
                    <div className="text-lg font-bold text-red-600">
                      {selectedOption === 'not-likely' ? '18%' : '17%'}
                    </div>
                  </div>
                </div>

                {/* Insight Box */}
                <div className={`bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-6 transition-all duration-700 delay-600 ${showResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        🎯 Instant Insight
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {selectedOption === 'yes' 
                          ? "Strong positive response! 53% are very likely to try discounted products - discounts drive adoption."
                          : selectedOption === 'somewhat-likely'
                          ? "Moderate interest. 32% need the right discount amount - test different discount levels."
                          : selectedOption === 'not-likely'
                          ? "Research-focused segment. 18% prefer thorough evaluation - provide detailed product information."
                          : "Select an option above to see real-time analysis and insights."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center mt-8 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-600 font-medium">
            Get insights like this for your business in{' '}
            <span className="text-teal-600 font-bold">real-time</span>
            <span className="inline-block ml-2">⚡</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LivePreview;