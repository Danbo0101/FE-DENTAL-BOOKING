import axios from "../utils/axiosCustomize";

const getServices = () => {
  return axios.get(`api/Service/get-all`);
};

const postCreateService = (name, description, price, image) => {
  const data = new FormData();
  data.append("name", name);
  data.append("description", description);
  data.append("price", price);
  data.append("image", image);
  return axios.post(`/api/Service/create`, data);
};

const putUpdateService = (serviceId, name, description, price, image, is_Deleted) => {
  const data = new FormData();
  data.append("name", name);
  data.append("description", description);
  data.append("price", price);
  data.append("image", image);
  data.append("is_Deleted", is_Deleted);
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
