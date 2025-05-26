

import { useEffect, useState, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store' 

interface ProtectedProps {
  children: ReactNode;
  authentication?: boolean;
}

export default function Protected({ children, authentication = true }: ProtectedProps) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const authStatus = useSelector((state: RootState) => state.auth.status);
  //const authStatus = useSelector((state: any) => state.auth.status);


  useEffect(() => {
    // Redirect based on the authentication status
    if (authentication && authStatus !== authentication) {
      navigate('/login');
    } else if (!authentication && authStatus !== authentication) {
      navigate('/');
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
