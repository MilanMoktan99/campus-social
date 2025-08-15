// src/components/ClubCard.jsx
import React, { useState, useEffect } from 'react';
import { FaUsers, FaCalendarAlt, FaAward, FaCheck, FaHeart, FaUserPlus, FaTimes } from 'react-icons/fa'; // replaced lucide-react
import { Link } from 'react-router-dom';
import Notification from './Notification';

const categoryColors = {
  Academic: 'bg-blue-600 text-white',
  Sports: 'bg-green-600 text-white',
  Arts: 'bg-pink-600 text-white',
  Technology: 'bg-purple-600 text-white',
  Social: 'bg-yellow-500 text-white',
  Cultural: 'bg-red-600 text-white',
  Service: 'bg-teal-600 text-white',
};

const ClubCard = ({ club, showViewDetails = true }) => {
  const [isJoined, setIsJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  
  const {
    id,
    name,
    description,
    image,
    members,
    category,
    established,
    nextMeeting,
    achievements,
  } = club;

  const badgeClass = categoryColors[category] || 'bg-gray-500 text-white';

  // Initialize joined state from localStorage so it persists across pages
  useEffect(() => {
    try {
      const savedJoinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
      setIsJoined(Array.isArray(savedJoinedClubs) && savedJoinedClubs.includes(id));
    } catch (e) {
      // Fallback if parsing fails
      setIsJoined(false);
    }
  }, [id]);

  const persistJoinedState = () => {
    try {
      const savedJoinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
      if (Array.isArray(savedJoinedClubs)) {
        if (!savedJoinedClubs.includes(id)) {
          localStorage.setItem('joinedClubs', JSON.stringify([...savedJoinedClubs, id]));
        }
      } else {
        localStorage.setItem('joinedClubs', JSON.stringify([id]));
      }
    } catch (e) {
      localStorage.setItem('joinedClubs', JSON.stringify([id]));
    }
  };

  const handleJoinClub = async () => {
    if (isJoined) {
      // Already joined: do nothing (no leave option as per UX)
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsJoined(true);
      setIsLoading(false);
      persistJoinedState();

      // Show success notification
      setNotificationMessage(`🎉 Welcome to ${name}! You're now part of our community. Check your email for meeting details and upcoming events.`);
      setShowNotification(true);
    }, 1000);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      <Notification 
        message={notificationMessage}
        type="success"
        isVisible={showNotification}
        onClose={closeNotification}
      />
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{name}</h3>
        <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">{description}</p>

        <div className="space-y-3 mb-5">
          <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
            <FaUsers size={16} className="mr-3 text-indigo-500" />
            <span className="font-medium">{members} members</span>
          </div>

          <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
            <FaCalendarAlt size={16} className="mr-3 text-green-500" />
            <span className="font-medium">Next meeting: {nextMeeting}</span>
          </div>

          <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
            <FaAward size={16} className="mr-3 text-yellow-500" />
            <span className="font-medium">{achievements} achievements</span>
          </div>
        </div>

        <div className="text-xs text-gray-500 mb-5 bg-blue-50 px-3 py-2 rounded-lg inline-block">
          🏛️ Established {established}
        </div>

        <div className={`flex ${showViewDetails ? 'space-x-3' : ''}`}>
          {showViewDetails && (
            <Link
              to={`/clubs/${id}`}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 font-medium text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View Details
            </Link>
          )}

          {showViewDetails ? (
            <button 
              onClick={handleJoinClub}
              disabled={isJoined || isLoading}
              className={`flex-1 py-3 px-4 rounded-lg transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                isJoined 
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white cursor-default'
                  : isLoading 
                  ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white cursor-not-allowed' 
                  : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Joining...</span>
                </>
              ) : isJoined ? (
                <>
                  <FaCheck size={16} />
                  <span>Joined</span>
                </>
              ) : (
                <>
                  <FaUserPlus size={16} />
                  <span>Join Club</span>
                </>
              )}
            </button>
          ) : (
            isJoined ? (
              <Link
                to="/clubs"
                className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-4 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <FaTimes size={16} />
                <span>Back to Clubs</span>
              </Link>
            ) : (
              <button 
                onClick={handleJoinClub}
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                  isLoading 
                    ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Joining...</span>
                  </>
                ) : (
                  <>
                    <FaUserPlus size={16} />
                    <span>Join Club</span>
                  </>
                )}
              </button>
            )
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default ClubCard;
