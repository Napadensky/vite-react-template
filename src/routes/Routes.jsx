import { Route, Routes } from 'react-router-dom';

import { SubsRoutes } from '@/pages/subscriptions/SubsRoutes';
import { DashRoutes } from '@/pages/dashboard/DashRoutes';
import { LoginRoutes } from '@/pages/login/LoginRoutes';

export const MapRoutes = () => {
  // const error = useRouteError();
  // console.error(error);

  return (
    <Routes>
      <Route path='/*' index={true} element={<SubsRoutes />} />
      <Route path='/dashboard/*' element={<DashRoutes />} />
      <Route path='/login/*' index={true} element={<LoginRoutes />} />
    </Routes>
  );
};
