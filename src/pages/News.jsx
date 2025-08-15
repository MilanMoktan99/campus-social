import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiEye, FiHeart, FiMessageCircle, FiShare2, FiTrendingUp } from 'react-icons/fi';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'New Student Center Opens with State-of-the-Art Facilities',
      excerpt: 'The campus unveils a modern student center featuring collaborative spaces, dining options, and recreational facilities designed for the next generation of learners.',
      author: 'Campus News Team',
      time: '2 hours ago',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 1234,
      likes: 89,
      comments: 23,
      category: 'Campus Life'
    },
    {
      id: 2,
      title: 'Research Team Wins National Innovation Award',
      excerpt: 'Our computer science department\'s AI research team has been recognized nationally for their groundbreaking work in machine learning applications.',
      author: 'Dr. Sarah Johnson',
      time: '5 hours ago',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 892,
      likes: 156,
      comments: 34,
      category: 'Research'
    },
    {
      id: 3,
      title: 'Spring Semester Registration Now Open',
      excerpt: 'Students can now register for spring semester courses. Priority registration begins Monday with expanded course offerings in popular majors.',
      author: 'Academic Affairs',
      time: '1 day ago',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 2156,
      likes: 67,
      comments: 45,
      category: 'Academics'
    },
    {
      id: 4,
      title: 'Campus Sustainability Initiative Reduces Carbon Footprint by 30%',
      excerpt: 'Thanks to student-led initiatives and administrative support, our campus has achieved significant environmental milestones this year.',
      author: 'Environmental Committee',
      time: '2 days ago',
      image: 'https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 743,
      likes: 234,
      comments: 18,
      category: 'Environment'
    }
  ];

  const trendingTopics = [
    { topic: 'Final Exams', posts: 45 },
    { topic: 'Spring Break', posts: 32 },
    { topic: 'Career Fair', posts: 28 },
    { topic: 'Study Groups', posts: 19 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 padding-top: 100px;">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Campus News</h1>
            <p className="text-gray-600">Stay updated with the latest happenings around campus</p>
          </motion.div>

          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FiClock className="h-4 w-4 mr-1" />
                        {item.time}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h2>
                    
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
              </motion.article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-100"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <FiTrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              Trending Topics
            </h3>
            <div className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <motion.div
                  key={topic.topic}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex justify-between items-center p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group"
                >
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                    #{topic.topic}
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {topic.posts} posts
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white"
          >
            <h3 className="text-lg font-bold mb-3">Share Your Story</h3>
            <p className="text-purple-100 mb-4 text-sm">
              Have campus news to share? Submit your story and help keep the community informed.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-shadow duration-300"
            >
              Submit Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default News;
