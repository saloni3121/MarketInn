import React from 'react';
import { Check, Star, Rocket, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-mint-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pricing Preview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free in our beta program, then scale with flexible pricing as you grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Starter (Free Beta) */}
          <div className="relative bg-white rounded-2xl border-2 border-teal-500 shadow-2xl transform hover:scale-105 transition-all duration-300">
            {/* Beta Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Free Beta
              </span>
            </div>

            <div className="p-8 lg:p-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>

              {/* Plan Info */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Starter (Free Beta)
              </h3>
              
              <p className="text-gray-600 mb-6">
                Perfect for testing the waters and getting started
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Free
                </span>
                <div className="text-sm text-gray-500 mt-2">
                  During beta period
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {[
                  '✔ 100 responses',
                  '✔ All insight features',
                  '✔ Real-time analytics',
                  '✔ Visual reports',
                  '✔ AI-powered insights',
                  '✔ Priority support'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://forms.gle/VpjWXet6adTKfDwY7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                Join the Beta
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Pro & Enterprise (Coming Soon) */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="p-8 lg:p-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>

              {/* Plan Info */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Pro & Enterprise
              </h3>
              
              <p className="text-gray-600 mb-6">
                Advanced features for growing businesses
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Coming Soon
                </span>
                <div className="text-sm text-gray-500 mt-2">
                  Launching after beta
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {[
                  'Custom campaigns',
                  'White-label options',
                  'API access',
                  'Advanced analytics',
                  'Team collaboration',
                  'Priority support'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-600 transition-all duration-200">
                Get Notified
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            All plans include verified users, fraud detection, and beautiful visual reporting.
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