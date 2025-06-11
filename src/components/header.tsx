import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link href="/" className="text-lg font-bold">
        A Next.js Blog
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:underline">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
