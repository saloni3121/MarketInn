import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { BarChart3, User, Mail, Building, Phone, MapPin, Rocket, Star, Clock, Zap, Target, TrendingUp, Users, CheckCircle, Sparkles, Bell, Calendar, ArrowRight } from 'lucide-react';

const ComingSoonDashboard: React.FC = () => {
  const { user, profile, signOut } = useAuth();
  const [currentFeature, setCurrentFeature] = useState(0);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Feature rotation
    const featureInterval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % 4);
    }, 3000);

    // Animated counter
    const countInterval = setInterval(() => {
      setAnimatedCount(prev => {
        if (prev < 127) return prev + 2;
        return 127;
      });
    }, 100);

    return () => {
      clearInterval(featureInterval);
      clearInterval(countInterval);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const upcomingFeatures = [
    {
      icon: Target,
      title: "Smart Survey Builder",
      description: "AI-powered question optimization and target audience matching",
      color: "from-blue-500 to-cyan-600",
      status: "In Development"
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Live response tracking with visual dashboards and insights",
      color: "from-purple-500 to-pink-600",
      status: "Coming Soon"
    },
    {
      icon: Users,
      title: "Advanced Demographics",
      description: "Detailed audience segmentation and behavioral analysis",
      color: "from-emerald-500 to-teal-600",
      status: "In Development"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get survey responses and insights within hours",
      color: "from-yellow-500 to-orange-600",
      status: "Coming Soon"
    }
  ];

  const betaPerks = [
    { icon: Star, text: "Free first question (worth $50)", highlight: true },
    { icon: Clock, text: "Priority response times", highlight: false },
    { icon: Bell, text: "Early access to new features", highlight: false },
    { icon: Target, text: "Direct feedback channel", highlight: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Market-Inn</span>
              <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                Beta
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {profile?.full_name || user?.email}</span>
              <button
                onClick={handleSignOut}
                className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
            <Rocket className="w-4 h-4 mr-2" />
            Beta Member Dashboard
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 animate-pulse">
              Future
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            You're among the first to experience Market-Inn's revolutionary survey platform. 
            We're putting the finishing touches on your dashboard and will notify you the moment it's ready.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Dashboard is Coming Soon!
            </h3>
            <p className="text-gray-600 mb-6">
              We're working around the clock to deliver an amazing experience. 
              You'll receive an email notification as soon as your personalized dashboard is ready.
            </p>
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4">
              <div className="flex items-center justify-center space-x-2 text-teal-700">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Expected launch: Within 2-3 weeks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className={`bg-white rounded-2xl shadow-lg p-8 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Your Beta Profile</h2>
              <p className="text-gray-600">Member since {new Date(profile?.created_at || '').toLocaleDateString()}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium text-gray-900">{profile?.full_name || 'Not provided'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{profile?.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-900">{profile?.phone || 'Not provided'}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Building className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p className="font-medium text-gray-900">{profile?.company_name || 'Not provided'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Industry</p>
                  <p className="font-medium text-gray-900">{profile?.industry || 'Not provided'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <BarChart3 className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Company Size</p>
                  <p className="font-medium text-gray-900">{profile?.company_size || 'Not provided'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beta Perks */}
        <div className={`bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Beta Member Benefits
            </h3>
            <p className="text-gray-700">
              As an early adopter, you get exclusive perks and priority access
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {betaPerks.map((perk, index) => {
              const IconComponent = perk.icon;
              return (
                <div key={index} className={`text-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${perk.highlight ? 'bg-white shadow-lg border-2 border-teal-200' : 'bg-white/50'}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${perk.highlight ? 'bg-gradient-to-r from-teal-500 to-emerald-600' : 'bg-gray-200'}`}>
                    <IconComponent className={`w-6 h-6 ${perk.highlight ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <p className={`font-medium ${perk.highlight ? 'text-teal-700' : 'text-gray-700'}`}>
                    {perk.text}
                  </p>
                  {perk.highlight && (
                    <div className="mt-2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        ACTIVE
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Features */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What's Coming to Your Dashboard
            </h3>
            <p className="text-gray-600">
              Sneak peek at the powerful features we're building for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {upcomingFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const isActive = currentFeature === index;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-500 hover:shadow-xl hover:scale-105 ${
                    isActive ? 'border-teal-500 shadow-2xl scale-105' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0 ${isActive ? 'animate-pulse' : ''}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-bold text-gray-900 ${isActive ? 'text-teal-700' : ''}`}>
                          {feature.title}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          feature.status === 'In Development' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {feature.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {upcomingFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentFeature === index 
                    ? 'bg-teal-500 scale-125' 
                    : 'bg-gray-300 hover:bg-teal-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Beta Community Stats */}
        <div className={`bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Join the Beta Community
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2 animate-pulse">{animatedCount}</div>
              <div className="text-gray-600">Beta Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">$50</div>
              <div className="text-gray-600">Free Credit</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">2-3</div>
              <div className="text-gray-600">Weeks to Launch</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">Priority Support</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-6">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-teal-600 animate-bounce" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              You're All Set!
            </h4>
            <p className="text-gray-700 mb-4">
              We'll send you an email notification the moment your dashboard is ready. 
              In the meantime, feel free to reach out with any questions.
            </p>
            <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              <span className="flex items-center">
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComingSoonDashboard;