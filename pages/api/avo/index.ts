import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

// Simulated API
const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()
  const length = allEntries.length

  response.statusCode = 200 // OK
  response.setHeader('content-type', 'application/json')
  response.end(JSON.stringify({ length: length, data: allEntries }))
}

export default allAvos
