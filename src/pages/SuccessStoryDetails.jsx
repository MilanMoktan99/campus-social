import React, { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'

const SuccessStoryDetails = () => {
  const { id } = useParams()
  const stories = useMemo(() => ({
    1: {
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
    2: {
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
    3: {
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
  }), [])

  const story = stories[id]

  if (!story) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-gray-600">Story not found.</p>
        <Link to="/success-stories" className="text-blue-600 hover:underline">Back to stories</Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pt-32">
      <Link to="/success-stories" className="text-blue-600 hover:underline">← Back to stories</Link>

      <div className="mt-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-start gap-4">
          <img src={story.avatar} alt={story.name} className="w-20 h-20 rounded-xl object-cover" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{story.name}</h1>
            <p className="text-gray-600">{story.title}</p>
            <p className="text-sm text-gray-500 mt-1">{story.degree} • {story.institution} • {story.year}</p>
          </div>
        </div>

        <div className="mt-6 text-gray-900 leading-relaxed bg-gray-50 border border-gray-100 rounded-xl p-5 text-base md:text-lg">
          {story.summary}
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">How campus connections helped</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
            {story.highlights.map((h, idx) => (
              <li key={idx}>{h}</li>
            ))}
          </ul>
        </div>

        {story.tags?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {story.tags.map(tag => (
              <span key={tag} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SuccessStoryDetails