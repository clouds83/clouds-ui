'use client'

import { useState } from 'react'
import { Accordion } from '@/components'

function AccordionPage() {
  const [isOpen, setIsOpen] = useState('accordion-one')

  return (
    <main className="max-w-2xl py-6">
      <h1 className="mb-8 text-2xl font-semibold">Accordion</h1>

      <div className="space-y-4">
        <Accordion
          title="Accordion One"
          isOpen={isOpen === 'accordion-one'}
          setIsOpen={setIsOpen}
        >
          <div className="space-y-6">
            <p>
              Content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Illo, dolores consectetur. Esse tempore consequuntur dolor
              provident! Aperiam eum sint iusto sunt laboriosam, rem minima
              maiores delectus enim dolorum necessitatibus sapiente.
            </p>
            <p>
              Content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Illo, dolores consectetur. Esse tempore consequuntur dolor
              provident! Aperiam eum sint iusto sunt laboriosam, rem minima
              maiores delectus enim dolorum necessitatibus sapiente.
            </p>
            <p>
              Content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Illo, dolores consectetur. Esse tempore consequuntur dolor
              provident! Aperiam eum sint iusto sunt laboriosam, rem minima
              maiores delectus enim dolorum necessitatibus sapiente.
            </p>
          </div>
        </Accordion>

        <Accordion
          title="Accordion Two"
          isOpen={isOpen === 'accordion-two'}
          setIsOpen={setIsOpen}
        >
          Content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Illo, dolores consectetur. Esse tempore consequuntur dolor provident!
          Aperiam eum sint iusto sunt laboriosam, rem minima maiores delectus
          enim dolorum necessitatibus sapiente.
        </Accordion>

        <Accordion
          title="Accordion Three"
          isOpen={isOpen === 'accordion-three'}
          setIsOpen={setIsOpen}
        >
          Content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Illo, dolores consectetur. Esse tempore consequuntur dolor provident!
          Aperiam eum sint iusto sunt laboriosam, rem minima maiores delectus
          enim dolorum necessitatibus sapiente.
        </Accordion>
      </div>
    </main>
  )
}

export default AccordionPage
