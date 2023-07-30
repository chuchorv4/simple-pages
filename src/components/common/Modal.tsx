import { Props } from '@/interfaces/common'
import { ReactNode } from 'react'
import { CgClose } from 'react-icons/cg'

interface ModalProps extends Props {
  buttons: ReactNode
  title: string
  icon?: ReactNode
  closeModal?: () => void
}

const Modal = ({ buttons, closeModal, children, title, icon }: ModalProps) => {
  return (
    <>
      <div className="modal modal-open">
        <div className="modal-box relative">
          {closeModal && (
            <button
              className="btn btn-circle btn-sm absolute right-2 top-2"
              onClick={closeModal}
            >
              <CgClose size={24} />
            </button>
          )}
          <h3 className="flex text-lg font-bold">
            {icon && <span className="m-2 flex">{icon}</span>}
            <span className="m-1 flex-grow">{title}</span>
          </h3>
          <div className="py-4">{children}</div>
          <div className="modal-action">{buttons}</div>
        </div>
      </div>
    </>
  )
}

export default Modal
