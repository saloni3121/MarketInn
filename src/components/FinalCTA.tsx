import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, BarChart3 } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get insights that drive action — from the people who{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
              matter most
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-teal-100 mb-12 leading-relaxed">
            Join thousands of business owners who've stopped guessing and started knowing what their customers really want.
          </p>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">No setup</h3>
              <p className="text-teal-200 text-sm">Start surveying in minutes, not days</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">No delays</h3>
              <p className="text-teal-200 text-sm">Results delivered within hours</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Just data you can trust</h3>
              <p className="text-teal-200 text-sm">Verified users, real insights</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <a
              href="https://forms.gle/VpjWXet6adTKfDwY7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-teal-900 px-12 py-5 rounded-xl font-bold text-xl hover:bg-teal-50 transform hover:scale-105 transition-all duration-200 shadow-2xl group"
            >
              Join the Beta
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-teal-200 text-lg">
              <span className="font-semibold"> • Free first question    • No credit card required    • Setup in 5 minutes</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;