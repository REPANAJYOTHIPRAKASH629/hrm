// src/components/TrainingSchedule.js
import React, { useState } from 'react';
import TrainingSession from './TrainingSession';

const TrainingSchedule = () => {
  const [sessions] = useState([
    {
      id: 1,
      title: 'React for Beginners',
      description: 'Learn the basics of React JS.',
      date: '2025-03-10',
      duration: 3
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Dive deeper into JavaScript concepts.',
      date: '2025-03-15',
      duration: 4
    },
    {
      id: 3,
      title: 'Web Development Bootcamp',
      description: 'Full stack development from scratch.',
      date: '2025-03-20',
      duration: 6
    }
  ]);

  return (
    <div className="training-schedule">
      <h2>Available Training Sessions</h2>
      <div className="session-list">
        {sessions.map((session) => (
          <TrainingSession key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
};

export default TrainingSchedule;
