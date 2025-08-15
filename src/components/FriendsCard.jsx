import { motion } from 'framer-motion';
import { 
  FaUserPlus, FaCommentAlt, FaEllipsisH, FaCircle,
  FaUserCheck, FaUserTimes, FaBook, FaUserFriends,
  FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt
} from 'react-icons/fa';

const FriendsCard = ({ 
  friend, 
  variant = 'suggestion',
  onConnect, 
  onMessage,
  onAccept,
  onDecline,
  onStudyBuddy
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
    >
      {/* Profile Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={friend.avatar}
              alt={friend.name}
              className="w-12 h-12 rounded-full object-cover"
              loading="lazy"
            />
            {variant === 'friends' && friend.status === 'Online' && (
              <FaCircle className="absolute -bottom-0.5 -right-0.5 text-green-500 text-xs bg-white rounded-full" />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
              {friend.name}
            </h3>
            <p className="text-sm text-gray-500 flex items-center">
              <FaGraduationCap className="mr-1" />
              {friend.major} • {friend.year}
            </p>
            {variant === 'friends' && friend.status && (
              <p className="text-xs text-gray-400">{friend.status}</p>
            )}
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <FaEllipsisH className="h-4 w-4" />
        </button>
      </div>

      {/* Additional Info */}
      {variant === 'suggestions' && (
        <>
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <FaUserFriends className="mr-1" />
            {friend.mutualFriends} mutual friends • 
            <FaMapMarkerAlt className="ml-2 mr-1" />
            {friend.location || 'Campus'}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {friend.interests?.map((interest) => (
              <span key={interest} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                {interest}
              </span>
            ))}
          </div>
        </>
      )}

      {variant === 'friends' && friend.upcomingEvents && (
        <div className="mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <FaCalendarAlt className="mr-2 text-blue-500" />
            {friend.upcomingEvents[0]}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        {variant === 'suggestions' ? (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onConnect(friend.id)}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <FaUserPlus className="h-4 w-4" />
              <span>Add Friend</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onStudyBuddy(friend.id)}
              className="bg-purple-100 text-purple-700 py-2 px-4 rounded-lg hover:bg-purple-200 transition-colors flex items-center justify-center"
            >
              <FaBook className="mr-2 h-4 w-4" />
              <span>Study</span>
            </motion.button>
          </>
        ) : variant === 'requests' ? (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAccept(friend.id)}
              className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <FaUserCheck className="h-4 w-4" />
              <span>Accept</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onDecline(friend.id)}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
            >
              <FaUserTimes className="h-4 w-4" />
              <span>Decline</span>
            </motion.button>
          </>
        ) : (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onMessage(friend.id)}
              className="flex-1 bg-blue-100 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center space-x-2"
            >
              <FaCommentAlt className="h-4 w-4" />
              <span>Message</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onStudyBuddy(friend.id)}
              className="bg-green-100 text-green-700 py-2 px-4 rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center"
            >
              <FaBook className="mr-2 h-4 w-4" />
              <span>Study</span>
            </motion.button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default FriendsCard;