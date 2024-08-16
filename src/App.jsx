// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Link } from 'react-router-dom';

import { MapRoutes } from '@/routes/Routes';

import './styles/App.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='flex h-10 w-full bg-black'>
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
      </div> */}
      <MapRoutes />
    </>
  );
}

export default App;
