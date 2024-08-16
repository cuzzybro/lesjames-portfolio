import React from 'react'
import NavBar from '../components/NavBar'
import Socials from '../components/Socials'

function Skills() {
  return (
    <main className=" w-full h-full ">
      <header className=" w-full pb-10">
        <NavBar active='skills'/>
      </header>
      <div className=' w-full min-h-[600px] text-white inline-flex justify-center items-center bg-slate-700 bg-opacity-20'>
        <h1 className=' text-center opacity-100'>SKILLS</h1>
      </div>
      <div>
      </div>
    </main>
  )
}

export default Skills