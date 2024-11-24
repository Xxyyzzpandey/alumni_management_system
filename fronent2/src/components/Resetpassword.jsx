import { Link } from "react-router-dom";
import { Navigate,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

function ResetpasswordtoEmail(){

  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
        const response = await axios.post('http://localhost:3000/api/v1/sendResetPasswordEmail', { email, password },{withCredentials:true});
        if (response.status === 200) {
            navigate("/Home");
        }
    } catch (error) {
      if(error.response.status===400){
        alert("email is not registered")
      }else{
        alert("something is wrong")
      }
    }
};

    return (
        <>
        
          <div class="container mx-auto p-4 mt-12 bg-green-200 flex flex-col items-center justify-center text-gray-700">
  <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
    <h2 class="text-2xl font-bold pb-5">Password Reset Form</h2>
    <form onSubmit={handleSubmit}>
      <div class="mb-4">
        <label for="email" class="block mb-2 text-sm font-medium">Registrated email</label>
        <input
          type="email"
          id="email"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="andrew@mail.com"
          required
          onChange={(e)=>{setemail(e.target.value)}}/>
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-2 text-sm font-medium">New password</label>
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
      </div>
    </form>
  </div>
</div>
</>
    )
}

export default ResetpasswordtoEmail;


