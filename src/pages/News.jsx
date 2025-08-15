import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiClock,
  FiEye,
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiTrendingUp,
} from "react-icons/fi";
import { newsItems, trendingTopics } from "../assets/assets";

const News = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-30">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Campus News
            </h1>
            <p className="text-gray-600">
              Stay updated with the latest happenings around campus
            </p>
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
                      <Link
                        to={`/news/${
                          item.category === "Campus Life"
                            ? "campus-life"
                            : item.category.toLowerCase()
                        }`}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition-colors cursor-pointer"
                      >
                        {item.category}
                      </Link>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FiClock className="h-4 w-4 mr-1" />
                        {item.time}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      <Link
                        to={`/news/${
                          item.category === "Campus Life"
                            ? "campus-life"
                            : item.category.toLowerCase()
                        }`}
                      >
                        {item.title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        By {item.author}
                      </span>

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
              Have campus news to share? Submit your story and help keep the
              community informed.
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
