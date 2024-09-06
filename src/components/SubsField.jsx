const stylesFormInput = 'flex items-center rounded-2xl bg-gray-300 p-4';
const stylesFormLabel = 'text-sm font-semibold text-gray-600 mb-1';
const stylesFromContainer = 'flex flex-col mb-4';

export const SubsField = (props) => {
  const { className } = props;
  const { textLabel, type, id } = props;

  return (
    <div className={`${stylesFromContainer} ${className}`}>
      <label className={`${stylesFormLabel}`} htmlFor={id}>
        {textLabel}
      </label>
      <input type={type} id={id} className={`${stylesFormInput}`} />
    </div>
  );
};
