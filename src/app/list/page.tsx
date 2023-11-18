import UserCard from '@/components/user-card'

export default function List() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 py-8 sm:px-8 gap-12">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  )
}
