debugger;
var handler = {
  ui: {},
  //budget method
  budgetForm() {
    event.preventDefault();
    this.ui.submitBudgetForm();
    log.push({
      handler: "budgetForm",
      object: JSON.parse(JSON.stringify(this.ui)),
    });
  }, //expense method
  expenseForm() {
    event.preventDefault();
    this.ui.submitExpenseForm();
    log.push({
      handler: "expenseForm",
      object: JSON.parse(JSON.stringify(this.ui)),
    });
  }, //expense list
  expenseList() {
    if (event.target.parentElement.classList.contains("edit-icon")) {
      this.ui.editExpense(event.target.parentElement);
    } else if (event.target.parentElement.classList.contains("delete-icon")) {
      this.ui.deleteExpense(event.target.parentElement);
    }

    log.push({
      handler: "expenseList",
      object: JSON.parse(JSON.stringify(this.ui)),
    });
  },
};
