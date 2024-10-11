import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  pageAmount: number
  maxButtons: number
}

export function Pagination({
  currentPage,
  pageAmount,
  maxButtons
}: PaginationProps) {
  if (pageAmount <= 1) {
    return null
  }

  function getPages(
    currentPage: number,
    totalPages: number,
    maxButtons: number
  ): (number | '...')[] {
    const pages: (number | '...')[] = []

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
      return pages
    }

    let numberOfEllipsis = 0

    if (currentPage - 1 > 1) {
      numberOfEllipsis += 1
    }

    if (totalPages - currentPage > 1) {
      numberOfEllipsis += 1
    }

    const numberOfFixedButtons = 2 + numberOfEllipsis // First page, last page, and ellipsis
    const numberOfMiddleButtons = maxButtons - numberOfFixedButtons

    let startPage = currentPage - Math.floor((numberOfMiddleButtons - 1) / 2)
    let endPage = currentPage + Math.ceil((numberOfMiddleButtons - 1) / 2)

    if (startPage < 2) {
      startPage = 2
      endPage = startPage + numberOfMiddleButtons - 1
    }

    if (endPage > totalPages - 1) {
      endPage = totalPages - 1
      startPage = endPage - numberOfMiddleButtons + 1
    }

    pages.push(1)

    if (startPage > 2) {
      pages.push('...')
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    if (endPage < totalPages - 1) {
      pages.push('...')
    }

    pages.push(totalPages)

    return pages
  }

  const pages = getPages(currentPage, pageAmount, maxButtons)

  const buildPageUrl = (page: number) => {
    if (page === 1) {
      return '?' // Remove the page param for the first page
    } else {
      const params = new URLSearchParams()
      params.set('page', page.toString())
      return `?${params.toString()}`
    }
  }

  return (
    <nav
      className="flex items-center space-x-2"
      aria-label="Pagination Navigation"
    >
      <Link
        href={currentPage > 1 ? buildPageUrl(currentPage - 1) : '#'}
        className={`rounded-md px-3 py-1 ${
          currentPage > 1
            ? 'hover:bg-gray-200'
            : 'cursor-not-allowed text-gray-400'
        }`}
        aria-disabled={currentPage <= 1}
        aria-label="Previous Page"
        tabIndex={currentPage > 1 ? 0 : -1}
      >
        Previous
      </Link>
      {pages.map((page, index) => (
        <span key={index}>
          {page === '...' ? (
            <span className="px-3 py-1">...</span>
          ) : page === currentPage ? (
            <span
              className="rounded-md bg-blue-500 px-3 py-1 text-white"
              aria-current="page"
            >
              {page}
            </span>
          ) : (
            <Link
              href={buildPageUrl(page as number)}
              className="rounded-md px-3 py-1 hover:bg-gray-200"
              aria-label={`Go to page ${page}`}
            >
              {page}
            </Link>
          )}
        </span>
      ))}
      <Link
        href={currentPage < pageAmount ? buildPageUrl(currentPage + 1) : '#'}
        className={`rounded-md px-3 py-1 ${
          currentPage < pageAmount
            ? 'hover:bg-gray-200'
            : 'cursor-not-allowed text-gray-400'
        }`}
        aria-disabled={currentPage >= pageAmount}
        aria-label="Next Page"
        tabIndex={currentPage < pageAmount ? 0 : -1}
      >
        Next
      </Link>
    </nav>
  )
}
