import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <main className='flex-1 h-screen overflow-hidden gap-5 flex justify-center items-center text-white'>
        <Link to="events" ><div className="w-60 h-80 bg-black">Eventos</div></Link>
        <Link to="workshops" ><div className="w-60 h-80 bg-black">Talleres</div></Link>
      </main>
    </>
  );
};
