export default function schemaValidator(schema, type = 'body') {
  return (req, res, next) => {
    const payload = type === 'body' ? req.body : req.params

    const { error } = schema.validate(payload, { abortEarly: false })

    if (error) {
      if (
        error.details.some(({ message }) =>
          message.includes('"image" must be a valid uri')
        )
      ) {
        return res.status(422).send(error.details.map(detail => detail.message))
      } else {
        return res.status(400).send(error.details.map(detail => detail.message))
      }
    }

    next()
  }
}
