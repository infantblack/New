
            
var rIndex,
    table = document.getElementById("table");

// check the empty input

function checkEmptyInput()
{
    var isEmpty = false,
        empName = document.getElementById("empName").value,
        empId = document.getElementById("empId").value,
        empDes = document.getElementById("empDes").value;
        empTeam = document.getElementById("empTeam").value;

    if(empName === ""){
        alert("First Name Connot Be Empty");
        isEmpty = true;
    }
    else if(empId === ""){
        alert("Last Name Connot Be Empty");
        isEmpty = true;
    }
    else if(empDes === ""){
        alert("Age Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// add Row
function addTableRow()
{
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if(!checkEmptyInput()){
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        empName = document.getElementById("empName").value,
        empId = document.getElementById("empId").value,
        empDes = document.getElementById("empDes").value;
        empTeam = document.getElementById("empTeam").value;


    cell1.innerHTML = empName;
    cell2.innerHTML = empId;
    cell3.innerHTML = empDes;
    cell3.innerHTML = empTeam;

    // call the function to set the event to the new row
    selectedRowToInput();
}
}

// display selected row data into input text
function selectedRowToInput()
{
    
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
          // get the seected row index
          rIndex = this.rowIndex;
          document.getElementById("empName").value = this.cells[0].innerHTML;
          document.getElementById("empId").value = this.cells[1].innerHTML;
          document.getElementById("empDes").value = this.cells[2].innerHTML;
          document.getElementById("empTeam").value = this.cell[3].innerHTML;
        };
    }
}
selectedRowToInput();

function editRow()
{
    var empName = document.getElementById("empName").value,
        empId = document.getElementById("empId").value,
        empDes = document.getElementById("empDes").value;
        empTeam = document.getElementById("empTeam").value;
   if(!checkEmptyInput()){
    table.rows[rIndex].cells[0].innerHTML = empName;
    table.rows[rIndex].cells[1].innerHTML = empId;
    table.rows[rIndex].cells[2].innerHTML = empDes;
    table.rows[rIndex].cells[3].innerHTML = empTeam;
  }
}

function removeRow()
{
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("empName").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("empDes").value = "";
    document.getElementById("empTeam").value = "";
}
