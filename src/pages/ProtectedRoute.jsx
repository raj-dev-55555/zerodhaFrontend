import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies([]);
  
  if (!cookies.token) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

export default ProtectedRoute;