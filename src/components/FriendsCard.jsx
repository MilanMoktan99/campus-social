import { motion } from 'framer-motion';
import { 
  FaUserPlus, FaUserTimes, FaUserCheck, FaUserMinus, FaCommentAlt, FaPaperPlane,
  FaEllipsisH, FaCircle, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaBook
} from 'react-icons/fa';

const FriendsCard = ({
  friend,
  variant,
  requestType,
  isPending,
  onAddFriend,
  onCancelRequest,
  onRemoveFriend,
  onNotInterested,
  onMessage,
  onAccept,
  onDecline,
  onStudyBuddy,
  windowWidth
}) => {
  const statusColors = {
    Online: 'bg-green-500',
    Offline: 'bg-gray-400',
    'In Class': 'bg-yellow-500',
    Studying: 'bg-purple-500',
    Pending: 'bg-blue-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <img
            src={friend.avatar}
            alt={friend.name}
            className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover"
          />
          {friend.status && (
            <FaCircle
              className={`absolute -bottom-0.5 -right-0.5 text-xs bg-white rounded-full ${
                friend.status === 'Online' ? 'text-green-500' : friend.status === 'In Class' ? 'text-yellow-500' : friend.status === 'Studying' ? 'text-purple-500' : 'text-gray-400'
              }`}
              title={friend.status}
            />
          )}
        </div>

        {/* Main Content */}
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors truncate text-sm sm:text-base">{friend.name}</h3>
          <p className="text-xs text-gray-500 truncate flex items-center">
            <FaGraduationCap className="mr-1" />
            {friend.major} • {friend.year}
          </p>
          {friend.mutualFriends && (
            <p className="text-xxs sm:text-xs text-gray-500 mt-1 truncate">{friend.mutualFriends} mutual friends</p>
          )}
          {friend.location && (
            <p className="text-xs text-gray-600 mt-1 truncate flex items-center">
              <FaMapMarkerAlt className="mr-1" /> {friend.location}
            </p>
          )}
          {friend.interests && (
            <div className="hidden sm:flex flex-wrap gap-2 mt-2">
              {friend.interests.slice(0, 3).map((interest, index) => (
                <span key={index} className="text-xxs sm:text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          )}
          {friend.upcomingEvents && (
            <div className="hidden sm:flex items-center text-xxs sm:text-xs text-gray-600 mt-2 truncate">
              <FaCalendarAlt className="mr-2 text-blue-500" /> {friend.upcomingEvents[0]}
            </div>
          )}

          {/* Actions below info */}
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {variant === 'suggestions' && (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onAddFriend(friend.id)}
                  className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs"
                >
                  <FaUserPlus className="h-3 w-3" />
                  {windowWidth > 400 ? 'Add Friend' : ''}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNotInterested(friend.id)}
                  className="flex items-center gap-1 bg-purple-100 hover:bg-purple-200 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                >
                  <FaBook className="h-3 w-3" />
                  {windowWidth > 400 ? 'Study' : ''}
                </motion.button>
              </>
            )}

            {variant === 'friends' && (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onMessage(friend.id)}
                  className="flex items-center gap-1 bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                >
                  <FaCommentAlt className="h-3 w-3" />
                  {windowWidth > 400 ? 'Message' : ''}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onStudyBuddy(friend.id)}
                  className="flex items-center gap-1 bg-green-100 hover:bg-green-200 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                >
                  <FaBook className="h-3 w-3" />
                  {windowWidth > 400 ? 'Study' : ''}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onRemoveFriend(friend.id)}
                  className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                >
                  <FaUserMinus className="h-3 w-3" />
                  {windowWidth > 400 ? 'Remove' : ''}
                </motion.button>
              </>
            )}

            {variant === 'requests' && (
              <>
                {requestType === 'sent' ? (
                  <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <FaPaperPlane className="h-3 w-3" />
                      Request Sent
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onCancelRequest(friend.id)}
                      className="flex items-center gap-1 bg-red-100 hover:bg-red-200 text-red-600 px-2 sm:px-3 py-1 rounded-full text-xs ml-auto sm:ml-0"
                    >
                      <FaUserTimes className="h-3 w-3" />
                      {windowWidth > 400 ? 'Cancel' : ''}
                    </motion.button>
                  </div>
                ) : (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onAccept(friend.id)}
                      className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs"
                    >
                      <FaUserCheck className="h-3 w-3" />
                      {windowWidth > 400 ? 'Accept' : ''}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onDecline(friend.id)}
                      className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                    >
                      <FaUserTimes className="h-3 w-3" />
                      {windowWidth > 400 ? 'Decline' : ''}
                    </motion.button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FriendsCard;