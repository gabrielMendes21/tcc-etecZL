import Card from './Card'

export default function Task({ name, hours, dueDate }) {
  return (
    <Card
      className="grid grid-cols-[1fr]  text-[0.625rem] py-2 px-4 border-2 border-highlighted"
      href="pre-projeto"
    >
      <span className="text-base col-span-1/2">{name}</span>
      <span>Prazo de entrega - {dueDate}</span>
      <span>{hours} hora(s)</span>
    </Card>
  )
}
