import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddNewUser = ({ newUser }) => {
    const [userData, setUserData] = useState({
        id: "id:_" + new Date(),
        name: "",
        address: {
            city: "",
        },
        company: "",
        phone: "",
        website: "",

    })
    const clearData = () => {
        setUserData({
            name: "",
            address: {
                city: "",
            },
            company: "",
            phone: "",
            website: "",
        })
    }
    const onFinish = (e) => {
        e.preventDefault();
        console.log("add new user", userData)
        alert("Successfully added a new user!")
        clearData()

    }
    return (
        <div className="new-user">
            <h1>Add A New User</h1>
            <form onSubmit={onFinish}>
                <div className="form-div">
                    <input
                        value={userData.name}
                        type="text"
                        id="firstName"
                        className="form__input"
                        placeholder=" "
                        required
                        onChange={e => setUserData({
                            ...userData, name: e.target.value
                        })}
                    />
                    <label htmlFor="firstName" className="form__label">
                        Name
                    </label>
                </div>

                <div className="form-div">
                    <input
                        value={userData.address.city}
                        type="text"
                        id="city"
                        className="form__input"
                        placeholder=" "
                        required
                        onChange={e => setUserData({
                            ...userData, address: { city: e.target.value }
                        })}
                    />
                    <label htmlFor="city" className="form__label">
                        City
                    </label>
                </div>
                <div className="form-div">
                    <input
                        value={userData.company}
                        type="text"
                        id="company"
                        className="form__input"
                        placeholder=" "
                        required
                        onChange={e => setUserData({
                            ...userData, company: e.target.value
                        })}
                    />
                    <label htmlFor="company" className="label-company form__label">
                        Company
                    </label>
                </div>
                <div className="form-div">
                    <input
                        value={userData.phone}
                        type="tel"
                        id="phone"
                        className="form__input"
                        placeholder=" "
                        required
                        onChange={e => setUserData({
                            ...userData, phone: e.target.value
                        })}
                    />
                    <label htmlFor="phone" className="form__label">
                        Phone
                    </label>
                </div>
                <div className="form-div">
                    <input
                        value={userData.website}
                        type="url"
                        id="website"
                        className="form__input"
                        placeholder=" "
                        required
                        onChange={e => setUserData({
                            ...userData, website: e.target.value
                        })}
                    />
                    <label htmlFor="website" className="label-website form__label">
                        Website
                    </label>
                </div>
                <div className="add-footer">
                    <button type="submit" className="form-add-btn">
                        Add User
                    </button>
                    <Link to="/phonebook">Phonebook</Link>
                </div>

            </form>
        </div>
    )
}

export default AddNewUser
