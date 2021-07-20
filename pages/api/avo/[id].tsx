import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

// Simulated API for get an specific avo
const avoById = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()
  const id = request.query.id
  const entry = await db.getById(id as string)

  response.setHeader('content-type', 'application/json')
  /* Two ways for do the same */
  /* response.statusCode = 200 // OK
  response.end(JSON.stringify({ data: entry })) // First way */
  response.status(200).json(entry) // Second way
}

export default avoById
