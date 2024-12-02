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

const postCreateNewDoctor = (fullName,
  email,
  userName,
  password,
  birthday,
  gender,
  phone,
  iD_Number,
  role_Id,
  image,
  specialist_Id) => {
  const data = new FormData();
  data.append("fullName", fullName);
  data.append("email", email);
  data.append("username", userName);
  data.append("password", password);
  data.append("birthday", birthday);
  data.append("gender", gender);
  data.append("phone", phone);
  data.append("iD_Number", iD_Number);
  data.append("role_Id", role_Id);
  data.append("image", image);
  data.append("specialist_Id", specialist_Id);
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

const putUpdateDoctor = (userId, fullName,
  email,
  userName,
  password,
  birthday,
  gender,
  phone,
  iD_Number,
  role_Id,
  image,
  specialist_Id, Is_Active) => {
  const data = new FormData();
  data.append("fullName", fullName);
  data.append("email", email);
  data.append("username", userName);
  data.append("password", password);
  data.append("birthday", birthday);
  data.append("gender", gender);
  data.append("phone", phone);
  data.append("iD_Number", iD_Number);
  data.append("role_Id", role_Id);
  data.append("image", image);
  data.append("specialist_Id", specialist_Id);
  data.append("Is_Active", Is_Active);
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
