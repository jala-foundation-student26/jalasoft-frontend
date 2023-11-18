'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Required field'),
})

type LoginInputs = z.infer<typeof loginSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
  })

  const [errorMessage, setErrorMessage] = useState<string>('')

  const router = useRouter()

  async function handleLoginFormSubmit(data: LoginInputs) {
    return new Promise<void>((resolve, reject) => {
      fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
      })
        .then((response) => {
          console.log(response)
          if (response.status === 200) router.push('/list')
          else setErrorMessage('Wrong credentials')
          resolve()
        })
        .catch((error) => {
          setErrorMessage('Try later')
          reject(error)
        })
    })
  }
  return (
    <form
      onSubmit={handleSubmit(handleLoginFormSubmit)}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col sm:px-16 py-16 px-8 bg-zinc-50 border-zinc-950 border-2 rounded-xl w-full max-w-md gap-4"
    >
      <div className="flex flex-col gap-1">
        {errors.email?.message && (
          <span className="text-sm text-red-600">{errors.email.message}</span>
        )}
        <input
          type="email"
          placeholder="Name"
          {...register('email', {
            required: 'Required Field',
          })}
          className="flex-1 bg-transparent text-sm outline-none text-zinc-950 placeholder:text-zinc-800 p-2 border-zinc-950 border-2 rounded-xl hover:bg-zinc-200 transition duration-300"
        />
      </div>

      <div className="flex flex-col gap-1">
        {errors.password?.message && (
          <span className="text-sm text-red-600">
            {errors.password.message}
          </span>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Required Field',
          })}
          className="flex-1 bg-transparent text-sm outline-none text-zinc-950 placeholder:text-zinc-800 p-2 border-zinc-950 border-2 rounded-xl hover:bg-zinc-200 transition duration-300"
        />
      </div>
      <button
        className="flex-1 text-sm outline-none text-zinc-950 bg-green-600 p-2 rounded-xl font-bold hover:bg-green-700 transition duration-300 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        Enter
      </button>

      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </form>
  )
}
