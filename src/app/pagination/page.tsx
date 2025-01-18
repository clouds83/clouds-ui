import { Pagination } from '@/components'

interface SearchParams {
  page?: string
}

interface PaginationPageProps {
  searchParams: SearchParams
}

const PaginationPage: React.FC<PaginationPageProps> = ({ searchParams }) => {
  const { page = '1' } = searchParams
  const currentPage = parseInt(page, 10) || 1

  return (
    <main className="py-6">
      <h1 className="mb-8 text-2xl font-semibold">Pagination Component</h1>

      <Pagination currentPage={currentPage} pageAmount={10} />
    </main>
  )
}

export default PaginationPage
