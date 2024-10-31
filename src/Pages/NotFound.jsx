import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomBtn } from "../Components/buttons/button"; // Adjust this import based on your structure

const NotFound = () => {
    const navigate=useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center pt-24">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-lightText mb-4">
        Page Not Found
      </h2>
      <p className="mb-6 text-md font-paragraph text-lightText">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <CustomBtn onClick={()=>navigate('/')}>Go to Home</CustomBtn>
    </div>
  );
};

export default NotFound;
