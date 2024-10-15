
const Giving = () => {
  return (
    <div className="backdrop-blur-xl bg-black/50 w-[75vh] h-[32vh] rounded-lg duration-[350ms] flex flex-col items-center justify-start border-[2px]  border-white border-opacity-0 hover:border-opacity-100">
      <div className="flex flex-col items-start justify-center gap-[10px] p-5  cursor-pointer rounded-lg">
        <h1 className="text-white text-3xl tracking-[1px] font-bold">What We Offer</h1>
        <p className="text-white text-lg font-semibold leading-[32px] mt-2">Each home is unique, and so are our cleaning solutions. Our platform allows you to specify your requirements, from regular upkeep to deep cleaning tasks. Our cleaners are vetted professionals dedicated to delivering meticulous cleaning that exceeds your expectations.</p>
        <button className="text-white font-semibold hover:scale-[105%] duration-[350ms]  text-md uppercase bg-gradient-to-br from-green-400 to-[#2aff5f] p-3 w-[160px]  ">Learn More</button>
      </div>
    </div>
  )
}

export default Giving
