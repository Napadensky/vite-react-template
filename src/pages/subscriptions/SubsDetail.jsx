import { useParams } from 'react-router-dom';
import { projects } from '../../../mocks/projects';

export const SubsDetail = () => {
  // router paramas
  const { id } = useParams();

  const project = projects.find((project) => project._id === id);
  const { title, description, img } = project;

  console.log({ project });

  return (
    <div className=''>
      <div className='mb-4 h-72 overflow-hidden rounded-xl'>
        <img src={img} alt={title} className='m-auto w-full' />
      </div>

      <div className='mb-4 text-left'>
        <h1>{title}</h1>
        <ul className=''>
          <li>Organizado por: </li>
          <li>Duracion: </li>
          <li>Modalidad: </li>
        </ul>
      </div>

      <div className='mb-4 text-left'>
        <p>{description}</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam aut at
          sequi magni a exercitationem temporibus inventore cum hic. Quisquam,
          libero ad tempore omnis pariatur nulla et excepturi voluptatibus vel.
        </p>
      </div>

      <div className='w-full'>
        <button className='m-auto rounded-full bg-gray-300 px-8 py-2'>
          Inscribirme
        </button>
      </div>
    </div>
  );
};
