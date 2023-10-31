'use client'

import { api } from '@/lib/api'
import { Upload } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { BarLoader } from 'react-spinners'
import ImageModal from './ImageModal'

export default function FileField({ disabled }) {
  const [filesName, setFilesName] = useState([])
  const [icon, setIcon] = useState(<Upload />)

  const handleChange = async (e) => {
    const files = e.target.files

    setIcon(<BarLoader color="#000" width="50" />)

    for (const file of files) {
      const formData = new FormData()
      formData.set('file', file)
      const response = await api.post('/aluno/entrega/upload', formData)
      setFilesName((prevValue) => [...prevValue, response.data])
    }

    setIcon(<Upload />)
  }

  return (
    <div>
      <label
        htmlFor="file"
        className="border-2 border-highlighted text-highlighted p-3 flex gap-2 items-center hover:underline hover:cursor-pointer hover:text-white  hover:bg-highlighted transition-all"
      >
        {icon}
        Anexar arquivo
      </label>
      <input
        multiple
        accept="image/png, image/jpeg, application/pdf"
        type="file"
        id="file"
        name="file"
        className="invisible absolute w-0"
        onChange={handleChange}
        disabled={disabled}
      />

      {/* Files */}
      {filesName.length === 0 ? (
        <></>
      ) : (
        filesName.map((filename) => {
          const segments = filename.split('-')
          const filenameWithoutID = segments.slice(1).join('-')
          return filename.includes('.pdf') || filename.includes('.PDF') ? (
            <Link
              href={`/${filename}`}
              target="_blank"
              className="bg-highlighted text-white px-2 w-max block mt-5"
              key={filename.split('-', 1)}
            >
              {filenameWithoutID}
            </Link>
          ) : (
            <ImageModal filename={filename} key={filename.split('-', 1)} />
          )
        })
      )}
    </div>
  )
}
