import InputIcon from '@/components/InputIcon'
import Icon from '@/../mock/icons/Icon'

export default function InputIconPage() {
  return (
    <main className="py-6">
      <h1 className="mb-8 text-2xl font-semibold">Input Component</h1>

      <div className="mb-6">
        <h2 className="mb-2">Default</h2>
        <InputIcon type="password" IconLeft={Icon} IconRight={Icon} />
        {/* placeholder="Default field" */}
      </div>
    </main>
  )
}
