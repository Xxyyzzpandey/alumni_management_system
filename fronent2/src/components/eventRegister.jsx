import { useState } from "react";
import axios from "axios";
import {user,isLogedin} from "../atoms/atoms.js"
import {Errorpage} from "./erroepage.jsx"
import { useRecoilState, useRecoilValue } from "recoil";
import { Navbar } from "./navbar.jsx";
import {Footer} from "./footer.jsx"

function EventRegister(){

    const [organisedby,setorganisedby]=useState("");
    const [description,setdescription]=useState("");
    const [date,setdate]=useState("");
    const [eventlink,seteventlink]=useState("");

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(organisedby,description,eventlink,date)
        try{
           const response= await axios.post('http://localhost:3000/api/registerEvent',{organisedby,description,eventlink,date},{withCredentials:true})
           if(response.status==200){
            alert("Event registation successfull")
           }
        }catch{
            alert("something went wrong");
        }
    }

    const [loginuser,setloginuser]=useRecoilState(user);
    const [logiedin,setlogiedin]=useRecoilState(isLogedin)

    if (!logiedin) return(<>
         <div class="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8 text-center">
    <div class="mb-8">
      <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">Only Alumni and Admin can Organise Event</p>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">you can go to event section and Enjoy.</p>
    </div>
    <div class="mt-8">
      <a href="/"
        class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <svg class="mr-2 -ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18m-9-9l9 9-9 9" />
        </svg>
        Go back home
      </a>
    </div>
  </div>
  <div class="mt-16 w-full max-w-2xl">
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      <div class="relative flex justify-center">
        <span class="px-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400">
          If you think this is a mistake, please contact support
        </span>
      </div>
    </div>
  </div>
</div>
    </>);

    return(<>
    <Navbar/>
       <div class="p-10">
    <h1 class="mb-8 font-extrabold text-4xl">Register Event </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form>
            <div>
                <label class="block font-semibold" for="name">Organised By :-</label>
                <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" id="name" type="text" name="name" required="required" autofocus="autofocus"
                onChange={(e)=>{setorganisedby(e.target.value)}}/>
            </div>

            <div class="mt-4">
                <label class="block font-semibold" for="email">Description</label>
                <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" id="email" type="email" name="email" required="required"
                onChange={(e)=>{setdescription(e.target.value)}}/>
            </div>

            <div class="mt-4">
                <label class="block font-semibold" >Event Link</label>
                <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" 
                onChange={(e)=>{seteventlink(e.target.value)}}/>
            </div>

            <div class="mt-4">
                <label class="block font-semibold" >Date</label>
                <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" 
                onChange={(e)=>{setdate(e.target.value)}}/>
            </div>

            <div class="flex items-center justify-between mt-8">
                <button type="submit" class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                onClick={handleSubmit}>Register</button>
            </div>
        </form>

        <aside class="">
            <div class="bg-gray-100 p-8 rounded">
                <h2 class="font-bold text-2xl">Instructions</h2>
                <ul class="list-disc mt-4 list-inside">
                    <li>All users must provide a valid email address and password to create an account.</li>
                    <li>Users must not use offensive, vulgar, or otherwise inappropriate language in their username or profile information</li>
                    <li>Users must not create multiple accounts for the same person.</li>
                </ul>
            </div>
        </aside>

    </div>
</div>
<Footer/>
    </>)
}

export {EventRegister}