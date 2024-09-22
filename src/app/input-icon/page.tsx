import { InputIcon } from '@/components'
import {
  EyeSlashIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export default function InputIconPage() {
  return (
    <main className="max-w-xs py-6">
      <h1 className="mb-8 text-2xl font-semibold">Input Component</h1>

      <div className="mb-6">
        <h2 className="mb-2">Icon Left</h2>
        <InputIcon
          type="password"
          IconLeft={ExclamationTriangleIcon}
          iconLeftClasses="text-red-500"
          placeholder="Input with icon on the left"
        />
      </div>

      <div className="mb-6">
        <h2 className="mb-2">Icon Right</h2>
        <InputIcon
          type="password"
          IconRight={EyeSlashIcon}
          iconRightClasses="text-gray-500"
          placeholder="Input with icon on the right"
        />
      </div>

      <div className="mb-6">
        <h2 className="mb-2">Icon on both sides</h2>
        <InputIcon
          type="password"
          IconLeft={ExclamationTriangleIcon}
          IconRight={EyeSlashIcon}
          iconLeftClasses="text-red-500"
          iconRightClasses="text-gray-500"
          placeholder="Input with icon on both sides"
        />
      </div>
    </main>
  )
}
