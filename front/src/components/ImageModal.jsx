'use client'

import { useState } from 'react'
import MyModal from './Modal'
import Image from 'next/image'

export default function ImageModal({ filename }) {
  // Modal control
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const segments = filename.split('-')
  const filenameWithoutID = segments.slice(1).join('-')

  return (
    <>
      {/* New student button (tablets and PC's) */}
      <button
        onClick={handleOpen}
        className="block mt-5 bg-highlighted text-white px-2"
      >
        {filenameWithoutID}
      </button>

      {/* Modal */}
      <MyModal isOpen={isOpen} handleClose={handleClose}>
        <Image
          src={`/${filename}`}
          alt=""
          width={1000}
          height={1000}
          className="w-max h-max block object-cover"
          quality={100}
        />
      </MyModal>
    </>
  )
}
