import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// 1. Create Context
const AppContext = createContext();

// 2. Create Provider
export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  // Example notification state
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New event added", read: false },
    { id: 2, text: "Friend request received", read: false },
  ]);

  // Function to navigate to notifications page
  const goToNotifications = () => {
    navigate("/notifications");
  };

  // Function to mark all notifications as read
  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  // Unread count
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <AppContext.Provider
      value={{
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
