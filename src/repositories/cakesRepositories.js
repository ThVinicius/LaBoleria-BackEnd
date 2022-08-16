import db from '../database/pg/pg.js'

function insert(name, price, image, description) {
  return db.query(
    `INSERT INTO cakes (name, price, image, description) VALUES ($1, $2, $3, $4)`,
    [name, price, image, description]
  )
}

export default { insert }
