// src/components/TrainingSession.js
import React from 'react';
import EnrollButton from './EnrollButton';

const TrainingSession = ({ session }) => {
  if (!session) {
    return <div>Loading...</div>;  // Handle case where session data is missing
  }

  return (
    <div className="training-session">
      <h3>{session.title}</h3>
      <p>{session.description}</p>
      <p><strong>Date:</strong> {session.date}</p>
      <p><strong>Duration:</strong> {session.duration} hours</p>
      <EnrollButton sessionId={session.id} />
    </div>
  );
};

export default TrainingSession;
