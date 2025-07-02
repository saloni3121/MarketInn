import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, ArrowLeft, CheckCircle, X, Users, TrendingUp, Zap, Star, Clock, Target, Sparkles, Play } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    industry: ''
  });
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [error, setError] = useState('');
  const [currentDemo, setCurrentDemo] = useState(0);
  const [liveCount, setLiveCount] = useState(89);
  const [successCount, setSuccessCount] = useState(500);
  
  const { signUp, createProfile } = useAuth();

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Retail', 'Education', 
    'Manufacturing', 'Food & Beverage', 'Professional Services', 
    'Real Estate', 'Other'
  ];

  useEffect(() => {
    // Demo rotation
    const demoInterval = setInterval(() => {
      setCurrentDemo(prev => (prev + 1) % 3);
    }, 4000);

    // Live count animation
    const countInterval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 2) + 1);
      setSuccessCount(prev => prev + Math.floor(Math.random() * 3));
    }, 6000);

    return () => {
      clearInterval(demoInterval);
      clearInterval(countInterval);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Generate a temporary password for the user
      const tempPassword = Math.random().toString(36).slice(-8) + 'A1!';
      
      const { user, session, error: signUpError } = await signUp(formData.email, tempPassword);
      
      if (signUpError) {
        throw signUpError;
      }

      // Check if we have a user (either immediately or pending email confirmation)
      if (user) {
        // Create profile with all the data using the correct user ID
        const profileData = {
          id: user.id, // Use the user ID from signup
          email: user.email!,
          full_name: formData.fullName,
          company_name: formData.companyName || undefined,
          phone: formData.phone || undefined,
          industry: formData.industry || undefined
        };
        
        await createProfile(profileData);
      }
      
      // Show success popup
      setShowSuccessPopup(true);
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(err.message || 'Failed to join beta. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  const demoContent = [
    {
      title: "Join 500+ Successful Businesses",
      subtitle: "See what our beta users are achieving",
      content: (
        <div className="bg-white rounded-xl p-3 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Recent Success Stories</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600">Live</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">SG</span>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-600">Sarah's Gym increased membership by 34%</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">TC</span>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-600">TechCorp validated new feature idea</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500 text-center">
            <span className="font-medium text-teal-600">{successCount}+</span> businesses served this month
          </div>
        </div>
      )
    },
    {
      title: "Beta Exclusive Benefits",
      subtitle: "What you get as an early member",
      content: (
        <div className="bg-white rounded-xl p-3 shadow-lg">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Star className="w-3 h-3 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-900">Free First Question</p>
                <p className="text-xs text-gray-600">Worth $50 - yours free</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-900">Priority Support</p>
                <p className="text-xs text-gray-600">Direct line to our team</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Target className="w-3 h-3 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-900">Early Feature Access</p>
                <p className="text-xs text-gray-600">Try new features first</p>
              </div>
            </div>
          </div>
          <div className="mt-3 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg p-2">
            <p className="text-xs text-teal-700 font-medium text-center">
              Limited to first 1,000 beta users
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Quick Setup Process",
      subtitle: "Get started in minutes, not hours",
      content: (
        <div className="bg-white rounded-xl p-3 shadow-lg">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-900">Sign up (2 minutes)</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full w-full"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-900">Create your question</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full w-3/4 animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-xs font-bold">3</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-500">Get results (2-4 hours)</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div className="bg-gray-300 h-1.5 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center space-x-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>Average setup time: <strong className="text-teal-600">3 minutes</strong></span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 to-white flex">
      {/* Left Side - Welcome Panel */}
      <div className="flex-1 flex items-center justify-center p-3 lg:p-6 relative overflow-hidden">
        <div className="max-w-lg w-full">
          {/* Back to Home */}
          <Link 
            to="/"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Brand */}
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Market-Inn</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
              Market-Inn
            </span>
          </h1>

          <p className="text-base lg:text-lg text-gray-600 mb-4 leading-relaxed">
            Join the beta revolution and be among the first to experience the future of customer insights. Get your first question answered free.
          </p>

          {/* Live Demo Section */}
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-700 text-sm">Beta Program Highlights</span>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-3 border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900 text-sm">
                  {demoContent[currentDemo].title}
                </h3>
                <Play className="w-4 h-4 text-teal-600 animate-pulse" />
              </div>
              
              <p className="text-gray-600 mb-2 text-xs">
                {demoContent[currentDemo].subtitle}
              </p>
              
              {demoContent[currentDemo].content}
            </div>

            {/* Demo Indicators */}
            <div className="flex justify-center space-x-2 mt-2">
              {demoContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDemo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentDemo === index 
                      ? 'bg-teal-500 w-4' 
                      : 'bg-gray-300 hover:bg-teal-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Beta Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-teal-600">{liveCount}</div>
              <div className="text-xs text-gray-600">Beta Users</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-teal-600">$50</div>
              <div className="text-xs text-gray-600">Free Credit</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-teal-600">2min</div>
              <div className="text-xs text-gray-600">Setup Time</div>
            </div>
          </div>

          {/* Already have account */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-3 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-1 text-sm">
              Already have an account?
            </h3>
            <p className="text-gray-600 mb-2 text-xs">
              Sign in to access your dashboard and continue your surveys.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center border-2 border-teal-500 text-teal-600 px-3 py-1.5 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-200 text-xs"
            >
              Sign In
              <ArrowLeft className="ml-2 w-3 h-3 rotate-180" />
            </Link>
          </div>
        </div>

        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full max-w-lg flex flex-col justify-center p-3 lg:p-6 bg-white shadow-2xl border-l border-gray-100">
        <div className="w-full max-w-md mx-auto">
          {/* Form Header */}
          <div className="text-center mb-4">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
              Join the Beta
            </h2>
            <p className="text-gray-600 text-sm">
              Get early access and your first question free
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-xs">{error}</p>
            </div>
          )}

          {/* Signup Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white shadow-sm text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1"> 
                  Email address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white shadow-sm text-sm"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white shadow-sm text-sm"
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white shadow-sm text-sm"
                  placeholder="Your phone number (optional)"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-1">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white shadow-sm text-sm"
                >
                  <option value="">Select your industry (optional)</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg text-sm"
              >
                {loading ? 'Joining Beta...' : 'Join Beta Program'}
              </button>
            </form>

            <div className="mt-3 text-center">
              <p className="text-gray-600 text-xs">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-teal-600 hover:text-teal-700 font-semibold"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-3 text-center">
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Free beta access</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full relative">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Successfully Signed Up!
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Thank you for joining our beta program. We'll follow up with you via email with next steps and early access details.
              </p>

              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg p-3 mb-4">
                <p className="text-teal-700 font-medium text-sm">
                  Check your email: {formData.email}
                </p>
              </div>

              <Link
                to="/"
                onClick={closePopup}
                className="inline-flex items-center bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPage;