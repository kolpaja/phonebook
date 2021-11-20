import React from 'react';
import "./style.scss";
import AddNewUser from '../PhoneBook/AddNewUser';
import EditUser from "../PhoneBook/EditUser"

const Modal = ({ handleOk, handleCancel, user }) => {
    console.log(user)
    return (
        <div className="Backdrop">
            <div className="Modal">
                <span className="x-icon" onClick={() => handleCancel()}>X</span>
                <div className="modal-header">
                    {user && `Editing: ${user.name}`}

                </div>
                <div className="modal-container">
                    <EditUser user={user} handleOk={handleOk} />
                </div>
                <div className="modal-footer">
                    <button onClick={() => handleCancel()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
