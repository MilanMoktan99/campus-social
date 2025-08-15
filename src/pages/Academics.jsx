import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiClock, FiEye, FiHeart, FiMessageCircle, FiShare2, FiArrowLeft, FiBook, FiUsers, FiCalendar } from 'react-icons/fi';

const Academics = () => {
  const academicsNews = [
    {
      id: 1,
      title: 'Spring Semester Registration Now Open',
      excerpt: 'Students can now register for spring semester courses. Priority registration begins Monday with expanded course offerings in popular majors.',
      fullContent: `The university has officially opened registration for the Spring 2024 semester, offering students an expanded selection of courses and new academic programs designed to meet evolving industry demands.

This semester introduces several new initiatives:
• 25 new courses across various departments
• Expanded online learning options with hybrid delivery
• New certificate programs in emerging fields
• Enhanced internship and co-op opportunities
• Improved academic advising system with AI-powered recommendations

Registration Timeline:
• Priority Registration (Seniors & Graduate Students): March 18-20
• Junior Registration: March 21-22
• Sophomore Registration: March 25-26
• Freshman Registration: March 27-28
• Open Registration: March 29 onwards

New Programs Available:
• Data Science and Analytics Certificate
• Sustainable Business Practices Minor
• Digital Marketing Specialization
• Cybersecurity Fundamentals Program
• Global Health Studies Track

"These new offerings reflect our commitment to preparing students for the rapidly changing job market," says Dr. Jennifer Martinez, Dean of Academic Affairs. "We're ensuring our curriculum stays relevant and competitive."

Students are encouraged to meet with their academic advisors to plan their course schedules and explore new opportunities.`,
      author: 'Academic Affairs',
      time: '1 day ago',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 2156,
      likes: 67,
      comments: 45,
      category: 'Academics',
      courses: 25,
      students: 15000,
      deadline: 'March 29, 2024'
    },
    {
      id: 2,
      title: 'New Study Abroad Programs Announced',
      excerpt: 'The university expands its international education opportunities with new partnerships in Europe, Asia, and South America.',
      fullContent: `The Office of International Education has announced an exciting expansion of study abroad programs, offering students unprecedented opportunities to gain global experience and cultural competency.

New Program Destinations:
• Barcelona, Spain - Business and Economics
• Tokyo, Japan - Technology and Innovation
• Buenos Aires, Argentina - Latin American Studies
• Berlin, Germany - Arts and Humanities
• Singapore - Engineering and Technology
• Cape Town, South Africa - Environmental Studies

Program Features:
• Semester-long and summer session options
• Internship opportunities with local companies
• Cultural immersion activities and language courses
• Academic credit transfer to home institution
• Financial aid and scholarship opportunities
• Pre-departure orientation and support services

"Study abroad experiences are transformative for students," says Dr. Robert Kim, Director of International Education. "These new programs will help our students develop global perspectives and cross-cultural skills that are essential in today's interconnected world."

Applications for Fall 2024 programs are now open, with priority consideration given to early applicants.`,
      author: 'International Education Office',
      time: '2 days ago',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 1342,
      likes: 123,
      comments: 28,
      category: 'Academics',
      destinations: 6,
      students: 500,
      deadline: 'April 15, 2024'
    },
    {
      id: 3,
      title: 'Academic Excellence Awards Ceremony',
      excerpt: 'Annual ceremony recognizes outstanding students, faculty, and academic achievements across all departments.',
      fullContent: `The university celebrated academic excellence at the annual awards ceremony, recognizing outstanding achievements by students and faculty across all departments.

Award Categories and Recipients:
• Outstanding Undergraduate Student: Maria Santos (Computer Science)
• Outstanding Graduate Student: David Chen (Biomedical Engineering)
• Faculty Excellence in Teaching: Dr. Sarah Williams (Psychology)
• Faculty Excellence in Research: Dr. Michael Johnson (Physics)
• Department of the Year: School of Engineering
• Innovation in Education: Digital Learning Initiative
• Community Service Award: Environmental Science Club
• International Student Achievement: Ahmed Hassan (Business)

Special Recognition:
• 150 students with 4.0 GPA
• 25 faculty members with outstanding research publications
• 10 departments achieving 100% student satisfaction
• 5 innovative teaching methods implemented

"The achievements we celebrate today represent the best of our academic community," says President Dr. Elizabeth Thompson. "These awards recognize not just academic excellence, but also the character, leadership, and innovation that define our university."

The ceremony also included the announcement of new scholarships and funding opportunities for the upcoming academic year.`,
      author: 'Office of the President',
      time: '1 week ago',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: 892,
      likes: 234,
      comments: 56,
      category: 'Academics',
      awards: 8,
      students: 150,
      date: 'March 5, 2024'
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Academic News</h1>
          <p className="text-gray-600">Stay informed about academic programs, registration updates, and educational initiatives</p>
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
                  src={academicsNews[0].image} 
                  alt={academicsNews[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    {academicsNews[0].category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiClock className="h-4 w-4 mr-1" />
                    {academicsNews[0].time}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {academicsNews[0].title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {academicsNews[0].fullContent}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FiBook className="h-4 w-4 mr-1" />
                      {academicsNews[0].courses} new courses
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="h-4 w-4 mr-1" />
                      {academicsNews[0].students} students
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="h-4 w-4 mr-1" />
                      Deadline: {academicsNews[0].deadline}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {academicsNews[0].author}</span>
                  
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FiEye className="h-4 w-4" />
                      <span className="text-sm">{academicsNews[0].views}</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                    >
                      <FiHeart className="h-4 w-4" />
                      <span className="text-sm">{academicsNews[0].likes}</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 hover:text-blue-500 transition-colors"
                    >
                      <FiMessageCircle className="h-4 w-4" />
                      <span className="text-sm">{academicsNews[0].comments}</span>
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
          {academicsNews.slice(1).map((item, index) => (
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
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiClock className="h-4 w-4 mr-1" />
                    {item.time}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
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

export default Academics;
