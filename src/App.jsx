import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import CampusLife from './pages/CampusLife';
import Research from './pages/Research';
import Academics from './pages/Academics';
import Environment from './pages/Environment';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Clubs from './pages/Clubs';
import ClubDetails from './pages/ClubDetails';
import Friends from './pages/Friends';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SuccessStory from './pages/SuccessStory';
import SuccessStoryDetails from './pages/SuccessStoryDetails';
import Notification from './pages/Notification';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Footer from './components/Footer';

const NotFound = () => (
  <div className="flex items-center justify-center h-screen text-2xl font-semibold">
    404 - Page Not Found
  </div>
);

const App = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Prevents flicker on refresh

  useEffect(() => {
    let unsubscribe = () => {};
    try {
      const auth = getAuth();
      unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);

        // Redirect only if user is on login page
        if (user && window.location.pathname === '/login') {
          navigate('/', { replace: true });
        }
      });
    } catch (e) {
      setLoading(false);
    }
    return () => unsubscribe && unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/campus-life" element={<CampusLife />} />
        <Route path="/news/research" element={<Research />} />
        <Route path="/news/academics" element={<Academics />} />
        <Route path="/news/environment" element={<Environment />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/clubs/:id" element={<ClubDetails />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/success-stories" element={<SuccessStory />} />
        <Route
          path="/success-stories/:id"
          element={<SuccessStoryDetails />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" replace /> : <Login />}
        />
        <Route path="/notifications" element={<Notification />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
