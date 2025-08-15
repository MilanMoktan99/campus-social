import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, FaFilter, FaUserFriends, FaStar,
  FaUserClock, FaBell, FaCog
} from 'react-icons/fa';
import FriendsCard from '../components/FriendsCard';

const FriendsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('suggestions');
  const [friendsData, setFriendsData] = useState({
    suggestions: [
      {
        id: 1,
        name: 'Emma Wilson',
        major: 'Computer Science',
        year: 'Junior',
        avatar: 'https://i.pravatar.cc/150?img=1',
        mutualFriends: 12,
        interests: ['AI', 'Web Dev', 'Gaming'],
        location: 'North Campus',
        status: 'Online'
      },
      {
        id: 2,
        name: 'Marcus Johnson',
        major: 'Business',
        year: 'Senior',
        avatar: 'https://i.pravatar.cc/150?img=2',
        mutualFriends: 8,
        interests: ['Finance', 'Sports'],
        location: 'South Dorms',
        status: 'In Class'
      },
      {
        id: 3,
        name: 'Sofia Garcia',
        major: 'Psychology',
        year: 'Sophomore',
        avatar: 'https://i.pravatar.cc/150?img=3',
        mutualFriends: 15,
        interests: ['Research', 'Art'],
        location: 'West Apartments',
        status: 'Online'
      },
      {
        id: 4,
        name: 'David Kim',
        major: 'Engineering',
        year: 'Freshman',
        avatar: 'https://i.pravatar.cc/150?img=4',
        mutualFriends: 5,
        interests: ['Robotics', 'Music'],
        location: 'East Village',
        status: 'Studying'
      },
      {
        id: 5,
        name: 'Aisha Patel',
        major: 'Pre-Med',
        year: 'Senior',
        avatar: 'https://i.pravatar.cc/150?img=5',
        mutualFriends: 20,
        interests: ['Medicine', 'Yoga'],
        location: 'International House',
        status: 'Online'
      }
    ],
    friends: [
      {
        id: 101,
        name: 'Sarah Mitchell',
        major: 'Art History',
        year: 'Senior',
        avatar: 'https://i.pravatar.cc/150?img=11',
        status: 'Online',
        upcomingEvents: ['Art Exhibition - Fri 3PM']
      },
      {
        id: 102,
        name: 'Alex Thompson',
        major: 'Mathematics',
        year: 'Junior',
        avatar: 'https://i.pravatar.cc/150?img=12',
        status: 'Offline',
        upcomingEvents: ['Math Workshop - Tue 2PM']
      },
      {
        id: 103,
        name: 'Maria Santos',
        major: 'Biology',
        year: 'Sophomore',
        avatar: 'https://i.pravatar.cc/150?img=13',
        status: 'Online',
        upcomingEvents: ['Lab Meeting - Mon 10AM']
      }
    ],
    requests: [
      {
        id: 201,
        name: 'Taylor Chen',
        major: 'Economics',
        year: 'Junior',
        avatar: 'https://i.pravatar.cc/150?img=21',
        mutualFriends: 7,
        status: 'Offline'
      },
      {
        id: 202,
        name: 'Olivia Brown',
        major: 'Political Science',
        year: 'Senior',
        avatar: 'https://i.pravatar.cc/150?img=22',
        mutualFriends: 4,
        status: 'Online'
      }
    ]
  });

  // Filter friends based on search term
  const filteredFriends = friendsData[activeTab === 'suggestions' ? 'suggestions' : 
                                    activeTab === 'friends' ? 'friends' : 'requests']
    .filter(friend => 
      friend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      friend.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (friend.interests && friend.interests.some(i => i.toLowerCase().includes(searchTerm.toLowerCase())))
    );

  // Action handlers
  const handleConnect = (id) => {
    const friend = friendsData.suggestions.find(f => f.id === id);
    setFriendsData(prev => ({
      ...prev,
      suggestions: prev.suggestions.filter(f => f.id !== id),
      friends: [...prev.friends, { ...friend, status: 'Online' }]
    }));
  };

  const handleMessage = (id) => {
    console.log(`Messaging friend ${id}`);
    // Implement actual messaging
  };

  const handleAcceptRequest = (id) => {
    const friend = friendsData.requests.find(f => f.id === id);
    setFriendsData(prev => ({
      ...prev,
      requests: prev.requests.filter(f => f.id !== id),
      friends: [...prev.friends, { ...friend, status: 'Online' }]
    }));
  };

  const handleDeclineRequest = (id) => {
    setFriendsData(prev => ({
      ...prev,
      requests: prev.requests.filter(f => f.id !== id)
    }));
  };

  const handleStudyBuddy = (id) => {
    console.log(`Setting up study session with ${id}`);
    // Implement study session logic
  };

  const tabs = [
    { id: 'suggestions', label: 'Suggestions', icon: FaUserFriends, count: friendsData.suggestions.length },
    { id: 'friends', label: 'My Friends', icon: FaUserFriends, count: friendsData.friends.length },
    { id: 'requests', label: 'Requests', icon: FaUserClock, count: friendsData.requests.length }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Campus Connect</h1>
          <p className="text-gray-600">Build your academic network</p>
        </div>
        <div className="flex gap-3">
          <button className="p-2 text-gray-500 hover:text-blue-600">
            <FaBell className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-blue-600">
            <FaCog className="h-5 w-5" />
          </button>
        </div>
      </motion.div>

      {/* Search and Tabs */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, major, or interest..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <FaFilter className="h-4 w-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium flex items-center gap-2 relative ${
                activeTab === tab.id
                  ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Friends Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredFriends.length > 0 ? (
          filteredFriends.map((friend) => (
            <FriendsCard
              key={`${activeTab}-${friend.id}`}
              friend={friend}
              variant={activeTab}
              onConnect={handleConnect}
              onMessage={handleMessage}
              onAccept={handleAcceptRequest}
              onDecline={handleDeclineRequest}
              onStudyBuddy={handleStudyBuddy}
            />
          ))
        ) : (
          <div className="col-span-2 text-center py-12 text-gray-500">
            <FaUserFriends className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium">No {activeTab} found</h3>
            <p className="mt-1">Try adjusting your search</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;