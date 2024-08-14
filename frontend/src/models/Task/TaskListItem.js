export default class TaskListItem {
  id
  startDate
  startTime
  title
  price
  totalPrice
  isFinished
  workTypeTitle
  workersCount
  workersRequiredCount
  views
  workers

  constructor(data = {}) {
    this.id = data.id
    this.startDate = data.startDate
    this.startTime = data.startTime
    this.title = data.title
    this.price = data.price
    this.totalPrice = data.totalPrice
    this.isFinished = data.isFinished
    this.workTypeTitle = data.workTypeTitle
    this.workersCount = data.workersCount
    this.workersRequiredCount = data.workersRequiredCount
    this.workers = data.workers
    this.views = data.views
  }
}
