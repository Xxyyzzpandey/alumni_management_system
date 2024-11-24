import { useRecoilState } from "recoil"
import {AboutUs} from "./components/aboutus.jsx"
import Card, { Eventcard } from "./components/card"
import ContactUs from "./components/contactus.jsx"
import Home from "./components/home.jsx"
import OurAlumni from "./components/ourAlumni.jsx"
import RegisterAlumni from "./components/registeralumni.jsx"
import Signin from "./components/signin.jsx"
import Signup from "./components/signup.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HorizontalCards from "./components/cardslider.jsx"
import PasswordRestform from "./components/Resetpasswordfirstform.jsx"
import ResetpasswordtoEmail from "./components/Resetpassword.jsx"
import {Cardsliper} from "./components/eventCard.jsx"
import axios from "axios"
import {user,isLogedin} from "./atoms/atoms.js"
import { useEffect } from "react"
import Updataprofile from "./components/updataprofile.jsx"
import { Profile } from "./components/profile.jsx"
import {EventRegister} from "./components/eventRegister.jsx"
import { Navbar } from "./components/navbar.jsx"

function App() {
  
  const [loginuser,setloginuser]=useRecoilState(user);
  const [logedin,setlogedin]=useRecoilState(isLogedin);

  useEffect(() => {
    // Check if the user is logged in by making an API request
    const checkAuth = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/cookiesauth', { withCredentials: true });
            if (response.status === 200) {
              console.log(response.data)
              setloginuser(response.data)
              setlogedin(true);
            }
        } catch (error) {
          setlogedin(false);
        }
    };

    checkAuth();
}, []);

  return (
    <>
      <BrowserRouter>
         <Routes>
           <Route path="/" Component={Home}/>
           <Route path="/Navbar" Component={Navbar}/>
           <Route path="/aboutus" Component={AboutUs}/>
           <Route path="/contactus" Component={ContactUs}/>
           <Route path="/ourAlumni" Component={OurAlumni}/>
           <Route path="/registeralumni" Component={RegisterAlumni}/>
           <Route path="/signin" Component={Signin}/>
           <Route path="/signup" Component={Signup}/>
           <Route path="/cardslider" Component={HorizontalCards}/>
           <Route path="/resetpassword" Component={PasswordRestform}/>
           <Route path="api/v1/resetpasswordemail" Component={ResetpasswordtoEmail}/>
           <Route path="/slider" Component={Cardsliper}/>
           <Route path="/updateprofile" Component={Updataprofile}/>
           <Route path="/profile" Component={Profile}/>
           <Route path="/registerEvent" Component={EventRegister}/>
         </Routes>
      </BrowserRouter>


       {/* <Home/> */}
       {/* <Signin/> */}
       {/* <Signup/> */}
       {/* <ContactUs/> */}
       {/* <RegisterAlumni/> */}
       {/* <AboutUs/> */}
       {/* <Card/> */}
       {/* <OurAlumni/> */}

    </>
  )
}

export default App
