export default class Project {
  id
  title
  tasksCount
  workersCount
  workersRequiredCount
  address
  attentionCount
  todoCount
  tasks
  budget
  spentBudget

  constructor(data = {}) {
    this.id = data.id
    this.title = data.title
    this.tasksCount = data.tasksCount
    this.workersCount = data.workersCount
    this.workersRequiredCount = data.workersRequiredCount
    this.address = data.address
    this.attentionCount = data.attentionCount
    this.todoCount = data.todoCount
    this.tasks = data.tasks
    this.budget = data.budget
    this.spentBudget = data.spentBudget
  }
}
