import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import {
  FiUser,
  FiCalendar,
  FiUsers,
  FiBookOpen,
  FiAward,
  FiSettings,
  FiBell,
} from "react-icons/fi";

const Dashboard = () => {
  const { currentUser } = useAppContext();

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Please log in to access your dashboard
          </h2>
          <p className="text-gray-600">
            You need to be authenticated to view this page.
          </p>
        </div>
      </div>
    );
  }

  const quickActions = [
    {
      title: "My Profile",
      description: "View and edit your profile information",
      icon: <FiUser className="text-blue-600" size={24} />,
      link: "/profile",
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
    },
    {
      title: "My Events",
      description: "Manage your registered events",
      icon: <FiCalendar className="text-green-600" size={24} />,
      link: "/events",
      color: "bg-green-50 hover:bg-green-100 border-green-200",
    },
    {
      title: "My Friends",
      description: "Connect with fellow students",
      icon: <FiUsers className="text-purple-600" size={24} />,
      link: "/friends",
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
    },
    {
      title: "My Clubs",
      description: "Manage your club memberships",
      icon: <FiBookOpen className="text-orange-600" size={24} />,
      link: "/clubs",
      color: "bg-orange-50 hover:bg-orange-100 border-orange-200",
    },
    {
      title: "Achievements",
      description: "View your accomplishments",
      icon: <FiAward className="text-yellow-600" size={24} />,
      link: "/success-stories",
      color: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200",
    },
    {
      title: "Settings",
      description: "Manage your account settings",
      icon: <FiSettings className="text-gray-600" size={24} />,
      link: "/profile",
      color: "bg-gray-50 hover:bg-gray-100 border-gray-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Header */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome back, {currentUser.displayName || "Student"}! 👋
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Your personal dashboard to manage your campus life
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <FiBell size={16} />
                You have 3 new notifications
              </span>
              <span className="flex items-center gap-2">
                <FiCalendar size={16} />2 upcoming events this week
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className={`block p-6 rounded-2xl border-2 transition-all duration-200 hover:scale-105 ${action.color}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {action.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">
                  Joined Photography Club
                </p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">
                  Registered for Tech Conference
                </p>
                <p className="text-sm text-gray-600">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">
                  Connected with Sarah Johnson
                </p>
                <p className="text-sm text-gray-600">3 days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
            <div className="text-gray-600">Friends</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">12</div>
            <div className="text-gray-600">Events</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
            <div className="text-gray-600">Clubs</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">8</div>
            <div className="text-gray-600">Achievements</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to explore more?</h3>
          <p className="text-blue-100 mb-6">
            Discover new events, join clubs, and connect with your campus
            community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse Events
            </Link>
            <Link
              to="/clubs"
              className="px-6 py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-colors"
            >
              Explore Clubs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
