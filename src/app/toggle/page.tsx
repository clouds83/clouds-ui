import { Toggle } from '@/components'

export default function TogglePage() {
  return (
    <main className="py-6">
      <h1 className="mb-8 text-2xl font-semibold">Toggle Component</h1>

      <h2 className="mb-4">Sizes</h2>
      <div className="mb-8 flex flex-col flex-wrap gap-4">
        <label className="flex items-center gap-2">
          <Toggle size="sm" />
          size: "sm"
        </label>

        <label className="flex items-center gap-2">
          <Toggle />
          size: "md"
        </label>

        <label className="flex items-center gap-2">
          <Toggle size="lg" />
          size: "lg"
        </label>
      </div>

      <h2 className="mb-4">States</h2>
      <div className="mb-8 flex flex-col flex-wrap gap-4">
        <label className="flex items-center gap-2">
          <Toggle disabled />
          Disabled
        </label>
      </div>
    </main>
  )
}
