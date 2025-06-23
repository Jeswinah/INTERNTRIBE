const theme = () => {
  // Theme change function
  let dark = false;
  const body = document.querySelector("body");
  const th = document.getElementById("theme");
  th.classList.toggle("dark");
  th.className == "dark" ? (dark = true) : (dark = false);
  if (dark) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    th.style.backgroundColor='white'
    th.style.color='black'
    th.innerText="🌞 Light Mode"

  } else {
    body.style.backgroundColor = "white";
    th.style.backgroundColor='black'
    body.style.color = "black";
    th.style.color='white'
    th.innerText="🌙 Dark Mode"
  }
};
const loadtask = async () => {
  const isloading = document.getElementById("isloading");
  const tasks = [
    {
      id: 1,
      title: "Task1",
      status: "Pending",
      progress: "0%",
    },
    {
      id: 2,
      title: "Task2",
      status: "Pending",
      progress: "0%",
    },
    {
      id: 3,
      title: "Task3",
      status: "Pending",
      progress: "0%",
    },
  ];
  isloading.innerText = "Loading...";
  const promise = await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 1000)
  );
  // After 1 sec it calls the fetchtask function
  fetchtask(tasks);
};

const fetchtask = (tasks) => {
  isloading.innerText = "";
  tasks.forEach((ele) => {
    const div = document.createElement("div");
    div.className = "box";
    div.innerHTML = `
      <p>Task : ${ele.title}</P>
      <p>Status :<span class="status">${ele.status}</span></P>
      <p>Progress :<span class="progress">${ele.progress}</span></P>
    `;
    isloading.appendChild(div);
  });
};

// Start task
let arr = [];
const start = () => {
  const status = document.querySelectorAll(".status");
  const progress = document.querySelectorAll(".progress");
  const box = document.querySelectorAll(".box");

  for (let i = 0; i < 3; i++) {
    status[i].innerText = "In Progress";
    let value = 0;
    const interval = setInterval(() => {
      if (value < 100) {
        value = value + 10;
      }
      progress[i].innerText = value + "%";

      if (value == 100) {
        clearInterval(interval);
        status[i].innerText = "Completed";
        box[i].style.backgroundColor = "green";
        box[i].style.color = "white";
      }
      arr.push(interval);
    }, 1000);
  }
};

// Stop task
const stop = () => {
  arr.forEach((v) => clearInterval(v));
};

// delay notificaton
const delaynotificaton = () => {
  const notification = document.getElementById("notification");
  setTimeout(() => {
    notification.innerText = `🔔 Delayed Notification`;
  }, 2000);
};
