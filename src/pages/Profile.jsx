import React from "react";

const Profile = () => {
  const user = {
    name: "Nhial Cham",
    role: "Full-Stack Software Developer",
    email: "nhialcham14@gmail.com",
    summary: "I am a passionate developer managing tasks and improving productivity."
  };

  return (
    <div>
      <h2>Profile Page</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Summary:</strong> {user.summary}</p>
    </div>
  );
};

export default Profile;