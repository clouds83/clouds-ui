import { Container } from '@/components/Container'

export function Header() {
  return (
    <header className="fixed left-0 right-0 z-50 bg-gray-50/50 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between xl:h-16">
        <div className="font-semibold">clouds|ui</div>
      </Container>
    </header>
  )
}
