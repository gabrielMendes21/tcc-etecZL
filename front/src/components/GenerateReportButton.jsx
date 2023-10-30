'use client'

import { FileText } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import LoadingIcon from './LoadingIcon'

export default function GenerateReportButton({ token }) {
  const [icon, setIcon] = useState(<FileText strokeWidth={1} />)

  const handleChangeIcon = () => {
    setIcon(<LoadingIcon />)
  }

  return (
    <Link
      href={`/api/relatorio/gerarPDF?token=${token}`}
      className="flex justify-between items-center w-full text-left font-light bg-highlighted hover:brightness-110 transition-all text-white mt-7 p-3"
      onClick={handleChangeIcon}
    >
      Gerar relatório
      {icon}
    </Link>
  )
}
