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

  // Grab the <td> with this employee's salaray in it
  let salaryTd = $(this).parent().siblings('.salary');
  // Grab the actual value of the salary
  let employeeSalary = Number(salaryTd.text());

  // Update global var,
  updateTotalMonthlyCosts(employeeSalary * -1);
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
      <td class="salary">${employee.salary}</td>
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
  updateTotalMonthlyCosts(employee.salary)
}

function updateTotalMonthlyCosts(annualSalaryChange) {
  // Convert to monthly change
  let monthlySalary = annualSalaryChange / 12;

  // Update global
  totalMonthlyCosts += monthlySalary;

  // Update DOM
  $('#monthlyCosts').text(totalMonthlyCosts);

  // Over budget check
  // If total monthly > $20, make it red
  if (totalMonthlyCosts > 20000) {
    $('#monthlyCostsContainer').addClass("overBudget");
  }

  // if less than $20, change back
  else {
    $('#monthlyCostsContainer').removeClass("overBudget");
  }
}