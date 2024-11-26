import axios from "../utils/axiosCustomize"

const getRole = () => {
    return axios.get(`api/Role/get-all`);
}

const getAllUsers = () => {
    return axios.get(`api/User/get-all`);
}

export {
    getRole,
    getAllUsers
}