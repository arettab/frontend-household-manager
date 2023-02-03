import React, { useState } from 'react';

const defaultInviteState = {
    email: "",
    }

const NewInviteForm = ({handleInviteSubmit})=> {
    const [formData, setFromData] =useState(defaultInviteState)

    const handleChange = (event) =>{
        const fieldValue = event.target.value;
        const fieldName = event.target.fieldName;
        const newFormData = {...formData, [fieldName]: fieldValue}

        setFromData(newFormData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleInviteSubmit(formData);
        setFromData(defaultInviteState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">new member's email</label>
                <input type="text" id="email" name="emaail" value={formData.email} onChange={handleChange} />
            </div>
            <div><input type="submit" value="Send Invite" /></div>
        </form>
    )
}

export default NewInviteForm;