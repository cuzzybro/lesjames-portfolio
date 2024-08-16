"use client"

import { cn } from "@/lib/utils/cn";
import TypeWriter from "./TypeWriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

type Active = 'about' | 'skills' | 'projects' | 'contact'
type TypeWriterProps = {
  name: string;
  active?: Active;
  options?: {
    textColor: `text-[${string}]`;
  }
}
type ItemProperties = {
  active: Active;
  textColor?: `text-${string}`;
}

const NameTypeWriter = ({ name, active, options }: TypeWriterProps ) => {
  return (
    <div
      className=" flex-1 text-2xl text-left ml-5 inline-flex gap-1 ">
      {name} |
      <span
        className={`${options ? options.textColor : " text-blue-400 "}`}
      >
        { active=='about' ? <TypeWriter/> : 'Test Professional' }
      </span>
    </div>
  )
}

const NavBar = ({ active = 'about'}: { active?: Active }) => {

  return (
    <div className="navbar bg-base-100 flex grid-cols-3 ">
      <div className="flex-none place-content-left">
        <button className="btn btn-square btn-ghost">
          <FontAwesomeIcon icon={ faBars } className=" inline-block h-7 w-7 stroke-current "/>
        </button>
      </div>
      <NameTypeWriter name="Les James " active={active} options={{ textColor: 'text-[#5555f1]' }} />
      <div className="flex-none gap-5 inline-flex text-2xl hover:cursor-pointer mr-20">
          <div>
            <a
              className={cn("btn btn-ghost hover:animate-pulse", `${ active=='about' ? 'text-lime-200': ''}`)} 
              href="./"
              >About
              <span className={`block h-1 bg-lime-200 rounded-full ${active=='about' ? 'max-w-full' : 'max-w-0' }`}></span>
            </a>
          </div>
          <div><a className={cn("btn btn-ghost hover:animate-pulse", `${ active=='skills' ? 'text-lime-200': ''}`)} href="./skills">Skills</a></div>
          <div><a className={cn("btn btn-ghost hover:animate-pulse", `${ active=='projects' ? 'text-lime-200': ''}`)} href="./projects">Projects</a></div>
          <div><a className={cn("btn btn-ghost hover:animate-pulse", `${ active=='contact' ? 'text-lime-200': ''}`)} href="./contact">Contact</a></div>

      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <FontAwesomeIcon icon={ faEllipsis } className=" inline-block h-7 w-7 stroke-current "/>
        </button>
      </div>
    </div>
  )
}

export default NavBar