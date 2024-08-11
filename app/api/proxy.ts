import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('https://customer-support-api.vercel.app/api/v1/customer-support', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: req.body.prompt }),
  })

  const data = await response.json()
  res.status(200).json(data)
}
