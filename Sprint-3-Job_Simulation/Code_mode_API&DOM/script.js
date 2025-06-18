const data = document.getElementById("data");
const box = document.getElementById("box");
//  fetch the api and convert into json format 
const apihandler = async () => {
  const api = "https://jsonplaceholder.typicode.com/users";
  const a = await fetch(api);
  const res = await a.json();
  // passing the api reponse to handler function
  handler(res);
};

apihandler();
const handler = (res) => {
  // using map function getting each object in the parameter n
  res.map((n) => {

    // Creating all the elements needed
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const ebtn = document.createElement("button");
    const dbtn = document.createElement("button");
    // append the child too the row
    const row = data.appendChild(tr);
    const id = row.appendChild(td);
    const names = row.appendChild(td1);
    const cities = row.appendChild(td2);
    // Buttons:edit-delete
    const editbtn = row.appendChild(ebtn);
    const deletebtn = row.appendChild(dbtn);
    editbtn.innerText = "Edit";
    editbtn.id = "ebtn";
    deletebtn.innerText = "Delete";
    deletebtn.id = "dbtn";
    names.innerText = n.name;
    id.innerHTML = n.id;
    cities.innerText = n.address?.city;
    if (n.id % 2) {
      // if the modulus value is 1 the specific background color will apply
      tr.style.backgroundColor = "rgb(208, 208, 208)";
    }
// Edit button function
    ebtn.addEventListener("click", () => {
      const input1 = document.createElement("input");
      input1.placeholder="Click Name or city to edit"
      const submitbtn = document.createElement("button");
      input1.id = n.id;
      box.append(input1);
      box.append(submitbtn);
      submitbtn.innerText = "Submit";
      tr.style.backgroundColor="yellow"
      let v;
      // if the name field is clicked
      td1.addEventListener("click", () => {
        input1.value = n.name;
        input1.focus();
        v=0;
      });
      // If the city field clicked
      td2.addEventListener("click", () => {
        input1.value = n.address?.city;
        input1.focus();
        v=1;
      });

      submitbtn.addEventListener("click", () => {
        v==0? names.textContent = input1.value:cities.textContent=input1.value
        box.removeChild(input1);
        box.removeChild(submitbtn);
      });
    });

    // Delete row
    dbtn.addEventListener("click", () => {
      data.removeChild(tr);
      console.log("Deleted ", n.name);
    });
  });
};
