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
    log.push({
      handler: "expenseList",
      object: JSON.parse(JSON.stringify(this.ui)),
    });
  },
};
