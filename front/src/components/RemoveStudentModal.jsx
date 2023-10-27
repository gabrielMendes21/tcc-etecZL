'use client'

import { Trash2 } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { Modal } from "@mui/material"
import { api } from "@/lib/api"

export default function RemoveStudentModal({ coordinator }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const router = useRouter()
  const pathname = usePathname()
  const segments = pathname.split("/")
  const classId = Number(segments[segments.length - 3])

  const handleRemoveStudent = async () => {
    const studentId = Number(segments[segments.length - 1])

    const response = await api.delete('/aluno', {
        params: {
            studentId
        }
    })

    router.push('../')
  }

    return (
        <>
            <button
                onClick={handleOpen}
                className="flex justify-between items-center w-full text-left font-light bg-[#BE2528] hover:cursor-pointer hover:brightness-110 transition-all text-white mt-3 p-3"
            >
                Excluir aluno
                <Trash2 strokeWidth={1} />
            </button>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div className=" w-4/5 md:w-auto bg-white p-8 overflow-y-auto border-[2px] border-highlighted">

                    <span className="block mt-5 font-bold text-lg">Remover aluno?</span>
                    <span className="mt-2 block text-sm">ATENÇÃO: todo o histórico de horas do aluno será removido</span>

                    <div className="flex justify-center gap-8 mt-5">
                        <button className="px-3 py-1 bg-highlighted text-white hover:brightness-110" onClick={handleRemoveStudent}>Sim</button>
                        <button className="px-3 py-1 border border-highlighted hover:bg-highlighted hover:text-white transition-all" onClick={handleClose}>Não</button>
                    </div>

                </div>
            </Modal>
        </>
    )
}