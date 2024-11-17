import { Faqs } from './Faqs';

export const Faq = () => {

  const faqs = [
    {
      "question": "Is Upro For Me?",
      "answer": "That depends! If you would like to distribute your web app to your users with fast, secure, and trendy design, then Upro is a great fit for you."
    },
    {
      "question": "What Can I Use Upro For?",
      "answer": "Upro is perfect for showcasing your portfolio, sharing completed projects, and attracting new clients with a professional online presence."
    },
    {
      "question": "How Customizable Is Upro?",
      "answer": "Upro offers a variety of customization options, allowing you to tailor your web app's look, feel, and functionality to match your style and branding."
    },
    {
      "question": "Do I Need Coding Skills To Use Upro?",
      "answer": "Not at all! Upro is designed to be user-friendly, with intuitive tools that let you create and manage your web app without needing any coding knowledge."
    },
    {
      "question": "Can Upro Help Me Get More Clients?",
      "answer": "Yes! By showcasing your work in a professional and visually appealing way, Upro helps you make a strong impression on potential clients and attract new projects."
    },
    {
      "question": "What Makes Upro Stand Out?",
      "answer": "Upro combines speed, security, and modern design to deliver a seamless user experience that sets your web app apart from the competition."
    }
  ]

  return (
    <div className='container mt-10'>
      <h2 className='text-5xl sm:font-medium mb-6'>FAQs</h2>
      <div className='flex flex-col gap-4 lg:grid lg:grid-cols-2'>
        {faqs.map((faq, index) => (
          <Faqs key={index} quest={faq.question} ans={faq.answer}/>
        ))}
      </div>
    </div>
  )
}
