import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, ArrowLeft, ArrowRight, CheckCircle, X, 
  User, Mail, Globe, MapPin, ShoppingBag, Users, 
  DollarSign, TrendingUp, Megaphone, Target, Heart,
  HelpCircle, Zap, Sparkles, Play, Star, Clock
} from 'lucide-react';

interface FormData {
  // Step 1: Get to Know You
  businessName: string;
  email: string;
  website: string;
  location: string;
  
  // Step 2: Business at a Glance
  whatYouSell: string;
  customers: string;
  topRevenue: string;
  salesSplit: number; // 0-100 (online percentage)
  launchFrequency: string;
  
  // Step 3: Marketing, Insights & Vision
  marketingChannels: string[];
  bestChannel: string;
  worstChannel: string;
  hasRunSurveys: boolean;
  surveyExperience: string;
  customerLove: string;
  misunderstandings: string;
  failedLaunches: string;
  brandTone: string;
  biggestGoal: string;
}

const MultiStepSignup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    email: '',
    website: '',
    location: '',
    whatYouSell: '',
    customers: '',
    topRevenue: '',
    salesSplit: 70,
    launchFrequency: '',
    marketingChannels: [],
    bestChannel: '',
    worstChannel: '',
    hasRunSurveys: false,
    surveyExperience: '',
    customerLove: '',
    misunderstandings: '',
    failedLaunches: '',
    brandTone: '',
    biggestGoal: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, [currentStep]);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleMarketingChannel = (channel: string) => {
    setFormData(prev => ({
      ...prev,
      marketingChannels: prev.marketingChannels.includes(channel)
        ? prev.marketingChannels.filter(c => c !== channel)
        : [...prev.marketingChannels, channel]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 300);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
      }, 300);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccessPopup(true);
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  const getStepProgress = () => {
    return ((currentStep - 1) / 3) * 100;
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.businessName && formData.email && formData.location;
      case 2:
        return formData.whatYouSell && formData.customers && formData.topRevenue && formData.launchFrequency;
      case 3:
        return formData.marketingChannels.length > 0 && formData.brandTone && formData.biggestGoal;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 to-white flex">
      {/* Left Side - Progress & Branding */}
      <div className="w-full max-w-md flex flex-col justify-center p-6 bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="relative z-10">
          {/* Back to Home */}
          <Link 
            to="/"
            className="inline-flex items-center text-teal-200 hover:text-white font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Brand */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-teal-600" />
            </div>
            <span className="text-2xl font-bold">Market-Inn</span>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-teal-200">Step {currentStep} of 3</span>
              <span className="text-teal-200">{Math.round(getStepProgress())}%</span>
            </div>
            <div className="w-full bg-teal-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-teal-300 to-emerald-300 h-2 rounded-full transition-all duration-500"
                style={{ width: `${getStepProgress()}%` }}
              ></div>
            </div>
          </div>

          {/* Step Titles */}
          <div className="space-y-4">
            <div className={`flex items-center space-x-3 transition-all duration-300 ${currentStep >= 1 ? 'text-white' : 'text-teal-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-white text-teal-600' : 'bg-teal-800'}`}>
                {currentStep > 1 ? <CheckCircle className="w-5 h-5" /> : <User className="w-5 h-5" />}
              </div>
              <span className="font-medium">Get to Know You</span>
            </div>
            
            <div className={`flex items-center space-x-3 transition-all duration-300 ${currentStep >= 2 ? 'text-white' : 'text-teal-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-white text-teal-600' : 'bg-teal-800'}`}>
                {currentStep > 2 ? <CheckCircle className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />}
              </div>
              <span className="font-medium">Business at a Glance</span>
            </div>
            
            <div className={`flex items-center space-x-3 transition-all duration-300 ${currentStep >= 3 ? 'text-white' : 'text-teal-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-white text-teal-600' : 'bg-teal-800'}`}>
                {currentStep > 3 ? <CheckCircle className="w-5 h-5" /> : <Target className="w-5 h-5" />}
              </div>
              <span className="font-medium">Marketing & Vision</span>
            </div>
          </div>

          {/* Encouragement */}
          <div className="mt-12 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Sparkles className="w-5 h-5 text-teal-300" />
              <span className="font-semibold">Why we ask</span>
            </div>
            <p className="text-teal-100 text-sm leading-relaxed">
              {currentStep === 1 && "We tailor everything to your business — from question suggestions to audience targeting."}
              {currentStep === 2 && "Understanding your business model helps us recommend the right survey strategies."}
              {currentStep === 3 && "Your marketing experience guides our insights and recommendations."}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form Content */}
      <div className="flex-1 flex flex-col justify-center p-6 lg:p-12 bg-white">
        <div className="max-w-2xl mx-auto w-full">
          {/* Step 1: Get to Know You */}
          {currentStep === 1 && (
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Let's Get to Know You 👋
                </h2>
                <p className="text-xl text-gray-600">
                  Before we dive in — tell us about your business, so we can make this 100% tailored to you.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    💬 What's your business called?
                  </label>
                  <p className="text-gray-600 mb-3">We'll try not to fall in love with the name... no promises.</p>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => updateFormData('businessName', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-lg"
                    placeholder="✍️ Enter your business name"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    📧 What's the best email to reach you?
                  </label>
                  <p className="text-gray-600 mb-3">We'll send your insights and recs here — no spam, ever.</p>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-lg"
                    placeholder="📬 your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    🌐 Got a website?
                  </label>
                  <p className="text-gray-600 mb-3">Totally optional, but helpful!</p>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => updateFormData('website', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-lg"
                    placeholder="🔗 Paste your site or say 'not yet'"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    📍 Where are you based?
                  </label>
                  <p className="text-gray-600 mb-3">City, state, or just your country works.</p>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateFormData('location', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-lg"
                    placeholder="🗺️ Your location"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Business at a Glance */}
          {currentStep === 2 && (
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  🎯 Your Business at a Glance
                </h2>
                <p className="text-xl text-gray-600">
                  Now let's get into what you actually do. Keep it simple, like you're explaining it to a friend.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    🛍️ What do you sell or offer?
                  </label>
                  <p className="text-gray-600 mb-3">Coaching? Physical goods? Courses? SaaS?</p>
                  <input
                    type="text"
                    value={formData.whatYouSell}
                    onChange={(e) => updateFormData('whatYouSell', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-lg"
                    placeholder="✍️ Describe what you offer"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    🧑‍🤝‍🧑 Who are your customers usually?
                  </label>
                  <p className="text-gray-600 mb-3">Think age, gender, where they live, or anything unique.</p>
                  <input
                    type="text"
                    value={formData.customers}
                    onChange={(e) => updateFormData('customers', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-lg"
                    placeholder="✍️ Describe your typical customers"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    💸 What brings in the most revenue for you right now?
                  </label>
                  <p className="text-gray-600 mb-3">A bestseller? A high-ticket service?</p>
                  <input
                    type="text"
                    value={formData.topRevenue}
                    onChange={(e) => updateFormData('topRevenue', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-lg"
                    placeholder="✍️ Your main revenue source"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    🌐 🏪 Roughly what % of sales are online vs. in-person?
                  </label>
                  <p className="text-gray-600 mb-3">Slide to adjust, or estimate.</p>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formData.salesSplit}
                      onChange={(e) => updateFormData('salesSplit', parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>🔘 {formData.salesSplit}% Online</span>
                      <span>{100 - formData.salesSplit}% In-Person</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    🆕 How often do you launch new things?
                  </label>
                  <p className="text-gray-600 mb-3">Products, campaigns, offers — we mean the fun stuff.</p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {['Weekly', 'Monthly', 'Quarterly', 'Rarely'].map((freq) => (
                      <button
                        key={freq}
                        onClick={() => updateFormData('launchFrequency', freq)}
                        className={`p-3 rounded-xl border-2 transition-all font-medium ${
                          formData.launchFrequency === freq
                            ? 'border-teal-500 bg-teal-50 text-teal-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        👉 {freq}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Marketing, Insights & Vision */}
          {currentStep === 3 && (
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  📈 Marketing, Insights & Vision
                </h2>
                <p className="text-xl text-gray-600">
                  You're almost done! Just a few last things to understand where you've been — and where you're headed. 🚀
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    📢 Which marketing channels have you tried so far?
                  </label>
                  <p className="text-gray-600 mb-3">Choose as many as you like.</p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {[
                      'Facebook/Instagram Ads',
                      'Email Marketing', 
                      'SEO/Blog',
                      'Events / Popups',
                      'Influencers',
                      'Other'
                    ].map((channel) => (
                      <button
                        key={channel}
                        onClick={() => toggleMarketingChannel(channel)}
                        className={`p-3 rounded-xl border-2 transition-all font-medium text-left ${
                          formData.marketingChannels.includes(channel)
                            ? 'border-teal-500 bg-teal-50 text-teal-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <span className="mr-2">
                          {formData.marketingChannels.includes(channel) ? '☑️' : '☐'}
                        </span>
                        {channel}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    🏆 Which one worked best?
                  </label>
                  <input
                    type="text"
                    value={formData.bestChannel}
                    onChange={(e) => updateFormData('bestChannel', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-lg"
                    placeholder="✍️ Your most successful channel"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    🧪 Which one flopped (or didn't do much)?
                  </label>
                  <input
                    type="text"
                    value={formData.worstChannel}
                    onChange={(e) => updateFormData('worstChannel', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-lg"
                    placeholder="✍️ What didn't work well"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    👂 Ever run a customer survey or focus group?
                  </label>
                  <div className="flex gap-4 mb-3">
                    <button
                      onClick={() => updateFormData('hasRunSurveys', true)}
                      className={`px-6 py-3 rounded-xl border-2 transition-all font-medium ${
                        formData.hasRunSurveys === true
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      👉 Yes
                    </button>
                    <button
                      onClick={() => updateFormData('hasRunSurveys', false)}
                      className={`px-6 py-3 rounded-xl border-2 transition-all font-medium ${
                        formData.hasRunSurveys === false
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      👉 No
                    </button>
                  </div>
                  
                  {formData.hasRunSurveys && (
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">
                        💬 How did that go?
                      </label>
                      <p className="text-gray-600 mb-3">Quick takeaway or what you learned.</p>
                      <input
                        type="text"
                        value={formData.surveyExperience}
                        onChange={(e) => updateFormData('surveyExperience', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="✍️ Your survey experience"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    ❤️ What do your customers love most about you?
                  </label>
                  <p className="text-gray-600 mb-3">This helps us spotlight your magic.</p>
                  <input
                    type="text"
                    value={formData.customerLove}
                    onChange={(e) => updateFormData('customerLove', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-lg"
                    placeholder="✍️ What customers love about you"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    ❓ What do people often misunderstand about your business?
                  </label>
                  <p className="text-gray-600 mb-3">A chance to clear it up!</p>
                  <input
                    type="text"
                    value={formData.misunderstandings}
                    onChange={(e) => updateFormData('misunderstandings', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-lg"
                    placeholder="✍️ Common misunderstandings"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    📉 Any launches that flopped?
                  </label>
                  <p className="text-gray-600 mb-3">Optional, but we learn more from flops than wins.</p>
                  <input
                    type="text"
                    value={formData.failedLaunches}
                    onChange={(e) => updateFormData('failedLaunches', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-lg"
                    placeholder="✍️ What didn't work (optional)"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    🎨 How would you describe your brand tone?
                  </label>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {[
                      'Fun & Casual',
                      'Bold & Loud',
                      'Professional',
                      'Warm & Personal',
                      'Other'
                    ].map((tone) => (
                      <button
                        key={tone}
                        onClick={() => updateFormData('brandTone', tone)}
                        className={`p-3 rounded-xl border-2 transition-all font-medium ${
                          formData.brandTone === tone
                            ? 'border-teal-500 bg-teal-50 text-teal-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        👉 {tone}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-2">
                    🎯 What's your biggest goal with Market-Inn?
                  </label>
                  <p className="text-gray-600 mb-3">Grow sales? Test offers? Get better insights?</p>
                  <input
                    type="text"
                    value={formData.biggestGoal}
                    onChange={(e) => updateFormData('biggestGoal', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-lg"
                    placeholder="✍️ Your main goal with us"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Final Screen */}
          {currentStep === 4 && (
            <div className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎉</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                You're all set!
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                That was gold. Thanks for sharing — this gives us everything we need to help you grow smarter, faster, and more on-brand.
              </p>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-12 py-4 rounded-xl font-bold text-xl hover:from-teal-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Setting up your account...
                  </span>
                ) : (
                  "👉 Let's get started!"
                )}
              </button>

              <div className="mt-8 grid grid-cols-3 gap-6 max-w-md mx-auto text-center">
                <div>
                  <div className="text-2xl font-bold text-teal-600">$50</div>
                  <div className="text-sm text-gray-600">Free Credit</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">2min</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          {currentStep < 4 && (
            <div className="flex items-center justify-between mt-12">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all ${
                  currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Previous
              </button>

              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`flex items-center px-8 py-3 rounded-xl font-semibold transition-all ${
                  canProceed()
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700 transform hover:scale-105 shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {currentStep === 3 ? 'Complete Setup' : 'Continue'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to Market-Inn! 🎉
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thanks for the detailed info about <strong>{formData.businessName}</strong>! 
                We're setting up your personalized dashboard and will email you at <strong>{formData.email}</strong> when it\'s ready.
              </p>

              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 mb-6">
                <p className="text-teal-700 font-medium text-sm">
                  🎁 Your $50 free credit is waiting for you!
                </p>
              </div>

              <Link
                to="/"
                onClick={closePopup}
                className="inline-flex items-center bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Back to Home
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #14b8a6, #10b981);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #14b8a6, #10b981);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default MultiStepSignup;