import React from 'react'

const AddNewUser = () => {
    return (
        <div className="new-user">
            <form>
                <div className="user-name">
                    <input
                        type="text"
                        id="firstName"
                        className="name-input form__input"
                        placeholder=" "
                    // onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label htmlFor="firstName" className="form__label">
                        Name
                    </label>
                </div>
                <div className="city">
                    <input
                        type="text"
                        id="firstName"
                        className="name-input form__input"
                        placeholder=" "
                    // onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label htmlFor="firstName" className="form__label">
                        Name
                    </label>
                </div>
                <div className="form-footer">
                    <button type="submit">
                        Add User
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddNewUser
