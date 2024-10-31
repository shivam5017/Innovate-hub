// ProjectsSection.js
import React, { useEffect, useState } from "react";
import { HeadingsBtn } from "../../Components/buttons/button";
import { FaQuoteLeft, FaAngleDown, FaAngleUp } from "react-icons/fa";
import {client} from '../../sanityClient';


const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const fetchFAQs = async () => {
    const data = await client.fetch(`*[_type == "faq"]{question, answer}`);
    setFaqs(data);
  };

  useEffect(() => {
    fetchFAQs();
  }, []);

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
