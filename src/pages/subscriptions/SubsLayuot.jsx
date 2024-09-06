import { SubsFooter } from '@/components/SubsFooter';
import { SubsNav } from '@/components/SubsNav';
import { Outlet } from 'react-router-dom';

export const SubsLayuot = () => {
  return (
    <div className='flex h-screen flex-col'>
      <SubsNav />
      <main className='m-auto w-11/12 flex-1'>
        <Outlet />
      </main>
      <SubsFooter />
    </div>
  );
};
