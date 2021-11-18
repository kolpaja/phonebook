import React, { useState, useEffect } from 'react'
import "./style.scss"

const PhoneBook = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="phonebook-container">
            <div className="phonebook">
                <div className="notebook-page">
                    <div className="page-header"></div>
                    <div className="page-main"></div>
                    <div className="page-footer"></div>
                </div>
            </div>
        </div>
    )
}

export default PhoneBook
