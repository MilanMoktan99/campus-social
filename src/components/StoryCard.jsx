import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
 

const StoryCard = ({ story }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all animate-slide-in"
    >
      <div className="flex items-start gap-4">
        <div className="relative">
          <img
            src={story.avatar}
            alt={story.name}
            className="w-16 h-16 rounded-xl object-cover"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-gray-900 font-semibold truncate">{story.name}</h3>
          <p className="text-sm text-gray-600 truncate">{story.title}</p>
          <p className="text-xs text-gray-500 mt-1 truncate">{story.degree} • {story.institution} • {story.year}</p>

          {story.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {story.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xxs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-base md:text-lg text-gray-800 mt-3 leading-relaxed">{story.summary}</p>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-gray-500">{story.location}</div>
            <Link
              to={`/success-stories/${story.id}`}
              className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
            >
              Read story
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default StoryCard