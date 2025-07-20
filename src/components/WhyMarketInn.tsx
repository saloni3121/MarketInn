import React, { useState, useEffect } from 'react';
import { Gamepad2, Zap, Brain, Users, BarChart3, DollarSign, Target, Sparkles } from 'lucide-react';


const WhyMarketInn: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        { threshold: 0.2 }
      );
  
      const section = document.getElementById('why-choose-us');
      if (section) observer.observe(section);
  
      return () => observer.disconnect();
    }, []);

  const features = [
    {
      icon: Gamepad2,
      title: 'Gamified User Experience',
      description: 'Engaging, interactive surveys that feel more like games than boring forms.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'Real-Time Insights',
      description: 'See results instantly as responses come in, with live charts and analytics.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Brain,
      title: 'AI-Driven Campaign Creation',
      description: 'Smart AI helps you create better questions and target the right audience.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Users,
      title: 'Targeted Demographics',
      description: 'Reach exactly the right people with precise demographic and behavioral targeting.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: BarChart3,
      title: 'Interactive Visual Reports',
      description: 'Beautiful, interactive dashboards that make data easy to understand and share.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: DollarSign,
      title: 'Pay Only for What You Use',
      description: 'Flexible pricing with no monthly fees. Pay per response, scale as you grow.',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to get better feedback, faster results, and actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
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
        {/* <div className="mt-16 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">10K+</div>
              <p className="text-gray-700 font-medium">Verified Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <p className="text-gray-700 font-medium">Response Quality</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">2hrs</div>
              <p className="text-gray-700 font-medium">Average Response Time</p>
            </div>
          </div>
        </div> */}

<div className={` -mb-8 text-center mt-16 transition-all duration-1000 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-gray-50 to-mint-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join our beta and experience the future of customer feedback.
            </p>
            <a
              href="https://forms.gle/VpjWXet6adTKfDwY7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              <span className="flex items-center">
              Join the Beta
                <Target className="ml-2 w-5 h-5" />
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
 
  );
};

export default WhyMarketInn;