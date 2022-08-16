import ordersRepository from '../repositories/ordersRepositories.js'

export async function createOrder(req, res) {
  const { clientId, cakeId, quantity, totalPrice } = req.body

  try {
    await ordersRepository.insert(clientId, cakeId, quantity, totalPrice)

    return res.sendStatus(201)
  } catch (error) {
    switch (error.code) {
      case '23503':
        return res.sendStatus(404)

      default:
        console.log(error)
        return res.status(500).send(error)
    }
  }
}

export async function getOrders(req, res) {
  const { date } = req.query

  try {
    const { rows: orders } = await ordersRepository.getOrders(date)

    if (orders.length === 0) return res.status(404).send(orders)

    return res.status(200).send(orders)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
}
