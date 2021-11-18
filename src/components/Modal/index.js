import React from 'react';
import "./style.scss"

const Modal = ({ children, handleOk, handleCancel }) => {
    return (
        <div className="Backdrop">
            <div className="Modal">
                {children}
            </div>
        </div>
    )
}

export default Modal
