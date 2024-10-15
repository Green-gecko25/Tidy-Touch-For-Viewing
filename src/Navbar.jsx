import logo from './Logo.jpg'
import Dropdown from './Dropdown'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
 

  return (
    <div className='w-full h-[8vh]'>
        <nav className="flex fixed top-0 right-0 h-[8vh] w-[100%] bg-[#1a1a1a]   flex-row items-center justify-center duration-[300ms] z-40">
        <div className='flex flex-row items-center justify-center'>
        <div className='flex items-center justify-center gap-[-5px] translate-x-[-300px]'>
            <img src={logo} alt='logo' className='duration-[300ms] w-[70px]'/>
            <h1 className='leading-[20px] translate-y-[2px] font-bold uppercase text-white'>Charlotte&rsquo;s <br></br>Tidy Touch</h1>
        </div>
        <div className='lg:flex hidden items-center justify-center translate-x-[160px] translate-y-[-2px]'>
            <div className='flex items-center justify-center'>
                <ul className='flex items-center justify-center text-white gap-[100px] tracking-[2px] text-xs  translate-y-[5px]'>
                    <li><NavLink to='/home' className='uppercase font-bold cursor-pointer tracking-[3px] hover:text-[#2aff5f] duration-[300ms]'>Home</NavLink></li>
                    <li><NavLink to='/commercial' className='uppercase font-bold cursor-pointer tracking-[3px] hover:text-[#2aff5f] duration-[300ms]'>Commercial</NavLink></li>
                    <li><NavLink to='/residential' className='uppercase font-bold cursor-pointer tracking-[3px] hover:text-[#2aff5f] duration-[300ms]'>Residential</NavLink></li>
                    <li><NavLink to='' className='uppercase font-bold cursor-pointer tracking-[3px] hover:text-[#2aff5f] duration-[300ms]'>Blog</NavLink></li>
                    <li className='uppercase font-bold cursor-pointer tracking-[3px] flex items-center gap-[6px]  duration-[300ms]'><Dropdown/><button/></li>   
                </ul>
            </div>
            <div className='flex flex-row items-center gap-[36px] translate-x-[95px] translate-y-1'>
                <button className="text-white font-semibold  hover:scale-[105%]  text-sm tracking-[1px] duration-[350ms] uppercase bg-gradient-to-br from-neutral-900 to-black rounded-[5px] backdrop-blur-xl p-[10px_8px] w-[120px]">Book Now</button>
                <button className="text-white font-semibold hover:scale-[105%] duration-[350ms] tracking-[1px] text-sm uppercase bg-gradient-to-br from-green-400 to-[#2aff5f] p-[10px_8px] w-[120px]  ">Contact</button>
            </div>
        </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
