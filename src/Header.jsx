

const Header = () => {
  return (
    <div className="absolute top-0 flex items-center justify-around h-[100px] w-full">
        <div><h1 className="text-xl font-bold text-[#f0f0f0] font-kanit">Logo</h1></div>
        <div className="flex gap-4">
            <a href="#" className="text-white text-sm font-kanit ml-[20px]">About</a>
            <a href="#" className="text-white text-sm font-kanit ml-[20px]">Journal</a>
            <a href="#" className="text-white text-sm font-kanit ml-[20px]">Contact</a>
        </div>
    </div>
  )
}

export default Header