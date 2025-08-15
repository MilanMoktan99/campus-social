import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiClock, FiEye, FiHeart, FiMessageCircle, FiShare2, FiArrowLeft, FiUsers, FiCalendar, FiTrendingUp, FiFeather } from 'react-icons/fi';

const Environment = () => {
  const environmentNews = [
    {
      id: 1,
      title: 'Campus Sustainability Initiative Reduces Carbon Footprint by 30%',
      excerpt: 'Thanks to student-led initiatives and administrative support, our campus has achieved significant environmental milestones this year.',
      fullContent: `The university has achieved a major environmental milestone, reducing its carbon footprint by 30% through comprehensive sustainability initiatives led by students and supported by administration.

Key Achievements:
• Solar panel installation on 8 campus buildings
• Complete transition to LED lighting across campus
• Implementation of comprehensive recycling program
• Introduction of electric vehicle charging stations
• Campus-wide composting initiative
• Water conservation systems in all facilities

Student-Led Projects:
• Green Roof Installation on Science Building
• Community Garden Expansion
• Bike Share Program Implementation
• Sustainable Food Sourcing for Dining Halls
• Environmental Education Workshops

"These achievements demonstrate our commitment to environmental stewardship and sustainable practices," says Dr. Lisa Park, Director of Sustainability. "Our students have been instrumental in driving these initiatives forward."

The university has also committed to achieving carbon neutrality by 2030, with plans for additional renewable energy projects and sustainable infrastructure development.`,
      author: 'Environmental Committee',
      time: '2 days ago',
      image: 'https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 743,
      likes: 234,
      comments: 18,
      category: 'Environment',
      reduction: '30%',
      projects: 12,
      participants: 2000
    },
    {
      id: 2,
      title: 'New Urban Forest Project Launches',
      excerpt: 'The university begins a comprehensive tree-planting initiative to create an urban forest and improve campus biodiversity.',
      fullContent: `The university has launched an ambitious Urban Forest Project aimed at creating a sustainable, biodiverse ecosystem on campus while providing educational opportunities for students and community members.

Project Goals:
• Plant 1,000 native trees across campus
• Create wildlife corridors and habitats
• Establish outdoor learning spaces
• Improve air quality and reduce urban heat
• Provide research opportunities for environmental studies

Tree Species Selected:
• Oak trees for wildlife habitat
• Maple trees for shade and fall color
• Fruit trees for community harvesting
• Native shrubs for biodiversity
• Pollinator-friendly plants

Community Involvement:
• Student volunteer planting days
• Faculty research projects
• Community education programs
• Citizen science initiatives
• Environmental monitoring

"This project will transform our campus into a living laboratory for environmental education," says Dr. James Wilson, Environmental Science Professor. "Students will have hands-on experience with urban forestry and conservation."

The project is expected to be completed over three years, with ongoing maintenance and monitoring by students and staff.`,
      author: 'Environmental Science Department',
      time: '1 week ago',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 567,
      likes: 189,
      comments: 23,
      category: 'Environment',
      trees: 1000,
      volunteers: 500,
      timeline: '3 years'
    },
    {
      id: 3,
      title: 'Zero Waste Challenge Exceeds Expectations',
      excerpt: 'Students and staff successfully divert 95% of campus waste from landfills through innovative recycling and composting programs.',
      fullContent: `The university's Zero Waste Challenge has exceeded all expectations, achieving a 95% waste diversion rate through innovative recycling, composting, and waste reduction programs.

Program Components:
• Comprehensive single-stream recycling
• Food waste composting in all dining facilities
• Electronic waste collection and recycling
• Textile and clothing donation programs
• Paper reduction initiatives
• Reusable container programs

Student Initiatives:
• Zero Waste Week awareness campaign
• Sustainable packaging alternatives
• Repair and reuse workshops
• Waste audit competitions
• Environmental art projects using recycled materials

Results:
• 95% waste diversion from landfills
• 50% reduction in single-use plastics
• 75% increase in composting participation
• 30% reduction in paper consumption
• 100% electronic waste recycling

"The success of this program shows what's possible when the entire campus community works together," says Sustainability Coordinator Maria Rodriguez. "We're setting an example for other institutions."

The program has received recognition from the Environmental Protection Agency and is being used as a model for other universities.`,
      author: 'Sustainability Office',
      time: '2 weeks ago',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 892,
      likes: 312,
      comments: 45,
      category: 'Environment',
      diversion: '95%',
      participants: 15000,
      reduction: '50%'
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Environmental News</h1>
          <p className="text-gray-600">Stay updated on sustainability initiatives, environmental projects, and green campus developments</p>
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
                  src={environmentNews[0].image} 
                  alt={environmentNews[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {environmentNews[0].category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiClock className="h-4 w-4 mr-1" />
                    {environmentNews[0].time}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {environmentNews[0].title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {environmentNews[0].fullContent}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FiFeather className="h-4 w-4 mr-1" />
                      {environmentNews[0].reduction} reduction
                    </div>
                    <div className="flex items-center">
                      <FiTrendingUp className="h-4 w-4 mr-1" />
                      {environmentNews[0].projects} projects
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="h-4 w-4 mr-1" />
                      {environmentNews[0].participants} participants
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {environmentNews[0].author}</span>
                  
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FiEye className="h-4 w-4" />
                      <span className="text-sm">{environmentNews[0].views}</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                    >
                      <FiHeart className="h-4 w-4" />
                      <span className="text-sm">{environmentNews[0].likes}</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 hover:text-blue-500 transition-colors"
                    >
                      <FiMessageCircle className="h-4 w-4" />
                      <span className="text-sm">{environmentNews[0].comments}</span>
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
          {environmentNews.slice(1).map((item, index) => (
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

export default Environment;
