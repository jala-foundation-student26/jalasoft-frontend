import Image from 'next/image'
import { Trash, PencilSimple } from '@phosphor-icons/react/dist/ssr'

export default function UserCard() {
  return (
    <div className="flex gap-8 border-2 rounded-md border-zinc-950 p-4 w-full">
      <Image
        src="/windowsxp-bg.jpg"
        width={128}
        height={128}
        className="w-32 h-32 rounded-md"
        quality={100}
        alt=""
      />
      <div className="flex-1 flex flex-col gap-4 ">
        <p>
          Name: <span>Mariana</span>
        </p>
        <p>
          Last Name: <span>Bellot</span>
        </p>
        <p>
          Email: <span>maribellot@mail.com</span>
        </p>
        <div className="flex justify-center items-center gap-4">
          <Trash size={32} className="text-zinc-950" weight="fill" />
          <PencilSimple size={32} className="text-zinc-950" weight="fill" />
        </div>
      </div>
    </div>
  )
}
