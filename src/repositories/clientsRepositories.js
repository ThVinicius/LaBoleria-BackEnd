import db from '../database/pg/pg.js'

function insert(name, address, phone) {
  return db.query(
    `INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3)`,
    [name, address, phone]
  )
}

export default { insert }
