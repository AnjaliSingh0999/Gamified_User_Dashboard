import React, { useState } from "react";
import { DashboardComponent } from "./components/Dashboard";
import { LoginComponent } from "./components/Login";

function App() {
  const [user, setUser] = useState(() => localStorage.getItem("user") || null);

  const handleLogin = (name) => {
    localStorage.setItem("user", name);
    setUser(name);
  };

  const handleLogout = () => {
    localStorage.clear();  // Clear all saved data
    setUser(null);         // Reset user state to null to show login again
  };

  return (
    <div>
      {!user ? (
        <LoginComponent onLogin={handleLogin} />
      ) : (
        <DashboardComponent user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
