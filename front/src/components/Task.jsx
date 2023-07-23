import { CheckCircle, Clock5 } from 'lucide-react'

export default function Task({ name, hours, dueDate, isDone }) {
    return isDone ? (
        <div className='flex gap-3 text-xs items-center'>
            <CheckCircle color='#24A148' strokeWidth={3} size={38} />
            <span>{name} {dueDate} ({hours} horas)</span>
        </div>
    ) : (
        <div className='flex gap-3 text-xs items-center'>
            <Clock5 color='#C6C6C6' strokeWidth={3} size={38} />
            <span>{name} {dueDate} ({hours} horas)</span>
        </div>
    )
}