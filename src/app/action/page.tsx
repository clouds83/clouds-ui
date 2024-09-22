import { Action } from '@/components'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'

export default function ActionPage() {
  return (
    <main className="py-6">
      <h1 className="mb-8 text-2xl font-semibold">
        Action Component (button and link)
      </h1>

      <h2 className="mb-4">Variants</h2>
      <div className="mb-8 flex flex-wrap gap-4">
        <Action as="button">primary</Action>
        <Action as="button" variant="secondary">
          secondary
        </Action>
        <Action as="button" variant="outline">
          outline
        </Action>
        <Action as="button" variant="destructive">
          destructive
        </Action>
        <Action as="button" variant="ghost">
          ghost
        </Action>
        <Action as="button" variant="link">
          link
        </Action>
      </div>

      <h2 className="mb-4">Sizes</h2>
      <div className="mb-8 flex flex-wrap gap-4">
        <Action as="link" href="#!" size="xs">
          xs
        </Action>
        <Action as="link" href="#!" size="sm">
          sm
        </Action>
        <Action as="link" href="#!" size="md">
          md
        </Action>
        <Action as="link" href="#!" size="lg">
          lg
        </Action>
      </div>

      <h2 className="mb-4">With icon</h2>
      <div className="mb-8 flex flex-wrap gap-4">
        <Action
          as="button"
          Icon={<HandThumbUpIcon className="size-4 text-white" />}
        >
          Icon
        </Action>
        <Action
          as="button"
          Icon={<HandThumbUpIcon className="size-4 text-white" />}
          iconRight
        >
          iconRight
        </Action>
        <Action
          as="button"
          Icon={<HandThumbUpIcon className="size-4 text-white" />}
        />
      </div>
    </main>
  )
}
