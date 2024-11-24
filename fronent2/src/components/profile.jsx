import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {user,isLogedin} from "../atoms/atoms.js" 
import { Navbar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";

function Profile(){
     
    const [loginuser,setloginuser]=useRecoilState(user);
    const [logiedin,setlogiedin]=useRecoilState(isLogedin)
   
    if (logiedin) return (
        <>
        <Navbar/>
            <section class="w-full overflow-hidden dark:bg-gray-900">
    <div class="flex flex-col">
        
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover"
                class="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]" />

        
        <div class="sm:w-[80%] xs:w-[90%] mx-auto flex">
            <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="User Profile"
                    class="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]" />

            
            <h1
                class="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                {loginuser.username}</h1>

        </div>

        <div
            class="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            
            <p class="w-fit text-gray-700 dark:text-gray-400 text-md">{loginuser.message}</p>


            
            <div class="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div class="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                    <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div class="flex flex-col pb-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400"> Name</dt>
                                <dd class="text-lg font-semibold">{loginuser.username}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Working At</dt>
                                <dd class="text-lg font-semibold">{loginuser.currentcompany}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Passout Year</dt>
                                <dd class="text-lg font-semibold">{loginuser.passoutYear}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Job role</dt>
                                <dd class="text-lg font-semibold">{loginuser.jobrole}</dd>
                            </div>

                        </dl>
                    </div>
                    <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div class="flex flex-col pb-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email Address</dt>
                                <dd class="text-lg font-semibold">{loginuser.email}</dd>
                            </div>

                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Linked Url</dt>
                                <dd class="text-lg font-semibold">{loginuser.Linkedinurl}</dd>
                            </div>
                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">State</dt>
                                <dd class="text-lg font-semibold">{loginuser.state}</dd>
                            </div>

                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Github url</dt>
                                <dd class="text-lg font-semibold ">{loginuser.githuburl}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                
                <div class="my-10 lg:w-[70%] md:h-[14rem] xs:w-full xs:h-[10rem]">
                    <h1
                        class="w-fit font-serif my-4 pb-1 pr-2 rounded-b-md border-b-4 border-blue-600 dark:border-b-4 dark:border-yellow-600 dark:text-white lg:text-4xl md:text-3xl xs:text-xl">
                        My Location</h1>

                   
                        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.613328040215286!3d8.963479542403238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1710567234587!5m2!1sen!2set"
                className="rounded-lg w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
                </div>
               </div>

           </div>
         </div>
    </section>
       <Footer/>
        </>
    )

    return (
        <>
        <Navbar/>
        <section class="w-full overflow-hidden dark:bg-gray-900">
    <div class="flex flex-col">
        
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover"
                class="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]" />

        
        <div class="sm:w-[80%] xs:w-[90%] mx-auto flex">
            <img src="https://media.istockphoto.com/id/512049844/vector/graduation-student-hat-and-diploma.jpg?s=612x612&w=0&k=20&c=AZUc7D7UXDNFr9XqZsGbfvHa9N13CG2A3K1-W3lqlO8="
                    class="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]" />

            
            <h1
                class="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                Alumni</h1>

        </div>

        <div
            class="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            
            <p class="w-fit text-gray-700 dark:text-gray-400 text-md">{loginuser.message}</p>


            
            <div class="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div class="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                    <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div class="flex flex-col pb-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400"> Name</dt>
                                <dd class="text-lg font-semibold">{loginuser.username}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Working At</dt>
                                <dd class="text-lg font-semibold">{loginuser.currentcompany}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Passout Year</dt>
                                <dd class="text-lg font-semibold">{loginuser.passoutYear}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Job role</dt>
                                <dd class="text-lg font-semibold">{loginuser.jobrole}</dd>
                            </div>

                        </dl>
                    </div>
                    <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div class="flex flex-col pb-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email Address</dt>
                                <dd class="text-lg font-semibold">{loginuser.email}</dd>
                            </div>

                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Linked Url</dt>
                                <dd class="text-lg font-semibold">{loginuser.Linkedurl}</dd>
                            </div>
                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">State</dt>
                                <dd class="text-lg font-semibold">{loginuser.state}</dd>
                            </div>

                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Github url</dt>
                                <dd class="text-lg font-semibold hover:text-blue-500">{loginuser.githuburl}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                
                <div class="my-10 lg:w-[70%] md:h-[14rem] xs:w-full xs:h-[10rem]">
                    <h1
                        class="w-fit font-serif my-4 pb-1 pr-2 rounded-b-md border-b-4 border-blue-600 dark:border-b-4 dark:border-yellow-600 dark:text-white lg:text-4xl md:text-3xl xs:text-xl">
                        My Location</h1>

                   
                        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.613328040215286!3d8.963479542403238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1710567234587!5m2!1sen!2set"
                className="rounded-lg w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
                </div>
               </div>

           </div>
         </div>
    </section>
        </>
    )
}

export {Profile}