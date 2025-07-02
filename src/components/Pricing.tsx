import React from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Quick Check',
      price: '$50',
      description: 'Perfect for testing a single idea',
      questions: 1,
      bestFor: 'First-time test',
      icon: Zap,
      features: [
        '1 survey question',
        'Up to 100 responses',
        'Basic demographics',
        'Visual results dashboard',
        '24-hour turnaround'
      ],
      color: 'from-blue-500 to-cyan-600',
      popular: false
    },
    {
      name: 'Core Test',
      price: '$150',
      description: 'Ideal for early product validation',
      questions: 5,
      bestFor: 'Early validation',
      icon: Crown,
      features: [
        '5 survey questions',
        'Up to 250 responses',
        'Advanced demographics',
        'AI-powered insights',
        'Export capabilities',
        '12-hour turnaround'
      ],
      color: 'from-emerald-500 to-teal-600',
      popular: true
    },
    {
      name: 'Full Feedback',
      price: '$600',
      description: 'Complete insights for major launches',
      questions: 25,
      bestFor: 'Product launches',
      icon: Rocket,
      features: [
        '25 survey questions',
        'Up to 1000 responses',
        'Custom demographics',
        'Advanced analytics',
        'Priority support',
        'Same-day results'
      ],
      color: 'from-purple-500 to-indigo-600',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include verified respondents and visual insights.
          </p>
          
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-50 to-orange-50 text-orange-700 px-6 py-3 rounded-full font-medium border border-orange-200">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
            Beta special: Get your first question free
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-teal-500 shadow-xl' 
                    : 'border-gray-200 hover:border-teal-300'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 lg:p-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan Info */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <div className="text-sm text-gray-500 mt-2">
                      {plan.questions} question{plan.questions > 1 ? 's' : ''} • Best for {plan.bestFor}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'border-2 border-gray-300 text-gray-700 hover:border-teal-500 hover:text-teal-600'
                    }`}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            All plans include phone verification, fraud detection, and visual reporting.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;