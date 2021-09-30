import api from "./api";

const getBusinessSearch = async (term) => {
  const response = await api.get('/businesses/search', {
    params: {
      limit: 50,
      term,
      location: 'los angeles'
    }
  })
  return response.data.businesses
};

const getBusinessById = async (id) => {
  const response = await api.get(`/businesses/${id}`)
  return response.data
}

export default { getBusinessSearch, getBusinessById };
