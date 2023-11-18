import Image from 'next/image'
import { Trash, PencilSimple } from '@phosphor-icons/react/dist/ssr'

interface UserCardProps {
  email: string
  firstName: string
  lastName: string
  avatar: string
}

export default function UserCard({
  email,
  firstName,
  lastName,
  avatar,
}: UserCardProps) {
  return (
    <div className="flex w-full gap-4 p-4 border-2 rounded-md border-zinc-950">
      <Image
        src={avatar}
        width={128}
        height={128}
        className="w-32 h-32 rounded-md"
        quality={100}
        alt=""
      />
      <div className="flex-1 flex flex-col gap-4 ">
        <p>
          Name: <span>{firstName}</span>
        </p>
        <p>
          Last Name: <span>{lastName}</span>
        </p>
        <p>
          Email: <span>{email}</span>
        </p>
        <div className="flex justify-center items-center gap-4">
          <Trash size={32} className="text-zinc-950" weight="fill" />
          <PencilSimple size={32} className="text-zinc-950" weight="fill" />
        </div>
      </div>
    </div>
  )
}
