import Header from '@/componets/header'

export default function ListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex justify-center">{children}</main>
    </>
  )
}
