export default class Project {
  id
  title
  budget
  address

  constructor(data = {}) {
    this.id = data.id
    this.title = data.title
    this.budget = data.budget
    this.address = data.address
  }
}
