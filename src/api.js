import axios from 'axios';

export const backendUrl = 'http://localhost:5000'

export const addNewUser = (newUser) => {
    const requestBody = newUser;
        return axios.post(`${backendUrl}/users`, requestBody)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err);
            return Promise.reject(err);
        });
    };

export const checkUserExists = async (userId) => {
        const response = await axios.get(`${backendUrl}/users/${userId}`);
        return response.status === 200;
    };

export const getUserfromApi = (userId) => {
    return axios.get(`${backendUrl}/users/${userId}`)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        console.log(err)
    })
};

export const checkInviteExists = async (id) => {
    const response = await axios.get(`${backendUrl}/invites/${id}`)
    return response.status === 200;
};


export const removeInvite = (email) => {
    return axios.delete(`${backendUrl}/invites`,email)
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    });
};


