import React, { useState } from "react";
import { client } from "../sanityClient"; // Import your Sanity client
import { v4 as uuidv4 } from "uuid"; // Import UUID for unique keys

const AddProjectForm = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // Changed from imageUrl to image
  const [projectUrl, setProjectUrl] = useState("");
  const [media, setMedia] = useState([]); // To handle media gallery
  const [goals, setGoals] = useState("");
  const [testimonials, setTestimonials] = useState([{ _key: uuidv4(), name: "", feedback: "" }]);
  const [version, setVersion] = useState("");
  const [futurePlans, setFuturePlans] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const uploadedImage = await client.assets.upload("image", file);
        setImage(uploadedImage); // Store the uploaded image
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleMediaUpload = async (e) => {
    const files = Array.from(e.target.files);
    
    try {
      const uploadedMedia = await Promise.all(
        files.map(async (file) => {
          const uploadedFile = await client.assets.upload("image", file);
          return { _key: uuidv4(), asset: uploadedFile }; // Ensure the asset field is included
        })
      );
      setMedia((prevMedia) => [...prevMedia, ...uploadedMedia]); // Append new media to existing array
    } catch (error) {
      console.error("Error uploading media:", error);
    }
  };

  const handleTestimonialChange = (index, field, value) => {
    const newTestimonials = [...testimonials];
    newTestimonials[index][field] = value;
    setTestimonials(newTestimonials);
  };

  const addTestimonial = () => {
    setTestimonials([...testimonials, { _key: uuidv4(), name: "", feedback: "" }]); // Add new testimonial with unique key
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newProject = {
      _type: "project",
      title,
      status,
      statusColor,
      description,
      image,
      projectUrl,
      media: media.map((m) => ({
        _key: m._key,
        asset: {
          _type: 'reference', // Reference type
          _ref: m.asset._id // Use the asset ID from Sanity
        }
      })), // Ensure the media structure is correct for submission
      goals,
      testimonials,
      version,
      futurePlans,
    };
  
    try {
      await client.create(newProject);
      resetForm(); // Reset form fields after successful submission
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const resetForm = () => {
    setTitle("");
    setStatus("");
    setStatusColor("");
    setDescription("");
    setImage(null); // Reset image to null
    setProjectUrl("");
    setMedia([]);
    setGoals("");
    setTestimonials([{ _key: uuidv4(), name: "", feedback: "" }]);
    setVersion("");
    setFuturePlans("");
  };

  return (
    <form onSubmit={handleSubmit} className="pt-20 max-w-md mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Add Project</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter project title"
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select status</option>
          <option value="Live">Live</option>
          <option value="Coming Soon">Coming Soon</option>
          <option value="In Development">In Development</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="statusColor">Status Color</label>
        <select
          id="statusColor"
          value={statusColor}
          onChange={(e) => setStatusColor(e.target.value)}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select status color</option>
          <option value="bg-green-500">Green</option>
          <option value="bg-yellow-500">Yellow</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter project description"
          required
          className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="image">Project Image</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="projectUrl">Project URL</label>
        <input
          id="projectUrl"
          type="url"
          value={projectUrl}
          onChange={(e) => setProjectUrl(e.target.value)}
          placeholder="Enter project URL"
          required
          className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="media">Media Gallery</label>
        <input
          id="media"
          type="file"
          accept="image/*"
          multiple
          onChange={handleMediaUpload}
          className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="goals">Goals</label>
        <textarea
          id="goals"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          placeholder="Enter project goals"
          required
          className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Testimonials</label>
        {testimonials.map((test, index) => (
          <div key={test._key} className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={test.name}
              onChange={(e) => handleTestimonialChange(index, "name", e.target.value)}
              className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Feedback"
              value={test.feedback}
              onChange={(e) => handleTestimonialChange(index, "feedback", e.target.value)}
              className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addTestimonial}
          className="text-blue-600 underline"
        >
          Add Testimonial
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="version">Version</label>
        <input
          id="version"
          type="text"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
          placeholder="Enter project version"
          className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="futurePlans">Future Plans</label>
        <textarea
          id="futurePlans"
          value={futurePlans}
          onChange={(e) => setFuturePlans(e.target.value)}
          placeholder="Enter future plans for the project"
          className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Add Project
      </button>
    </form>
  );
};

export default AddProjectForm;
