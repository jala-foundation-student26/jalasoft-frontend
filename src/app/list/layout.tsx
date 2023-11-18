import Header from '@/components/header'

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
