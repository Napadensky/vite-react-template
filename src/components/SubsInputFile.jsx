const stylesFormInput = 'flex items-center rounded-2xl bg-gray-300 p-4';
const stylesFormLabel = 'text-sm font-semibold text-gray-600 mb-1';
const stylesFromContainer = 'flex flex-col mb-4';

export const SubsInputFile = (props) => {
  const { className } = props;

  return (
    <div className={`${stylesFromContainer} ${className}`}>
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
  );
};
