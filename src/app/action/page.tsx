import Action from '@/components/Action'
import Icon from '@/../mock/icons/Icon'

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
        <Action as="a" href="#!" size="xs">
          xs
        </Action>
        <Action as="a" href="#!" size="sm">
          sm
        </Action>
        <Action as="a" href="#!" size="md">
          md
        </Action>
        <Action as="a" href="#!" size="lg">
          lg
        </Action>
      </div>

      <h2 className="mb-4">With icon</h2>
      <div className="mb-8 flex flex-wrap gap-4">
        <Action as="button" Icon={<Icon />}>
          Icon
        </Action>
        <Action as="button" Icon={<Icon />} iconRight>
          iconRight
        </Action>
        <Action as="button" Icon={<Icon />} />
      </div>
    </main>
  )
}
