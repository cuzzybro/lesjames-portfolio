import Router from 'next/router';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <main className=" w-full h-full ">
      <header className=" w-full pb-10 ">
        <NavBar />
      </header>
      <div className=' w-full bg-slate-700 min-h-[600px] grid-cols-2 bg-opacity-20 '>
        <div>
          <p></p>
        </div>
      </div>
      <div>
      </div>
    </main>
  );
}
