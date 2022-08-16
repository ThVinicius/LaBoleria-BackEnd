import clientsRepository from '../repositories/clientsRepositories.js'

export async function createClient(req, res) {
  const { name, address, phone } = req.body

  try {
    await clientsRepository.insert(name, address, phone)

    return res.sendStatus(201)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
}
