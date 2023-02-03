import React, { useState } from 'react';

const kDefaultFormState = {
    title: "",
    decription: "",
    meetingTime: "",
    cost: "",
    transport: ""
};

const NewEventForm =({handleEventSubmit}) => {
    const [formData, setFormData] =useState(kDefaultFormState);

    const handleChange = (event) => {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        const newFormData = {...formData, [fieldName]: fieldValue}

        setFormData(newFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleEventSubmit(formData);
        setFormData(kDefaultFormState);
    }


return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Event Title: </label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="decription">Decription: </label>
            <input type="text" id="decription" name="description" value={formData.decription} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="meetingTime">Event Date: </label>
            <input type="datetime-local" id="meetingTime" name="meetingTime" value={formData.meetingTime} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="cost">Cost: </label>
            <input type="number" id="cost" name="cost" value={formData.cost} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="transp">transportation: </label>
            <input type="checkbox" id="transp" name="transport" value={formData.transport} onChange={handleChange} />
        </div>
    <div>
        <input type="submit" value="Add Event" />
        </div>
    </form>
)};