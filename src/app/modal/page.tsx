'use client'

import { Button } from '@/components'
import { Modal } from '@/components/Modal'
import { useState } from 'react'

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="py-6">
      <h1 className="mb-8 text-2xl font-semibold">Modal Component</h1>

      <Button as="button" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="mb-4 text-xl font-semibold">Modal Title</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          feugiat odio. Curabitur vel turpis auctor, aliquet nunc nec,
          vestibulum nulla. Nullam euismod, nulla et lacinia tincidunt, nisl
          libero tincidunt ex, nec fermentum nunc velit nec nisi. Nulla
          facilisi.
        </p>

        <Button as="button" onClick={() => setIsOpen(false)} className="mt-4">
          Close Modal
        </Button>
      </Modal>
    </main>
  )
}
