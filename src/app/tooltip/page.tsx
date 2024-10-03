import { Tooltip } from '@/components'

export default function TooltipPage() {
  return (
    <main className="py-6">
      <h1 className="mb-8 text-2xl font-semibold">Tooltip Component</h1>

      <div className="grid space-y-12">
        <div className="group relative inline-block w-fit">
          <button
            className="peer rounded-md bg-blue-600 px-4 py-2 text-white"
            aria-describedby="tooltip-id-1"
          >
            Top
          </button>
          <Tooltip id="tooltip-id-1" position="top">
            This is an accessible tooltip
          </Tooltip>
        </div>

        <div className="group relative inline-block w-fit">
          <button
            className="peer rounded-md bg-blue-600 px-4 py-2 text-white"
            aria-describedby="tooltip-id-2"
          >
            Right
          </button>
          <Tooltip id="tooltip-id-2" position="right">
            This is an accessible tooltip
          </Tooltip>
        </div>

        <div className="group relative inline-block w-fit">
          <button
            className="peer rounded-md bg-blue-600 px-4 py-2 text-white"
            aria-describedby="tooltip-id-3"
          >
            Bottom
          </button>
          <Tooltip id="tooltip-id-3" position="bottom">
            This is an accessible tooltip
          </Tooltip>
        </div>

        <div className="group relative inline-block w-fit">
          <button
            className="peer rounded-md bg-blue-600 px-4 py-2 text-white"
            aria-describedby="tooltip-id-4"
          >
            Left
          </button>
          <Tooltip id="tooltip-id-4" position="left">
            This is an accessible tooltip
          </Tooltip>
        </div>
      </div>
    </main>
  )
}
