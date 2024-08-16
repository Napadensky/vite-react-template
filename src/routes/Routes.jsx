import { Route, Routes } from 'react-router-dom';

// import { HeaderGlobal } from '@/components/HeaderGlobal';
import { Home } from '@/pages/Home';
// import { About } from '@/pages/About';
import { PageEvent } from '@/pages/events/PageEvent';
import { PageWorkshop } from '@/pages/workshop/PageWorkshop';

export const MapRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<HeaderGlobal color='black' />}>
          <Route index exact path='' element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>

        <Route path='/admin' element={<HeaderGlobal color='red' />}>
          <Route exact path='cursos' element={<About />} />
          <Route path='tags' element={<Home />} />
        </Route> */}

        <Route>
          <Route index exact path='' element={<Home />} />
          <Route path='events' element={<PageEvent />} />
          <Route path='workshops' element={<PageWorkshop />} />
        </Route>
      </Routes>
    </>
  );
};
