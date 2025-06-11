export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} A Next.js Blog. All rights reserved.
      </p>
    </footer>
  )
}
