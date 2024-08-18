import React from 'react'
import NavBar from '../components/NavBar'
import Socials from '../components/Socials'

function Skills() {
  return (
    <main className=" w-full h-full ">
        <header className=" w-full inline-flex ">
            <NavBar />
        </header>
        <div className=' w-full bg-slate-700 min-h-[600px] grid-cols-2 bg-opacity-20 '>
            <div className=' w-full min-h-[600px] text-white inline-flex justify-center items-center bg-slate-700 bg-opacity-20'>
                <h1 className=' text-center opacity-100'>SKILLS</h1>
            </div>
        </div>
        <div className=" p-10 ">
            <Socials/>
        </div>
    </main>
  )
}

export default Skills