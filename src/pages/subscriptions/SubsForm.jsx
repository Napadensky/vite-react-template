import { Link, useParams } from 'react-router-dom';

import { SubsInputField } from '@/components/SubsInputField';
import { SubsInputFile } from '@/components/SubsInputFile';
import { SubsSelect } from '@/components/SubsSelect';

export const SubsForm = () => {
  const { id } = useParams();

  return (
    <div className='text-left'>
      <form action='' className=' '>
        <h2 className='mb-2'>Datos Personales</h2>
        <SubsInputField textLabel='Nombre Completo' type='text' id='fullName' />
        <SubsInputField textLabel='DNI' type='number' id='dni' />
        <SubsInputField textLabel='Correo Electrónico' type='email' id='email' />

        <h2 className='mb-2'>Atributos de Perfil</h2>
        <SubsSelect textLabel='Rol'   id='role'   options={[{ value: '123123', text: 'Holis' }]}   className='' />
        <SubsSelect textLabel='ONG / Empresa' id='ong' options={[{ value: '123123', text: 'EpiData' }]} className='' />
        <SubsInputFile textLabel='Diploma o Constancia' type='file' id='file' />

        <div className={`flex justify-between gap-2`}>
          <Link to={`/SubsDetail/${id}`} className='w-6/12 rounded-full bg-gray-300 px-4 py-2 text-center' > Cancelar </Link>
          <button className='w-6/12 rounded-full bg-gray-600 px-4 py-2'>Enviar</button>
        </div>

      </form>
    </div>
  );
};
