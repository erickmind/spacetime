import { NewMemoryForm } from '@/components/NewMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="gap 4 flex flex-1 flex-col p-16">
      <Link
        href="/"
        className="gap 1 flex items-center text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}
