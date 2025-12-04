const GradientBanner = () => {
  const items = Array(10).fill(['GET PAID', 'GET VIRAL']).flat()

  return (
    <div className="bg-gradient-to-r from-[#6699FF] to-[#FF3366] py-4 ">
      <div className="overflow-hidden border-t border-b border-white border-dashed">      <div className="flex animate-scroll whitespace-nowrap py-4">
        {items.map((text, index) => (
          <div key={`first-${index}`} className="flex items-center mx-8">
            <span className="text-white text-xl md:text-2xl font-bold">{text}</span>
            <span className="ml-8 text-white text-2xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-5.24856e-05 11.8469C11.1438 14.1849 11.8468 23.9981 11.8468 23.9981C11.8468 23.9981 12.7985 14.2059 23.998 12.1512C12.8542 9.81317 12.1511 -8.54954e-06 12.1511 -8.54954e-06C12.1511 -8.54954e-06 11.1995 9.79219 -5.24856e-05 11.8469Z" fill="#F0F4EF" />
              </svg>
            </span>
          </div>
        ))}
      </div>
      </div>

    </div>
  )
}

export default GradientBanner