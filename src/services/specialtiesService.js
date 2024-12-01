import axios from "../utils/axiosCustomize";

const getServices = () => {
  return axios.get(`/api/Service/get-all`);
};

const postCreateService = (data) => {
  return axios.post(`/api/Service/create`, data);
};

const putUpdateService = (serviceId, data) => {
  return axios.put(`/api/Service/${serviceId}/update`, data);
};


const getSpecialties = () => {
  return axios.get(`/api/Specialist/get-all`);
};

const postCreateSpecialties = (data) => {
  return axios.post("/api/Specialist/create", data);
};

const putUpdateSpecialties = (id, name, description, specialtiesImage) => {
  const data = new FormData();
  data.append("name", name);
  data.append("description", description);
  data.append("image", specialtiesImage);
  return axios.put(`/v1/api/specialties?id=${id}`, data);
};

const deleteSpecialties = (id) => {
  return axios.delete(`/v1/api/specialties?id=${id}`);
};

const getBookingOfSpecialties = (specialtiesId) => {
  return axios.get(
    `/v1/api/specialties-booking?specialtiesId=${specialtiesId}`
  );
};

export {
  getServices,
  postCreateService,
  putUpdateService,
  getSpecialties,
  postCreateSpecialties,
  putUpdateSpecialties,
  deleteSpecialties,
  getBookingOfSpecialties,
};
