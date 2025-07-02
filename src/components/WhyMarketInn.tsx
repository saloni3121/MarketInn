import React from 'react';
import { Shield, BarChart3, Zap, Lock } from 'lucide-react';

const WhyMarketInn: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Users Only',
      description: 'Participants are phone-checked, screened for fraud, and matched to your target.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: BarChart3,
      title: 'Visual & Actionable',
      description: 'Dashboards, charts, and summaries—no spreadsheets or extra work required.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Simple & Fast to Use',
      description: 'Write a question, launch instantly, and get your results later that same day.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Lock,
      title: 'Data You Can Trust On',
      description: 'Protections are built in to ensure you get honest and accurate responses.',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section id="why-market-inn" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why choose Market-Inn?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get reliable insights from real people, delivered in a format you can actually use to make decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">10K+</div>
              <p className="text-gray-700 font-medium">Verified Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <p className="text-gray-700 font-medium">Accuracy Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">2hrs</div>
              <p className="text-gray-700 font-medium">Average Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMarketInn;