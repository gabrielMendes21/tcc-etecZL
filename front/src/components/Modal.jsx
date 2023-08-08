import { Modal } from '@mui/material'

export default function MyModal({ isOpen, handleClose, children }) {
  return (
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
      <div className="w-1/2 h-4/5 bg-white p-8 overflow-y-auto border-[2px] border-highlighted">
        {children}
      </div>
    </Modal>
  )
}
