import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import { BadgePlus } from 'lucide-react';
import { Lock } from 'lucide-react';
import { ArrowLeftToLine } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { Eye } from 'lucide-react';
import { useState } from "react";


const SignUp = () => {
    const[showPassword,setShowPassword] =useState(false)
    const[showConfirmPassword,setShowConfirmPassword] =useState(false)
    const[formData,setformData] = useState(
        {
            fullName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    )
    const[errors,setErrors]=useState(
        {
            fullName:"",
            email:"",
            password:"",
            confirmPassword:""  
        }
    )
    
    const[error,setError]=useState('')
    const[success,setSuccess]=useState('')
    const handlePassword = () =>{
        setShowPassword((password)=>!password)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!formData.fullName) {
            newErrors.fullName = "Please enter your full name";
        }
        if (!formData.email) {
            newErrors.email = "Please enter your email";
        }
        if (!formData.password) {
            newErrors.password = "Please enter your password";
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Your passwords do not match";
        }
    
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors); // Correctly update the errors state
        } else {
            setSuccess("Account created successfully");
            setformData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            setErrors({}); // Clear errors
        }
    };

        
            
        
       

    const handleConfirmPassword = () =>{
        setShowConfirmPassword((password)=>!password)
    }
    const handleChange=(e)=>{
        setErrors("")
        setSuccess("")
        setformData((formData)=> (
            {
                ...formData,
                [e.target.name]:e.target.value
                
            }
        )
        )
        setErrors((errors)=> (
            {
                ...errors,
                [e.target.name]:""
                
            }
        )
        )
 
    }

  return (
    <div>
        <NavBar/>
    <div className="flex flex-col  items-center mt-10 gap-5">
        <h1 className="font-bold text-md md:text-4xl text-blue-500">Join BlogVerse</h1>
        <p className="text-sm md:text-xl text-neutral-500 text-center font-semibold">Create your account <br />and start your Blogging journey today</p>
        <form onSubmit={handleSubmit} className="flex flex-col border-2 border-black lg-w-[90%] sm-w-full md:w-1/3  p-10 gap-5 rounded-2xl ">
            <div className="lg-w-[90%] sm-w-full md:w-[95%]  flex flex-col gap-2">
                <p>Full Name</p>
                <input 
                
                value={formData.fullName}
                onChange={handleChange}
                name="fullName"
                type="text" placeholder="Enter your full Name" className="b-2 border-b-gray-400 w-full py-2 px-2 rounded-2xl border-2 focus:outline-none focus:border-cyan-600"/>
            {errors.fullName && <p>{errors.fullName}</p>}
            </div>
            <div className="lg-w-[90%] sm-w-full md:w-[95%] flex flex-col gap-2">
                <p>Email</p>
                <input 
                value={formData.email}
                onChange={handleChange}
                name="email"
                type="email" placeholder="Enter your Email" className="b-2 border-b-gray-400 w-full py-2 px-2 rounded-2xl border-2 focus:outline-none focus:border-cyan-600"/>
            {errors.email && <p>{errors.email}</p>}
            </div> <div className="lg-w-[90%] sm-w-full md:w-[95%]  flex flex-col gap-2">
               <p>Password</p>
                
               <div className="relative ">
                <input
                value={formData.password} 
                onChange={handleChange}
                name="password"
                type={showPassword?"password":"text"} 
                placeholder="Enter Password" className="b-2 border-b-gray-400 w-full py-2 px-2 rounded-2xl border-2 focus:outline-none focus:border-cyan-600 pl-10"/>
                <Lock className=" absolute top-2 pl-2"/>
               <p onClick={handlePassword}> {showPassword ? <Eye className="absolute top-3 right-2"/>:<EyeOff className="absolute top-3 right-2"/>}</p>
            </div> 
            {errors.password && <p>{errors.password}</p>}
            </div><div className="lg-w-[90%] sm-w-full md:w-[95%]   flex flex-col gap-2">
                <p>Confirm Password</p>
                <div className="relative">
                <input
                value={formData.confirmPassword}
                onChange={handleChange} 
                name="confirmPassword"
                type={showConfirmPassword?"password":"text"} 
                placeholder="Conform Password" className="b-2 border-b-gray-400 w-full py-2 px-2 rounded-2xl border-2 focus:outline-none focus:border-cyan-600 pl-10"/>
                <Lock className=" absolute top-2 pl-2"/>
                <p onClick={handleConfirmPassword}> {showConfirmPassword ? <Eye className="absolute top-3 right-2"/>:<EyeOff className="absolute top-3 right-2"/>}</p>
                </div>
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </div>
            <div className="flex gap-2 border-2 border-gray-400 lg-w-[90%] sm-w-full md:w-[95%]  items-center justify-center p-2 rounded-2xl">
                <input type="checkbox"  className=""/>
                <p>I agree to your terms</p>
                
            </div>

            <button type="submit" className="items-center flex  justify-center gap-5 bg-fuchsia-500 font-semibold p-2 rounded-2xl text-amber-50 lg-w-[90%] sm-w-full md:w-[95%] "><BadgePlus /><p>Create Account</p></button>
            {/* {errors && <p className="text-red-500">{errors}</p>} */}
            {success && <p className="text-green-500">{success}</p>}
            <p className="font-semibold  text-gray-400 text-sm md:xl">Already have an account?<Link to="/signin" className="text-fuchsia-500 text-sm">Sign in here</Link></p>
            <Link to="home" className=" text-center font-semibold text-gray-600 hover:bg-blue-500 border-2 rounded-2xl bg-blue-300 lg-w-[90%] sm-w-full md:w-[95%] flex justify-center">    <ArrowLeftToLine />
            <p>Back to Home</p></Link>
        </form>
    </div>
    </div>
  )
}


export default SignUp   