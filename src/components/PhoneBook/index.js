import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import "./style.scss"
import { deleteUser, editUser, fetchOne, fetchUsers } from '../../api';
import {
    FaUserCircle, FaRegEdit, FaRegTrashAlt,
    FaUserPlus,
} from "react-icons/fa";
import { Link } from 'react-router-dom';


const PhoneBook = () => {
    const [userActive, setUserActive] = useState(null);
    const [userToEdit, setUserToEdit] = useState(null);
    const [users, setUsers] = useState()
    const [isModalVisible, setIsModalVisible] = useState(false);

    console.log(userActive)

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleEdit = (item) => {
        setUserToEdit(item);
        showModal();
        return console.log("edited: ", item)
    }
    const deleteItem = (id) => {
        return setUsers(users.filter((user) => user.id !== id));

    }
    useEffect(() => {
        try {
            fetchOne(1)
                .then(res => setUserActive(res.data))
        } catch (error) {
            console.log(error)
        }
        try {
            fetchUsers()
                .then(res => setUsers(res.data))
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <div className="phonebook-container">
            <div className="phonebook">
                <div className="notebook-page">
                    <div className="page-header">
                        <div className="header-add">
                            <span className="add-user" onClick={() => showModal()}><FaUserPlus /></span>
                        </div>
                        {userActive && <div className="user">
                            <FaUserCircle className="user-icon" />
                            <span>{userActive.name}</span>
                        </div>}
                    </div>
                    <div className="page-main">
                        <div className="table-header">
                            <span className="nr">Nr</span>
                            <span>Name</span>
                            <span>City</span>
                            <span>Company</span>
                            <span>Phone</span>
                            <span>Website</span>
                            {userActive && <span className="actions">
                                Actions
                            </span>}
                        </div>
                        {
                            users?.map(item => {
                                return (
                                    <div key={item.id} className="row">
                                        <span className="nr">{item.id}</span>
                                        <span>{item.name}</span>
                                        <span>{item.address.city}</span>
                                        <span>{item.company.name}</span>
                                        <span>{item.phone.slice(0, 12)}</span>
                                        <span>{item.website}</span>
                                        {
                                            userActive && <span className="actions">
                                                <a onClick={() => handleEdit(item)} className="edit-link"><FaRegEdit />Edit</a>
                                                <span onClick={() => deleteItem(item.id)}>Delete <FaRegTrashAlt /></span>
                                            </span>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="page-footer">
                        <p>
                            &copy; Copywrite <a target="_blank" href="https://kolpaja.github.io/">Sokol Paja</a> A simple phone book
                        </p>

                    </div>
                </div>
            </div>
            {isModalVisible && <Modal handleCancel={handleCancel} handleOk={handleOk} user={userToEdit} />}
        </div>
    )
}

export default PhoneBook
