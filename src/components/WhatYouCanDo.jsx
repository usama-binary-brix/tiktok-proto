import { BsMegaphoneFill } from "react-icons/bs"
import { FaInstagram, FaTiktok } from "react-icons/fa"
import { TbTargetArrow } from "react-icons/tb"

const WhatYouCanDo = () => {
  const tasks = [
    {
      title: 'TikTok Content Tasks',
      description: 'Create videos that follow trends, challenges, or prompts.',
      icon: <FaTiktok />,
      color: 'text-[#FF3366]' // Pinkish-red
    },
    {
      title: 'Instagram Reels',
      description: 'Earn by posting Reels that match your niche.',
      icon: <FaInstagram />,
      color: 'text-[#FF3366]' // Pinkish-red
    },
    {
      title: 'Content Challenges',
      description: 'Join daily or weekly challenges with higher payouts.',
      icon: <TbTargetArrow />,
      color: 'text-[#FF3366]' // Pinkish-red

    },
    {
      title: 'Special Campaigns',
      description: 'Occasional boosted tasks for specific themes or sounds.',
      icon: <BsMegaphoneFill />,
      color: 'text-[#FF3366]' // Pinkish-red
    }
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Section Header */}

        <div className="">
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-semibold text-[#3B3939] mb-6">
            What You <br /> Can Do On <br /><span className="gradient-text">Paymetopost</span>
          </h2>
          <p className="text-[#3B3939CC] text-xl pr-40">
            Choose from a growing list of simple content tasks matched to your style.
          </p>
          <br />
          <button
            type="submit"
            className="
       
        px-8 py-3
        rounded-full
        font-medium
        text-white
        bg-gradient-to-r from-[#6699FF] to-[#FF3366]
        transition-all duration-300
        hover:from-[#FFFFFF] hover:to-[#FFFFFF]
        hover:text-[#FF3366]
        hover:border hover:border-[#FF3366]
      "
          >
            Get Started
          </button>

        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="
    group 
    p-10 
    border
     border-[#FF3366]
    rounded-3xl 
    shadow-sm 
    w-full
    bg-transparent
    transition duration-300
    hover:bg-gradient-to-l 
    hover:from-[#6699FF]
    hover:to-[#FF3366]
   
  "
             
            >
              {/* Icon with visible gradient */}
              <div className={`text-5xl mb-4 ${task.color} group-hover:text-white transition-colors duration-300`}>
                {task.icon}
              </div>

              {/* Title */}
              <h3 className="text-[26px] font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 mb-3">
                {task.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                {task.description}
              </p>
            </div>


          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatYouCanDo

