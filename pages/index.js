import Sidebard from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="">
        <Sidebard />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}
