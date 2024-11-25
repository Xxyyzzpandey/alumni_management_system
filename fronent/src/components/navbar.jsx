import { Link } from "react-router-dom";
import {Cardsliper} from "./eventCard.jsx"
import { useRecoilState, useRecoilValue } from "recoil";
import {user,isLogedin} from "../atoms/atoms.js"
import axios from "axios";


function Navbar(){
const [loginuser,setloginuser]=useRecoilState(user);
  const [logiedin,setlogiedin]=useRecoilState(isLogedin)

  const handleLogout=async(e)=>{
    e.preventDefault();
    if(logiedin===false){
      alert("login first")
    }else{
    try{
    const response=await axios.post("http://localhost:3000/api/logout",{},{withCredentials: true})
    if(response.status===200){
      setlogiedin(false)
      setloginuser("")
      alert("logout successfull");
    }
  }catch(error){
     alert("server problem")
  }
   }
  }

    return(
    <>
        {/* <!-- Section 1 --> */}
   <section className="w-full px-8 text-gray-700 bg-gray-300">
    <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
            <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">UIET ALUMNI<span className="text-indigo-600">.</span></span>
            </a>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                <Link to="/" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</Link>
                <Link to="/aboutus"  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">About Us</Link>
                <Link to="/ourAlumni" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Our Alumni</Link>
                <Link to="/contactus" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Contact Us</Link>
                <Link to="/registeralumni" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Register as Alumni</Link>
            </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            {/* <Link to="/signin"  className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                Sign in
            </Link > */}
            {/* <Link to="/signup"  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                Sign up
            </Link> */}
            <div className="relative inline-block text-left">
        <div className="group">
        <button type="button"
            className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            {logiedin?<p>{loginuser.username}</p>:<p>signin</p>}
            {/* <!-- Dropdown arrow --> */}
            <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
        </button>

        {/* <!-- Dropdown menu --> */}
        <div
            className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div className="py-1">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Profile</Link>
                <Link to="/signin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign in</Link>
                <Link to="/registerEvent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Register event</Link>
                <button  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLogout}>Sign out</button>
            </div>
        </div>
    </div>
</div>
        </div>
    </div>
</section>
</>)
}

export {Navbar}
