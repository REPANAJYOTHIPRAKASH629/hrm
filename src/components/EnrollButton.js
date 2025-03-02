// src/components/EnrollButton.js
import React from 'react';

const EnrollButton = ({ sessionId }) => {
  const handleEnroll = () => {
    console.log(`Enrolled in session: ${sessionId}`);
    alert(`You have enrolled in session ${sessionId}!`);  // Optional: Show a confirmation message
  };

  return (
    <button className="enroll-button" onClick={handleEnroll}>
      Enroll
    </button>
  );
};

export default EnrollButton;
