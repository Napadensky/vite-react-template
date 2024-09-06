import { SubsCard } from '@/components/SubsCard';
import { SubsSearchBar } from '@/components/SubsSearchBar';

import { projects } from '../../../mocks/projects';
import { SubsCardHorizontally } from '@/components/SubsCardHorizontally';

export const SubsHome = () => {
  return (
    <>
      <SubsCard className='m-auto mb-6' />
      <SubsSearchBar className='my-6' />
      {projects.map((project) => (
        <SubsCardHorizontally
          className='m-auto mb-6'
          description={project.description}
          id={project._id}
          img={project.img}
          key={project._id}
          title={project.title}
        />
      ))}
    </>
  );
};
