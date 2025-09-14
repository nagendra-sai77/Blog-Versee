const SignUp = () => {
  return (
    <div className="flex flex-col  items-center mt-10 gap-5">
        <h1 className="font-bold text-4xl text-blue-500">Join BlogVerse</h1>
        <p className="text-xl text-neutral-500 text-center font-semibold">Create your account <br />and start your Blogging journey today</p>
        <form className="flex flex-col border-2 border-black w-1/3 p-10 gap-5 rounded-2xl">
            <div className="w-[90%] flex flex-col gap-2">
                <p>Full Name</p>
                <input type="text" placeholder="Enter your full Name" className="b-2 border-b-gray-400 w-full py-2 px-2 rounded-2xl border-2 focus:outline-none focus:border-cyan-600"/>
            </div>
            <div className="w-[90%] flex flex-col gap-2">
                <p>Email</p>
                <input type="email" placeholder="Enter your Email" className="b-2 border-b-gray-400 w-full py-2 px-2 rounded-2xl border-2 focus:outline-none focus:border-cyan-600"/>
            </div> <div className="w-[90%] flex flex-col gap-2">
                <p>Password</p>
                <input type="password" placeholder="Enter Password" className="b-2 border-b-gray-400 w-full py-2 px-2 rounded-2xl border-2 focus:outline-none focus:border-cyan-600"/>
            </div> <div className="w-[90%] flex flex-col gap-2">
                <p>Confirm Password</p>
                <input type="password" placeholder="Conform Password" className="b-2 border-b-gray-400 w-full py-2 px-2 rounded-2xl border-2 focus:outline-none focus:border-cyan-600"/>
            </div>
            <div className="flex gap-2 border-2 border-gray-400 w-[90%] items-center justify-center p-2 rounded-2xl">
                <input type="checkbox"  className=""/>
                <p>I agree to your terms</p>
                
            </div>
            <button className="items-center justify-center gap-2 bg-fuchsia-500 font-semibold p-2 rounded-2xl text-amber-50 w-[90%]">Create Account</button>
            <p className="font-semibold text-gray-400">Already have an account?<span className="text-fuchsia-500">Sign in here</span></p>
            <button className="font-semibold text-gray-600 hover:bg-blue-500 border-2 rounded-2xl bg-blue-300 w-[90%]">Back toHome</button>
        </form>
    </div>
  )
}

export default SignUp   