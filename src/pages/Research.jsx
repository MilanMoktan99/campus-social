import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiClock, FiEye, FiHeart, FiMessageCircle, FiShare2, FiArrowLeft, FiAward, FiUsers, FiCalendar, FiTrendingUp } from 'react-icons/fi';

const Research = () => {
  const researchNews = [
    {
      id: 1,
      title: 'Research Team Wins National Innovation Award',
      excerpt: 'Our computer science department\'s AI research team has been recognized nationally for their groundbreaking work in machine learning applications.',
      fullContent: `The university's Computer Science Department has achieved a major milestone as their AI research team received the prestigious National Innovation Award for their groundbreaking work in machine learning applications.

The winning project, "Adaptive Learning Systems for Personalized Education," has revolutionized how educational content is delivered to students with diverse learning needs. The research team, led by Dr. Sarah Johnson, developed an AI system that adapts learning materials in real-time based on individual student performance and preferences.

Key achievements:
• Developed algorithms that improve learning outcomes by 40%
• Created adaptive assessment systems for personalized testing
• Implemented real-time feedback mechanisms for educators
• Published 15 peer-reviewed papers in top-tier journals
• Secured $2.5 million in research funding

"This award recognizes not just our technical achievements, but our commitment to making education more accessible and effective for all students," says Dr. Johnson. "Our research has the potential to transform how we approach learning at every level."

The team's work has already been adopted by three major educational institutions and is being considered for implementation in public school systems across the state.`,
      author: 'Dr. Sarah Johnson',
      time: '5 hours ago',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 892,
      likes: 156,
      comments: 34,
      category: 'Research',
      award: 'National Innovation Award',
      teamSize: 8,
      funding: '$2.5M',
      publications: 15
    },
    {
      id: 2,
      title: 'Breakthrough in Renewable Energy Storage',
      excerpt: 'Engineering researchers develop new battery technology that could revolutionize renewable energy storage and electric vehicle capabilities.',
      fullContent: `A team of engineering researchers has made a significant breakthrough in renewable energy storage technology, developing a new battery system that could transform the renewable energy sector and electric vehicle industry.

The research, led by Dr. Michael Chen, focuses on developing solid-state batteries with improved energy density, safety, and lifespan. The new technology addresses key limitations of current lithium-ion batteries, including thermal runaway risks and limited cycle life.

Research highlights:
• 50% increase in energy density compared to conventional batteries
• Enhanced safety with no risk of thermal runaway
• Extended battery life with 10,000+ charge cycles
• Faster charging capabilities (80% in 15 minutes)
• Environmentally friendly materials and manufacturing process

"This breakthrough could accelerate the transition to renewable energy and electric vehicles," says Dr. Chen. "Our technology addresses the major concerns that have been holding back widespread adoption."

The research has attracted interest from major automotive manufacturers and energy companies, with several partnerships already in development.`,
      author: 'Dr. Michael Chen',
      time: '1 day ago',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 1567,
      likes: 234,
      comments: 67,
      category: 'Research',
      award: 'Engineering Excellence Award',
      teamSize: 12,
      funding: '$3.2M',
      publications: 8
    },
    {
      id: 3,
      title: 'Medical Research Advances Cancer Treatment',
      excerpt: 'Biomedical researchers discover new therapeutic approach that shows promising results in early-stage clinical trials for multiple cancer types.',
      fullContent: `The university's Biomedical Research Center has made significant progress in cancer treatment research, developing a novel therapeutic approach that has shown promising results in early-stage clinical trials.

The research team, led by Dr. Emily Rodriguez, has developed a targeted immunotherapy treatment that activates the body's natural immune response to fight cancer cells. The treatment has been tested on multiple cancer types including breast, lung, and colorectal cancer.

Clinical trial results:
• 60% response rate in early-stage trials
• Minimal side effects compared to traditional chemotherapy
• Improved quality of life for patients
• Potential for combination therapy with existing treatments
• Personalized treatment approach based on genetic profiling

"This research represents a paradigm shift in how we approach cancer treatment," says Dr. Rodriguez. "By harnessing the body's own immune system, we can achieve better outcomes with fewer side effects."

The research has received FDA approval for expanded clinical trials and has attracted significant interest from pharmaceutical companies.`,
      author: 'Dr. Emily Rodriguez',
      time: '3 days ago',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 2341,
      likes: 445,
      comments: 89,
      category: 'Research',
      award: 'Medical Research Excellence',
      teamSize: 15,
      funding: '$4.1M',
      publications: 22
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Research & Innovation</h1>
          <p className="text-gray-600">Discover groundbreaking research, awards, and innovations from our academic community</p>
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
                  src={researchNews[0].image} 
                  alt={researchNews[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {researchNews[0].category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiClock className="h-4 w-4 mr-1" />
                    {researchNews[0].time}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {researchNews[0].title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {researchNews[0].fullContent}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FiAward className="h-4 w-4 mr-1" />
                      {researchNews[0].award}
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="h-4 w-4 mr-1" />
                      {researchNews[0].teamSize} researchers
                    </div>
                    <div className="flex items-center">
                      <FiTrendingUp className="h-4 w-4 mr-1" />
                      {researchNews[0].funding} funding
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {researchNews[0].author}</span>
                  
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FiEye className="h-4 w-4" />
                      <span className="text-sm">{researchNews[0].views}</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                    >
                      <FiHeart className="h-4 w-4" />
                      <span className="text-sm">{researchNews[0].likes}</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 hover:text-blue-500 transition-colors"
                    >
                      <FiMessageCircle className="h-4 w-4" />
                      <span className="text-sm">{researchNews[0].comments}</span>
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
          {researchNews.slice(1).map((item, index) => (
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
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiClock className="h-4 w-4 mr-1" />
                    {item.time}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
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

export default Research;
