import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="sticky top-14 h-[calc(100dvh-3.5rem)] w-full overflow-y-auto py-6 xl:top-16 xl:h-[calc(100dvh-4rem)]">
      <h2 className="mb-2 text-lg font-semibold">Components</h2>

      <ul>
        <li>
          <Link href="/accordion" className="hover:underline">
            Accordion
          </Link>
        </li>
        <li>
          <Link href="/alert" className="hover:underline">
            Alert
          </Link>
        </li>
        <li>
          <Link href="/badge" className="hover:underline">
            Badge
          </Link>
        </li>
        <li>
          <Link href="/button" className="hover:underline">
            Button
          </Link>
        </li>
        <li>
          <Link href="/input" className="hover:underline">
            Input
          </Link>
        </li>
        <li>
          <Link href="/input-icon" className="hover:underline">
            Input with icon
          </Link>
        </li>
        <li>
          <Link href="/modal" className="hover:underline">
            Modal
          </Link>
        </li>
        <li>
          <Link href="/pagination" className="hover:underline">
            Pagination
          </Link>
        </li>
        <li>
          <Link href="/toggle" className="hover:underline">
            Toggle
          </Link>
        </li>
        <li>
          <Link href="/tooltip" className="hover:underline">
            Tooltip
          </Link>
        </li>
      </ul>
    </aside>
  )
}
