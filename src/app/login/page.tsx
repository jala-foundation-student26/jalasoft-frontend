export default function Login() {
  return (
    <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col sm:px-16 py-16 px-8 bg-zinc-50 border-zinc-950 border-2 rounded-xl w-full max-w-md gap-4">
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="flex-1 bg-transparent text-sm outline-none text-zinc-950 placeholder:text-zinc-800 p-2 border-zinc-950 border-2 rounded-xl hover:bg-zinc-200 transition duration-300"
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="flex-1 bg-transparent text-sm outline-none text-zinc-950 placeholder:text-zinc-800 p-2 border-zinc-950 border-2 rounded-xl hover:bg-zinc-200 transition duration-300"
        required
      />
      <button className="flex-1 bg-transparent text-sm outline-none text-zinc-950 bg-green-600 p-2 rounded-xl font-bold hover:bg-green-700 transition duration-300">
        Enter
      </button>
    </form>
  )
}
