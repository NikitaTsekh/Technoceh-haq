export default class WorkerTaskListItem {
  id
  startDate
  startTime
  title
  price
  address
  workTypeTitle
  workersCount
  workersRequiredCount

  constructor(data = {}) {
    this.id = data.id
    this.startDate = data.startDate
    this.startTime = data.startTime
    this.title = data.title
    this.price = data.price
    this.workTypeTitle = data.workTypeTitle
    this.address = data.address
    this.workersCount = data.workersCount
    this.workersRequiredCount = data.workersRequiredCount
  }
}
