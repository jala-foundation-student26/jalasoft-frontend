import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  const data: {
    email: string
    password: string
  } = await request.json()

  if (!data.email || !data.password) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  })

  cookies().set('email', data.email)

  return response
}
