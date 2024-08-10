import Input from "@/components/Input";

export default function InputPage() {
  return (
    <main className="py-6">
      <h1 className="mb-8 text-2xl font-semibold">Input Component</h1>

      <div className="mb-6">
        <h2 className="mb-2">Default</h2>
        <Input placeholder="Default field" />
      </div>

      <div className="mb-6">
        <h2 className="mb-2">Disabled</h2>
        <Input placeholder="Disabled field" disabled />
      </div>

      <div className="mb-6">
        <h2 className="mb-2">Password</h2>
        <Input placeholder="Enter your password" type="password" />
      </div>

      <div className="mb-6">
        <h2 className="mb-2">With error</h2>
        <Input placeholder="Enter your password" error={true} />
      </div>

      <div className="mb-6">
        <h2 className="mb-2">Valid</h2>
        <Input placeholder="Enter your password" valid />
      </div>
    </main>
  );
}
