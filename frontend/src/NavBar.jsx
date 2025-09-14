
const NavBar = () => {
    return(
        <div className="flex justify-around h-16  items-center border-2 border-black">
            <h1 className="text-xl font-bold">BlogVerse</h1>
            <button className="text-2xl text-gray-900 border-2 bg-blue-100 hover:bg-blue-500 px-4 rounded-2xl">Home</button>
           <div className="text-2xl flex gap-5 font-semibold"><button className="bg-amber-100 cursor-pointer hover:bg-cyan-400 border-2 rounded-2xl px-4">Signin</button>
            <button className=" bg-fuchsia-300 cursor-pointer hover:bg-fuchsia-500 border-2 rounded-2xl px-4">Signup</button>
            </div> 

    
        </div>
    )
}
export default NavBar