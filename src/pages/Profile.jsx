import React from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiEdit, FiUser, FiMail } from "react-icons/fi";

const Profile = () => {
  const { user, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-32">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white relative">
          <div className="flex items-center gap-4">
            <img
              src={user?.photoURL || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold">
                {user?.displayName || "User"}
              </h1>
              <p className="text-sm opacity-90">
                {user?.email || "user@example.com"}
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="absolute top-6 right-6 flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FiLogOut />
            Logout
          </button>
        </div>

        {/* Main content */}
        <div className="p-8 space-y-6">
          {/* Account Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Account Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <FiUser className="text-gray-400" size={20} />
                <div>
                  <p className="text-gray-600 text-sm">Full Name</p>
                  <p className="font-medium">{user?.displayName || "User"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <FiMail className="text-gray-400" size={20} />
                <div>
                  <p className="text-gray-600 text-sm">Email Address</p>
                  <p className="font-medium">
                    {user?.email || "user@example.com"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Settings / Actions */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button className="flex items-center gap-3 bg-blue-50 text-blue-700 p-4 rounded-xl hover:bg-blue-100 transition-colors">
                <FiEdit />
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 bg-red-50 text-red-700 p-4 rounded-xl hover:bg-red-100 transition-colors"
              >
                <FiLogOut />
                Logout
              </button>
            </div>
          </div>

          {/* Placeholder for Activity / Stats */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="bg-gray-50 p-4 rounded-xl text-gray-500 text-sm">
              No recent activity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
