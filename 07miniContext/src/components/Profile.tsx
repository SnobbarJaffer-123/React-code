import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile: React.FC = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('Profile must be used within a UserContextProvider');

  const { user } = context;

  return user ? (
    <div className="text-center">
      <p className="text-lg font-medium text-gray-700">
        Welcome, <span className="text-blue-600">{user.username}</span>!
      </p>
    </div>
  ) : (
    <div className="text-center text-gray-500">Please log in to view your profile.</div>
  );
};

export default Profile;
