import { FaPhone } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";


const Contact = () => {
  return (
    <div className=" h-[92vh] w-full flex flex-row items-center justify-center bg-slate-100 gap-[45px]">
        <div className="flex flex-col items-start justify-center translate-y-[-10px]">
            <h1 className="font-semibold text-stone-800 text-7xl tracking-[-1px]">Get in Touch</h1>
            <div className="h-[5px] bg-green-400 w-[195px] duration-[350ms] mt-4"></div>
            <div className="mt-5 flex flex-col items-center justify-center bg-slate-200 w-[575px] duration-[350ms] h-[72vh] rounded-[15px] 
            drop-shadow-[12px_10px_5px_rgba(0,0,0,0.03)] border-[3px] border-slate-300/20">
                 <div className="flex flex-col items-center justify-center gap-[28px]">
                    <input type="Text" placeholder="Your Name:" className="bg-white p-7 rounded-[500px] w-[500px] h-[65px] text-xl tracking-[1px]"/>
                    <input type="Email" placeholder="Your Email:" className="bg-white p-7 rounded-[500px] w-[500px] h-[65px] text-xl tracking-[1px]"/>
                    <textarea type='Message' placeholder="Your Message:" className=" p-[20px_25px] rounded-[16px] w-[500px] h-[210px] text-xl tracking-[1px]"/>
                 </div>
                 <div className="translate-x-[-190px] flex items-center justify-center translate-y-[35px] border-[2px] rounded-[500px]  border-white border-opacity-0 hover:border-opacity-100 duration-[350ms]">
                    <button className="text-white font-semibold uppercase tracking-[3px] w-[130%]  text-xl pl-[25px]  duration-[150ms] rounded-[500px] pr-[25px] bg-gradient-to-l from-green-500 to-emerald-600 p-3">Send</button>
                 </div>
            </div>
        </div>
        <div className="w-[500px] h-[235px] bg-green-400 translate-y-[-166px] rounded-[8px] flex flex-col items-start justify-start p-5">
            <div className="text-4xl tracking-[1px] text-white font-normal">Our Contact</div>
            <div className="flex flex-col items-start justify-center gap-[15px] translate-y-[18px]">
                <div className="flex items-center justify-center gap-[8px]"><FaPhone className="text-white text-lg"/><p className="text-white hover:underline cursor-pointer font-semibold tracking-wider text-lg">704-286-6280</p></div>
                <div className="flex items-center justify-center gap-[8px]"><AiFillMail className="text-white text-2xl"/><p className="text-white hover:underline cursor-pointer  font-semibold tracking-wider text-lg">support@charlottestidytouch.com</p></div>
                <div className="flex items-center justify-center gap-[8px]"><IoLocationSharp className="text-white text-2xl"/><p className="text-white hover:underline cursor-pointer  font-semibold tracking-wider text-lg">Charlotte, NC</p></div>
            </div>
        </div>
    </div>
  )
}

export default Contact
