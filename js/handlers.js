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
  },
};
