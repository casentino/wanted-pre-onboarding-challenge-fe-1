import React from 'react';
import { RouteObject, useRoutes } from "react-router";
import AuthPage from '../pages/auth/AuthPage';

const routes: RouteObject[] = [
  {
    path: '/auth',
    element: <AuthPage />
  }
];

function PageRouters() { 
  const elements = useRoutes(routes);
  return <>{elements}</>;
}
export default PageRouters;