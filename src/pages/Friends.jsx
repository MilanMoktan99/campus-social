import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, FaFilter, FaUserFriends, 
  FaUserClock, FaBell, FaCog, FaTimes,
  FaChevronDown, FaChevronUp,
  FaPaperPlane, FaInbox
} from 'react-icons/fa';
import FriendsCard from '../components/FriendsCard';

const FriendsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('suggestions');
  const [activeRequestTab, setActiveRequestTab] = useState('received');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    status: '',
    year: '',
    location: ''
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Complete dataset with pending requests
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
        name: 'James Rodriguez',
        major: 'Electrical Engineering',
        year: 'Sophomore',
        avatar: 'https://i.pravatar.cc/150?img=5',
        mutualFriends: 8,
        interests: ['Robotics', 'IoT', 'Cybersecurity'],
        location: 'South Dorms',
        status: 'Studying'
      },
      {
        id: 3,
        name: 'Sophia Chen',
        major: 'Biology',
        year: 'Senior',
        avatar: 'https://i.pravatar.cc/150?img=9',
        mutualFriends: 5,
        interests: ['Genetics', 'Neuroscience', 'Yoga'],
        location: 'West Apartments',
        status: 'Offline'
      },
      {
        id: 4,
        name: 'Alex Thompson',
        major: 'Physics',
        year: 'Freshman',
        avatar: 'https://i.pravatar.cc/150?img=12',
        mutualFriends: 3,
        interests: ['Quantum Physics', 'Astronomy', 'Math'],
        location: 'North Campus',
        status: 'Online'
      },
      {
        id: 5,
        name: 'Maria Garcia',
        major: 'Chemistry',
        year: 'Senior',
        avatar: 'https://i.pravatar.cc/150?img=16',
        mutualFriends: 9,
        interests: ['Organic Chemistry', 'Lab Research', 'Tennis'],
        location: 'East Village',
        status: 'Studying'
      },
      {
        id: 6,
        name: 'Ryan Lee',
        major: 'Computer Engineering',
        year: 'Junior',
        avatar: 'https://i.pravatar.cc/150?img=20',
        mutualFriends: 6,
        interests: ['Hardware', 'Software', 'Gaming'],
        location: 'South Dorms',
        status: 'Offline'
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
        upcomingEvents: ['Art Exhibition - Fri 3PM'],
        location: 'East Village'
      },
      {
        id: 102,
        name: 'David Kim',
        major: 'Mathematics',
        year: 'Junior',
        avatar: 'https://i.pravatar.cc/150?img=15',
        status: 'In Class',
        upcomingEvents: ['Math Club - Wed 5PM'],
        location: 'North Campus'
      },
      {
        id: 103,
        name: 'Olivia Martinez',
        major: 'Psychology',
        year: 'Freshman',
        avatar: 'https://i.pravatar.cc/150?img=19',
        status: 'Studying',
        upcomingEvents: ['Study Group - Mon 2PM'],
        location: 'International House'
      }
    ],
    requests: {
      incoming: [
        {
          id: 201,
          name: 'Taylor Chen',
          major: 'Economics',
          year: 'Junior',
          avatar: 'https://i.pravatar.cc/150?img=21',
          mutualFriends: 7,
          status: 'Offline',
          location: 'South Dorms'
        },
        {
          id: 202,
          name: 'Alex Johnson',
          major: 'Political Science',
          year: 'Senior',
          avatar: 'https://i.pravatar.cc/150?img=25',
          mutualFriends: 3,
          status: 'Online',
          location: 'West Apartments'
        }
      ],
      outgoing: [
        {
          id: 301,
          name: 'Michael Scott',
          major: 'Business',
          year: 'Senior',
          avatar: 'https://i.pravatar.cc/150?img=31',
          mutualFriends: 3,
          status: 'Online',
          location: 'East Village'
        },
        {
          id: 302,
          name: 'Lisa Park',
          major: 'Environmental Science',
          year: 'Sophomore',
          avatar: 'https://i.pravatar.cc/150?img=35',
          mutualFriends: 4,
          status: 'Studying',
          location: 'North Campus'
        }
      ]
    }
  });

  // Filter options
  const statusOptions = ['Online', 'Offline', 'In Class', 'Studying'];
  const yearOptions = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
  const locationOptions = ['North Campus', 'South Dorms', 'West Apartments', 'East Village', 'International House'];

  // Filter function
  const getFilteredFriends = () => {
    let friendsList = [];
    if (activeTab === 'suggestions') {
      friendsList = friendsData.suggestions;
    } else if (activeTab === 'friends') {
      friendsList = friendsData.friends;
    } else if (activeTab === 'requests') {
      if (activeRequestTab === 'received') {
        friendsList = friendsData.requests.incoming;
      } else {
        friendsList = friendsData.requests.outgoing;
      }
    }

    return friendsList.filter(friend => {
      const searchMatch = 
        friend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        friend.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (friend.interests?.some(i => i.toLowerCase().includes(searchTerm.toLowerCase()))) ||
        (friend.location?.toLowerCase().includes(searchTerm.toLowerCase()));

      const filterMatch = 
        (!filters.status || friend.status === filters.status) &&
        (!filters.year || friend.year === filters.year) &&
        (!filters.location || friend.location === filters.location);

      return searchMatch && filterMatch;
    });
  };

  const filteredFriends = getFilteredFriends();

  // Action handlers
  const handleAddFriend = (id) => {
    const friend = friendsData.suggestions.find(f => f.id === id);
    setFriendsData(prev => ({
      ...prev,
      suggestions: prev.suggestions.filter(f => f.id !== id),
      requests: {
        ...prev.requests,
        outgoing: [...prev.requests.outgoing, { ...friend, status: 'Pending' }]
      }
    }));
  };

  const handleCancelRequest = (id) => {
    const friend = friendsData.requests.outgoing.find(f => f.id === id);
    setFriendsData(prev => ({
      ...prev,
      requests: {
        ...prev.requests,
        outgoing: prev.requests.outgoing.filter(f => f.id !== id)
      },
      suggestions: [...prev.suggestions, { ...friend }]
    }));
  };

  const handleRemoveFriend = (id) => {
    const friend = friendsData.friends.find(f => f.id === id);
    setFriendsData(prev => ({
      ...prev,
      friends: prev.friends.filter(f => f.id !== id),
      suggestions: [...prev.suggestions, { ...friend }]
    }));
  };

  const handleNotInterested = (id) => {
    setFriendsData(prev => ({
      ...prev,
      suggestions: prev.suggestions.filter(f => f.id !== id)
    }));
  };

  const handleMessage = (id) => {
    console.log(`Message friend with id: ${id}`);
    // In a real app, this would open a chat with the friend
  };

  const handleAcceptRequest = (id) => {
    const friend = friendsData.requests.incoming.find(f => f.id === id);
    setFriendsData(prev => ({
      ...prev,
      requests: {
        ...prev.requests,
        incoming: prev.requests.incoming.filter(f => f.id !== id)
      },
      friends: [...prev.friends, { ...friend }]
    }));
  };

  const handleDeclineRequest = (id) => {
    setFriendsData(prev => ({
      ...prev,
      requests: {
        ...prev.requests,
        incoming: prev.requests.incoming.filter(f => f.id !== id)
      }
    }));
  };

  const handleStudyBuddy = (id) => {
    console.log(`Add friend with id: ${id} as study buddy`);
    // In a real app, this would mark the friend as a study buddy
  };

  // UI helpers
  const clearSearch = () => setSearchTerm('');
  const clearFilters = () => setFilters({ status: '', year: '', location: '' });
  const handleFilterChange = (type, value) => {
    setFilters(prev => ({ ...prev, [type]: prev[type] === value ? '' : value }));
  };

  const tabs = [
    { id: 'suggestions', label: 'Suggestions', icon: FaUserFriends, count: friendsData.suggestions.length },
    { id: 'friends', label: 'My Friends', icon: FaUserFriends, count: friendsData.friends.length },
    { id: 'requests', label: 'Requests', icon: FaUserClock, count: friendsData.requests.incoming.length + friendsData.requests.outgoing.length }
  ];

  const requestTabs = [
    { id: 'received', label: 'Received', icon: FaInbox, count: friendsData.requests.incoming.length },
    { id: 'sent', label: 'Sent', icon: FaPaperPlane, count: friendsData.requests.outgoing.length }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-3 sm:py-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Campus Connect</h1>
            <p className="text-xs sm:text-sm text-gray-600">Build your academic network</p>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button className="p-1 sm:p-2 text-gray-500 hover:text-blue-600">
              <FaBell className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button className="p-1 sm:p-2 text-gray-500 hover:text-blue-600">
              <FaCog className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="relative flex-grow">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search friends..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 sm:pl-10 pr-7 sm:pr-8 py-1 sm:py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
              />
              {searchTerm && (
                <button 
                  onClick={clearSearch}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaTimes className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              )}
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm ${
                showFilters || Object.values(filters).some(Boolean) 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaFilter className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Filters</span>
              {showFilters ? <FaChevronUp className="h-3 w-3" /> : <FaChevronDown className="h-3 w-3" />}
            </button>
          </div>

          {/* Filter Options */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {/* Status Filter */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Status</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {statusOptions.map(status => (
                          <button
                            key={status}
                            onClick={() => handleFilterChange('status', status)}
                            className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full ${
                              filters.status === status
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Year Filter */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Year</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {yearOptions.map(year => (
                          <button
                            key={year}
                            onClick={() => handleFilterChange('year', year)}
                            className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full ${
                              filters.year === year
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Location Filter */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Location</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {locationOptions.map(location => (
                          <button
                            key={location}
                            onClick={() => handleFilterChange('location', location)}
                            className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full ${
                              filters.location === location
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            {location}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {(filters.status || filters.year || filters.location) && (
                    <button
                      onClick={clearFilters}
                      className="mt-2 sm:mt-3 text-xs sm:text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <FaTimes className="h-2 w-2 sm:h-3 sm:w-3" />
                      Clear all filters
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Tabs */}
          <div className="flex justify-start">
            <div className="inline-flex border-b">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 font-medium flex items-center justify-center gap-1 sm:gap-2 relative whitespace-nowrap text-xs sm:text-sm ${
                    activeTab === tab.id
                      ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="font-semibold tracking-wide">{tab.label}</span>
                  <span className="bg-gray-200 text-gray-700 px-1.5 sm:px-2 py-0.5 rounded-full text-xxs sm:text-xs">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Request Sub-tabs */}
          {activeTab === 'requests' && (
            <div className="flex justify-start mt-3">
              <div className="inline-flex border-b">
                {requestTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveRequestTab(tab.id)}
                    className={`px-3 sm:px-4 md:px-6 py-2 font-medium flex items-center justify-center gap-1 sm:gap-2 relative whitespace-nowrap text-xs sm:text-sm ${
                      activeRequestTab === tab.id
                        ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <tab.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="font-semibold tracking-wide">{tab.label}</span>
                    <span className="bg-gray-200 text-gray-700 px-1.5 sm:px-2 py-0.5 rounded-full text-xxs sm:text-xs">
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Friends Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4">
          <AnimatePresence>
            {filteredFriends.length > 0 ? (
              filteredFriends.map((friend) => (
                <motion.div
                  key={`${activeTab}-${activeRequestTab}-${friend.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  layout
                  className="w-full"
                >
                  <FriendsCard
                    friend={friend}
                    variant={activeTab}
                    requestType={activeTab === 'requests' ? activeRequestTab : null}
                    isPending={friendsData.requests.outgoing.some(f => f.id === friend.id)}
                    onAddFriend={handleAddFriend}
                    onCancelRequest={handleCancelRequest}
                    onRemoveFriend={handleRemoveFriend}
                    onNotInterested={handleNotInterested}
                    onMessage={handleMessage}
                    onAccept={handleAcceptRequest}
                    onDecline={handleDeclineRequest}
                    onStudyBuddy={handleStudyBuddy}
                    windowWidth={windowWidth}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-8 sm:py-12 text-gray-500"
              >
                <FaUserFriends className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-300 mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-medium">
                  No {activeTab === 'requests' ? activeRequestTab : activeTab} found
                </h3>
                <p className="mt-1 text-xs sm:text-sm">Try adjusting your search or filters</p>
                {(searchTerm || filters.status || filters.year || filters.location) && (
                  <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-2">
                    {searchTerm && (
                      <button
                        onClick={clearSearch}
                        className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 text-xs sm:text-sm"
                      >
                        Clear search
                      </button>
                    )}
                    {(filters.status || filters.year || filters.location) && (
                      <button
                        onClick={clearFilters}
                        className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs sm:text-sm"
                      >
                        Clear filters
                      </button>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;