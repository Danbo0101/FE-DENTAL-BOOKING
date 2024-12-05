import axios from "../utils/axiosCustomize";

const getRegimen = () => {
    return axios.get(`/api/Regimen/get-all`)
}

const postCreateRegimen = () => {
    return axios.post()
}

const putUpdateRegimen = () => {
    return axios.put()
}

export {
    getRegimen,
    postCreateRegimen,
    putUpdateRegimen
}