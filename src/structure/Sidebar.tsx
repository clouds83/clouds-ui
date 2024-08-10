import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sticky top-14 h-[calc(100dvh-3.5rem)] w-full overflow-y-auto py-6 xl:top-16 xl:h-[calc(100dvh-4rem)]">
      <h2 className="mb-2 text-lg font-semibold">Components</h2>

      <ul>
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
          <Link href="/toggle" className="hover:underline">
            Toggle
          </Link>
        </li>
      </ul>
    </aside>
  );
}
