import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const defaultHouseholdState = {
    household: "",
    }

const NewHouseholdForm = ({handleHouseholdSubmit})=> {
    const [formData, setFromData] =useState(defaultHouseholdState)

    const navigate = useNavigate();

    const handleChange = (event) =>{
        const fieldValue = event.target.value;
        const fieldName = event.target.fieldName;
        const newFormData = {...formData, [fieldName]: fieldValue}

        setFromData(newFormData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleHouseholdSubmit(formData);
        setFromData(defaultHouseholdState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="household"> Name Your Household</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <button type="submit" value="Add Household" onClick={() => navigate(-1)}>Start a Household</button>
            </div>
        </form>
    )
}

export default NewHouseholdForm;