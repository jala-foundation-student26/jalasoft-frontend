export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-windowsxp bg-cover bg-no-repeat h-screen w-full">
      {children}
    </main>
  )
}
