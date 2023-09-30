//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

const myTab = document.getElementById("myTable");
var submitBtn = document.getElementById("button");
var checkRows;
var countBox = 0;
var studentNumber = 0;


initialPageLoad();

function initialPageLoad(){
  var myName = document.createElement("h1");
  myName.innerHTML = "Name: Ameya Apte";
  myName.style.textAlign = "center";

  var myId = document.createElement("h1");
  myId.innerHTML = "NUID: 002764540";
  myId.style.textAlign = "center";

  myTab.before(myId);
  myId.before(myName);

  var count=0;
  
  checkRows = myTab.getElementsByTagName("input");
  for(var i = 0; i < checkRows.length; i++){
    var row = checkRows[i].parentNode.parentNode;
    
    if(!checkRows[i].checked){
      count++;
      studentNumber++;
      row.querySelectorAll("td")[8].classList.add("columnHide");
      row.querySelectorAll("td")[9].classList.add("columnHide");
    }
  }

  if(checkRows.length === count){

    submitBtn.style.backgroundColor = "grey";
    submitBtn.style.border = "2px solid grey";
    submitBtn.disabled = true;
    submitBtn.style.cursor = "initial";
    document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("columnHide");
    document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("columnHide");
  }
}


// toggle hidden row
function rowTwo(r) {  
  const row = r.parentNode.parentNode;
  const descRow = row.nextElementSibling; 
  if (descRow.style.display === "revert") {
    descRow.style.display = "none";
  } else {          
    descRow.style.display = "revert";
  }
}

function deleteRow(r) {
  const i = r.parentNode.parentNode.rowIndex;
  var currentStudent = r.parentNode.parentNode.firstElementChild.nextElementSibling.innerHTML.split(" ")[1];

  if (confirm(`Do you want to delete Student ${currentStudent} details?`)) {
    document.getElementById("myTable").deleteRow(i);
    document.getElementById("myTable").deleteRow(i);
    alert(`Student ${currentStudent} record deleted successfully`);
  } 

}

function editRow(r) {
  var promptText = "";
  
  var selectedData = r.parentNode.parentNode.firstElementChild;
  var headings = r.parentNode.parentNode.parentNode.firstElementChild.firstElementChild;
  var student = selectedData.nextElementSibling.innerHTML;
  promptText+= "Edit Details of " + student + "\n";
  for(let i = 0; i < 7; i++){
    headings = headings.nextElementSibling;
    selectedData = selectedData.nextElementSibling;
    promptText = promptText + headings.innerHTML.replace("<br>", " ") + ": " + selectedData.innerHTML + "\n";
  }

  let studentPrompt = prompt(promptText);

  if(studentPrompt == null){
    return;
  }else{
    alert(student + " data updated successfully");
  }
}


function addRow() {
  rowAddition();
}

function rowAddition(){
  studentNumber++;
  var newRow = myTab.insertRow(myTab.rows.length);
  var currentLastNumber = newRow.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerHTML.split(" ")[1];

  var newCheckboxInput = newRow.insertCell(0);
  newCheckboxInput.innerHTML = `<td><input type="checkbox"/><br/><br/><img src="down.png" onClick="rowTwo(this)" width="25px"/></td>`;

  var newStudentName = newRow.insertCell(1);
  newStudentName.innerHTML = `Student ${studentNumber}`;

  var newAdvisorName = newRow.insertCell(2);
  newAdvisorName.innerHTML = `Teacher ${studentNumber}`;

  var newAwardStatus = newRow.insertCell(3);
  newAwardStatus.innerHTML = "Approved";

  var newSemester = newRow.insertCell(4);
  newSemester.innerHTML = "Fall";

  var newType = newRow.insertCell(5);
  newType.innerHTML = "TA";

  var newBudget = newRow.insertCell(6);
  newBudget.innerHTML = Math.ceil(Math.random()*100000);

  var newPercentage = newRow.insertCell(7);
  newPercentage.innerHTML = "100%";

  var deleteBtn = newRow.insertCell(8);
  
  var editBtn = newRow.insertCell(9);

  try {
    setTimeout(() => {alert(`Student ${studentNumber} Record added successfully`)}, 100);
  } catch (error) {
    alert("Sorry, something went wrong. Please Try Again");
  }
  var newRow = myTab.insertRow(myTab.rows.length);
  newRow.classList.add("dropDownTextArea")
  
  var dropdownData=document.createElement("td");
  dropdownData.innerHTML='Advisor:<br/><br/>Award Details<br/>Summer 1-2014(TA)<br/>Budget Number: <br/>Tuition Number: <br/>Comments:<br /><br/><br/>Award Status:<br/><br/><br/>';
  dropdownData.colSpan="8";
  
  newRow.innerHTML = dropdownData.outerHTML;
}

window.addEventListener("click", () => {

  countBox = 0;
  checkRows = myTab.getElementsByTagName("input");

  for (let i=0; i<checkRows.length; i++) {
      var row = checkRows[i].parentNode.parentNode;

        if (checkRows[i].checked) {
          countBox++;
          row.style.backgroundColor = "yellow";
          row.lastElementChild.innerHTML = '<td><button style="margin-left:5px; margin-right:5px;" onClick="editRow(this)">Edit</button></td>';
          row.lastElementChild.previousElementSibling.innerHTML = '<td><button style="margin-left:5px; margin-right:5px;" onClick="deleteRow(this)">Delete</button></td>';
          row.querySelectorAll("td")[8].classList.remove("columnHide");
          row.querySelectorAll("td")[9].classList.remove("columnHide");
        } else {
          row.style.backgroundColor = "white";
          row.lastElementChild.innerHTML = "";
          row.lastElementChild.previousElementSibling.innerHTML = "";
          row.querySelectorAll("td")[8].classList.add("columnHide");
          row.querySelectorAll("td")[9].classList.add("columnHide");
        }
    
  }

  if (countBox > 0) {    
    document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.remove("columnHide");
    document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.remove("columnHide");
    submitBtn.style.backgroundColor = "orange";
    submitBtn.style.border = "2px solid orange";
    submitBtn.style.cursor = "pointer";
    submitBtn.disabled = false;
  } else {
    document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("columnHide");
    document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("columnHide");
    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.border = "2px solid gray";
    submitBtn.style.cursor = "initial";
    submitBtn.disabled = true;
  }
}
)
