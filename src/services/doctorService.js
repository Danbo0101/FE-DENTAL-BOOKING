import axios from "../utils/axiosCustomize";

const getDoctorPagination = (page, limit) => {
  return axios.get(`/v1/api/doctors?page=${page}&limit=${limit}`);
};

const getAllDoctor = () => {
  return axios.get(`/v1/api/doctors`);
};

const getAllDoctorNotMarkToday = () => {
  return axios.get(`/v1/api/mark-attendance`);
};

const getDoctorInfoDetail = (id) => {
  return axios.get(`/v1/api/doctor-clinic-specialties?doctorId=${id}`);
};

const postCreateNewDoctor = (data) => {
  return axios.post("/api/User/create", data);
};

const postAssignDoctor = (doctorId, clinicId, specialtiesId) => {
  const data = new FormData();
  data.append("doctorId", doctorId);
  data.append("clinicId", clinicId);
  data.append("specialtiesId", specialtiesId);
  return axios.post("/v1/api/assign-doctor", data);
};

const deleteDoctor = (id) => {
  return axios.delete(`/v1/api/doctors?id=${id}`);
};

const putUpdateDoctor = (userId, data) => {
  return axios.put(`api/User/${userId}/update`, data);
};

const getAssignDoctor = (id) => {
  return axios.get(`/v1/api/assign-doctor?doctorId=${id}`);
};

const putUpdateAssignDoctor = (id, clinicId, specialtiesId) => {
  const data = new FormData();
  data.append("clinicId", clinicId);
  data.append("specialtiesId", specialtiesId);
  return axios.put(`/v1/api/assign-doctor?doctorId=${id}`, data);
};

export {
  getAllDoctor,
  getDoctorPagination,
  postCreateNewDoctor,
  getDoctorInfoDetail,
  postAssignDoctor,
  deleteDoctor,
  putUpdateDoctor,
  getAssignDoctor,
  putUpdateAssignDoctor,
  getAllDoctorNotMarkToday,
};
