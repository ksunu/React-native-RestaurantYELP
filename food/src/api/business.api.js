import api from "./api";

const getBusinessSearch = async (term) => {
  const response = await api.get('/businesses/search', {
    params: {
      limit: 50,
      term,
      location: 'san jose'
    }
  })
  return response.data.businesses
};

export default { getBusinessSearch };
