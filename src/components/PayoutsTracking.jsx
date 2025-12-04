import { useState } from 'react'
import { IoAdd } from 'react-icons/io5'
import { HiOutlineMinusSm } from "react-icons/hi";

const PayoutsTracking = () => {
  const [openIndex, setOpenIndex] = useState(-1)

  const faqs = [
    {
      question: 'How do payouts work?',
      answer: 'You get paid for every like your task-based video receives. Earnings are calculated automatically.'
    },
    {
      question: "What's the minimum payout?",
      answer: 'The minimum payout threshold is $50. Once you reach this amount, you can withdraw your earnings.'
    },
    {
      question: 'When do I get paid?',
      answer: 'Payouts are processed weekly every Monday. You can expect to receive your earnings within 3-5 business days.'
    },
    {
      question: 'Do I need followers?',
      answer: 'No! We focus on engagement, not follower count. Even new creators can earn based on their content performance.'
    },
    {
      question: 'How do you track my likes?',
      answer: 'We use official platform APIs to track engagement in real-time, ensuring accurate and transparent calculations.'
    },
    {
      question: 'Who are the Webflow founders?',
      answer: 'This question seems to be a placeholder. Paymetopost is an independent platform for creator monetization.'
    }
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold text-[#3B3939] mb-6">
            How Payouts & Tracking Work
          </h2>
          <p className="text-[#3B3939] text-lg">
            Paymetopost ensures fast, transparent earnings. We track your post's engagement in real time
            and calculate your payout based on likes. No waiting for brand approvals or long invoicing cycles.
          </p>
        </div>

        <div className="columns-1 md:columns-2 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`break-inside-avoid rounded-xl border-2 transition-all mb-4 overflow-hidden ${openIndex === index
                ? 'border-[#FF3366] bg-[#6699FF0D] shadow-md'
                : 'border-gray-200 bg-white'
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
              <span
  className="text-lg font-semibold"
  style={{ color: openIndex === index ? '#FF3366' : '#515151' }}
>
  {faq.question}
</span>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-blue-400 to-pink-500 flex items-center justify-center transition-all duration-300">
                      <HiOutlineMinusSm className='text-white' />
                    </div>
                  ) : (
                    <IoAdd />
                  )}
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                  maxHeight: openIndex === index ? '200px' : '0',
                }}
              >
                <p className="text-gray-600 py-2">{faq.answer}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default PayoutsTracking
