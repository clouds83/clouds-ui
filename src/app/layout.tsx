import '@/globals.css'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header, Footer, Sidebar } from '@/structure'
import { Container } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'clouds/ui',
  description: 'My personal design system',
  icons: [{ rel: 'icon', url: '/favicon.png' }]
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <Container className="mt-14 min-h-[calc(100dvh-3.5rem)] md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-4 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-6 xl:mt-16 xl:min-h-[calc(100dvh-4rem)]">
          <Sidebar></Sidebar>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  )
}
