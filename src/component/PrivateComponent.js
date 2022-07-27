import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from '../config/firebase';
import { LinearProgress } from "@mui/material";
const PrivateComponent = ({ children, loginOnly = true }) => {
  const [user, isLoading] = useAuthState(auth);

  if (!user && loginOnly) {
    return <Navigate to="/login"/>;
  }

  if(user && !loginOnly) {
    return <Navigate to="/"/>;
  }
  
  return isLoading ? <LinearProgress color="inherit" /> : children;
  
};


export default PrivateComponent;