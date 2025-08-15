import React, { useMemo } from 'react'
import StoryCard from '../components/StoryCard'

const SuccessStory = () => {
  const stories = useMemo(() => ([
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
      tags: ['Machine Learning', 'Clubs', 'Mentorship']
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
      tags: ['Research', 'Publications', 'Alumni']
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
      tags: ['MBA', 'Mentorship', 'Scholarship']
    }
  ]), [])

  return (
    <div className="max-w-7xl mx-auto px-4 pt-32 pb-10">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Success Stories</h1>
        <p className="text-gray-600">People who turned campus connections into educational milestones.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-4 md:p-6 text-blue-800">
        <h2 className="text-lg md:text-xl font-semibold">Your story could be next</h2>
        <p className="mt-1 text-sm md:text-base">Find mentors, join study groups, and attend events. Start building connections that shape your future.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-xs bg-white text-blue-700 px-2 py-1 rounded-full border border-blue-200">Mentorship</span>
          <span className="text-xs bg-white text-blue-700 px-2 py-1 rounded-full border border-blue-200">Clubs</span>
          <span className="text-xs bg-white text-blue-700 px-2 py-1 rounded-full border border-blue-200">Events</span>
          <span className="text-xs bg-white text-blue-700 px-2 py-1 rounded-full border border-blue-200">Alumni</span>
        </div>
      </div>
    </div>
  )
}

export default SuccessStory