import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        console.log('toggleNavbar');
        setIsOpen(!isOpen);
    }; 
  return ( 
    <div className="bg-[#1a1a1a] w-[12vh] h-[7vh] flex flex-col items-center justfiy-center gap-[20px]">
       <div className="translate-y-[23px] flex items-center justify-center"> 
        <button className="uppercase font-bold cursor-pointer tracking-[3px] flex items-center gap-[6px] hover:text-[#85ff6c]  duration-[300ms]" onClick={toggleNavbar}>Services</button>
        <button className='translate-x-[8px] text-lg' onClick={toggleNavbar}>{isOpen ? <IoIosArrowUp className='text-white hover:text-white duration-500'/> : <IoIosArrowDown className='text-white'/>}</button></div>
        <div className="translate-y-[20px] z-0">
            <ul className={`${ isOpen 
                ? 'flex flex-col duration-[350ms] z-0 translate-y-5'
                : 'opacity-0'}  leading-[55px] bg-stone-900 pl-[30px]  pr-[30px] rounded-md duration-[350ms] translate-y-1  z-0 
            }`}>
                <li><NavLink to='/Contact' className="hover:text-[#85ff6c] z-0  hover:translate-x-1 duration-[350ms]">Contact</NavLink></li>
                <li><NavLink  to='' className="hover:text-[#85ff6c] z-0  hover:translate-x-1 duration-[350ms]">Careers</NavLink></li>
                <li><NavLink  to='' className="hover:text-[#85ff6c] z-0  hover:translate-x-1 duration-[350ms]">News</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Dropdown
