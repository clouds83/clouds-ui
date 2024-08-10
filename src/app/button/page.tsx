import Button from '@/components/Button'

const Icon = () => {
  return (
    <svg
      viewBox="0 0 512 512"
      className="h-6 w-6 fill-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256,60.338c-107.895,0-195.659,87.776-195.659,195.664c0,107.888,87.764,195.659,195.659,195.659c107.888,0,195.658-87.771,195.658-195.659C451.658,148.115,363.888,60.338,256,60.338z M256,420.798c-90.871,0-164.796-73.931-164.796-164.796c0-90.87,73.925-164.795,164.796-164.795c90.871,0,164.796,73.925,164.796,164.795C420.796,346.867,346.871,420.798,256,420.798z" />
      <path d="M348.617,174.362L223.249,302.094l-62.117-44.981c-7.882-5.708-18.912-3.944-24.632,3.938c-5.708,7.894-3.944,18.917,3.944,24.632l74.418,53.884c3.106,2.251,6.729,3.35,10.341,3.35c4.597,0,9.165-1.787,12.586-5.279l136-138.566c6.825-6.95,6.724-18.116-0.237-24.941C366.614,167.312,355.442,167.413,348.617,174.362z" />
    </svg>
  )
}

export default function ButtonPage() {
  return (
    <main className="py-6">
      <h1 className="mb-8 text-2xl font-semibold">Button Component</h1>

      <h2 className="mb-4">Variants</h2>
      <div className="mb-8 flex flex-wrap gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline" className="hover:text-black">
          Outline
        </Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <h2 className="mb-4">Sizes</h2>
      <div className="mb-8 flex flex-wrap gap-4">
        <Button size="xs">Size xs</Button>
        <Button size="sm">Size sm</Button>
        <Button size="md">Size md</Button>
        <Button size="lg">Size lg</Button>
      </div>

      <h2 className="mb-4">With icon</h2>
      <div className="mb-8 flex flex-wrap gap-4">
        <Button Icon={<Icon />}>Icon standard</Button>
        <Button Icon={<Icon />} iconRight>
          iconRight
        </Button>
        <Button Icon={<Icon />} />
      </div>
    </main>
  )
}
