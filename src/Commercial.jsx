import { IoIosNotifications } from "react-icons/io";
import { AiOutlineFileProtect } from "react-icons/ai";
import { MdEditCalendar } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import logo from './Logo.jpg'
const Commercial = () => {
  return (
    <div className="w-full h-[395vh]">
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="flex items-center justify-center h-[100vh] w-full bg-gradient-to-b from-slate-100 to-white">  
            <div className="flex flex-col items-start p-12">
                <h1 className="text-6xl font-bold leading-[85px] tracking-[3px]">Elevate Your<br></br> Workplace<br></br> with <br></br><span className="text-green-400">Tidy Touch</span></h1>
                <p className="text-lg leading-[35px] font-semibold">At Tidy Touch, were more than a cleaning company. We connect cleaners with businesses, making Charlotte cleaner and more inviting. Our app simplifies marketing for cleaners, showcasing their expertise effortlessly. Join our community dedicated to preserving Charlottes charm.</p>
                <div className="flex items-center justify-center gap-[25px]">
                <button className="text-black font-semibold  hover:scale-[105%]  text-md duration-[350ms] uppercase border-black bg-gray-100 backdrop-blur-lg p-3 w-[160px]   ">Book Now</button>
                <button className="text-white font-semibold hover:scale-[105%] duration-[350ms]  text-md uppercase bg-gradient-to-br from-green-400 to-[#2aff5f] p-3 w-[160px]  ">Learn More</button>
                </div>
            </div>
            <div className="flex flex-col items-start">
                  <div className="bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-[95vh] h-[75vh] bg-cover bg-right rounded-l-[50px] translate-y-[85px] translate-x-[120px]">
                  </div>
                  <div className="bg-white w-[750px] gap-[25px] translate-y-[-220px] rounded-[10px] translate-x-[35px] h-[12vh] drop-shadow-[3px_7px_9px_rgba(0,0,0,0.13)] flex items-center pl-[10px] justify-start">
                    <input type="text" placeholder="Enter Your Location" className="translate-x-[10px] text-2xl font-normal border-[2px] border-black/30 w-[500px] p-[10px_32px] rounded-[4px]"/>
                    <button className="text-2xl font-normal tracking-[5px] uppercase text-white bg-stone-800 p-[12px_28px] rounded-none  hover:text-black hover:bg-slate-100 duration-[350ms]">Enter</button>
                  </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center h-[130vh] w-full bg-white">
              <div className="flex items-center justify-center h-[3vh] w-full mb-4 translate-y-[-95px]">
                  <p className="font-semibold text-2xl text-green-500 bg-green-100 p-1 pl-[20px] pr-[20px] rounded-lg">Our Features</p>
              </div>
              <div className="w-full h-[4vh] translate-y-[-95px]"></div>
              <div className="flex flex-col items-center justify-center h-[3vh] w-full translate-y-[-95px]">
                  <h1 className="text-6xl font-bold tracking-[1px]">Our Key Features</h1>
                  <p className="text-center translate-y-3 text-lg font-semibold text-stone-700">Tidy Touches Promise connects clients with cleaning services and skilled cleaners efficiently. Our mission is to ensure reliable, <br></br>seamless connections for clean and satisfying spaces.</p>
              </div>
              <div className="flex flex-row items-center justify-center translate-y-[100px] gap-[75px] ">
                  <div className="flex flex-col items-start justify-center p-5 translate-y-[-20px] gap-[90px] translate-x-[-105px] overflow-hidden">
                        <div className="flex flex-col items-start mb-3">
                          <IoIosNotifications className="bg-green-200 text-green-500 text-5xl p-1 rounded-[500px]"/>
                          <h2 className="text-2xl font-semibold text-black translate-y-1">Constant Updates and System Checks</h2>
                          <p className="text-sm mt-2 font-semibold  text-stone-800 leading-[24px]">Get instant notifications for cleaning schedule changes through our real-time system, <br></br>ensuring seamless adjustments.</p>
                        </div>
                        <div className="flex flex-col items-start mb-3">
                          <AiOutlineFileProtect className="bg-green-200 text-green-500 text-5xl p-1 rounded-[500px]"/>
                          <h2 className="text-2xl font-semibold text-black translate-y-1">Proactive Maintenance</h2>
                          <p className="text-sm mt-2 font-semibold text-stone-800 leading-[24px]">At Tidy Touches Promise, we ensure clean spaces with top-notch satisfaction through thorough <br></br>inspections and prompt action.</p>
                        </div>
                        <div className="flex flex-col items-start mb-3">
                          <MdEditCalendar className="bg-green-200 text-green-500 text-5xl p-1 rounded-[500px]"/>
                          <h2 className="text-2xl font-semibold text-black translate-y-1">Seasonal Needs</h2>
                          <p className="text-sm mt-2 font-semibold text-stone-800 leading-[24px]">At Tidy Touches Promise, we adjust cleaning services to meet seasonal demands and changing priorities, <br></br>ensuring pristine spaces effectively.</p>
                        </div>
                  </div>
                  <div className="w-[85vh] h-[75vh] bg-white flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center gap-[16px] ">
                            <div className="flex flex-row items-center justify-center gap-[16px] ">
                              <div className="w-[42vh] h-[35vh] bg-[url('https://images.unsplash.com/photo-1718220268527-4477fd170775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center rounded-[25px] cursor-pointer">

                              </div>
                              <div className="w-[42vh] h-[35vh] bg-[url('https://images.unsplash.com/photo-1594235046256-90e5572fd5f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-right rounded-[25px] cursor-pointer">

                              </div>
                            </div>
                            <div className="flex items-center justify-center ">
                              <div className="w-[85vh] h-[38vh] duration-[350ms]  bg-[url('https://images.unsplash.com/photo-1464029902023-f42eba355bde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-bottom rounded-[25px] cursor-pointer">

                              </div>
                            </div>
                      </div>
                  </div>
              </div>
        </div>  
        <div className="flex flex-col items-center justify-center h-[100vh] w-full bg-white">
            <div className=" flex-col items-center justify-center">
                <div>
                    <h1 className="text-5xl font-bold text-black text-center leading-[55px]">We are Trusted by Charlotte <br></br>Businesses</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-[50px] ">
                  <div className="flex flex-col items-start justify-center p-6 w-[875px] translate-y-[-55px]">
                      <h2 className="text-black font-bold text-3xl mb-6">They beauty of <span className="text-green-400">Tidy Touch</span></h2>
                      <p className="text-left text-lg leading-[35px] font-semibold text-black translate-y-[15px]">Imagine a streamlined experience where finding the perfect cleaner for your business is effortless. Tidy Touch eliminates the hassle of searching by showcasing cleaners expertise and reliability through our user-friendly platform. Whether you run a bustling office, a vibrant storefront, or a welcoming restaurant, we cater to your specific cleaning needs with meticulous attention to detail.</p>
                      <div className="flex items-center justify-center gap-[25px] mt-6 translate-y-[35px]">
                      <button className="text-black font-semibold  hover:scale-[105%]  text-md duration-[350ms] uppercase border-black bg-gray-100 backdrop-blur-lg p-3 w-[160px]   ">Book Now</button>
                      <button className="text-white font-semibold hover:scale-[105%] duration-[350ms]  text-md uppercase bg-gradient-to-br from-green-400 to-[#2aff5f] p-3 w-[160px]  ">Learn More</button>
                      </div>
                      <div className="flex flex-row items-center justify-center gap-[45px] mt-5 translate-y-[45px]">
                          <div className="flex flex-col items-center justify-center">
                          <h1 className="text-black font-bold text-5xl">250+</h1>
                          <p className="text-xl text-gray-600 font-semibold tracking-[1px]">Reviews</p>
                          </div>
                          <div className="flex flex-col items-center">
                          <h1 className="text-black font-bold text-5xl">25+</h1>
                          <p className="text-xl text-gray-600 font-semibold tracking-[1px]">Partners</p>
                          </div>
                          <div className="flex flex-col items-center">
                          <h1 className="text-black font-bold text-5xl">150K+</h1>
                          <p className="text-xl text-gray-600 font-semibold tracking-[1px]">Money Raised</p>
                          </div>
                      </div>
                  </div>
                  <div className="group duration-[350ms] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1474377207190-a7d8b3334068?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-[80vh] h-[70vh] translate-y-[50px] bg-cover bg-center rounded-[15px]">
                  </div>
                </div>
            </div>
        </div>
        <div className="h-[2px] bg-slate-200 w-[100%]"></div>
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

export default Commercial
