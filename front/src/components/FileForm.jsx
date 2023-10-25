'use client'

import { api } from '@/lib/api'
import { ArrowRight, Upload } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import ImageModal from './ImageModal'

export default function FileForm() {
  const [filesName, setFilesName] = useState([])

  const handleChange = async (e) => {
    const files = e.target.files

    for (const file of files) {
      const formData = new FormData()
      formData.set('file', file)
      const response = await api.post('/aluno/entrega/upload', formData)
      setFilesName((prevValue) => [...prevValue, response.data])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    // const data = Object.fromEntries(formData)

    console.log(e.target.children[1].files)
  }

  return (
    <div>
      <form
        action=""
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="file"
          className="border-2 border-highlighted text-highlighted p-3 flex gap-2 hover:underline hover:cursor-pointer hover:text-white  hover:bg-highlighted transition-all"
        >
          <Upload />
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
        />

        {/* Files */}
        {filesName.length === 0 ? (
          <></>
        ) : (
          filesName.map((filename) => {
            return filename.includes('.pdf') ? (
              <Link
                href={`/${filename}`}
                target="_blank"
                className="bg-highlighted text-white px-2 w-max block mt-5"
                key={filename.split('-', 1)}
              >
                {filename}
              </Link>
            ) : (
              <ImageModal filename={filename} key={filename.split('-', 1)} />
            )
          })
        )}

        <button
          type="submit"
          className="flex justify-between items-center w-full text-left font-light bg-highlighted text-white mt-7 p-3"
        >
          Enviar
          <ArrowRight strokeWidth={1} />
        </button>
      </form>
    </div>
  )
}
