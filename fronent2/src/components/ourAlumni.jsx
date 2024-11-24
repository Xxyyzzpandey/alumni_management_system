import { Link } from "react-router-dom";
import Card from "./card";
import { useState,useEffect } from "react";
import axios from "axios"
import { useRecoilState, useRecoilValue } from "recoil";
import {user,isLogedin} from "../atoms/atoms.js"
import {Errorpage} from "./erroepage.jsx"
import { Navbar } from "./navbar.jsx";
import {Footer} from "./footer.jsx"


function OurAlumni(){

        const [cards, setCards] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [searchallumni,setsearchallumni]=useState("");
    
        const [loginuser,setloginuser]=useRecoilState(user);
  const [logiedin,setlogiedin]=useRecoilState(isLogedin)

        // Fetch Data from the Backend
        useEffect(() => {
            const fetchCards = async () => {
                try {
                    console.log("Sending API request to http://localhost:3000/api/cardinfo");
                    const response = await axios.get('http://localhost:3000/api/cardinfo');
                    setCards(response.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setError('Failed to fetch data');
                } finally {
                    setLoading(false);
                }
            };
            fetchCards();
        }, []);
    
        if (loading)
             return (
            <div class="flex items-center justify-center h-screen bg-gray-100">
                <div class="flex gap-2">
                <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
            </div>
            </div>
        )
    
        const Handlesearch = async () => {
            try {
                // Make the POST request with username
                const response = await axios.post(
                    "http://localhost:3000/api/searchalumni",
                    { username: searchallumni }, // Send searchallumni as the username
                    { withCredentials: true }
                );
        
                // Check if the request was successful
                if (response.status === 200) {
                    // Assuming response.data contains the results
                    setCards(response.data.results);  // Adjust according to your API's response format
                }
            } catch (error) {
                if(error.response.status===400){
                    alert("search cannot be empty")
                }
                if(error.response.status===404){
                    alert("no match found")
                } // Provide more specific error message
            }
        };
        
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


        if (error) return <Errorpage/>;
//     return (
//         <>
//             {/* {
//                cards.map((card)=>{
//                 return <Card 
//                 key={card._id}
//                 Name={card.username} 
//                 post={card.jobrole} 
//                 passingyear={card.passoutYear} 
//                 course="btech" 
//                 branch="cse"
//                 currentcompany={card.currentcompany}/>
//               })
//             } */}

// <div class="bg-gray-200 px-2 py-10">

// <div id="features" class="mx-auto max-w-6xl">
//   <p class="text-center text-base font-semibold leading-7 text-primary-500">Features</p>
//   <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
//     Writing has never been so easy
//   </h2>
//   <ul class="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
    
//     <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
      
//     </li>
//   </ul>
// </div>
// <div>
//         </>
//     )
// }
return (
    <>
        <Navbar/>
        
        <div className="bg-gray-200 px-2 py-10">
        <div id="features" className="mx-auto max-w-6xl ">
           <div class="flex justify-center items-center space-x-2 ">
            {/* <!-- Search input --> */}
            <input 
                class="appearance-none text-md py-1 px-2 focus:outline-none border-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-900 text-purple-900 dark:text-gray-100 placeholder-blue-300 dark:placeholder-gray-600 font-semibold rounded-l" 
                type="search" 
                name="q" 
                placeholder="Search" 
              onChange={(e)=>{setsearchallumni(e.target.value)}}/>
            {/* <!-- Search button --> */}
            <button 
                class="bg-blue-500 hover:bg-blue-800 px-5 py-1 text-lg font-bold hover:shadow-2xl cursor-pointer transition duration-250 ease-in-out rounded-r text-white" 
                value="Search" 
                color="blue"
             onClick={Handlesearch}>
                Search
            </button>
            </div>

            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900  md:text-4xl">
                UIET Alumni 
            </h2>
            <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                {cards.map((card) => (
                    <li
                        key={card._id} // Ensure each <li> has a unique key
                        className="rounded-xl bg-white px-6 py-8 shadow-sm"
                    >
                        <Card
                            Name={card.username}
                            post={card.jobrole}
                            passingyear={card.passoutYear}
                            course="btech"
                            branch="cse"
                            currentcompany={card.currentcompany}
                            message={card.message}
                        />
                    </li>
                ))}
            </ul>
        </div>
        </div>

        <Footer/>
    </>
);

}
export default OurAlumni;