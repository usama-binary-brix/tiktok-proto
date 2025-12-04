const Navbar = () => {
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#6699FF] to-[#FF3366] bg-clip-text text-transparent">
              PaymetoPost
            </h1>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Terms And Conditions
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact Us
            </a>
          </div>

          <div className="flex items-center space-x-4">

            {/* LOGIN BUTTON */}
            <button
              className="
    w-28
    py-2
    rounded-full
    font-medium
    text-white
    cursor-pointer
    bg-gradient-to-r from-[#6699FF] to-[#FF3366]
    transition-all duration-300
    hover:bg-gradient-to-r hover:from-white hover:to-white
    hover:text-[#FF3366]
    hover:border hover:border-[#FF3366]
  "
            >
              Login
            </button>


            {/* SIGNUP BUTTON */}
            {/* <button
              className="
    w-28
    py-2
    rounded-full
    font-medium
    text-white
    cursor-pointer
    bg-gradient-to-r hover:from-white hover:to-white
    
    transition-all duration-300
    hover:bg-gradient-to-r from-[#6699FF] to-[#FF3366]
    hover:text-[#FF3366]
    hover:border hover:border-[#FF3366]
  "


            >
              Signup
            </button> */}
{/* SIGNUP BUTTON */}
<button
  className="
    w-28
    py-2
    rounded-full
    font-medium
    text-[#FF3366]
    bg-white
    cursor-pointer
    border
    border-[#FF3366]
    transition-all duration-300
    hover:text-white
    hover:bg-gradient-to-r
    hover:from-[#6699FF]
    hover:to-[#FF3366]
    hover:border-transparent
  "
>
  Signup
</button>

          </div>

        </div>

        {/* Mobile Navigation Links */}
        <div className="md:hidden pb-4 space-y-2">
          <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors py-2">
            Privacy Policy
          </a>
          <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors py-2">
            Terms And Conditions
          </a>
          <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors py-2">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

