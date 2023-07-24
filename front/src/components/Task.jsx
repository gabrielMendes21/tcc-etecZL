import { CheckCircle, Clock5, XCircle } from 'lucide-react'
import Link from 'next/link'

export default function Task({ name, hours, dueDate, taskStatus }) {
    return taskStatus === "complete" ? (
        <Link className='flex gap-3 text-xs items-center' href="pre-projeto">
            <CheckCircle color='#24A148' strokeWidth={3} size={38} />
            <span>{name} {dueDate} ({hours} horas)</span>
        </Link>
    ) : taskStatus === "pending" ? (
        <Link className='flex gap-3 text-xs items-center' href={name}>
            <Clock5 color='#C6C6C6' strokeWidth={3} size={38} />
            <span>{name} {dueDate} ({hours} horas)</span>
        </Link>
    ) : taskStatus === "overdue" ? (
        <Link className='flex gap-3 text-xs items-center' href={name}>
            <XCircle color='#FF0000' strokeWidth={3} size={38} />
            <span>{name} {dueDate} ({hours} horas)</span>
        </Link>
    ) : false
}