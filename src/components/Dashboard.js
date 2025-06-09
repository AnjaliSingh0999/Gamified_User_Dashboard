 
import React, { useState, useEffect } from "react";
import { MoodCheckinComponent } from "./MoodCheckin";
import { ProgressBarComponent } from "./ProgressBar";
import { MoodChart } from "./MoodChart"; //  

export const DashboardComponent = ({ user, onLogout }) => {   
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem("xp")) || 0);
  const [streak, setStreak] = useState(() => parseInt(localStorage.getItem("streak")) || 1);
  const [lastMood, setLastMood] = useState(localStorage.getItem("mood") || "");
  const [xpHistory, setXpHistory] = useState(() => {
    const saved = localStorage.getItem("xpHistory");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("xp", xp);
    localStorage.setItem("streak", streak);
    localStorage.setItem("mood", lastMood);
    localStorage.setItem("xpHistory", JSON.stringify(xpHistory));
  }, [xp, streak, lastMood, xpHistory]);

  const handleMoodSubmit = (mood) => {
    setLastMood(mood);
    setXp((prev) => prev + 10);
    setStreak((prev) => prev + 1);
    setXpHistory((prev) => [...prev, 10]);
  };

  const styles = {
    container: {
      padding: '30px',
      maxWidth: '750px',
      margin: '40px auto',
      backgroundColor: '#f3f4f6',
      borderRadius: '14px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center'
    },
    heading: {
      color: '#4a148c',
      fontSize: '28px',
      marginBottom: '20px'
    },
    stat: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '10px'
    },
    moodText: {
      fontSize: '20px',
      color: '#6a1b9a',
      fontWeight: 'bold',
      marginBottom: '15px'
    },
    logoutButton: {
      marginTop: '30px',
      padding: '12px 25px',
      backgroundColor: '#e91e63',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      boxShadow: '0 4px 10px rgba(233, 30, 99, 0.4)',
      transition: 'background-color 0.3s ease',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome, {user}!</h2>
      <p style={styles.stat}>XP: {xp} | Level: {Math.floor(xp / 100) + 1}</p>
      <ProgressBarComponent xp={xp} />
      <p style={styles.stat}>Streak: {streak} days</p>
      <p style={styles.moodText}>Last Mood: {lastMood}</p>

      <MoodCheckinComponent onCheckin={handleMoodSubmit} />
      <MoodChart xpHistory={xpHistory} />

      <button
        style={styles.logoutButton}
        onClick={onLogout}
        onMouseOver={e => (e.target.style.backgroundColor = '#c2185b')}
        onMouseOut={e => (e.target.style.backgroundColor = '#e91e63')}
      >
        Logout
      </button>
    </div>
  );
};
