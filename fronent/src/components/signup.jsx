import { Link } from "react-router-dom";
function Signup(){

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
        <Link to="/signin" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400">
                Sign in
            </Link>
            <Link to="/signup" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400">
                Sign up
            </Link>
        </div>
    </div>
</header>
        <div class="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
  <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
    <h2 class="text-2xl font-bold pb-5">Sign Up</h2>
    <form>
    <div class="mb-4">
        <label for="username" class="block mb-2 text-sm font-medium">Username</label>
        <input
          type="username"
          id="username"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="xyz"
          required
          value=""
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
        <input
          type="email"
          id="email"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="andrew@mail.com"
          required
          value=""
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-2 text-sm font-medium">Your password</label>
        <input
          type="password"
          id="password"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="*********"
          required
          value=""
        />
      </div>
      <div class="flex items-center justify-center mb-4">
        <button
          type="submit"
          class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
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

export default Signup;