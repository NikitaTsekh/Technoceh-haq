export default class TaskInfoItem {
  id
  workTypeTitle
  workersCount
  workersRequiredCount

  constructor(data = {}) {
    this.id = data.id
    this.workTypeTitle = data.workTypeTitle
    this.workersCount = data.workersCount
    this.workersRequiredCount = data.workersRequiredCount
  }
}
