import { Link } from "react-router-dom";
import { Navigate,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import { useRecoilState } from "recoil";
import {user,isLogedin} from "../atoms/atoms.js"
import { Navbar } from "./navbar.jsx";

function Signin(){

  const [loginuser,setloginuser]=useRecoilState(user);
  const [logedin,setlogedin]=useRecoilState(isLogedin);

  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
        const response = await axios.post('http://localhost:3000/api/login', { email, password },{withCredentials:true});
        if (response.status === 200) {
          setloginuser(response.data);
          setlogedin(true)
          alert("login successfully")
            navigate("/");
        }
    } catch (error) {
      if(error.response.status===400){
        alert("invalid email or password")
      }else{
        alert("netowrk error in server ")
      }
    }
};

    return (
        <>
          <Navbar/>
          <div class="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
  <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
    <h2 class="text-2xl font-bold pb-5">Sign In</h2>
    <form onSubmit={handleSubmit}>
      <div class="mb-4">
        <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
        <input
          type="email"
          id="email"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="andrew@mail.com"
          required
          onChange={(e)=>{setemail(e.target.value)}}/>
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-2 text-sm font-medium">Your password</label>
        <input
          type="password"
          id="password"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="*********"
          required
          onChange={(e)=>{setpassword(e.target.value)}}/>
      </div>
      <div class="flex items-center justify-between mb-4">
      <button
        type="button" // Prevent form submission
       class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
        onClick={handleSubmit}
       >
    Submit
</button>
        <div>
        <div class="flex items-center text-sm">
          <p>New here?</p>
          <Link to="/registeralumni" class="underline cursor-pointer ml-1">Register</Link>
        </div>
        <div class="flex items-center text-sm">
          <Link to="/resetpassword" class="underline cursor-pointer ml-1">Forget Password</Link>
        </div>
        </div>
      </div>
    </form>
  </div>
</div>
</>
    )
}

export default Signin;