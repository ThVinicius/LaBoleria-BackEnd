export default function schemaValidator(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false })

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
