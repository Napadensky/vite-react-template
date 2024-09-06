const stylesFormInput = 'flex items-center rounded-2xl bg-gray-300 p-4';
const stylesFormLabel = 'text-sm font-semibold text-gray-600 mb-1';
const stylesFromContainer = 'flex flex-col mb-4';
export const SubsForm = () => {
  return (
    <div className='text-left'>
      <form action='' className=' '>
        <h2 className='mb-2'>Datos Personales</h2>
        <div className={`${stylesFromContainer}`}>
          <label className={`${stylesFormLabel}`} htmlFor='name'>
            Nombre Completo
          </label>
          <input type='text' id='name' className={`${stylesFormInput}`} />
        </div>

        <div className={`${stylesFromContainer}`}>
          <label className={`${stylesFormLabel}`} htmlFor='email'>
            DNI
          </label>
          <input className={`${stylesFormInput}`} type='email' id='email' />
        </div>

        <div className={`${stylesFromContainer}`}>
          <label className={`${stylesFormLabel}`} htmlFor='phone'>
            Correo Electrónico
          </label>
          <input className={`${stylesFormInput}`} type='tel' id='phone' />
        </div>

        <h2 className='mb-2'>Atributos de Perfil</h2>

        <div className={`${stylesFromContainer}`}>
          <label className={`${stylesFormLabel}`} htmlFor='amount'>
            Rol
          </label>
          <select className={`${stylesFormInput}`} type='' id='' />
        </div>

        <div className={`${stylesFromContainer}`}>
          <label className={`${stylesFormLabel}`} htmlFor='text'>
            ONG / Empresa
          </label>
          <select className={`${stylesFormInput}`} type='' id='' />
        </div>

        <div className={`${stylesFromContainer}`}>
          <label className={`${stylesFormLabel}`} htmlFor=''>
            Subir Diploma o Constancia*
          </label>
          <div
            className={`${stylesFormInput} border border-dashed border-emerald-800 py-16`}
          ></div>
          <input className={`${stylesFormInput} hidden`} type='file' />
        </div>

        <div className={`flex justify-between gap-2`}>
          <button className='w-6/12 rounded-full bg-gray-300 px-4 py-2'>
            Cancelar
          </button>
          <button className='w-6/12 rounded-full bg-gray-600 px-4 py-2'>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
