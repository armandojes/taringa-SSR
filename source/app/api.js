import axios  from 'axios';
const baseUrl = 'http://api.taringa.net';

//funcion conectar
async  function connect (config){
  config.url = baseUrl+config.url;
  const response = await axios(config);
  return response.data;
}

const api = {
  posts: {
    get_list: async (page = 1) => {
      const response = await connect({
        method: 'get',
        url: `/post/populars/view/all?page=${page}`,
      });
      return response;
    },
    get_single: async (postd_id) => {
      const response = await connect({
        method: 'get',
        url: `/post/view/${postd_id}`,
      });
      return response;
    },
  }
}

export default api;
