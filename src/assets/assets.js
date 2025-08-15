import logo from "./logo.jpeg";
import heroImage from "./hero-image.jpg";
import event from "./event.jpg";
import clubs from "./clubs.jpg";
import news from "./news.jpg";
import friends from "./friends.jpg";

export const assets = {
    logo,
    heroImage,
    event,
    news,
    clubs,
    friends,
}

// Friends data (initial state for Friends page)
export const friendsDataInitial = {
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
};

// News data used on News page
export const newsItems = [
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

export const trendingTopics = [
    { topic: 'Final Exams', posts: 45 },
    { topic: 'Spring Break', posts: 32 },
    { topic: 'Career Fair', posts: 28 },
    { topic: 'Study Groups', posts: 19 },
];

export const SUCCESS_STORIES = [
  {
    id: 1,
    name: 'Aisha Rahman',
    title: 'Data Scientist at TechNova',
    avatar: 'https://i.pravatar.cc/150?img=47',
    summary: 'Connected with seniors through Campus Connect, joined the ML club, and landed a summer internship that led to a full-time offer.',
    degree: 'B.Sc. Computer Science',
    institution: 'North Campus University',
    year: '2023',
    location: 'San Francisco, CA',
    tags: ['Machine Learning', 'Clubs', 'Mentorship'],
    highlights: [
      'Found mentor via Friends → Suggestions and joined weekly ML study group.',
      'Volunteered at campus hackathon; met recruiter who referred for internship.',
      'Converted internship to full-time after capstone on recommender systems.'
    ]
  },
  {
    id: 2,
    name: 'Marcus Lee',
    title: 'Research Fellow, Neuroscience Lab',
    avatar: 'https://i.pravatar.cc/150?img=54',
    summary: 'Met lab leads at a campus event, collaborated on a paper, and secured a graduate fellowship through alumni connections.',
    degree: 'B.Sc. Biology',
    institution: 'West State College',
    year: '2022',
    location: 'Boston, MA',
    tags: ['Research', 'Publications', 'Alumni'],
    highlights: [
      'Connected through Events; volunteered as RA for one semester.',
      'Co-authored poster presentation; presented at regional conference.',
      'Won fellowship with alumni recommendation.'
    ]
  },
  {
    id: 3,
    name: 'Sofia Martinez',
    title: 'MBA Candidate at Global Business School',
    avatar: 'https://i.pravatar.cc/150?img=36',
    summary: 'Used the app to find a mentor, refine applications, and get into a top B-school with a scholarship.',
    degree: 'BBA',
    institution: 'East City University',
    year: '2021',
    location: 'Chicago, IL',
    tags: ['MBA', 'Mentorship', 'Scholarship'],
    highlights: [
      'Joined mentorship via Friends; weekly prep for essays and interviews.',
      'Led club event on case competitions; expanded network with alumni.',
      'Received 50% scholarship after GMAT retake.'
    ]
  }
];