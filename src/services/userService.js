import axios from "../axios"

const handleLogin = (email, password) => {
    return axios.post('/api/login', {email, password});
}

const getAllUsers = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`);
}

const createNewUser = (data) => {
    return axios.post(`/api/create-new-user`, data)
}

const deleteUser = (id) => {
    return axios.delete(`/api/delete-user`, {
        data: {
            id: id,
        }
    })
}

const editUserService = (data) => {
    return axios.put(`/api/edit-user`, data)
}

export { handleLogin, getAllUsers, createNewUser, deleteUser, editUserService}