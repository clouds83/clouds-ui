'use client'

import { Alert } from '@/components'
import { useState } from 'react'

export default function AlertPage() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <main className="py-6">
      <h1 className="mb-8 text-2xl font-semibold">Alert Component</h1>

      <h2 className="mb-2">Default</h2>
      <Alert
        title="Default alert title lorem ipsun"
        className="mb-6"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        This is a default alert
      </Alert>

      <h2 className="mb-2">error</h2>
      <Alert
        title="Alert title lorem ipsun"
        variant="error"
        className="mb-6"
        onClose={() => {}}
      >
        This is an error alert
      </Alert>

      <h2 className="mb-2">Warning</h2>
      <Alert
        title="Alert title lorem ipsun"
        variant="warning"
        className="mb-6"
        onClose={() => {}}
      >
        This is a warning alert
      </Alert>

      <h2 className="mb-2">Info</h2>
      <Alert
        title="Alert title lorem ipsun"
        variant="info"
        className="mb-6"
        onClose={() => {}}
      >
        This is an info alert
      </Alert>

      <h2 className="mb-2">Success</h2>
      <Alert
        title="Alert title lorem ipsun"
        variant="success"
        className="mb-6"
        onClose={() => {}}
      >
        This is a success alert
      </Alert>
    </main>
  )
}
