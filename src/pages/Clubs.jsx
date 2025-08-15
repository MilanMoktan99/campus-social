// src/pages/Clubs.jsx
import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import Loading from '../components/Loading';
import ClubCard from '../components/ClubCard';
import { Link } from 'react-router-dom';

const Clubs = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const categories = ['all', 'Academic', 'Sports', 'Arts', 'Technology', 'Social', 'Cultural', 'Service'];

  const clubsData = [
    {
      id: 1,
      name: 'Computer Science Society',
      description: 'A community for computer science students to learn, collaborate, and build amazing projects together.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500',
      members: 234,
      category: 'Technology',
      established: '2015',
      nextMeeting: 'March 20, 2024',
      achievements: 12,
    },
    {
      id: 2,
      name: 'Drama Club',
      description: 'Express yourself through theater and dramatic arts. From Shakespeare to modern plays.',
      image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=500',
      members: 89,
      category: 'Arts',
      established: '2012',
      nextMeeting: 'March 18, 2024',
      achievements: 8,
    },
    {
      id: 3,
      name: 'Environmental Action Group',
      description: 'Working together to create a more sustainable campus and raise environmental awareness.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
      members: 156,
      category: 'Service',
      established: '2018',
      nextMeeting: 'March 22, 2024',
      achievements: 15,
    },
    {
      id: 4,
      name: 'Basketball Club',
      description: 'For players of all skill levels who love the game of basketball and want to improve their skills.',
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=500',
      members: 67,
      category: 'Sports',
      established: '2010',
      nextMeeting: 'March 19, 2024',
      achievements: 23,
    },
    {
      id: 5,
      name: 'International Students Association',
      description: 'Building bridges between cultures and supporting international students on campus.',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=500',
      members: 198,
      category: 'Cultural',
      established: '2008',
      nextMeeting: 'March 25, 2024',
      achievements: 19,
    },
    {
      id: 6,
      name: 'Music Ensemble',
      description: 'Creating beautiful music together through various instruments and vocal performances.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=500',
      members: 78,
      category: 'Arts',
      established: '2005',
      nextMeeting: 'March 21, 2024',
      achievements: 31,
    },
  ];

  const filteredClubs = clubsData.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <Loading message="Loading student clubs..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Student Clubs</h1>
          <p className="text-gray-600 text-lg">Join communities that share your interests and passions</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative w-full md:w-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search clubs..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Clubs Grid */}
        {filteredClubs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No clubs found matching your criteria.</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/clubs/new"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Create New Club
          </Link>
          <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-medium">
            Browse by Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
