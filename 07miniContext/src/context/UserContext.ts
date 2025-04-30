import React from 'react';

export interface User {
  username: string;
  password: string;
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
}

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export default UserContext;
