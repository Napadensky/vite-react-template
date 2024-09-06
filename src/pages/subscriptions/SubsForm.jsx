import { SubsField } from '@/components/SubsField';
import { SubsSelect } from '@/components/SubsSelect';
import { Link, useParams } from 'react-router-dom';

const stylesFormInput = 'flex items-center rounded-2xl bg-gray-300 p-4';
const stylesFormLabel = 'text-sm font-semibold text-gray-600 mb-1';
const stylesFromContainer = 'flex flex-col mb-4';
export const SubsForm = () => {
  const { id } = useParams();

  return (
    <div className='text-left'>
      <form action='' className=' '>
        <h2 className='mb-2'>Datos Personales</h2>=
        <SubsField textLabel='Nombre Completo' type='text' id='fullName' />
        <SubsField textLabel='DNI' type='number' id='dni' />
        <SubsField textLabel='Correo Electrónico' type='email' id='email' />
        <h2 className='mb-2'>Atributos de Perfil</h2>
        <SubsSelect
          textLabel='Rol'
          id='role'
          options={[{ value: '123123', text: 'Holis' }]}
          className=''
        />
        <SubsSelect
          textLabel='ONG / Empresa'
          id='ong'
          options={[{ value: '123123', text: 'EpiData' }]}
          className=''
        />
        {/* input file */}
        <div className={`${stylesFromContainer}`}>
          <label className={`${stylesFormLabel}`} htmlFor=''>
            Subir Diploma o Constancia*
          </label>
          <div
            className={`${stylesFormInput} border border-dashed border-emerald-800 py-16`}
          >
            {' '}
          </div>
          <input className={`${stylesFormInput} hidden`} type='file' />
        </div>

        <div className={`flex justify-between gap-2`}>
          <Link
            to={`/SubsDetail/${id}`}
            className='w-6/12 rounded-full bg-gray-300 px-4 py-2 text-center'
          >
            Cancelar
          </Link>

          <button className='w-6/12 rounded-full bg-gray-600 px-4 py-2'>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
