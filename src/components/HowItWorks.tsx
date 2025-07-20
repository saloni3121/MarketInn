import React from 'react';
import { Edit3, Users, BarChart} from 'lucide-react';

const HowItWorks: React.FC = () => {
  
  const steps = [
    {
      icon: Edit3,
      title: 'Create a Survey',
      subtitle: 'with AI assistance',
      description: 'Our AI helps you craft the perfect questions to get actionable insights from your target audience.',
      color: 'from-blue-500 to-cyan-600',
      features: ['AI-powered suggestions', 'Question optimization', 'Smart templates']
    },
    {
      icon: Users,
      title: 'Launch to Users',
      subtitle: 'real demographics',
      description: 'Reach verified users who match your exact target demographic. No bots, no fake responses.',
      color: 'from-purple-500 to-pink-600',
      features: ['Verified participants', 'Demographic targeting', 'Quality assurance']
    },
    {
      icon: BarChart,
      title: 'See Instant Feedback',
      subtitle: 'visual, fast, exportable',
      description: 'Get beautiful visual dashboards with real-time results, actionable recommendations, and instant customer insights.',
      color: 'from-emerald-500 to-teal-600',
      features: ['Real-time results', 'Visual analytics', 'Export capabilities']
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-mint-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 opacity-100 translate-y-0}`}>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to get the feedback you need to make better business decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center ml-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex items-center justify-center">
                <div 
                  className={`text-center group transition-all duration-700 hover:scale-105 w-full max-w-sm mx-auto opacity-100 translate-y-0}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg font-medium text-teal-600 mb-4">
                    {step.subtitle}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto mb-6">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center mx-4">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
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
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;