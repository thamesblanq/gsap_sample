
const Content = () => {
  return (
    <main className="flex items-center justify-between w-full h-screen">
        <section className="flex items-left justify-center h-screen w-[30vw] flex-col ml-[200px] mr-[50px]">
            <div className="mb-4">
                <h1 className="font-kanit text-white font-bold text-3xl overflow-hidden">Hard work beats talent</h1>
                <br/>
                <h1 className="font-kanit text-white font-bold text-3xl overflow-hidden">when talent does not work hard</h1>
            </div>
           
            <p className="text-[#f0f0f0] text-xs font-poppins w-[80%] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </p>

            <button className="font-kanit p-4 text-white bg-[#0c0c0c] rounded-3xl w-[150px] mt-[20px] capitalize">Explore</button>

        </section>

    </main>
  )
}

export default Content