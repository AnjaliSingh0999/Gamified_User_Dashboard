import React, { useState } from 'react';

export const LoginComponent = ({ onLogin }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin(name.trim());
    }
  };

  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #c3aed6, #f5f5f5, #f7d9c4)',
      fontFamily: 'Segoe UI, sans-serif',
    },
    heading: {
      fontSize: '28px',
      color: '#4a148c',
      fontWeight: 'bold',
      marginBottom: '30px',
    },
    box: {
      background: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      width: '320px',
      textAlign: 'center',
    },
    title: {
      fontSize: '20px',
      color: '#6a1b9a',
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#6a1b9a',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#4a148c',
    },
  };

  return (
    <div style={styles.container}>
      {/* Heading outside the card */}
      <h1 style={styles.heading}>Gamified User Dashboard</h1>

      <form onSubmit={handleSubmit} style={styles.box}>
        <h2 style={styles.title}>Welcome Back!</h2>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Start
        </button>
      </form>
    </div>
  );
};
