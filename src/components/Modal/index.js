import React from 'react';
import "./style.scss";
import AddNewUser from '../PhoneBook/AddNewUser';
import EditUser from "../PhoneBook/EditUser"

const Modal = ({ handleOk, handleCancel, user }) => {
    console.log(user)
    return (
        <div className="Backdrop">
            <div className="Modal">
                <div className="modal-header">
                    {user ? `Editing: ${user.name.toUppercase}` : "ADDING A NEW USER"}
                    <span className="x-icon" onClick={() => handleCancel()}>X</span>
                </div>
                <div className="modal-container">
                    {
                        user ? <EditUser /> : <AddNewUser />
                    }
                </div>
                <div className="modal-footer">
                    <button onClick={() => handleOk()}>{user ? "Edit" : "Add"}</button>
                    <button onClick={() => handleCancel()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
