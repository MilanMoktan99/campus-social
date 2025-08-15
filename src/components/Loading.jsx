// src/components/Loading.jsx
import React from 'react';

const Loading = ({ size = 'medium', message = 'Loading...' }) => {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12',
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600 ${sizeClasses[size]}`}></div>
      <p className="mt-4 text-gray-600 text-sm">{message}</p>
    </div>
  );
};

export const LoadingSpinner = ({ size = 'small' }) => {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-6 w-6',
    large: 'h-8 w-8',
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-200 border-t-indigo-600 ${sizeClasses[size]}`}></div>
  );
};

export const LoadingCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
    </div>
  );
};

export default Loading;


