import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiClock, FiEye, FiHeart, FiMessageCircle, FiShare2, FiArrowLeft, FiMapPin, FiUsers, FiCalendar } from 'react-icons/fi';

const CampusLife = () => {
  const campusLifeNews = [
    {
      id: 1,
      title: 'New Student Center Opens with State-of-the-Art Facilities',
      excerpt: 'The campus unveils a modern student center featuring collaborative spaces, dining options, and recreational facilities designed for the next generation of learners.',
      fullContent: `The much-anticipated Student Center has finally opened its doors, marking a new era in campus life. This 50,000-square-foot facility represents a $25 million investment in student well-being and academic success.

The center features:
• Collaborative study spaces with flexible furniture
• Multiple dining options including international cuisine
• Recreation facilities with gaming areas and fitness equipment
• Quiet zones for focused study sessions
• Meeting rooms for student organizations
• Outdoor terrace with seating and green spaces

"This facility will transform how students interact, study, and socialize on campus," says Dr. Maria Rodriguez, Vice President of Student Affairs. "We've designed it based on extensive student feedback and modern educational research."

The center is open 24/7 during the academic year and includes sustainable features like solar panels and energy-efficient lighting.`,
      author: 'Campus News Team',
      time: '2 hours ago',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 1234,
      likes: 89,
      comments: 23,
      category: 'Campus Life',
      location: 'Main Campus',
      attendees: 500,
      date: 'March 15, 2024'
    },
    {
      id: 2,
      title: 'Annual Spring Festival Draws Record Attendance',
      excerpt: 'Students, faculty, and community members came together for the biggest Spring Festival in university history, featuring live music, food trucks, and cultural performances.',
      fullContent: `The 15th Annual Spring Festival exceeded all expectations with over 3,000 attendees, making it the largest campus event of the year. The festival celebrated diversity and community spirit through various activities and performances.

Highlights included:
• Live performances by student bands and dance groups
• International food festival with 20+ food trucks
• Cultural exhibitions showcasing student heritage
• Interactive art installations
• Wellness activities including yoga and meditation sessions
• Environmental awareness booths

"The festival truly represents what makes our campus special - diversity, creativity, and community," says festival organizer Sarah Chen. "It's amazing to see students from different backgrounds coming together to celebrate."

The event also raised $5,000 for student scholarships through donations and merchandise sales.`,
      author: 'Student Life Department',
      time: '1 day ago',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 892,
      likes: 156,
      comments: 34,
      category: 'Campus Life',
      location: 'University Quad',
      attendees: 3000,
      date: 'March 10, 2024'
    },
    {
      id: 3,
      title: 'New Campus Transportation System Launches',
      excerpt: 'The university introduces an eco-friendly shuttle system connecting all campus buildings, reducing carbon emissions and improving student mobility.',
      fullContent: `The new Campus Connect shuttle system has officially launched, providing free transportation between all major campus buildings and parking areas. This initiative aims to reduce carbon emissions and improve accessibility for all students.

System features:
• Electric-powered shuttles with zero emissions
• Real-time tracking through mobile app
• Accessible design for students with disabilities
• 15-minute intervals during peak hours
• Extended service during evening classes
• Integration with public transit system

"Transportation should never be a barrier to education," says Transportation Director James Wilson. "This system ensures all students can easily access campus resources regardless of where they park or live."

The system is expected to reduce campus traffic by 30% and eliminate 50 tons of CO2 emissions annually.`,
      author: 'Facilities Management',
      time: '3 days ago',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 743,
      likes: 234,
      comments: 18,
      category: 'Campus Life',
      location: 'Campus-wide',
      attendees: 'All Students',
      date: 'March 8, 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/news"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-4 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to News
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Campus Life</h1>
          <p className="text-gray-600">Discover the vibrant student life, facilities, and activities that make our campus special</p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={campusLifeNews[0].image} 
                  alt={campusLifeNews[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {campusLifeNews[0].category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiClock className="h-4 w-4 mr-1" />
                    {campusLifeNews[0].time}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {campusLifeNews[0].title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {campusLifeNews[0].fullContent}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FiMapPin className="h-4 w-4 mr-1" />
                      {campusLifeNews[0].location}
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="h-4 w-4 mr-1" />
                      {campusLifeNews[0].attendees} attendees
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="h-4 w-4 mr-1" />
                      {campusLifeNews[0].date}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {campusLifeNews[0].author}</span>
                  
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FiEye className="h-4 w-4" />
                      <span className="text-sm">{campusLifeNews[0].views}</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                    >
                      <FiHeart className="h-4 w-4" />
                      <span className="text-sm">{campusLifeNews[0].likes}</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 hover:text-blue-500 transition-colors"
                    >
                      <FiMessageCircle className="h-4 w-4" />
                      <span className="text-sm">{campusLifeNews[0].comments}</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-green-500 transition-colors"
                    >
                      <FiShare2 className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campusLifeNews.slice(1).map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiClock className="h-4 w-4 mr-1" />
                    {item.time}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {item.author}</span>
                  
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FiEye className="h-4 w-4" />
                      <span className="text-sm">{item.views}</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                    >
                      <FiHeart className="h-4 w-4" />
                      <span className="text-sm">{item.likes}</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 hover:text-blue-500 transition-colors"
                    >
                      <FiMessageCircle className="h-4 w-4" />
                      <span className="text-sm">{item.comments}</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
