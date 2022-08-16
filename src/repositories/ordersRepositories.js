import db from '../database/pg/pg.js'

function insert(clientId, cakeId, quantity, totalPrice) {
  return db.query(
    `INSERT INTO orders ("clientId", "cakeId", quantity,"totalPrice") VALUES ($1, $2, $3, $4)`,
    [clientId, cakeId, quantity, totalPrice]
  )
}

function getOrders(date) {
  const where =
    date !== undefined ? `WHERE TO_CHAR(o."createdAt", 'YYYY-MM-DD') = $1` : ''

  const params = []

  if (date !== undefined) params.push(date)

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
