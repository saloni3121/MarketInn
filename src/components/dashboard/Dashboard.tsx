import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { BarChart3, User, Mail, Building, Phone, MapPin } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, profile, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Market-Inn</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {profile?.full_name || user?.email}</span>
              <button
                onClick={handleSignOut}
                className="text-gray-500 hover:text-gray-700 font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Market-Inn Beta!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for joining our beta program. We're excited to help you get insights from real users.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Your Profile</h2>
              <p className="text-gray-600">Beta member since {new Date(profile?.created_at || '').toLocaleDateString()}</p>
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

        {/* Beta Status */}
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">🎉</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            You're in the Beta!
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            We'll be in touch soon with early access to our survey platform. 
            Keep an eye on your inbox for updates and exclusive beta features.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free first question</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Early access</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Priority support</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;