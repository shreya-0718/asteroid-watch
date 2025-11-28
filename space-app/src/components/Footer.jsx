import React from 'react'

function Footer() {
  return (
    <div className="m-auto bottom-0 w-full flex justify-center">
        <h5 className="self-end text-m font-serif z-10">
          <a
            href="https://github.com/shreya-0718/asteroid-watch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-violet"
          >
            Built
          </a>
        
        {" "} with ❤️ and {" "}
          
        <a
          href="https://api.nasa.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline hover:text-violet"
        >
          NASA's NeoWs API
        </a>



        </h5>
    </div>
  )
}

export default Footer
