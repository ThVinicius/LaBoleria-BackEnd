import joi from 'joi'

const PHONE_REGEX = /^\d{10,11}$/

const createSchema = joi.object({
  name: joi.string().trim().required(),
  address: joi.string().trim().required(),
  phone: joi.string().min(10).max(11).pattern(PHONE_REGEX).required()
})

export { createSchema }
