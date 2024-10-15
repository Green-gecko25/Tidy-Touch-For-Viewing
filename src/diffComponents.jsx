
import Experience from './Experience'
import Giving from './Giving';
import Promise from './Promise'
import { useState } from "react";
const diffComponents = () => {
    const [active, setActive] = useState("FirstCard")
  return (
    <div className='flex flex-row items-center justify-center w-full h-[80vh] bg-white'>
            <div className='flex flex-col  gap-[15px] h-[80vh] w-[50%] p-[25px]'>
                <div className='flex flex-col items-start translate-y-[100px]'>
                    <h1 className='text-black font-bold tracking-[1px] text-6xl'>Residential Cleaning Services</h1>
                    <p className='text-black font-semibold text-2xl mt-5 leading-[32px]'>Bringing Cleaners Closer to Home: <span className='text-green-400'>Tidy Touch</span> highlights local service growth in the cleaning industry, offering community-based employment and enhanced convenience. This initiative supports economic development and personalized cleaning solutions for homes and businesses.</p>
                    <div className='flex flex-col group'> 
                    <h2 className='uppercase text-black  font-semibold duration-[350ms] text-2xl hover:cursor-pointer mt-3'>Learn More</h2>
                    <div className='bg-black h-[3px] w-[0%]  duration-[350ms] group-hover:w-[100%]'></div>
                    </div>
                </div>
                <nav className='flex items-start gap-[25px]  flex-col translate-y-[125px] duration-[350ms]'>
                    <button onClick={() => setActive("FirstCard")} className='text-black font-semibold  hover:text-green-500 bg-slate-50  rounded-md p-[10px_25px] text-2xl tracking-[1px]  duration-[350ms] w-[300px] drop-shadow-[4px_7px_7px_rgba(0,0,0,0.09)]  hover:scale-[105%]'>
                        <a className='poop' >Your Experience</a>
                    </button>
                    <button onClick={() => setActive("SecondCard")} className='text-black font-semibold hover:text-green-500 bg-slate-50 rounded-md p-[10px_25px] text-2xl tracking-[1px]  duration-[350ms] w-[300px] drop-shadow-[4px_7px_7px_rgba(0,0,0,0.09)]  hover:scale-[105%]'>
                        <a>What We Give</a>
                    </button >
                    <button onClick={() => setActive("ThirdCard")} className='text-black font-semibold hover:text-green-500 bg-slate-50 rounded-md p-[10px_25px] text-2xl tracking-[1px]  duration-[350ms] w-[300px] drop-shadow-[4px_7px_7px_rgba(0,0,0,0.09)] hover:scale-[105%]'>
                        <a>Insurance Policy</a>
                    </button>
                </nav>
            </div>
            <div className="gap-[40px] duration-[350ms] w-[50%] h-[80vh] bg-[url('https://images.unsplash.com/photo-1494380982332-dfc36fbfece6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex items-center justify-center">
                {active === "FirstCard" && <Experience />}
                {active === "SecondCard" && <Giving/>}
                {active === "ThirdCard" && <Promise/>}

            </div>
    </div>
  )
}

export default diffComponents
