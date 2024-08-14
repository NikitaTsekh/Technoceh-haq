export default class WorkerInfoItem {
  id
  fullName
  phone
  reliability
  fact
  plan

  constructor(data = {}) {
    this.id = data.id
    this.fullName = data.fullName
    this.phone = data.phone
    this.reliability = data.reliability
    this.fact = data.fact
    this.plan = data.plan
  }
}
