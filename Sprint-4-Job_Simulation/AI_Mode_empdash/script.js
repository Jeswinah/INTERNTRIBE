const employees = [
  { name: "Alice", age: 30, department: "HR", role: "Manager", salary: 50000 },
  { name: "Bob", age: 25, department: "Engineering", role: "Developer", salary: 70000 },
  { name: "Carol", age: 35, department: "Sales", role: "Executive", salary: 60000 },
  { name: "Dave", age: 28, department: "Engineering", role: "Tester", salary: 55000 },
  { name: "Eve", age: 32, department: "HR", role: "Recruiter", salary: 48000 },
];

const tableBody = document.getElementById("employeeTable");
const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const avgSalaryBtn = document.getElementById("avgSalaryBtn");
const uppercaseBtn = document.getElementById("uppercaseBtn");
const avgSalaryResult = document.getElementById("avgSalaryResult");
const searchResult = document.getElementById("searchResult");
const empCount = document.getElementById("empCount");
const themeToggle = document.getElementById("themeToggle");

let currentEmployees = [...employees];

// Uses forEach() to display employee data
function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach(emp => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${emp.name}</td><td>${emp.age}</td><td>${emp.department}</td><td>${emp.role}</td><td>${emp.salary}</td>`;
    tableBody.appendChild(row);
  });
  empCount.textContent = `Total Employees: ${data.length}`;
}

// Uses map() to convert all names to uppercase
function uppercaseNames() {
  currentEmployees = currentEmployees.map(emp => ({
    ...emp,
    name: emp.name.toUpperCase()
  }));
  renderTable(currentEmployees);
}

// Uses filter() to filter by department
departmentFilter.addEventListener("change", () => {
  const dept = departmentFilter.value;
  if (dept === "All") {
    currentEmployees = [...employees];
  } else {
    currentEmployees = employees.filter(emp => emp.department === dept);
  }
  renderTable(currentEmployees);
});

// Uses reduce() to calculate average salary
avgSalaryBtn.addEventListener("click", () => {
  const avg = currentEmployees.reduce((acc, emp) => acc + emp.salary, 0) / currentEmployees.length;
  avgSalaryResult.textContent = currentEmployees.length ? avg.toFixed(2) : "-";
});

// Uses find() to search by name
searchInput.addEventListener("keyup", () => {
  const name = searchInput.value.trim().toLowerCase();
  if (name === "") {
    searchResult.textContent = "-";
    return;
  }
  const found = employees.find(emp => emp.name.toLowerCase() === name);
  searchResult.textContent = found
    ? `${found.name}, ${found.age}, ${found.department}, ${found.role}, ₹${found.salary}`
    : "No match found";
});

uppercaseBtn.addEventListener("click", uppercaseNames);

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

renderTable(currentEmployees);
