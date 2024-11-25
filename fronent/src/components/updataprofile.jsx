
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { Navigate,useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {user,isLogedin} from "../atoms/atoms.js"


function Updataprofile(){
   
    const [email,setemail]=useState("");
   const [githuburl,setgithuburl]=useState("");
   const [Linkedinurl,setLinkedinurl]=useState("");
   const [currentcompany,setcurrentcompany]=useState("");
   const [jobrole,setjobrole]=useState("");
  
   const navigate=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
           const response= await axios.post('http://localhost:3000/api/updataprofile',{email,githuburl,Linkedinurl,currentcompany,jobrole},{withCredentials:true})
           if(response.status==200){
            alert("updated successfully")
             navigate("/Home")
           }
           if(response.status==401){
            alert("field are missing ")
          }
        }catch{
            if(response.status==205){
                alert("email do not exist")
              }
            alert("something went wrong");
        }
    }

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

      if (!logiedin)
        return (
            <div class="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8 text-center">
              <div class="mb-8">
                <h2 class="mt-6 text-6xl font-extrabold text-gray-900 dark:text-gray-100">SignIn Required</h2>
              </div>
              <div class="mt-8">
                <Link to="/signin"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <svg class="mr-2 -ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18m-9-9l9 9-9 9" />
                  </svg>
                  login
                </Link>
              </div>
            </div>
            <div class="mt-16 w-full max-w-2xl">
              <div class="relative">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
   )

    return(
        <>
        <header class="w-full px-8 text-white bg-gray-700">
    <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div class="relative flex flex-col md:flex-row">
            <a href="#" class="flex items-center mb-5 font-medium text-white lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span class="mx-auto text-xl font-black leading-none text-white select-none">UIET ALUMNI<span class="text-indigo-300"></span></span>
            </a>
            <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-500">
            <Link to="/" class="mr-5 font-medium leading-6 text-gray-300 hover:text-white">Home</Link>
                <Link to="/aboutus" class="mr-5 font-medium leading-6 text-gray-300 hover:text-white">About Us</Link>
                <Link to="/ourAlumni" class="mr-5 font-medium leading-6 text-gray-300 hover:text-white">Our Alumni</Link>
                <Link to="/contactus" class="mr-5 font-medium leading-6 text-gray-300 hover:text-white">Contact Us</Link>
                <Link to="/registeralumni" class="mr-5 font-medium leading-6 text-gray-300 hover:text-white">Register as Alumni</Link>
            </nav>
        </div>

        <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
        {/* <Link to="/signin" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400">
                Sign in
            </Link>
            <Link to="/signup" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400">
                Sign up
            </Link> */}
            <div class="relative inline-block text-left">
        <div class="group">
        <button type="button"
            class="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            {logiedin?<p>{loginuser.username}</p>:<p>signin</p>}
            {/* <!-- Dropdown arrow --> */}
            <svg class="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
        </button>

        {/* <!-- Dropdown menu --> */}
        <div
            class="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div class="py-1">
                <Link to="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Profile</Link>
                <Link to="/signin" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign in</Link>
                <Link to="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLogout}>Sign out</Link>
            </div>
        </div>
    </div>
</div>
        </div>
    </div>
</header>

<div class="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
  <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
    <h2 class="text-2xl font-bold pb-5">Updata Credientials</h2>
    <form>
    <div class="mb-4">
        <label for="username" class="block mb-2 text-sm font-medium"> Registered email</label>
        <input
          type="username"
          id="username"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="updated email"
          required
          value=""
          onChange={(e)=>{setemail(e.target.value)}}/>
      </div>
      <div class="mb-4">
        <label for="email" class="block mb-2 text-sm font-medium">company</label>
        <input
          type="email"
          id="email"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="current company"
          required
          value=""
          onChange={(e)=>{setcurrentcompany(e.target.value)}}/>
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-2 text-sm font-medium">Linked Url</label>
        <input
          type="password"
          id="password"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="linked url"
          required
          value=""
          onChange={(e)=>{setLinkedinurl(e.target.value)}}/>
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-2 text-sm font-medium">Github Url</label>
        <input
          type="password"
          id="password"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="github url"
          required
          value=""
          onChange={(e)=>{setgithuburl(e.target.value)}}/>
      </div>
      <div class="mb-4">
        <label for="username" class="block mb-2 text-sm font-medium">job role</label>
        <input
          type="username"
          id="username"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="job role"
          required
          value=""
         onChange={(e)=>{setjobrole(e.target.value)}}/>
      </div>
      <div class="flex items-center justify-center mb-4">
        <button
          type="submit"
          class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
        onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
    </div>
    </div>

 {/* footer */}
 <div class="bg-gray-100">
    <div class="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div class="p-5 sm:w-2/12 border-r">
            <div class="text-sm uppercase text-indigo-600 font-bold">Menu</div>
            <ul>
                <li class="my-2">
                    <a class="hover:text-indigo-600" href="#">Home</a>
                </li>
                <li class="my-2">
                    <a class="hover:text-indigo-600" href="#">about</a>
                </li>
                <li class="my-2">
                    <a class="hover:text-indigo-600" href="#">specification</a>
                </li>
            </ul>
        </div>
        <div class="p-5 sm:w-7/12 border-r text-center">
            <h3 class="font-bold text-xl text-indigo-600 mb-4">UIET Community</h3>
            <p class="text-gray-500 text-sm mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div class="p-5 sm:w-3/12">
            <div class="text-sm uppercase text-indigo-600 font-bold">Contact Us</div>
            <ul>
                <li class="my-2">
                    <a class="hover:text-indigo-600" href="#">csjmu,kanpur Formaly known as kanpur university</a>
                </li>
                <li class="my-2">
                    <a class="hover:text-indigo-600" href="#">csjmu.ac.in</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="#" class="w-6 mx-1">
                <svg class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%"
                    viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlns:serif="http://www.serif.com/"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2
                    }}>
                    <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
                  -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
                  0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
                  -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
                  0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
                  -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
                  0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
                  -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
                  -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
                  1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
                  -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
                  6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
                  0.771,-0.67 1.054,-1.093Z"></path>
                </svg>
            </a>
            <a href="#" class="w-6 mx-1">
                <svg class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%"
                    viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlns:serif="http://www.serif.com/"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2
                    }}>
                    <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373
                  12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                  0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                  -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
                </svg>
            </a>
            <a href="#" class="w-6 mx-1">
                <svg class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%"
                    viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlns:serif="http://www.serif.com/"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2
                    }}>
                    <g id="Layer_1">
                        <circle id="Oval" cx="12" cy="12" r="12"></circle>
                        <path id="Shape" d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562
                     -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0
                     -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375
                     -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938
                     -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125
                     0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0
                     2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0
                     1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125
                     0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813
                     -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068
                     -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204
                     -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068
                     0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204
                     0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z" style={{
                      fill: "rgb(255, 255, 255)"
                    }}></path>
                    </g>
                </svg>
            </a>
            <a href="#" class="w-6 mx-1">
                <svg class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%"
                    viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlns:serif="http://www.serif.com/"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2
                    }}>
                    <path id="Shape" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                  3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                  -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                  -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                  -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                  0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                  3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                  -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                  -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                  1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                  -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                  -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                  0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                  0.4,1.5l0,4.5l2.9,0Z"></path>
                </svg>
            </a>
            <a href="#" class="w-6 mx-1">
                <svg class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%"
                    viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlns:serif="http://www.serif.com/"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2
                    }}>
                    <path id="Combined-Shape" d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0
                  -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm6.591,-15.556l-0.722,0c-0.189,0
                  -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323
                  0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0
                  0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385
                  -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z"></path>
                </svg>
            </a>
        </div>
        <div class="my-5">© Copyright 2023. All Rights Reserved.</div>
    </div>
</div>
        </>
    )
}

export default Updataprofile;