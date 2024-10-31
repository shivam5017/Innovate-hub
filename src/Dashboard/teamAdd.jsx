import React, { useState } from 'react';
import { client } from '../sanityClient'; // Import your Sanity client

const AddMemberForm = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState(null); // Handle image separately if needed
  const [linkedIn, setLinkedIn] = useState('');
  const [github, setGithub] = useState('');

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedImage = await client.assets.upload('image', file);
      setImage(uploadedImage);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMember = {
      _type: 'member', // Specify the type as 'member'
      name,
      position,
      bio,
      image, // Use the uploaded image
      linkedIn,
      github,
    };

    try {
      await client.create(newMember); // Use create to add a new member

      // Reset form fields
      setName('');
      setPosition('');
      setBio('');
      setImage(null);
      setLinkedIn('');
      setGithub('');
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='pt-20 max-w-md mx-auto p-6 rounded-lg shadow-md'>
      <h2 className='text-xl font-bold text-center mb-4'>Add Team Member</h2>

      <div className='mb-4'>
        <label className='block text-sm font-medium ' htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
          className='mt-1 p-2 w-full border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium ' htmlFor="position">Position</label>
        <input
          id="position"
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Enter position"
          required
          className='mt-1 p-2 border w-full bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium ' htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Enter bio"
          required
          className='mt-1 p-2 border w-full bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows="3"
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium ' htmlFor="image">Profile Image</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className='mt-1 p-2 border w-full bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium ' htmlFor="linkedIn">LinkedIn URL</label>
        <input
          id="linkedIn"
          type="url"
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
          placeholder="Enter LinkedIn URL"
          className='mt-1 p-2 border w-full bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium ' htmlFor="github">GitHub URL</label>
        <input
          id="github"
          type="url"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          placeholder="Enter GitHub URL"
          className='mt-1 p-2 border w-full bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <button
        type="submit"
        className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200'
      >
        Add Member
      </button>
    </form>
  );
};

export default AddMemberForm;
