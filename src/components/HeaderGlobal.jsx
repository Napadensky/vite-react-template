import { Link, Outlet } from 'react-router-dom';

export const HeaderGlobal = ({ color }) => {
  color ??= 'black';

  console.log({ color });

  const colorVariants = { red: 'bg-red-500', black: ' bg-black' };

  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex h-10 w-full bg-black'>
        <div className='mx-4 flex h-full flex-1 items-center text-white'>
          <h4 className='left text-left'>PINTA&VINO</h4>
        </div>
        <nav className='mx-4 h-full'>
          <ul className='flex h-full items-center justify-end gap-4 text-white'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
      <div className={`flex h-10 w-full ${colorVariants[color]}`}>
        <div className='mx-4 flex h-full flex-1 items-center text-white'>
          <h4 className='left text-left'>PINTA&VINO</h4>
        </div>
        <nav className='mx-4 h-full'>
          <ul className='flex h-full items-center justify-end gap-4 text-white'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
