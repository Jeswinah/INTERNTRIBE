import React from "react";

const UserCard = ({ users, inputname }) => {
  const filtered = inputname
    ? users.filter((v) => v.name.toLowerCase() === inputname.toLowerCase())
    : users;

  return (
    <div className="main-card">
      {filtered.map((users) => {
        const { name, role, email, age } = users;

        return (
          <div className="card" key={name}>
            <div className="role-main">
              <div
                className="role"
                style={{
                  backgroundColor:
                    role == "Admin"
                      ? "red"
                      : role == "Member"
                      ? "blue"
                      : "gray",
                }}
              >
                {role}
              </div>
            </div>
            <div className="detail">
              <p>Name:{name}</p>
              <p>Email:{email}</p>
              <p>Age:{age}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
