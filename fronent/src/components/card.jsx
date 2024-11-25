

function Card({Name,post,passingyear,course,currentcompany,message,Linkedinurl,githuburl}){

    return(<>
            
            <div className="p-5 border rounded text-center text-gray-500 max-w-sm dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
    <img className="w-32 h-32 rounded-full mx-auto" src="https://loremflickr.com/320/320/girl" alt="" />
    <div className="text-sm mt-5">
        <a href="/profile"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 dark:text-gray-100 dark:hover:text-indigo-500 transition duration-500 ease-in-out">
           {Name}
        </a>
        <p>{post} at {currentcompany}</p>
        <p>{course}   {passingyear}</p>
    </div>

    <p className="mt-2 text-sm text-gray-900 dark:text-gray-200">{message}.</p>

    <div className="flex mt-4 justify-center">
    <a
            href={Linkedinurl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 mx-1"
            aria-label="LinkedIn"
        >
            <svg
                className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
            >
                <path
                    d="M19 0H5C2.24 0 0 2.24 0 5V19C0 21.76 2.24 24 5 24H19C21.76 24 24 21.76 24 19V5C24 2.24 21.76 0 19 0ZM8.52 20H5.26V9H8.52V20ZM6.89 7.58C5.71 7.58 4.74 6.6 4.74 5.42C4.74 4.24 5.71 3.26 6.89 3.26C8.07 3.26 9.04 4.24 9.04 5.42C9.04 6.6 8.07 7.58 6.89 7.58ZM20 20H16.74V14.69C16.74 13.51 16.72 12.04 15.08 12.04C13.43 12.04 13.19 13.26 13.19 14.6V20H9.94V9H12.98V10.41H13.03C13.49 9.56 14.58 8.65 16.12 8.65C19.3 8.65 20 10.57 20 13.14V20Z"
                />
            </svg>
        </a>
        <a
                href={githuburl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 mx-1"
                aria-label="GitHub"
            >
                <svg
                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
                >
                    <path
                        d="M12,0.5C5.373,0.5,0,5.872,0,12.5c0,5.291,3.438,9.772,8.207,11.363c0.6,0.111,0.793,-0.26,0.793,-0.577c0,-0.285,-0.011,-1.041,-0.017,-2.043c-3.338,0.726,-4.042,-1.608,-4.042,-1.608c-0.546,-1.387,-1.333,-1.757,-1.333,-1.757c-1.089,-0.744,0.082,-0.729,0.082,-0.729c1.205,0.085,1.839,1.237,1.839,1.237c1.07,1.834,2.808,1.304,3.493,0.997c0.108,-0.774,0.418,-1.305,0.762,-1.604c-2.665,-0.303,-5.466,-1.333,-5.466,-5.931c0,-1.31,0.469,-2.381,1.235,-3.221c-0.124,-0.303,-0.535,-1.523,0.117,-3.176c0,0,1.008,-0.323,3.301,1.23c0.957,-0.266,1.983,-0.399,3.002,-0.404c1.019,0.005,2.045,0.138,3.003,0.404c2.292,-1.553,3.298,-1.23,3.298,-1.23c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609,-2.805,5.624,-5.476,5.921c0.43,0.372,0.815,1.104,0.815,2.224c0,1.606,-0.014,2.899,-0.014,3.292c0,0.319,0.19,0.692,0.8,0.574C20.565,22.271,24,17.791,24,12.5C24,5.872,18.627,0.5,12,0.5Z"
                    />
                </svg>
            </a>
    </div>
</div>   
   </>)
}

export default Card;


function Eventcard(){


    return(
        <>
    </>
    )}

export  {Card,Eventcard};





