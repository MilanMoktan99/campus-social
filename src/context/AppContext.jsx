import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// 1. Create Context
const AppContext = createContext();

// 2. Create Provider
export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  // User state
  const [currentUser, setCurrentUser] = useState(null);

  // Sync with Firebase auth state
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          displayName: user.displayName || "User",
          email: user.email,
          photoURL: user.photoURL || null,
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Example notification state
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New event added", read: false },
    { id: 2, text: "Friend request received", read: false },
  ]);

  // Login function
  const login = (userData) => {
    setCurrentUser(userData);
  };

  // Logout function
  const logout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Function to navigate to notifications page
  const goToNotifications = () => {
    navigate("/notifications");
  };

  // Function to mark all notifications as read
  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  // Unread count
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <AppContext.Provider
      value={{
        currentUser,
        login,
        logout,
        notifications,
        setNotifications,
        unreadCount,
        goToNotifications,
        markAllRead,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 3. Custom hook to use context
export const useAppContext = () => useContext(AppContext);
