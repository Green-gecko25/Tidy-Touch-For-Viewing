import Component from "./diffComponents"
import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import { GiFamilyHouse } from "react-icons/gi";
import { FaIdCard } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from './Logo.jpg'
import { RiInstagramFill } from "react-icons/ri";
const Residential = () => {
  return (
    <div className='w-full h-[395vh]'>
        <div className="flex flex-col items-center justify-center overflow-hidden">
            <div className="flex items-center justify-center h-[100vh] w-full bg-white gap-[45px]">
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-6xl font-bold leading-[85px] tracking-[3px]">Bringing <br></br>Cleaners to <br></br>Your<br></br> Doorstep with <br></br><span className="text-green-400">Tidy Touch</span></h1>
                    <p className="text-lg leading-[35px] font-semibold">Tidy Touch isn’t just about connecting homeowners with skilled cleaners; we’re transforming housekeeping in Charlotte. <br></br>By linking residents with expert cleaning professionals, we elevate home cleanliness and appeal throughout the city. <br></br>Our innovative app simplifies the journey for cleaners, showcasing their skills with ease. <br></br>Join our community dedicated to enhancing the beauty and comfort of Charlotte’s homes.</p>
                    <div className="flex items-center justify-center gap-[25px]">
                        <button className="text-black font-semibold  hover:scale-[105%]  text-md duration-[350ms] uppercase border-black bg-gray-100 backdrop-blur-lg p-3 w-[160px]   ">Book Now</button>
                        <button className="text-white font-semibold hover:scale-[105%] duration-[350ms]  text-md uppercase bg-gradient-to-br from-green-400 to-[#2aff5f] p-3 w-[160px]  ">Learn More</button>
                    </div>
                </div>  
                <div className="bg-[url('https://images.unsplash.com/photo-1506730447-7683abca8434?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-[75vh] h-[85vh] bg-cover bg-center duration-[350ms] rounded-b-[35px] drop-shadow-[5px_5px_8px_rgba(0,0,0,0.1609)]"></div>
            </div>
            <div className="w-full h-[150vh] bg-gradient-to-b from-white to-slate-100 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-[25px]">
                        <div className="flex gap-[35px] items-center justify-center">
                                <div className="flex flex-col items-start p-[25px_45px] justify-center w-[85vh] h-[65vh] bg-white rounded-[25px] drop-shadow-[5px_0px_12px_rgba(0,0,0,0.07)]">
                                    <div className="flex items-center justify-center bg-green-500/40 rounded-[24px] p-[32px] translate-y-[-80px] duration-[350ms]"><GiEmptyMetalBucketHandle className="text-[120px] text-green-500"/></div>   
                                    <h1 className="text-green-900 font-semibold tracking-[1px] text-4xl mt-4 translate-y-[-70px]">Deep Cleaning</h1>
                                    <p className="text-2xl text-gray-400 font-normal leading-[38px] mt-5 translate-y-[-65px]">Revitalize your space with thorough deep cleaning services.</p>
                                    <h1 className="translate-y-[75px] text-2xl text-gray-400 hover:translate-x-[10px] duration-[350ms] cursor-pointer hover:underline">Learn More</h1>
                                </div>
                                <div className="flex flex-col items-start justify-center w-[85vh] h-[65vh] p-[25px_45px] bg-white rounded-[25px] drop-shadow-[5px_0px_12px_rgba(0,0,0,0.07)]">
                                    <div className="flex items-center justify-center bg-green-500/40 rounded-[24px] p-[32px] translate-y-[-80px] duration-[350ms]"><GiFamilyHouse className="text-[120px] text-green-500"/></div>   
                                        <h1 className="text-green-900 font-semibold tracking-[1px] text-4xl mt-4 translate-y-[-70px]">House Keeping</h1>
                                        <p className="text-2xl text-gray-400 font-normal leading-[38px] mt-5 translate-y-[-65px]">Effortless move-in/move-out cleaning for a fresh home transition.</p>
                                        <h1 className="translate-y-[75px] text-2xl text-gray-400 hover:translate-x-[10px] duration-[350ms] cursor-pointer hover:underline">Learn More</h1>
                                </div>
                        </div>
                        <div className="flex gap-[35px] items-center justify-center">
                                <div className="flex flex-col items-start justify-center w-[85vh] h-[65vh] p-[25px_45px] bg-white rounded-[25px] drop-shadow-[5px_0px_12px_rgba(0,0,0,0.07)]">
                                    <div className="flex items-center justify-center bg-green-500/40 rounded-[24px] p-[32px] translate-y-[-80px] duration-[350ms]"><FaIdCard className="text-[120px] text-green-500"/></div>   
                                    <h1 className="text-green-900 font-semibold tracking-[1px] text-4xl mt-4 translate-y-[-70px]">Professional Staff</h1>
                                    <p className="text-2xl text-gray-400 font-normal leading-[38px] mt-5 translate-y-[-65px]">Trained, dedicated cleaners treat your home with utmost respect.</p>
                                    <h1 className="translate-y-[75px] text-2xl text-gray-400 hover:translate-x-[10px] duration-[350ms] cursor-pointer hover:underline">Learn More</h1>
                                </div>
                                <div className="flex flex-col items-start justify-center w-[85vh] h-[65vh] p-[25px_45px] bg-white rounded-[25px] drop-shadow-[5px_0px_12px_rgba(0,0,0,0.07)]">
                                <div className="flex items-center justify-center bg-green-500/40 rounded-[24px] p-[32px] translate-y-[-80px] duration-[350ms]"><FaHandshakeAngle className="text-[120px] text-green-500"/></div>   
                                    <h1 className="text-green-900 font-semibold tracking-[1px] text-4xl mt-4 translate-y-[-70px]">Quality Assurance</h1>
                                    <p className="text-2xl text-gray-400 font-normal leading-[38px] mt-5 translate-y-[-65px]">Top-quality cleaning with rigorous standards and customer-focused expertise.</p>
                                    <h1 className="translate-y-[75px] text-2xl text-gray-400 hover:translate-x-[10px] duration-[350ms] cursor-pointer hover:underline">Learn More</h1>
                                </div>
                        </div>
                </div>
            </div>  
            <div className="w-full h-[80vh] bg-stone-800">
                <div className="flex flex-row items-center justify-center">
                    <Component />
                </div>
            </div>
            <div className="h-[2px] bg-slate-100 w-[100%]"></div>
        <div className="w-full h-[65vh] flex flex-row gap-[45px] items-center justify-center bg-white">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-[200px] translate-x-[-50px]">
                        <div className="flex flex-col items-start justify-center translate-y-[-105px] translate-x-[100px]">
                            <div className='flex items-center justify-center text-[#3cff2a] uppercase font-black text-5xl translate-x-[-40px]'><img src={logo} alt='logo' className='translate-x-5 duration-[300ms] w-[200px]'/>Tidy Touch</div>
                            <p className="text-[18px] leading-9 translate-y-[-12px] font-semibold text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br></br>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br></br>commodo consequat.</p>  
                        </div>
                        <div className='flex flex-col items-center justify-center translate-y-[-75px]'>
                            <h1 className="uppercase text-[#3cff2a] font-bold tracking-[1px] text-2xl">Company</h1>
                            <ul className="flex flex-col items-start translate-x-[-22px] gap-[25px] translate-y-[24px]">
                                <li className="text-[18px] font-semibold text-black cursor-pointer hover:underline">About</li>
                                <li className="text-[18px] font-semibold text-black cursor-pointer hover:underline">Features</li>
                                <li className="text-[18px] font-semibold text-black cursor-pointer hover:underline">FAQ</li>
                                <li className="text-[18px] font-semibold text-black cursor-pointer hover:underline">Careers</li>
                            </ul>
                        </div> 
                        <div className='flex flex-col items-center justify-center translate-y-[-75px]'>
                            <h1 className="uppercase text-[#3cff2a] font-bold tracking-[1px] text-2xl">REASOURCES</h1>
                            <ul className="flex flex-col items-start translate-x-[-1px] gap-[25px] translate-y-[24px]">
                                <li className="text-[18px] font-semibold text-black cursor-pointer hover:underline">Product Details</li>
                                <li className="text-[18px] font-semibold text-black cursor-pointer hover:underline">Features</li>
                                <li className="text-[18px] font-semibold text-black cursor-pointer hover:underline">HR</li>
                                <li className="text-[18px] font-semibold text-black cursor-pointer hover:underline">Customer Service</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start justify-center translate-y-[-75px]'>
                            <h1 className="uppercase text-[#3cff2a] font-bold tracking-[1px] text-2xl">Newsletter</h1>
                                <div className="flex flex-col items-start gap-[35px]">
                                <input type='text' placeholder='Enter your Email Address' className='p-5 border-[2px] border-black/30 rounded-none text-lg w-[320px]'/>
                                <button className="p-5 bg-green-400 h-[8vh]  rounded-none text-2xl w-[320px] uppercase text-white font-semibold tracking-[2px] duration-[150ms] active:scale-[105%]">Subscribe Now</button>
                                </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                            <div className='h-[2px] bg-black w-[1700px] translate-y-[-80px] duration-[200ms]'></div>
                            <div className='flex flex-row items-center justify-center gap-[1240px]'> 
                                <div className="flex flex-row items-center justify-center gap-[5px]">
                                    <h1 className="text-black font-semibold text-lg">2024, All Rights Reserved</h1>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-[35px] cursor-pointer'>
                                    <FaGithub className="text-black font-semibold text-4xl cursor-pointer"/>
                                    <FaTwitter className="text-black font-semibold text-4xl cursor-pointer"/>
                                    <FaLinkedin className="text-black font-semibold text-4xl cursor-pointer"/>
                                    <RiInstagramFill className="text-black font-semibold text-4xl cursor-pointerl"/>
                                </div>
                            </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Residential
