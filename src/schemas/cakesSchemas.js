import joi from 'joi'

const create = joi.object({
  name: joi.string().min(2).required(),
  price: joi.number().greater(0).required(),
  description: joi.string().allow(''),
  image: joi.string().uri().required()
})

export { create }
