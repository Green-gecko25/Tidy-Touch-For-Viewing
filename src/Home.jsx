import { BsPersonCircle } from "react-icons/bs";
import { GiHouse } from "react-icons/gi";
import { GiFamilyHouse } from "react-icons/gi";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import logo from './Logo.jpg'
const Home = () => {
  return (
    <div className="w-full h-[290vh]">
        <div className="flex flex-col items-center justify-center">
           <div className=" w-full h-[80vh] bg-[url('https://images.unsplash.com/photo-1487700160041-babef9c3cb55?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
                <div className="w-full bg-black/50 h-[80vh] flex flex-col items-center justify-center">
                    <h1 className="text-center font-bold translate-y-[40px] text-white text-[56px] leading-[70px]">Charlotte’s <span className="text-green-400">Tidy Touch</span>: Cleaning done <br></br>right, <span className="text-green-400">Book your Cleaning Today!</span></h1>
                    <p className="text-white font-semibold text-[21px] leading-10 text-center tracking-[2px] translate-y-[55px]">“Experience Charlotte’s Tidy Touch: where excellence meets every corner. Book today for pristine <br></br>cleanliness tailored to your needs—a spotless home and peace of mind await, guaranteed <br></br>satisfaction included.”</p>
                    <div className="flex flex-row items-center justify-center gap-[25px] translate-y-[85px]">
                    <button className="text-white font-semibold  hover:scale-[105%]  text-md duration-[350ms] uppercase border-white/30 border-[1px] rounded-[5px] bg-black/10 backdrop-blur-xl p-4 w-[160px]   ">Book Now</button>
                        <button className="text-white font-semibold hover:scale-[105%] duration-[350ms]  text-md uppercase bg-gradient-to-br from-green-400 to-[#26cc50] p-4 w-[160px]  ">Learn More</button>
                    </div>
                    <div className="w-[1175px] h-[12vh] bg-white translate-y-[200px] p-2 rounded-lg drop-shadow-[3px_7px_6px_rgba(0,0,0,0.09)] pl-10">
                        <div className="flex flex-row items-center justify-center gap-[75px] translate-y-[24px]">
                            <div className="flex items-center justify-center gap-[15px]">
                                <button className="duration-[250ms] active:scale-[110%] uppercase text-black font-semibold text-lg bg-slate-200 p-2  w-[150px]">Commercial</button>
                                <button className="duration-[250ms] active:scale-[110%] uppercase text-white font-semibold text-lg bg-gradient-to-br from-green-400 to-[#2aff5f] p-2  w-[150px]">Residential</button>
                            </div>
                            <div className="flex items-center justify-center gap-[15px]">
                                <BsPersonCircle className="absolute translate-x-[-265px] text-gray-400 text-[25px]"/><input type="text" placeholder="Your Name" className="font-normal text-lg text-gray-400  p-2 rounded-none w-[280px] pl-[45px] border-[2px] border-black/30"/>
                                <GiHouse className="absolute translate-x-[30px] text-gray-400 text-[25px]" /><input type="text" placeholder="Square Space" className="font-normal text-lg text-gray-400  p-2 rounded-none w-[280px] pl-[45px] border-[2px] border-black/30"/>
                            </div>
                            <div className="flex items-center justify-center translate-x-[-45px]"> 
                                    <button className="font-semibold text-lg drop-shadow-[3px_7px_9px_rgba(0,0,0,0.13)] text-white bg-gradient-to-br from-stone-600 to-black p-2 rounded-none tracking-[2px] uppercase w-[140px] active:scale-[110%] duration-[200ms]">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
  
           <div className="w-full h-[130vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-slate-100">
                <div className="flex flex-row items-center justify-center gap-[50px] translate-y-10">
                    <div className="flex items-center gap-[25px] justify-center ">
                        <div className="flex flex-col gap-[25px] items-center justify-center duration-[350ms]">
                            <div className="group hover:cursor-pointer rounded-[25px] bg-[url('https://images.unsplash.com/photo-1633878353628-5fc8b983325c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover w-[32vh] h-[40vh] duration-[350ms]">
                            <div className="duration-[350ms] group-hover:opacity-100 opacity-0 w-full h-[40vh] bg-gradient-to-b from-white/0 to-black/30 rounded-[25px]">
                                <h1 className="font-semibold text-white leading-[35px] text-xl p-3 translate-y-[100px]">
                                We care about the <br></br>environment and your <br></br>health. Our cleaning <br></br>products <br></br>are eco-friendly and <br></br>safe for your family and <br></br>pets.
                                </h1>
                            </div>
                            </div>
                            <div className="group hover:cursor-pointer rounded-[25px] bg-[url('https://images.unsplash.com/photo-1565363887715-8884629e09ee?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-top w-[32vh] h-[32vh] duration-[350ms]">
                            <div className="duration-[350ms] group-hover:opacity-100 opacity-0 w-full h-[32vh] bg-gradient-to-b from-white/0 to-black/30 rounded-[25px]">
                                <h1 className="font-semibold text-white leading-[35px] text-xl p-3 translate-y-[100px]">
                                See the Residential <br></br>side of the business. <br></br>See how we handle <br></br>homes of the Charlotte <br></br>residents.
                                </h1>
                            </div>
                            </div>
                        </div>   
                        <div className="flex flex-col gap-[25px] items-center justify-center duration-[350ms]">
                            <div className="group hover:cursor-pointer rounded-[25px] bg-[url('https://images.unsplash.com/photo-1588148208486-a3b096a44537?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-top w-[32vh] h-[42vh] duration-[350ms]">
                            <div className="duration-[350ms] group-hover:opacity-100 opacity-0 w-full h-[42vh] bg-gradient-to-b from-white/0 to-black/30 rounded-[25px]">
                                <h1 className="font-semibold text-white leading-[35px] text-xl p-3 translate-y-[150px]">
                                Explore the commercial <br></br>side of the business. <br></br>Discover how we <br></br>manage businesses <br></br>and facilities across <br></br>Charlotte.
                                </h1>
                            </div>
                            </div>
                            <div className="group hover:cursor-pointer rounded-[25px] bg-[url('https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center w-[32vh] h-[45vh] duration-[350ms]">
                            <div className="duration-[350ms] group-hover:opacity-100 opacity-0 w-full h-[45vh] bg-gradient-to-b from-white/0 to-black/30 rounded-[25px]">
                                <h1 className="font-semibold text-white leading-[35px] text-xl p-3 translate-y-[180px]">
                                Observe on how we <br></br>connect our clients <br></br>with others in <br></br>Charlotte, to foster <br></br>a closer connected <br></br>community.
                                </h1>
                            </div>
                            </div>
                        </div>  
                    </div> 
                    <div className="flex flex-col  items-enter justify-center">
                        <p className="font-bold text-stone-700 text-2xl">Take the Next Step</p>
                        <h1 className="text-5xl font-bold leading-[65px]">See <br></br>through our <br></br>vision <br></br>through <br></br>the <br></br>lenses of these<br></br> graphics, of <br></br><span className="text-green-400">Tidy Touch.</span></h1>
                    </div>
                </div>
           </div>
           <div className="w-full h-[70vh] flex flex-row gap-[45px] items-center justify-center bg-slate-100">
                <div className="flex flex-col items-start translate-y-[-75px]">
                    <div className="flex flex-row items-center justify-center translate-y-[75px] translate-x-8 p-5 gap-[25px]">
                        <BsFillBuildingsFill  className="text-5xl"/>
                        <h1 className="text-stone-900 font-semibold text-4xl">Commercial</h1>
                    </div>
                    <p className="p-5 text-stone-900 text-2xl font-semibold translate-x-8 leading-[45px] translate-y-[75px] w-[105%]">“Explore Charlotte’s Tidy Touch for commercial cleaning solutions tailored to perfection. Our dedicated team ensures facilities, stores, and factories sparkle with pristine cleanliness, exceeding industry standards. From meticulous floor care to detailed surface sanitization, we deliver professional service that meets your specific business needs. Trust Charlotte’s Tidy Touch to enhance your workspace with unparalleled cleanliness and reliability. Experience the difference today—where excellence in commercial cleaning is our commitment.”</p>
                </div>
                <div className="flex flex-col items-start translate-y-[-75px]">
                    <div className="flex flex-row items-center justify-center translate-y-[75px] p-5 gap-[15px]">
                        <GiFamilyHouse className="text-5xl text-green-400"/>
                        <h1 className="text-stone-900 font-semibold text-4xl">Residential</h1>
                    </div>
                    <p className="p-5 text-stone-900 text-2xl font-semibold leading-[45px] translate-y-[75px]">“Discover Charlotte’s Tidy Touch for residential cleaning excellence that goes beyond the ordinary. Whether it’s homes, lake houses, or hotels, our meticulous team ensures every space gleams with pristine cleanliness and personalized care. From thorough room tidying to detailed bathroom sanitation, we tailor our services to meet your specific needs and exceed your expectations. Trust Charlotte’s Tidy Touch to transform your living spaces into havens of cleanliness and comfort. Experience our commitment to impeccable residential cleaning—book your service today and enjoy the peace of mind you deserve.”</p>
                </div>
           </div>
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

export default Home
