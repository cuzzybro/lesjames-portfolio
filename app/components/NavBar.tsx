"use client"
import { cn } from "@/lib/utils/cn";
import TypeWriter from "./TypeWriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from 'next/navigation'

type Active = 'about' | 'skills' | 'projects' | 'contact'

type TypeWriterProps = {
  name: string;
  options?: {
    textColor: `text-${string}`;
  }
}

const sections: Active[] = [ 'about', 'skills', 'projects', 'contact' ]

const NameTypeWriter = ({ name, options }: TypeWriterProps ) => {

    const path = usePathname();

    return (
        <div
        className=" flex-1 ">
        {`${name}: `}
            <span
                className={`${options ? options.textColor : " text-blue-400 "}`}
            >
                { path=='/' ? <TypeWriter/> : 'Test Professional' }
            </span>
        </div>
    )
}

const NavSections = ({active, activeColor}: {active: string, activeColor: `text-${string}`}) => {

    return sections.map(section => {
        if (section == 'about') {
            return (
                <div>
                    <a
                        className={cn(`${active==section ? `${activeColor}`: ''}`)}
                        href={`${process.env.BASE_PATH}/`}
                    >
                        {section[0].toUpperCase() + section.slice(1)}
                    </a>
                </div>
            )
        }
        return (
            <div>
                <a
                    className={cn(`${active==section ? `${activeColor}`: ''}`)}
                    href={`${process.env.BASE_PATH}/${section}`}
                >
                    {section[0].toUpperCase() + section.slice(1)}
                </a>
            </div>
        )
    })
}

const NavBar = ({ activeColor = 'text-[#5555f1]' }: { activeColor?: `text-${string}` }) => {

    const path = usePathname();

    return (
        <div className="navbar box-border w-full flex p-7 h-20 overflow-hidden m-7 text-2xl ">
            <NameTypeWriter name="Les James " options={{ textColor: `${activeColor}` }} />
            <div className="flex-none gap-5 inline-flex text-2xl hover:cursor-pointer mr-20">
                <NavSections active={path === "/" ? "about" : path.slice(1)} activeColor={activeColor} />
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <FontAwesomeIcon icon={ faBars } className=" inline-block h-7 w-7 stroke-current "/>
                </button>
            </div>
        </div>
    )
}

export default NavBar