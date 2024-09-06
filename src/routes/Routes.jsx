import { Route, Routes } from 'react-router-dom';

import { SubsDetail } from '@/pages/subscriptions/SubsDetail';
import { SubsForm } from '@/pages/subscriptions/SubsForm';
import { SubsHome } from '@/pages/subscriptions/SubsHome';
import { SubsLayuot } from '@/pages/subscriptions/SubsLayuot';

export const MapRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<SubsLayuot />}>
          <Route index exact path='' element={<SubsHome />} />
          <Route path='SubsDetail' element={<SubsDetail />} />
          <Route path='SubsForm' element={<SubsForm />} />
        </Route>
      </Routes>
    </>
  );
};
