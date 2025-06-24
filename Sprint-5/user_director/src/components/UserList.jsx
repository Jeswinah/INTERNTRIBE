import React from "react";
import UserCard from "./UserCard";
import { useState } from "react";

const UserList = () => {
  const [input, setInput] = useState("");
  const theme = (e) => {
    if (e.target.innerText === "Dark") {
      document.body.style.backgroundColor = "black";
      e.target.innerText = "Light";
    } else {
      document.body.style.backgroundColor = "white";
      e.target.innerText = "Dark";
    }
  };

  const user = [
    {
      name: "Tom",
      email: "tom@gmail.com",
      age: 35,
      role: "Admin",
    },
    {
      name: "Bob",
      email: "bob@gmail.com",
      age: 22,
      role: "Member",
    },
    {
      name: "Jim",
      email: "jim@gmail.com",
      age: 25,
      role: "Guest",
    },

    {
      name: "Vijay",
      email: "vijay@gmail.com",
      age: 35,
      role: "Member",
    },
    {
      name: "Sam",
      email: "sam@gmail.com",
      age: 32,
      role: "Admin",
    },

    {
      name: "Sneha",
      email: "sneha@gmail.com",
      age: 25,
      role: "Admin",
    },
    {
      name: "Trisha",
      email: "trisha@gmail.com",
      age: 22,
      role: "Guest",
    },
    {
      name: "Aravind",
      email: "aravind@gmail.com",
      age: 32,
      role: "Member",
    },
  ];
  // For number of Admins
  let count = 0;
  user.forEach(({ role }) => {
    role === "Admin" ? count++ : count;
  });

  const searchhandler = (e) => {
    setInput(e.target.value);
  };
  // console.log(input);
  return (
    <>
      <div className="head">
        <h1>Dynamic User Directory</h1>
        <button onClick={theme}>Dark</button>
      </div>
      <div className="inputs">
        <input
          type="text"
          placeholder="Search users..."
          onChange={searchhandler}
        />
        <p>Total Admins: {count}</p>
      </div>
      <UserCard users={user} inputname={input} />
    </>
  );
};

export default UserList;
