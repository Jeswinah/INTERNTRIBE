import React from "react";

const UserCard = ({ user }) => {
  const getRoleClass = (role) => {
    switch (role) {
      case "Admin":
        return "admin";
      case "Member":
        return "member";
      case "Guest":
        return "guest";
      default:
        return "";
    }
  };

  return (
    <div className={`user-card ${getRoleClass(user.role)}`}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>
        Age: <span className={user.age < 18 ? "underage" : ""}>{user.age}</span>
      </p>
      <p>
        Role: <strong>{user.role}</strong>
      </p>
    </div>
  );
};

export default UserCard;
