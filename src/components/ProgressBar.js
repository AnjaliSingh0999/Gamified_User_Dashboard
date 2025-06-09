import React from 'react';

export const ProgressBarComponent = ({ xp }) => {
  const percent = xp % 100;

  return (
    <div
      style={{
        width: '100%',
        background: '#ddd',
        borderRadius: '10px',
        margin: '10px 0',
        height: '15px',
      }}
    >
      <div
        style={{
          width: `${percent}%`,
          background: '#4caf50',
          height: '100%',
          borderRadius: '10px',
          transition: 'width 0.3s ease-in-out',
        }}
      />
    </div>
  );
};
