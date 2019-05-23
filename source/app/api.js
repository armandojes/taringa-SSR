import axios  from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com';

//funcion conectar
async  function connect (config){
  config.url = baseUrl+config.url;
  const response = await axios(config);
  return response.data;
}

const api = {
  posts: {
    get_list: async () => {
      const response = await connect({
        method: 'get',
        url: '/posts',
      });
      return response;
    },
    get_single: async (postd_id) => {
      const response = await connect({
        method: 'get',
        url: `/posts/${postd_id}`,
      });
      return response;
    },
  }
}
 export default api;
