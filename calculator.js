$(document).ready(onReady);

function onReady() {
  console.log(`I'm ready!`);

  // On submit button click, 
  // add employee to table
  // and update monthly costs
  $('#addEmployeeBtn').on('click', onAddEmployee)
}


function onAddEmployee() {
  console.log('time to add an employee');

  // get values from <inputs>
  let employee = {
    firstName: $('#firstNameInput').val(),
    lastName: $('#lastNameInput').val(),
    id: $('#idInput').val(),
    title: $('#titleInput').val(),
    salary: $('#salaryInput').val()
  };
  console.log('employee info', employee);

  // append values to <table>
  $('#employeeTable').append(`
    <tr>
      <td>${employee.firstName}</td>
      <td>${employee.lastName}</td>
      <td>${employee.id}</td>
      <td>${employee.title}</td>
      <td>${employee.salary}</td>
      <td><button>Delete</button></td>
    </tr>
  `);

  // Clear input fields
  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#idInput').val('');
  $('#titleInput').val('');
  $('#salaryInput').val('');
    
  // TODO update monthly costs


  
}