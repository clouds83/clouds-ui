import { Button } from '@/components'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'

export default function ButtonPage() {
  return (
    <main className="py-6">
      <h1 className="mb-8 text-2xl font-semibold">
        Button Component (button and link)
      </h1>

      <h2 className="mb-4">Variants</h2>
      <div className="mb-8 flex flex-wrap gap-4">
        <Button as="button">primary</Button>
        <Button as="link" variant="secondary" href="/">
          secondary
        </Button>
        <Button as="button" variant="outline">
          outline
        </Button>
        <Button as="button" variant="error">
          error
        </Button>
        <Button as="button" variant="ghost">
          ghost
        </Button>
        <Button as="button" variant="link">
          link
        </Button>
      </div>

      <h2 className="mb-4">Sizes</h2>
      <div className="mb-8 flex flex-wrap gap-4">
        <Button as="link" href="#!" size="xs">
          xs
        </Button>
        <Button as="link" href="#!" size="sm">
          sm
        </Button>
        <Button as="link" href="#!" size="md">
          md
        </Button>
        <Button as="link" href="#!" size="lg">
          lg
        </Button>
      </div>

      <h2 className="mb-4">With icon</h2>
      <div className="mb-8 flex flex-wrap gap-4">
        <Button
          as="button"
          Icon={<HandThumbUpIcon className="size-4 text-white" />}
        >
          Icon
        </Button>
        <Button
          as="button"
          Icon={<HandThumbUpIcon className="size-4 text-white" />}
          iconRight
        >
          iconRight
        </Button>
        <Button
          as="button"
          Icon={<HandThumbUpIcon className="size-4 text-white" />}
        />
      </div>
    </main>
  )
}
