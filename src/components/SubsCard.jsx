const styleSubsCard =
  'flex h-80 w-60 flex-col overflow-auto rounded-xl border border-gray-300 shadow-lg';

export const SubsCard = (props) => {
  const { className } = props;
  // const { img, title, id } = props;
  return (
    <div className={`${styleSubsCard} ${className}`}>
      <div id='SubsCardImg' className='flex-auto overflow-hidden'>
        <img
          // width={'100%'}
          // height={'100%'}
          src='https://picsum.photos/200/300'
          alt='Random'
          className='h-full w-full bg-cover'
        />
      </div>
      <div id='SubsCardTitle' className='p-4 text-left'>
        <h4>Proyecto</h4>
        <p>Organizado por el squad 15</p>
      </div>
      <div id='SubsCardAction' className='p-4'>
        <button className='rounded-lg bg-gray-400 px-4 py-2'>
          Mas Informacion
        </button>
      </div>
    </div>
  );
};
