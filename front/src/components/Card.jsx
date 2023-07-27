import Link from 'next/link'

export default function Card({ children }) {
  return (
    <div>
      <Link
        className="grid grid-cols-[1fr]  text-[0.625rem] py-2 px-4 border-2 border-highlighted"
        href="pre-projeto"
      >
        {children}
      </Link>
    </div>
  )
}
