import React from 'react'

const About = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-white overflow-hidden md:px-8 md:flex justify-center items-center">
        <div className="flex-none space-y-5 max-w-xl">
          <a
            href="javascript:void(0)"
            className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-transparent/10"
          >
            <span className="inline-block rounded-full px-3 py-1 bg-pink-600 text-white">
              News
            </span>
            <p className="flex items-center">
              Read the launch post from here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </a>
          <h1 className="text-left tracking-tight max-w-md md:max-w-3xl text-3xl md:text-4xl tracking-tighter mr-auto lg:text-6xl font-geist  font-normal  text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1">
            Build your SAAS exactly how you want
          </h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm">
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-1 py-4 px-4 text-white hover:text-white font-medium duration-150 md:inline-flex"
            >
              Contact sales
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About