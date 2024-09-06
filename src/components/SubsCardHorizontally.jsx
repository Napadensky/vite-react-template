import { Link } from 'react-router-dom';

const styleSubsCard =
  'flex h-20 w-full cursor-pointer flex-row-reverse overflow-auto rounded-xl border border-gray-300 shadow-lg';

export const SubsCardHorizontally = (props) => {
  const { className } = props;
  const { img, title, description, id } = props;

  return (
    <Link to={`/SubsDetail/${id}`} className={`${styleSubsCard} ${className}`}>
      <div id='SubsCardImg' className='w-3/12 flex-auto overflow-hidden'>
        <img
          // width={'100%'}
          // height={'100%'}
          src={img}
          alt='Random'
          className='h-full w-full bg-cover'
        />
      </div>
      <div id='SubsCardTitle' className='w-8/12 p-4 text-left'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
};
