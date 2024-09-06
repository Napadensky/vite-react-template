import { useRoutes } from 'react-router-dom';

import { SubsDetail } from './SubsDetail';
import { SubsForm } from './SubsForm';
import { SubsHome } from './SubsHome';
import { SubsLayuot } from './SubsLayuot';

export const SubsRoutes = () => {
  const routes = useRoutes([
    {
      element: <SubsLayuot />,
      children: [
        {
          path: '',
          element: <SubsHome />,
          index: true,
          errorElement: <h1>Not Found</h1>,
        },
        { path: 'SubsDetail/:id', element: <SubsDetail /> },
        { path: 'SubsDetail/', element: <SubsDetail /> },
        { path: 'SubsForm/:id', element: <SubsForm /> },
        { path: '*', element: <h1>Not Found</h1> },
      ],
    },
  ]);

  return routes;
};
