import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Eye } from 'lucide-react';
const SignIn = () => {
    return(
        <div>
            <NavBar/>
    <div className="flex flex-col  items-center h-screen gap-5 ">
        <div className="border-2 mt-30 rounded-2xl p-5 items-center ">
        <h1 className="font-bold text-2xl text-center " >SignIn</h1>
        <p className="font-semibold text-xl text-center">Access Your Account</p>
        <form className="mt-5">
        <div className="w-[90%] flex flex-col gap-2">
            <h1 >Email Address</h1>
            <input type="email" placeholder="Enter your Email" className="b-2 border-b-gray-400 w-full py-2 px-2 rounded-2xl border-2 focus:outline-none focus:border-cyan-600"/>
        </div>
        <div className="w-[90%] flex flex-col gap-2" >
            <h1>Password</h1>
            <div className="relative">
            <input type="password" placeholder="Enter password"className="b-2 border-b-gray-400 w-full py-2 px-2 rounded-2xl border-2 focus:outline-none focus:border-cyan-600" />
            <Eye className="absolute top-3 right-2"/>
            </div></div>
        <div className="flex  mt-5   items-center justify-center p-2 rounded-2xl">
                <input type="checkbox"  className=""/>
                <p>Remember me</p>
                <p className="text-cyan-500 hover:text-fuchsia-600 ml-5 hover:cursor-pointer">forgot password?</p>
                
            </div>
            <div><button className="items-center justify-center gap-2 bg-blue-400 font-semibold p-2 rounded-2xl text-amber-50 w-[90%]">Sign</button></div>
            <div>
            <p className="font-semibold text-gray-400 mt-10 mb-2">Dont Have an Account?<Link to ="/signup" className="text-blue-400 hover:text-blue-700 hover:cursor-pointer">create one here</Link></p>
            </div>
        </form>
        </div>
    </div>
    </div>
    )
}
export default SignIn;