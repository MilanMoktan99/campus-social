// src/components/ClubCard.jsx
import React from 'react';
import { Users, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const categoryColors = {
  Academic: 'bg-blue-600 text-white',
  Sports: 'bg-green-600 text-white',
  Arts: 'bg-pink-600 text-white',
  Technology: 'bg-purple-600 text-white',
  Social: 'bg-yellow-500 text-white',
  Cultural: 'bg-red-600 text-white',
  Service: 'bg-teal-600 text-white',
};

const ClubCard = ({ club }) => {
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

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
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
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2" />
            <span>{members} members</span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2" />
            <span>Next meeting: {nextMeeting}</span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Award size={16} className="mr-2" />
            <span>{achievements} achievements</span>
          </div>
        </div>

        <div className="text-xs text-gray-500 mb-4">Established {established}</div>

        <div className="flex space-x-2">
          <Link
            to={`/clubs/${id}`}
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-center"
          >
            View Details
          </Link>
          <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium">
            Join Club
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
