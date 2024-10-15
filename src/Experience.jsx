
const Experience = () => {
  return (
    <div className="backdrop-blur-xl bg-black/50 w-[75vh] h-[32vh] rounded-lg duration-[350ms] flex flex-col border-[2px]  border-white border-opacity-0 hover:border-opacity-100 items-center justify-start">
      <div className="flex flex-col items-start justify-center gap-[10px] p-5 duration-[325ms] cursor-pointer rounded-lg">
        <h1 className="text-white text-3xl tracking-[1px] font-bold">Your Experience</h1>
        <p className="text-white text-lg font-semibold leading-[32px] mt-2">At Tidy Touch, we streamline the residential cleaning experience. Simply visit our website, book a cleaning session, and our platform connects you with a skilled cleaner who meets your specific needs. We handle the logistics so you can enjoy a clean home hassle-free.</p>
        <button className="text-white font-semibold hover:scale-[105%] duration-[350ms]  text-md uppercase bg-gradient-to-br from-green-400 to-[#2aff5f] p-3 w-[160px]  ">Learn More</button>
      </div>
    </div>
  )
}

export default Experience
