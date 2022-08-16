import joi from 'joi'

const create = joi.object({
  clientId: joi.number().greater(0).required(),
  cakeId: joi.number().greater(0).required(),
  quantity: joi.number().greater(0).less(5).required(),
  totalPrice: joi.number().required()
})

const paramsId = joi.object({
  id: joi.number().greater(0).required()
})

export { create, paramsId }
