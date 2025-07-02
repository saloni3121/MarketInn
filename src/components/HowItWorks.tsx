import React, { useState, useEffect } from 'react';
import { Edit3, Users, BarChart, Sparkles, Zap, Target } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
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

    const section = document.getElementById('how-it-works');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const steps = [
    {
      number: '01',
      icon: Edit3,
      title: 'Create your question',
      subtitle: 'Our AI helps you write it clearly',
      description: 'Simply describe what you want to know. Our AI will help you craft the perfect question to get actionable insights.',
      color: 'from-blue-500 to-cyan-600',
      features: ['AI-powered suggestions', 'Question optimization', 'Target audience matching']
    },
    {
      number: '02',
      icon: Users,
      title: 'We show it to real users',
      subtitle: 'Matched by age, gender, income, and interests',
      description: 'Your question goes to verified users who match your target demographic. No bots, no fake responses.',
      color: 'from-purple-500 to-pink-600',
      features: ['Phone verification', 'Demographic matching', 'Quality assurance']
    },
    {
      number: '03',
      icon: BarChart,
      title: 'You get insights fast',
      subtitle: 'See breakdowns and summaries within hours',
      description: 'Visual dashboards, AI-powered insights, and clear recommendations you can act on immediately.',
      color: 'from-emerald-500 to-teal-600',
      features: ['Real-time results', 'Visual analytics', 'Actionable recommendations']
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-full opacity-30 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-teal-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
            <Sparkles className="w-4 h-4 mr-2" />
            Simple Process
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get from question to insight in three simple steps. No complex setup, no technical knowledge required.
          </p>
        </div>

        <div className="relative">
          {/* Animated Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between">
              <div className={`w-1/3 h-1 bg-gradient-to-r transition-all duration-1000 ${activeStep >= 1 ? 'from-transparent via-blue-400 to-purple-400' : 'from-transparent via-gray-300 to-gray-300'} mt-8`}></div>
              <div className={`w-1/3 h-1 bg-gradient-to-r transition-all duration-1000 ${activeStep >= 2 ? 'from-purple-400 to-teal-400' : 'from-gray-300 to-transparent'} mt-8`}></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;
              return (
                <div 
                  key={index} 
                  className={`text-center group transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${isActive ? 'scale-105' : 'scale-100'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full font-bold text-lg mb-6 transition-all duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white animate-pulse' 
                      : 'bg-gray-100 text-gray-400 group-hover:bg-teal-100 group-hover:text-teal-600'
                  }`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
                    isActive ? 'scale-110 animate-pulse' : 'group-hover:scale-110'
                  }`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                    isActive ? 'text-teal-700' : 'text-gray-900 group-hover:text-teal-700'
                  }`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-lg font-medium mb-4 transition-all duration-300 ${
                    isActive ? 'text-teal-600 animate-pulse' : 'text-teal-600'
                  }`}>
                    {step.subtitle}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto mb-6">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className={`space-y-2 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          isActive ? 'bg-teal-500 animate-pulse' : 'bg-gray-400'
                        }`}></div>
                        <span className={isActive ? 'text-teal-600 font-medium' : ''}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Indicators */}
        <div className="flex justify-center space-x-4 mt-12">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index 
                  ? 'bg-teal-500 scale-125' 
                  : 'bg-gray-300 hover:bg-teal-300'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto hover:shadow-xl transition-all duration-500 group">
            <div className="flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-teal-600 animate-bounce" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">
              Ready to get started?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join our beta and get your first question answered for free.
            </p>
            <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-xl animate-pulse hover:animate-none group-hover:shadow-2xl">
              <span className="flex items-center">
                Start Your First Survey
                <Zap className="ml-2 w-5 h-5 group-hover:animate-bounce" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;