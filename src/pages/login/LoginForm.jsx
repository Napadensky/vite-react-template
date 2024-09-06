import { SubsInputField } from '@/components/SubsInputField';

export const LoginForm = () => {
  return (
    <div className='w-96 rounded-xl border p-4 shadow-lg'>
      <h1 className='text-center text-2xl font-bold'>Login</h1>
      <form className='flex flex-col space-y-4 p-4'>
        <SubsInputField className='text-left' textLabel='Email' type='email' />
        <SubsInputField
          className='text-left'
          textLabel='Password'
          type='password'
        />

        <div id='SubsCardAction' className='py-4'>
          <button className='w-full rounded-full bg-gray-300 px-4 py-2'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
