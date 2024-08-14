export default class Task {
  id
  title
  startDate
  startTime
  price
  workTypeTitle
  workersRequiredCount

  constructor(data = {}) {
    this.id = data.id
    this.title = data.title
    this.startDate = data.startDate
    this.startTime = data.startTime
    this.price = data.price
    this.workTypeTitle = data.workTypeTitle
    this.workersRequiredCount = data.workersRequiredCount
  }
}
