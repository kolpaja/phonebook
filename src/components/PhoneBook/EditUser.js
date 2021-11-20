import { useState } from 'react'
import { Link } from 'react-router-dom'

const EditUser = ({ user, handleOk }) => {
    const [userData, setUserData] = useState({
        name: "",
        address: {
            city: "",
        },
        company: "",
        phone: "",
        website: "",

    })
    const onFinish = (e) => {
        e.preventDefault();
        console.log("edit user", userData)
        handleOk();
    }
    return (
        <div className="edit-user">
            <form onSubmit={onFinish}>
                <div className="edit-div">
                    <input
                        value={user.name}
                        type="text"
                        id="firstName"
                        className="form-input"
                        placeholder=" "
                        required
                        onChange={e => setUserData({ ...userData, name: e.target.value })}
                    />
                    <label htmlFor="firstName" className="form-label">
                        Name
                    </label>
                </div>

                <div className="edit-div">
                    <input
                        value={user.address.city}
                        type="text"
                        id="city"
                        className="form-input"
                        placeholder=" "
                        required
                        onChange={e => setUserData({
                            ...userData, address: { city: e.target.value }
                        })}
                    />
                    <label htmlFor="city" className="form-label">
                        City
                    </label>
                </div>
                <div className="edit-div">
                    <input
                        value={user.company}
                        type="text"
                        id="company"
                        className="form-input"
                        placeholder=" "
                        required
                        onChange={e => setUserData({ ...userData, company: e.target.value })}
                    />
                    <label htmlFor="company" className="label-company form-label">
                        Company
                    </label>
                </div>
                <div className="edit-div">
                    <input
                        value={user.phone}
                        type="tel"
                        id="phone"
                        className="form-input"
                        placeholder=" "
                        required
                        onChange={e => setUserData({
                            ...userData, phone: e.target.value
                        })}
                    />
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                </div>
                <div className="edit-div">
                    <input
                        value={user.website}
                        type="url"
                        id="website"
                        className="form-input"
                        placeholder=" "
                        required
                        onChange={e => setUserData({
                            ...userData, website: e.target.value
                        })}
                    />
                    <label htmlFor="website" className="label-website form-label">
                        Website
                    </label>
                </div>

                <Link to="/phonebook">
                    <button type="submit" className="form-add-btn">
                        Edit User
                    </button>
                </Link>

            </form>
        </div>
    )
}

export default EditUser
