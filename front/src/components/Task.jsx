import Link from 'next/link'

export default function Task({ name, hours, dueDate }) {
  return (
    <Link
      className="grid grid-cols-[1fr]  text-[0.625rem] py-2 px-4 border-2 border-highlighted"
      href="pre-projeto"
    >
      <span className="text-base col-span-1/2">{name}</span>
      <span>Prazo de entrega - {dueDate}</span>
      <span className="">{hours} hora(s)</span>
    </Link>
  )
}
