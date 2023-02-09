import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">new member's email</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="name">new member's name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div><input type="submit" value="Send Invite" /></div>
        </form>
        <Link to="/dashboard">
            <button>Finished</button>
        </Link> 
        </div>

    )
}   

export default NewInviteForm;