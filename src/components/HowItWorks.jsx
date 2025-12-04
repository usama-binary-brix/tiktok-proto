const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Paste Your TikTok Link',
      description: 'We scan your content type, niche, and engagement.',
      image: "/assets/1.svg"
    },
    {
      number: '02',
      title: 'Earn from likes/views',
      description: 'Post normal content • No sponsorship tagging • Paid even during beta.',
      image: "/assets/2.svg"

    },
    {
      number: '03',
      title: 'Receive Tasks',
      description: 'We match you with tasks based on trends, your posting style, and audience.',
      image: "/assets/3.svg"

    },
    {
      number: '04',
      title: 'Post Your Video',
      description: 'Create and upload videos as you normally do — no brand scripts or approvals.',
      image: "/assets/4.svg"

    }
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-8">
            How <span className="gradient-text"> Paymetopost </span><br />Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } `}
            >
              {/* Image side */}
              <div className="md:w-1/2">
                <img
                  src={step.image}
                  alt={step.title}
                  className=""
                />
              </div>

              {/* Text side */}
              <div className="md:w-1/2 flex flex-col gap-0">
                {/* <h3 className="text-4xl font-bold text-[#3B3939CC] ">{step.title}</h3> */}
                <h3
  className={`text-4xl font-bold text-[#3B3939CC] ${index === 0 ? "md:-mt-20" : ""}`}
>
  {step.title}
</h3>

                <p className="text-gray-600 w-[300px] text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowItWorks

