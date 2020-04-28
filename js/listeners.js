function eventListeners() {
  const budgetForm = document.getElementById("budget-form");
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");
  const ui = new UI();
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    ui.submitBudgetForm()
    //console.log("submit test 1");
  });
  expenseForm.addEventListener("submit", function (event) {
    console.log("click test 2");
    event.preventDefault();
  });
  expenseList.addEventListener("click", function () {
    console.log("click test 1");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});
