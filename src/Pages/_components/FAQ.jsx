// ProjectsSection.js
import React, { useState } from "react";
import { HeadingsBtn } from "../../Components/buttons/button";
import { FaQuoteLeft, FaAngleDown, FaAngleUp } from "react-icons/fa";


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide a range of SaaS solutions tailored for various industries, including project management, customer relationship management, and more.",
      icon: <FaAngleDown />,
    },
    {
      question: "How can I access your products?",
      answer: "You can access our products through our website. Simply sign up for an account to get started with any of our SaaS solutions.",
      icon: <FaAngleDown />,
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a free trial for most of our products, allowing you to explore features before committing to a subscription.",
      icon: <FaAngleDown />,
    },
    {
      question: "What is your billing cycle?",
      answer: "Our standard billing cycle is monthly, but you can also choose annual subscriptions for discounted rates.",
      icon: <FaAngleDown />,
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement industry-standard security measures, including encryption and regular security audits, to protect your data.",
      icon: <FaAngleDown />,
    },
    
    {
      question: "What support options are available?",
      answer: "We offer 24/7 customer support via chat, email, and phone to assist you with any questions or issues.",
      icon: <FaAngleDown />,
    },
    {
      question: "How do I provide feedback?",
      answer: "We value your feedback! You can submit suggestions or report issues directly through our website or by contacting customer support.",
      icon: <FaAngleDown />,
    },
  ];
  

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col container h-full text-center mb-8">
      <div className="container mx-auto flex justify-center items-center text-center mb-12">
        <HeadingsBtn text={"FAQ"} icon={<FaQuoteLeft />} />
      </div>
      <div className="mx-auto w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center p-4 border rounded-lg shadow-lg cursor-pointer transition"
            >
              <h3 className="font-bold text-sm lg:text-lg font-primary">
                {faq.question}
              </h3>
              <span className="text-xl">
                {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </div>
            {activeIndex === index && (
              <div className="mt-2 p-4 border-2 rounded-lg">
                
                {/* Add QuoteSvg inside the answer box */}
                <p className="text-sm font-paragraph text-lightText">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
