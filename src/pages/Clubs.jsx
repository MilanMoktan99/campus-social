import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaTimes, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import Loading from '../components/Loading';
import ClubCard from '../components/ClubCard';
import { Link } from 'react-router-dom';

const Clubs = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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
      description: 'Express yourself through theater and dramatic arts.',
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
      description: 'Creating a sustainable campus and raising awareness.',
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
      description: 'For players who love basketball and want to improve skills.',
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
      description: 'Supporting international students and bridging cultures.',
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
      description: 'Creating beautiful music together through instruments and vocals.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=500',
      members: 78,
      category: 'Arts',
      established: '2005',
      nextMeeting: 'March 21, 2024',
      achievements: 31,
    },
    // Academic extra card
    {
      id: 7,
      name: 'Mathematics Society',
      description: 'A hub for math enthusiasts to solve problems and learn together.',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=500',
      members: 50,
      category: 'Academic',
      established: '2016',
      nextMeeting: 'March 23, 2024',
      achievements: 7,
    },
    // Social extra card
    {
      id: 8,
      name: 'Volunteer Network',
      description: 'Connecting students with community service opportunities.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500',
      members: 120,
      category: 'Social',
      established: '2014',
      nextMeeting: 'March 24, 2024',
      achievements: 10,
    },
  ];

  // Enhanced filter clubs based on category or search
  const filteredClubs = clubsData.filter((club) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      searchTerm === '' ||
      club.name.toLowerCase().includes(searchLower) ||
      club.description.toLowerCase().includes(searchLower) ||
      club.category.toLowerCase().includes(searchLower) ||
      club.established.includes(searchTerm) ||
      club.nextMeeting.toLowerCase().includes(searchLower);

    const matchesCategory = selectedCategory === 'all' || club.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm(''); // Clear search when category is selected
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'all';

  if (loading) {
    return <Loading message="Loading student clubs..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Student Clubs</h1>
          <p className="text-gray-600 text-lg">Join communities that share your interests and passions</p>
        </motion.div>

        {/* Enhanced Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${isSearchFocused ? 'text-indigo-500' : 'text-gray-400'} transition-colors`} />
              <input
                type="text"
                placeholder="Search clubs by name, description, category, or meeting date..."
                className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-200 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mb-4">
            <div className="flex items-center mb-3">
              <FaFilter className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="flex items-center justify-between bg-indigo-50 rounded-lg p-3"
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm text-indigo-700 font-medium">Active filters:</span>
                {searchTerm && (
                  <span className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded text-xs">
                    Search: "{searchTerm}"
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded text-xs">
                    Category: {selectedCategory}
                  </span>
                )}
              </div>
              <button
                onClick={clearSearch}
                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
              >
                <FaTimes className="h-3 w-3 mr-1" />
                Clear all
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <FaUsers className="h-4 w-4 mr-1" />
                <span>{filteredClubs.length} club{filteredClubs.length !== 1 ? 's' : ''} found</span>
              </div>
              {hasActiveFilters && (
                <div className="flex items-center">
                  <FaCalendarAlt className="h-4 w-4 mr-1" />
                  <span>Filtered results</span>
                </div>
              )}
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearSearch}
                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
              >
                Show all clubs
              </button>
            )}
          </div>
        </motion.div>

        {/* Clubs Grid with stagger animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredClubs.length > 0 ? (
            filteredClubs.map((club) => (
              <motion.div
                key={club.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <ClubCard club={club} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-full text-center py-12"
            >
              <div className="max-w-md mx-auto">
                <div className="text-gray-400 mb-4">
                  <FaSearch className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No clubs found</h3>
                <p className="text-gray-500 mb-4">
                  {hasActiveFilters 
                    ? "Try adjusting your search terms or category filter."
                    : "There are no clubs available at the moment."
                  }
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={clearSearch}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            to="/clubs/new"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Create New Club
          </Link>
          <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-medium">
            Browse by Category
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Clubs;
