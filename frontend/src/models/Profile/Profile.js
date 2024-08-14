export default class Profile {
  id
  phone
  balance
  spentBalance

  constructor(data = {}) {
    this.id = data.id
    this.phone = data.phone
    this.balance = data.balance
    this.spentBalance = data.spentBalance
  }
}
