import React, { useState } from "react";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { name: "Alice", email: "alice@gmail.com", age: 30, role: "Admin" },
    { name: "Bob", email: "bob@gmail.com", age: 25, role: "Member" },
    { name: "Charlie", email: "charlie@gmail.com", age: 16, role: "Guest" },
    { name: "Diana", email: "diana@gmail.com", age: 21, role: "Member" },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>User Directory</h1>
      <input
        type="text"
        placeholder="Search by name..."
        className="search-box"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;
