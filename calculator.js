$(document).ready(onReady);

function onReady() {
  console.log(`I'm ready!`);

  // On submit button click, 
  // add employee to table
  // and update monthly costs
  $(document).on('click', '#addEmployeeBtn', onAddEmployee);

  // On delete button click
  // remove employee from table
  console.log('setting up onDelete event', $('.deleteBtn'))
  $(document).on('click', '.deleteBtn', onDelete);
}

// Track total monthly costs for all employees
// (GLOBAL variable)
let totalMonthlyCosts = 0;


function onDelete() {
  console.log('in onDelete');

  // Remove parent <tr>
  $(this).parent().parent().remove();
} 

function onAddEmployee() {
  console.log('time to add an employee');

  // get values from <inputs>
  let employee = {
    firstName: $('#firstNameInput').val(),
    lastName: $('#lastNameInput').val(),
    id: $('#idInput').val(),
    title: $('#titleInput').val(),
    salary: Number($('#salaryInput').val())
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
      <td><button class="deleteBtn">Delete</button></td>
    </tr>
  `);

  // Clear input fields
  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#idInput').val('');
  $('#titleInput').val('');
  $('#salaryInput').val('');
    
  // Update monthly costs
  let monthlySalary = employee.salary / 12;
  totalMonthlyCosts += monthlySalary;
  $('#monthlyCosts').text(totalMonthlyCosts);


  // If total monthly > $20, make it red
  if (totalMonthlyCosts > 20000) {
    $('#monthlyCostsContainer').addClass("overBudget");
  }
}