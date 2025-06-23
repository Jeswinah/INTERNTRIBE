// Theme mode

theme.addEventListener("click", () => {
 const mainbody=document.querySelector('.main-body')
 mainbody.classList.toggle('dark')
});

// Employee Data
let emp = [
  {
    id: 1,
    name: "Jeswin",
    age: 19,
    department: "Development",
    role: "Full Stack developer",
    salary: 80000,
  },
  {
    id: 2,
    name: "Lavanya",
    age: 31,
    department: "HR",
    role: "Recruiter",
    salary: 43000,
  },
  {
    id: 3,
    name: "Akash",
    age: 18,
    department: "Development",
    role: "Backend Developer",
    salary: 81000,
  },
  {
    id: 4,
    name: "Ajay",
    age: 28,
    department: "Testing",
    role: "Software Tester",
    salary: 52000,
  },
  {
    id: 5,
    name: "Vijay",
    age: 45,
    department: "Support",
    role: "Support Manager",
    salary: 52000,
  },
  {
    id: 6,
    name: "Priya",
    age: 24,
    department: "Development",
    role: "Frontend Development",
    salary: 42000,
  },
  {
    id: 7,
    name: "Sneha",
    age: 21,
    department: "Marketing",
    role: "Research Analyst",
    salary: 62000,
  },

  {
    id: 8,
    name: "John",
    age: 36,
    department: "Support",
    role: "Support Manager",
    salary: 31000,
  },

  {
    id: 9,
    name: "Rashmika",
    age: 30,
    department: "HR",
    role: "Recruiter",
    salary: 41000,
  },

  {
    id: 10,
    name: "Ajith",
    age: 55,
    department: "Support",
    role: "Support Specialist",
    salary: 53000,
  },
];
// emp details table
const tbody = document.getElementById("tbody");
const userdata = () => {
  emp.forEach((detail) => {
    const tr = document.createElement("tr");
    const { id, name, age, department, role, salary } = detail;
    tbody.appendChild(tr);
    id % 2 ? (tr.style.backgroundColor = "rgb(237, 235, 244)") : null;

    tr.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${department}</td>
        <td>${role}</td>
        <td>${salary}</td>
        `;
  });
};

// Upercase button function
const upper = () => {
  emp = emp.map((val) => {
    return {
      ...val,
      name: val.name.toUpperCase(),
    };
  });
  tbody.innerText = "";
  userdata(emp);
};

// search data
const input = document.querySelector("#input");
input.addEventListener("keyup", (e) => {
  let searchinput = e.target.value;
  const searched = emp.find((val) => val.name.toLowerCase() == searchinput);
  if (searched) {
    tbody.innerText = "";
    const { name, age, department, role, salary } = searched;
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    tr.innerHTML = `
       <td>${name}</td>
        <td>${age}</td>
        <td>${department}</td>
        <td>${role}</td>
        <td>${salary}</td>
      `;
  }
});

// Dropdown section
const employeeSelect = document.querySelector("#employeeSelect");
employeeSelect.addEventListener("change", (e) => {
  const selected = e.target.value;
  if (selected) {
    const filtered = emp.filter((n) => {
      return n.department === selected;
    });
    tbody.innerText = "";
    filtered.forEach((val) => {
      const { name, age, department, role, salary } = val;
      const tr = document.createElement("tr");
      tbody.appendChild(tr);
      tr.innerHTML = `
       <td>${name}</td>
        <td>${age}</td>
        <td>${department}</td>
        <td>${role}</td>
        <td>${salary}</td>
      `;
    });
  }
});

// Average salary function
const avgsalary = () => {
  const calculateAverageSalary = emp.reduce((total, employee) => {
    return total + employee.salary;
  }, 0);
  const avgsalary1 = document.querySelector(".avgsalary");
  avgsalary1.innerText = calculateAverageSalary/emp.length;
  alert("Average salary of Employees\t" + calculateAverageSalary/emp.length);
};

userdata();
