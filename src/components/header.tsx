import { Plus } from '@phosphor-icons/react/dist/ssr'

export default function Header() {
  return (
    <header className="flex justify-center items-center w-full p-4 sm:px-8">
      <div className="flex flex-row justify-between items-center w-full max-w-6xl">
        <p>gustavo@mail.com</p>
        <button className="flex flex-row items-center justify-center text-sm outline-none text-zinc-950 bg-green-600 px-8 py-2 gap-4 rounded-xl font-bold hover:bg-green-700 transition duration-300">
          <Plus size={22} weight="bold" /> ADD
        </button>
      </div>
    </header>
  )
}
