 
import React from 'react';

export const MoodCheckinComponent = ({ onCheckin }) => {
  const moods = ['😊', '😔', '😡', '😴', '🤩'];

  const styles = {
  container: {
    marginTop: '30px',
    padding: '20px',
    background: '#f9f5ff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    backgroundColor: '#f9fafb',
  },
  heading: {
    fontSize: '20px',
    color: '#6a1b9a',
    marginBottom: '15px',
  },
  button: {
    margin: '10px',
    fontSize: '28px',
    padding: '10px 20px',
    backgroundColor: '#fff',
    border: '2px solid #e91e63',   
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};


  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>How are you feeling today?</h3>
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => onCheckin(mood)}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#f3e5f5')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
        >
          {mood}
        </button>
      ))}
    </div>
  );
};
