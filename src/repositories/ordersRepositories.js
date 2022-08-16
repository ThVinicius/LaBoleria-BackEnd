import db from '../database/pg/pg.js'

function insert(clientId, cakeId, quantity, totalPrice) {
  return db.query(
    `INSERT INTO orders ("clientId", "cakeId", quantity,"totalPrice") VALUES ($1, $2, $3, $4)`,
    [clientId, cakeId, quantity, totalPrice]
  )
}

function getOrders(date, id) {
  const aux = [
    { key: 'date', value: date },
    { key: 'id', value: id }
  ].filter(({ value }) => value !== undefined)

  let where = ''

  const params = []

  let count = 1

  aux.forEach(({ key, value }, index) => {
    const whereOrAnd = index === 0 ? 'WHERE' : ' AND'

    switch (key) {
      case 'date':
        where += `${whereOrAnd} TO_CHAR(o."createdAt", 'YYYY-MM-DD') = $${count}`
        params.push(value)
        count++
        break

      case 'id':
        where += `${whereOrAnd} o.id = $${count}`
        params.push(value)
        break

      default:
        break
    }
  })

  return db.query(
    `
    SELECT 
	    JSON_BUILD_OBJECT('id', c.id, 'name', c.name, 'address', c.address, 'phone', c.phone) AS client,
	    JSON_BUILD_OBJECT('id', ca.id, 'name', ca.name, 'price', ROUND(ca."price", 2)::TEXT, 'description', ca.description, 'image', ca.image) AS cake,
	    o.id AS "orderId", TO_CHAR(o."createdAt", 'YYYY-DD-MM HH24:MI') AS "createdAt", o.quantity, ROUND(o."totalPrice", 2) AS "totalPrice"
	  FROM orders o
    JOIN clients c ON c.id = o."clientId"
    JOIN cakes ca ON ca.id = o."cakeId"
    ${where}
    `,
    params
  )
}

export default { insert, getOrders }
