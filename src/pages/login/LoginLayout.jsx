import { Outlet } from 'react-router-dom';

export const LoginLayout = () => {
  return (
    <main className='grid h-screen w-screen place-content-center'>
      <Outlet />
    </main>
  );
};
