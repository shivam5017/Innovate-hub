// ProjectsSection.js
import React, { useState } from "react";
import { HeadingsBtn } from "../../Components/buttons/button";
import { FaQuoteLeft, FaAngleDown, FaAngleUp } from "react-icons/fa";


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "You can return any item within 30 days of purchase for a full refund.",
      icon: <FaAngleDown />,
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes between 3-5 business days, depending on your location.",
      icon: <FaAngleDown />,
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, our customer support team is available 24/7 to assist you.",
      icon: <FaAngleDown />,
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, you will receive a tracking number via email once your order has shipped.",
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
