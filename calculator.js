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
  let firstName = $('#firstNameInput').val();
  let lastName = $('#lastNameInput').val();
  let id = $('#idInput').val();
  let title = $('#titleInput').val();
  let salary = $('#salaryInput').val();
  console.log('employee info', firstName, lastName, id, title, salary)

  // TODO append values to <table>
  $('#employeeTable').append(`
    <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${id}</td>
      <td>${title}</td>
      <td>${salary}</td>
      <td><button>Delete</button></td>
    </tr>
  `);

  // TODO update monthly costs
}