import { SubsNav } from '@/components/SubsNav';
import { Outlet } from 'react-router-dom';

export const DashLayout = () => {
  return (
    <div className='flex h-screen flex-row'>
      <SubsNav className='mb-0 w-auto' />
      <main className='m-auto w-11/12'>
        <Outlet />
      </main>
    </div>
  );
};
