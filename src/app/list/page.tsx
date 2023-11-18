import UserCard from '@/components/user-card'

interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

async function getUsers(): Promise<User[]> {
  const response = await fetch('https://reqres.in/api/users', {
    cache: 'no-store',
  })

  const { data: users } = await response.json()

  return users
}

export default async function List() {
  const users = await getUsers()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 py-8 sm:px-8 gap-12">
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            id={user.id}
            avatar={user.avatar}
            email={user.email}
            firstName={user.first_name}
            lastName={user.last_name}
          />
        )
      })}
    </div>
  )
}
