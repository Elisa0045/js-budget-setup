function eventListeners() {
  const budgetForm = document.getElementById("budget-form");
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");
  const ui = new UI();
  handler.ui = ui;
  //budget form
  budgetForm.addEventListener("submit", (event) => {
    handler.budgetForm();
  });
  //expense form
  expenseForm.addEventListener("submit", (event) => {
    handler.expenseForm();
  }); //expense list
  expenseList.addEventListener("click", (event) => {
    handler.expenseList();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});
