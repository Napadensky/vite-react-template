import { useRoutes } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { LoginLayout } from './LoginLayout';

export const LoginRoutes = () => {
  const routes = useRoutes([
    {
      element: <LoginLayout />,
      children: [{ path: '', element: <LoginForm />, index: true }],
    },
  ]);

  return routes;
};
