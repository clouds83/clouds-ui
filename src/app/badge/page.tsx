import { Badge } from '@/components/Badge'

export default function BadgePage() {
  return (
    <main className="py-6">
      <h1 className="mb-8 text-2xl font-semibold">Badge Component</h1>

      <h2 className="mb-2">Variants</h2>
      <div className="mb-6 flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="neutral">Neutral</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </div>

      <h2 className="mb-2">Sizes</h2>
      <div className="mb-6 flex flex-wrap gap-2">
        <Badge size="sm">Small</Badge>
        <Badge>Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>

      <h2 className="mb-2">With dot</h2>
      <div className="mb-6 flex flex-wrap gap-2">
        <Badge dot>Default</Badge>
        <Badge variant="neutral" dot>
          Neutral
        </Badge>
        <Badge variant="success" dot>
          Success
        </Badge>
        <Badge variant="warning" dot>
          Warning
        </Badge>
        <Badge variant="error" dot>
          Error
        </Badge>
      </div>
    </main>
  )
}
