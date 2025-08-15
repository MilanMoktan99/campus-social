import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ClubCard from '../components/ClubCard';
import { clubsData } from '../data/clubsData';

const ClubDetails = () => {
  const { id } = useParams();
  const club = clubsData.find((c) => c.id === parseInt(id));

  if (!club) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Club not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/clubs"
          className="text-indigo-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to Clubs
        </Link>
        <ClubCard club={club} showViewDetails={false} />
      </div>
    </div>
  );
};

export default ClubDetails;
