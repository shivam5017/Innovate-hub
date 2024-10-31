import React, { useState } from 'react';
import { client } from '../sanityClient'; // Import your Sanity client

const AddFAQForm = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFAQ = {
      _type: 'faq', // Specify the type as 'faq'
      question,
      answer,
    };
  
    console.log(newFAQ)
    try {
      await client.create(newFAQ); // Use create to add a new FAQ

      // Reset form fields
      setQuestion('');
      setAnswer('');
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='pt-24 max-w-md mx-auto p-6 rounded-lg shadow-md ' >
      <h2 className='text-xl font-bold text-center mb-4'>Add FAQ</h2>

      <div className='mb-4'>
        <label className='block text-sm font-medium' htmlFor="question">Question</label>
        <input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter question"
          required
          className='mt-1 p-2 w-full border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium' htmlFor="answer">Answer</label>
        <textarea
          id="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter answer"
          required
          className='mt-1 p-2 border w-full bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows="3"
        />
      </div>

      <button
        type="submit"
        className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200'
      >
        Add FAQ
      </button>
    </form>
  );
};

export default AddFAQForm;
