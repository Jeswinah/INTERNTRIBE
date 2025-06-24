import React from "react";
import UserCard from "./UserCard";


const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.length > 0 ? (
        users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;
