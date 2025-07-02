import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart3, Eye, EyeOff, ArrowLeft, TrendingUp, Users, Zap, CheckCircle, Play, Star, Clock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentDemo, setCurrentDemo] = useState(0);
  const [liveCount, setLiveCount] = useState(127);
  
  const { signIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Demo rotation
    const demoInterval = setInterval(() => {
      setCurrentDemo(prev => (prev + 1) % 3);
    }, 3000);

    // Live count animation
    const countInterval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => {
      clearInterval(demoInterval);
      clearInterval(countInterval);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  const demoContent = [
    {
      title: "Real-time Survey Results",
      subtitle: "See responses as they come in",
      content: (
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Which logo do you prefer?</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600">Live</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Modern Design</span>
              <span className="text-sm font-bold text-teal-600">68%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2 rounded-full w-2/3 animate-pulse"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Classic Design</span>
              <span className="text-sm font-bold text-gray-600">32%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-400 h-2 rounded-full w-1/3"></div>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-500">
            <span className="font-medium text-teal-600">{liveCount}</span> responses collected
          </div>
        </div>
      )
    },
    {
      title: "AI-Powered Insights",
      subtitle: "Get actionable recommendations",
      content: (
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
            <span className="text-sm font-medium text-gray-700">Key Insight</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong className="text-purple-600">74% of millennials</strong> prefer the modern design. 
            Consider targeting this demographic in your marketing campaigns.
          </p>
          <div className="mt-3 flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 text-yellow-500" />
              <span>High confidence</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-3 h-3 text-green-500" />
              <span>Actionable</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Fast Turnaround",
      subtitle: "Results in hours, not days",
      content: (
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Survey Progress</span>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-xs text-blue-600">2.3 hrs remaining</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Responses collected</span>
              <span className="text-sm font-bold text-green-600">89/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-pulse" style={{width: '89%'}}></div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Started 1.7 hrs ago</span>
              <span>Est. completion: 2.3 hrs</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 to-white flex">
      {/* Left Side - Login Form */}
      <div className="w-full max-w-lg flex flex-col justify-center p-4 lg:p-8 bg-white shadow-2xl border-r border-gray-100">
        <div className="w-full max-w-md mx-auto -mt-24">
          {/* Back to Home */}
          <Link 
            to="/"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors mb-20 " 
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Form Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Market-Inn</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Welcome back
            </h2>
            <p className="text-gray-600">
              Sign in to continue to your dashboard
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white shadow-sm"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white shadow-sm"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-gray-700">
                    Remember me
                  </label>
                </div>

                <Link
                  to="/forgot-password"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="text-teal-600 hover:text-teal-700 font-semibold"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-4 text-center">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Secure login</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Data protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Welcome Panel */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
        <div className="max-w-lg w-full">
          {/* Main Heading */}
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Welcome back to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
              Market-Inn
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
            Continue making data-driven decisions with insights from real users. Your dashboard is waiting.
          </p>

          {/* Live Demo Section */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-700">Live Platform Demo</span>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900">
                  {demoContent[currentDemo].title}
                </h3>
                <Play className="w-5 h-5 text-teal-600 animate-pulse" />
              </div>
              
              <p className="text-gray-600 mb-3 text-sm">
                {demoContent[currentDemo].subtitle}
              </p>
              
              {demoContent[currentDemo].content}
            </div>

            {/* Demo Indicators */}
            <div className="flex justify-center space-x-2 mt-3">
              {demoContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDemo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentDemo === index 
                      ? 'bg-teal-500 w-6' 
                      : 'bg-gray-300 hover:bg-teal-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-xl font-bold text-teal-600">500+</div>
              <div className="text-xs text-gray-600">Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-teal-600">98%</div>
              <div className="text-xs text-gray-600">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-teal-600">2hrs</div>
              <div className="text-xs text-gray-600">Avg Response</div>
            </div>
          </div>

          {/* Join Now CTA */}
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-4 border border-teal-100">
            <h3 className="font-bold text-gray-900 mb-2">
              New to Market-Inn?
            </h3>
            <p className="text-gray-600 mb-3 text-sm">
              Join our beta program and get your first question answered for free.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm"
            >
              Join Beta Program
              <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>

        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-teal-400 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;