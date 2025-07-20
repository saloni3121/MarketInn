import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600">
            © 2025 Market-Inn
          </p>
          {/* <div className="mt-2 flex items-center justify-center space-x-6 text-sm text-gray-500">
            <a href="#privacy" className="hover:text-gray-700 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-gray-700 transition-colors">
              Terms
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;