import cakesRepository from '../repositories/cakesRepositories.js'

export async function createCake(req, res) {
  const { name, price, image, description } = req.body

  try {
    await cakesRepository.insert(name, price, image, description)

    return res.sendStatus(201)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
}
