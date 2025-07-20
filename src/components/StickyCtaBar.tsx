import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Lightbulb, ArrowRight } from 'lucide-react';

const StickyCtaBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling past the hero section
      if (scrollPosition > windowHeight * 0.5 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-500 ease-in-out">
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-2xl border-t-4 border-teal-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm lg:text-base">
                  💡 Beta is open — help shape the platform.
                </p>
                <p className="text-teal-100 text-xs lg:text-sm">
                  Join early adopters getting better feedback, faster.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="https://forms.gle/VpjWXet6adTKfDwY7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-600 px-4 py-2 lg:px-6 lg:py-2 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-200 flex items-center text-sm lg:text-base transform hover:scale-105 shadow-lg"
              >
              Join the Beta
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Dismiss"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCtaBar;