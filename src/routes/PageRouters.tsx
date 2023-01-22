import React from 'react';
import { RouteObject, useRoutes } from 'react-router';
import LoginPage from '../pages/auth/LoginPage';

const routes: RouteObject[] = [
  {
    path: '/auth',
    // element: <AuthPage />
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
];
function PageRouters() {
  const elements = useRoutes(routes);
  return <>{elements}</>;
}
export default PageRouters;
