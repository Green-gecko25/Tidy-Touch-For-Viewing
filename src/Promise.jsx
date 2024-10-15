
const Promise = () => {
  return (
    <div className="backdrop-blur-xl bg-black/50 w-[75vh] h-[32vh] rounded-lg duration-[350ms] flex flex-col items-center justify-start border-[2px]  border-white border-opacity-0 hover:border-opacity-100">
      <div className="flex flex-col items-start justify-center gap-[10px] p-5  cursor-pointer rounded-lg">
        <h1 className="text-white text-3xl tracking-[1px] font-bold">Insurance Policy</h1>
        <p className="text-white text-lg font-semibold leading-[32px] mt-2">Tidy Touch ensures consistent excellence in residential cleaning. With our rigorous vetting process and customer-centric approach, we match you with cleaners who uphold our high standards. Enjoy peace of mind knowing your home is in capable hands with Tidy Touch.</p>
        <button className="text-white font-semibold hover:scale-[105%] duration-[350ms]  text-md uppercase bg-gradient-to-br from-green-400 to-[#2aff5f] p-3 w-[160px]  ">Learn More</button>
      </div>
    </div>
  )
}

export default Promise
