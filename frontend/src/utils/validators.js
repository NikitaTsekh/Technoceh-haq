import {
  helpers,
  required as vRequired,
  maxLength as vMaxLength,
  minLength as vMinLength,
  maxValue as vMaxValue,
  minValue as vMinValue,
  numeric as vNumeric,
} from '@vuelidate/validators'

export const minLengthPhone = helpers.withMessage(`Номер телефона указан некорректно`, vMinLength(10))
export const required = helpers.withMessage('Поле является обязательным', vRequired)
export const maxLength = v => helpers.withMessage(`Максимальная длина ${v}`, vMaxLength(v))
export const minLength = v => helpers.withMessage(`Минимальная длина ${v}`, vMinLength(v))
export const maxValue = v => helpers.withMessage(`Максимальное значение ${v}`, vMaxValue(v))
export const minValue = v => helpers.withMessage(`Минимальное значение ${v}`, vMinValue(v))
export const numeric = helpers.withMessage(`Поле должно иметь числовое значение`, vNumeric)
