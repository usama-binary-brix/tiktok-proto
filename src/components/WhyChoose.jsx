import { BsStars } from "react-icons/bs"

const WhyChoose = () => {
  const features = [
    {
      title: 'Post Your Regular Content',
      description: 'No brand scripts or forced promotions.',
      icon: (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.875 38.4H37.6C37.95 38.4 38.225 38.1187 38.225 37.775V12.9625C38.225 12.6125 37.95 12.3375 37.6 12.3375H12.9562L38.2 9.36248C38.5438 9.32498 38.7875 9.01248 38.7438 8.66873L37.9813 2.14998C37.9625 1.98748 37.875 1.83748 37.75 1.73123C37.6188 1.63123 37.4562 1.58748 37.2875 1.59998L10.7062 4.73123C10.6875 4.73123 10.6625 4.71873 10.6375 4.72498L1.8 5.77498C1.71875 5.78123 1.6375 5.81248 1.56875 5.85623C1.56458 5.85623 1.5625 5.85832 1.5625 5.86248C1.49375 5.89998 1.4375 5.94373 1.39375 6.00623C1.38125 6.01873 1.375 6.03748 1.3625 6.04998C1.33125 6.09998 1.30625 6.14998 1.2875 6.20623C1.275 6.23123 1.275 6.25623 1.26875 6.28748C1.2625 6.31873 1.25 6.35623 1.25 6.39373V37.775C1.25 38.1187 1.53125 38.4 1.875 38.4ZM33.8 13.5875L28.4813 18.9H22.1875L27.5062 13.5875H33.8ZM28.3625 3.91248L34.2625 8.56873L28.0125 9.30623L22.1125 4.64373L28.3625 3.91248ZM11.3375 5.91248L12.35 5.79373L18.25 10.4562L11.3375 11.2687V5.91248ZM11.3375 13.5875H17.675L12.3563 18.9H11.3375V13.5875ZM5.66875 9.90623C5.66875 9.56248 5.95 9.28123 6.29375 9.28123C6.6375 9.28123 6.91875 9.56248 6.91875 9.90623V14.9625C6.91875 15.3062 6.6375 15.5875 6.29375 15.5875C5.95 15.5875 5.66875 15.3062 5.66875 14.9625V9.90623ZM2.5 20.15H36.975V37.15H2.5V20.15Z" fill="url(#paint0_linear_100_812)" />
        <path d="M24.9062 26.3875L18.6375 22.7625C17.8937 22.3312 17.0062 22.3312 16.2562 22.7562C15.5125 23.1875 15.0625 23.9625 15.0625 24.825V32.075C15.0625 32.9375 15.5125 33.7062 16.2562 34.1375C16.6312 34.35 17.0375 34.4625 17.45 34.4625C17.8562 34.4625 18.2687 34.35 18.6375 34.1375L24.9062 30.5125C25.65 30.0812 26.0938 29.3062 26.0938 28.45C26.0938 27.5875 25.65 26.8187 24.9062 26.3875Z" fill="url(#paint1_linear_100_812)" />
        <defs>
          <linearGradient id="paint0_linear_100_812" x1="1.25" y1="19.9989" x2="38.9938" y2="20.6928" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6699FF" />
            <stop offset="1" stop-color="#FF3366" />
          </linearGradient>
          <linearGradient id="paint1_linear_100_812" x1="15.0625" y1="28.4503" x2="26.1665" y2="28.6341" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6699FF" />
            <stop offset="1" stop-color="#FF3366" />
          </linearGradient>
        </defs>
      </svg>)
    },
    {
      title: 'Earn Per Like',
      description: 'Your performance determines your earnings, not your follower count.',
      icon: (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_100_824)">
          <path d="M35.3672 3.625H4.63281C2.07031 3.625 0 5.70312 0 8.25781V27.3672C0 29.9219 2.07031 31.9922 4.63281 31.9922H14.625L18.2969 35.6641C19.2422 36.6094 20.7734 36.6094 21.7188 35.6641L25.3906 31.9922H35.375C37.9297 31.9922 40.0078 29.9219 40.0078 27.3672V8.25781C40 5.70312 37.9297 3.625 35.3672 3.625Z" fill="url(#paint0_linear_100_824)" />
          <path d="M28.8517 15.9765C28.6095 17.3593 28.047 18.6093 27.2892 19.7734C26.2814 21.3281 24.9923 22.6171 23.5548 23.7656C22.7032 24.4375 21.8204 25.0546 20.8985 25.6171C20.3204 25.9765 19.7267 26.0078 19.1485 25.6562C17.5392 24.6718 16.0235 23.5546 14.6876 22.2109C13.6954 21.2343 12.8517 20.125 12.1798 18.9062C11.4454 17.5546 11.0001 16.125 11.0079 14.5781C11.0157 12.9765 11.6642 11.6718 12.9376 10.6953C13.8517 9.97652 15.0001 9.62496 16.1642 9.70308C17.172 9.75777 18.047 10.164 18.8439 10.75C19.2267 11.0312 19.9689 11.6953 19.9767 11.7109C20.297 11.4375 20.6017 11.1562 20.9298 10.9062C21.672 10.3281 22.4767 9.89058 23.422 9.75777C24.7345 9.57027 25.9376 9.88277 27.0001 10.6718C27.961 11.3671 28.6329 12.4062 28.8673 13.5703C29.047 14.3671 28.9923 15.1796 28.8517 15.9765Z" fill="white" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_100_824" x1="4.20126e-09" y1="19.999" x2="40.2632" y2="20.8864" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6699FF" />
            <stop offset="1" stop-color="#FF3366" />
          </linearGradient>
          <clipPath id="clip0_100_824">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
      )
    },
    {
      title: 'No Sponsorship Needed',
      description: "We're the only platform paying creators for normal, unsponsored content.",
      icon: (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0C8.97219 0 0 8.97219 0 20C0 31.0278 8.97219 40 20 40C31.0278 40 40 31.0278 40 20C40 8.97219 31.0278 0 20 0ZM20 35C11.7293 35 5 28.2707 5 20C5 16.8433 5.95703 13.8591 7.77672 11.3127L28.6873 32.2233C26.1409 34.043 23.1567 35 20 35ZM32.2233 28.6873L11.3127 7.77672C13.8591 5.95703 16.8433 5 20 5C28.2707 5 35 11.7293 35 20C35 23.1567 34.043 26.1409 32.2233 28.6873Z" fill="url(#paint0_linear_101_840)" />
        <defs>
          <linearGradient id="paint0_linear_101_840" x1="4.20044e-09" y1="20" x2="40.2618" y2="20.7264" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6699FF" />
            <stop offset="1" stop-color="#FF3366" />
          </linearGradient>
        </defs>
      </svg>
      )
    }
  ]

  return (
    <>


      <section id="pricing" className="px-[5%] py-20 text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-12 relative z-10 items-center">
          <div>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-semibold  text-[#3B3939]leading-extended">
              The Easiest Way To <br />
              <span className="gradient-text">Monetize</span>
              Your  <br /> Social Media
            </h2>
          </div>

          <div className="flex items-start lg:pl-20">
            <p className="text-[#3B3939CC] text-lg">
              Unlike traditional brand deals, Paymetopost pays you for creating your usual content. No sponsorships. No briefs. No negotiations. Just post what you already love to create — and earn money from your engagement.  </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F0F4EF] border rounded-2xl p-8 hover:shadow-lg transition-shadow border-[#FF3366]"

            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default WhyChoose

