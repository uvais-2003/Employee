function addEmployee(){
    let id = document.getElementById('empid').value;
    console.log(id);
    let name = document.getElementById('ename').value;
    console.log(name);
    let phn = document.getElementById('phno').value;
    console.log(phn); 
    if(id=="" || name=="" || phn==""){
        alert("Please enter  details");
    }else{
       let table = document.getElementById('emplist').getElementsByTagName('tbody')[0];
        let row = table.insertRow();

        row.insertCell(0).innerHTML = id;
        row.cells[0].className = "border border-black px-2 py-1";
        row.insertCell(1).innerHTML = name;
        row.cells[1].className = "border border-black px-2 py-1";
        row.insertCell(2).innerHTML = phn;
        row.cells[2].className = "border border-black px-2 py-1";
        row.insertCell(3).innerHTML = `<i onclick="editemp(this)" class="fa-solid fa-pen cursor-pointer"></i>`;
        row.cells[3].className = "border border-black px-2 py-1";
        row.insertCell(4).innerHTML = `<i onclick="deleteemp(this)" class="fa-solid fa-trash cursor-pointer"></i>`;
        row.cells[4].className = "border border-black px-2 py-1";

        // Reset inputs
        document.getElementById('empid').value = "";
        document.getElementById('ename').value = "";
        document.getElementById('phno').value = "";
      }
    }

function editemp(emp){
  // find the row of the clicked icon
  let row = emp.parentNode.parentNode;  

  // get current values
  let oldId   = row.cells[0].textContent;
  let oldName = row.cells[1].textContent;
  let oldPhn  = row.cells[2].textContent;

  // ask user for new values
  let newId   = prompt("Edit Employee Id ", oldId);
  let newName = prompt("Edit Employee Name", oldName);
  let newPhn  = prompt("Edit Phone Number", oldPhn);

  // update only if user typed something (not cancel or empty)
  if(newId !== null && newId.trim() !== ""){
    row.cells[0].textContent = newId.trim();
  }
  if(newName !== null && newName.trim() !== ""){
    row.cells[1].textContent = newName.trim();
  }
  if(newPhn !== null && newPhn.trim() !== ""){
    row.cells[2].textContent = newPhn.trim();
  }
}


function deleteemp(emp){
let row = emp.parentNode.parentNode;
      row.remove();
}