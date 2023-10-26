import { Helmet } from 'react-helmet-async';
import {useRoutes } from 'react-router-dom';
import MainLayout from 'src/layouts/main/layout';
import { mainRoutes, HomePage } from './main';
import UserProfilePage from 'src/pages/profile';
export default function SimpleLayout() {
  return useRoutes([{
    path:'/',
    element: (
      <UserProfilePage />)
    // <MainLayout>
    //   <UserProfilePage/>
    // </MainLayout>)
  },
    ...mainRoutes,
  ])
}
