 Gamified User Dashboard

Welcome to the "Gamified User Dashboard" — a fun, interactive way to track your daily mood, build streaks, and earn XP, just like in a game! This project was built using React and focuses on enhancing user engagement through simple gamification elements.



 Features

Here’s what this dashboard offers:

- "Mock Login" – Enter your name to get started (no real authentication needed).
- "XP & Level Tracking" – Earn XP with every mood check-in. Level up as you go!
- "Daily Streak Counter" – Keep your streak alive with regular check-ins.
- "Mood Check-in" – Log your mood using emojis.
- "Mood History Chart" – Visual representation of your XP gains over time.
- "Progress Bar" – Shows how close you are to leveling up.
- "Logout Button" – Easily start over and reset your progress.
- "Clean UI Design" – Built with CSS and gradients for a smooth, friendly interface.

---

* Install dependencies

 npm install

*Start the development server

 create-react-app, run npm start instead.

*Project Structure

my-dashboard
  public/
  └── index.html
 src/
  components/
  - LoginComponent.js
  - DashboardComponent.js
  - MoodCheckinComponent.js
  - ProgressBarComponent.js
  - MoodChart.js
      - App.js
 - package.json
 - README.md

* Tech Stack
React for UI components

Chart.js + react-chartjs-2 for mood history visualization

LocalStorage for saving XP, mood, and streak data

CSS (with inline styles) for design and responsiveness

* Notes
All data (XP, moods, etc.) is saved locally using your browser's localStorage.

This is a front-end-only app — no backend or real login system.

Ideal for learning React basics and how to add gamification to a user experience.

* Future Ideas
Integrate Firebase for real user authentication

Add achievements or rewards for milestone streaks

Allow users to write journal entries alongside mood check-ins

Add dark mode toggle



 
