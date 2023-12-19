import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />} 
    </BrowserRouter>
  )
}

// If the user is logged in, the AppRoutes component is rendered, otherwise the AuthRoutes component is rendered.