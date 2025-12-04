import { useState } from 'react'
import { IoAlertCircleOutline } from 'react-icons/io5'
import { AiOutlineEye, AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai'
import { FaSpinner } from 'react-icons/fa'

const Hero = () => {
  const [profileLink, setProfileLink] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [stats, setStats] = useState(null)

  const generateRandomStats = () => {
    return {
      views: Math.floor(Math.random() * 900000) + 100000, // 100K - 1M
      likes: Math.floor(Math.random() * 50000) + 10000, // 10K - 60K
      comments: Math.floor(Math.random() * 5000) + 500, // 500 - 5.5K
      shares: Math.floor(Math.random() * 3000) + 200, // 200 - 3.2K
      estimatedEarnings: Math.floor(Math.random() * 300) + 50 // $50 - $350
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!profileLink) return
    
    setIsLoading(true)
    setStats(null)
    
    // Simulate API call with 2 seconds delay
    setTimeout(() => {
      const randomStats = generateRandomStats()
      setStats(randomStats)
      setIsLoading(false)
    }, 2000)
  }

  return (
    <section className="py-16 md:pt-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#6699FF]/20 via-[#FF3366]/10 t/20-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-gray-900 mb-8">
          Start <span className="gradient-text">Earning</span> From Your Content.
        </h1>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-3">
          <div className="relative flex items-center w-full">

            {/* INPUT */}
            <input
              type="text"
              placeholder="Paste your TikTok profile link..."
              value={profileLink}
              onChange={(e) => setProfileLink(e.target.value)}
              className="w-full pr-40 px-6 py-5 rounded-full bg-white shadow-sm border border-gray-200 focus:outline-none"
            />

            {/* BUTTON INSIDE INPUT */}
            <button
              type="submit"
              className="
        absolute right-2
        cursor-pointer
        px-4 py-3
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
              Start Earning
            </button>

          </div>
        </form>

        <p className="flex items-center justify-center gap-2 text-sm md:text-base font-medium">
          <IoAlertCircleOutline className="text-[#FF3366]" />

          <span className="
    bg-gradient-to-r from-[#6699FF] to-[#FF3366]
    bg-clip-text 
    text-transparent
  ">
            We analyze your profile and match you with high-earning tasks instantly.
          </span>
        </p>

        {/* Loading State */}
        {isLoading && (
          <div className="mt-8 flex flex-col items-center gap-4">
            <FaSpinner className="animate-spin text-4xl text-[#6699FF]" />
            <p className="text-gray-600 font-medium">Analyzing your profile...</p>
          </div>
        )}

        {/* Stats Display */}
        {stats && !isLoading && (
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-[#FF3366]">
              <h3 className="text-2xl font-bold text-center mb-6 gradient-text">
                Your Profile Analytics
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {/* Views */}
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <AiOutlineEye className="text-3xl text-[#6699FF] mb-2" />
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.views.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">Views</p>
                </div>

                {/* Likes */}
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl">
                  <AiOutlineHeart className="text-3xl text-[#FF3366] mb-2" />
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.likes.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">Likes</p>
                </div>

                {/* Comments */}
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <AiOutlineComment className="text-3xl text-[#6699FF] mb-2" />
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.comments.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">Comments</p>
                </div>

                {/* Shares */}
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-pink-50 rounded-xl">
                  <AiOutlineShareAlt className="text-3xl text-[#FF3366] mb-2" />
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.shares.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">Shares</p>
                </div>
              </div>

              {/* Estimated Earnings */}
              <div className="bg-gradient-to-r from-[#6699FF] to-[#FF3366] rounded-2xl p-6 text-center text-white">
                <p className="text-lg mb-2">Estimated Potential Earnings</p>
                <p className="text-4xl font-bold">${stats.estimatedEarnings}</p>
                <p className="text-sm mt-2 opacity-90">Based on your engagement rate</p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  setStats(null)
                  setProfileLink('')
                }}
                className="
                  mt-6 w-full
                  px-6 py-3
                  rounded-full
                  font-medium
                  text-white
                  bg-gradient-to-r from-[#6699FF] to-[#FF3366]
                  transition-all duration-300
                  hover:from-[#FFFFFF] hover:to-[#FFFFFF]
                  hover:text-[#FF3366]
                  hover:border-2 hover:border-[#FF3366]
                "
              >
                Check Another Profile
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default Hero

