export default function HomePage() {
  return (
    <main className="py-6">
      <h1 className="mb-4 text-2xl font-semibold">Welcome to clouds|ui.</h1>
      <p>
        A components library for Next.js, heavily influenced by{" "}
        <a
          href="https://ui.shadcn.com/"
          className="hover:underline"
          target="_blank"
          rel="norel"
        >
          shadcn/ui
        </a>
        .
      </p>
      <p>Choose a component using the sidebar on the left.</p>
    </main>
  );
}
