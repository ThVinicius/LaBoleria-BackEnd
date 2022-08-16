import cakesRepositories from '../repositories/cakesRepositories.js'

async function checkName(req, res, next) {
  const { name } = req.body

  try {
    const { rows: cake } = await cakesRepositories.getOneByName(name)

    if (cake.length === 1) return res.sendStatus(409)

    next()
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
}

export { checkName }
