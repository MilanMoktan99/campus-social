import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import Clubs from './pages/Clubs'
import ClubDetails from './pages/ClubDetails'
import Friends from './pages/Friends'
import Profile from './pages/Profile'
import Login from './pages/Login'
import SuccessStory from './pages/SuccessStory'
import SuccessStoryDetails from './pages/SuccessStoryDetails'
import Notification from './pages/Notification'

const NotFound = () => (
  <div className="flex items-center justify-center h-screen text-2xl font-semibold">
    404 - Page Not Found
  </div>
)

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events/:id' element={<EventDetails />} />
        <Route path='/clubs' element={<Clubs />} />
        <Route path='/clubs/:id' element={<ClubDetails />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/success-stories' element={<SuccessStory />} />
        <Route path='/success-stories/:id' element={<SuccessStoryDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/notifications' element={<Notification />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App