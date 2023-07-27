'use client'

import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function Dropdown({ title, children }) {
  // Controlling the dropdown
  const [isActive, setIsActive] = useState(true)
  const handleDropDown = () => setIsActive(!isActive)

  return (
    <>
      <div
        className="dropdown flex items-end gap-2 my-6"
        onClick={handleDropDown}
      >
        <h3 className="font-medium">{title}</h3>
        {isActive ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </div>
      <div
        style={{
          display: isActive ? 'block' : 'none',
        }}
        className="activities space-y-5"
      >
        {children}
      </div>
    </>
  )
}
