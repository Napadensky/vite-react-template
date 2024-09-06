import { SubsCard } from '@/components/SubsCard';
import { SubsSearchBar } from '@/components/SubsSearchBar';

import { proyects } from '../../../mocks/proyects';
import { SubsCardHorizontally } from '@/components/SubsCardHorizontally';

export const SubsHome = () => {
  return (
    <>
      <SubsCard className='m-auto mb-6' />
      <SubsSearchBar className='my-6' />
      {proyects.map((proyect, index) => (
        <SubsCardHorizontally
          key={index}
          className='m-auto mb-6'
          img={proyect.img}
          title={proyect.title}
          description={proyect.description}
        />
      ))}
    </>
  );
};
