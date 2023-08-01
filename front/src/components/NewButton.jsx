import { PlusCircle } from 'lucide-react'
import Link from 'next/link'

export default function NewButton({ to, text }) {
  return (
    <Link href={to} className="flex gap-3 mt-5">
      <PlusCircle color="#C6C6C6" />
      {text}
    </Link>
  )
}
