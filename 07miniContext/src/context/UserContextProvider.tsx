import React, { useState } from 'react';
import UserContext, { User, UserContextType } from './UserContext';

interface Props {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const value: UserContextType = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
