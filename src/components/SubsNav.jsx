export const SubsNav = () => {
  return (
    <header className='mb-8 flex min-h-14 w-full bg-gray-300'>
      <nav className='m-auto flex w-11/12 items-center justify-between'>
        <div className=''>
          <svg
            className='h-6 w-6 text-gray-800 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 17 14'
          >
            <path d='M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z' />
          </svg>
        </div>
        <div className=''>
          <h5 className='font-bold'>Polo IT</h5>
        </div>
        <div className='rounded-s-full'>
          <img
            src='https://randomuser.me/api/portraits/men/3.jpg'
            alt='Random'
            className='h-10 w-10 rounded-full'
          />
        </div>
      </nav>
    </header>
  );
};
