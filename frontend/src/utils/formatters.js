export const toMoney = value => (value ? new Intl.NumberFormat('ru').format(value) : null)
