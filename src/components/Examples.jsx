const Examples = () => {
  const videos = [
    {
      thumbnail: '🎬',
      views: '112,000 views',
      likes: '18,434 likes'
    },
    {
      thumbnail: '🎥',
      views: '112,000 views',
      likes: '18,434 likes'
    },
    {
      thumbnail: '📹',
      views: '112,000 views',
      likes: '18,434 likes'
    }
  ]

  return (

    <section className="pm-4 pt-6 md:pt-0 md:pb-10 px-4 sm:px-6 lg:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-gradient-to-r from-[#6699FF] to-[#FF3366] p-10" style={{ borderRadius: '50px' }}>

        {/* Section Header */}

        <div className="">
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-semibold text-white mb-6">


            These TikToks earned $178 for the creators


          </h2>
          <p className="text-white text-xl pr-40">
            <span className="font-semibold"> Why it went viral: </span> simple hook, trending audio, fast pacing.

          </p>
          <br />
          <div className="flex items-center gap-10">

            <div className="flex gap-2 items-center">
              <div className="">

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2471 6.15838L8.28042 11.9167L6.69709 10.2251C6.40542 9.95005 5.94709 9.93338 5.61375 10.1667C5.28875 10.4084 5.19709 10.8334 5.39709 11.1751L7.27209 14.2251C7.45542 14.5084 7.77209 14.6834 8.13042 14.6834C8.47209 14.6834 8.79709 14.5084 8.98042 14.2251C9.28042 13.8334 15.0054 7.00838 15.0054 7.00838C15.7554 6.24172 14.8471 5.56672 14.2471 6.15005V6.15838Z" fill="url(#paint0_linear_57_449)" />
                  <defs>
                    <linearGradient id="paint0_linear_57_449" x1="5.29175" y1="10.3065" x2="15.3534" y2="10.5138" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#6699FF" />
                      <stop offset="1" stop-color="#FF3366" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="text-lg text-white">
                112,000 views
              </p>


            </div>



            <div className="flex gap-2 items-center">
              <div className="">

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2471 6.15838L8.28042 11.9167L6.69709 10.2251C6.40542 9.95005 5.94709 9.93338 5.61375 10.1667C5.28875 10.4084 5.19709 10.8334 5.39709 11.1751L7.27209 14.2251C7.45542 14.5084 7.77209 14.6834 8.13042 14.6834C8.47209 14.6834 8.79709 14.5084 8.98042 14.2251C9.28042 13.8334 15.0054 7.00838 15.0054 7.00838C15.7554 6.24172 14.8471 5.56672 14.2471 6.15005V6.15838Z" fill="url(#paint0_linear_57_449)" />
                  <defs>
                    <linearGradient id="paint0_linear_57_449" x1="5.29175" y1="10.3065" x2="15.3534" y2="10.5138" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#6699FF" />
                      <stop offset="1" stop-color="#FF3366" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="text-lg text-white">
                18,434 likes
              </p>


            </div>







            <div className="flex gap-2 items-center">
              <div className="">

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2471 6.15838L8.28042 11.9167L6.69709 10.2251C6.40542 9.95005 5.94709 9.93338 5.61375 10.1667C5.28875 10.4084 5.19709 10.8334 5.39709 11.1751L7.27209 14.2251C7.45542 14.5084 7.77209 14.6834 8.13042 14.6834C8.47209 14.6834 8.79709 14.5084 8.98042 14.2251C9.28042 13.8334 15.0054 7.00838 15.0054 7.00838C15.7554 6.24172 14.8471 5.56672 14.2471 6.15005V6.15838Z" fill="url(#paint0_linear_57_449)" />
                  <defs>
                    <linearGradient id="paint0_linear_57_449" x1="5.29175" y1="10.3065" x2="15.3534" y2="10.5138" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#6699FF" />
                      <stop offset="1" stop-color="#FF3366" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="text-lg text-white">
                18,434 likes
              </p>
            </div>

          </div>

        </div>

        {/* Tasks Grid */}
        <div className="justify-self-end">
          <img src="assets/side-image.svg" className="max-w-full h-auto" />
        </div>
      </div>
    </section>



  )
}

export default Examples

