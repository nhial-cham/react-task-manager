import React, { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <h2>Settings Page</h2>

      <h3>Theme Settings</h3>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <h3>Notification Settings</h3>
      <label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
        />
        Enable Notifications
      </label>

      <h3>Account Settings</h3>
      <p>Manage your account preferences here.</p>
    </div>
  );
};

export default Settings;