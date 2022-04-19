const axios= require('axios');

function Users () {
    return axios.get('/users.json').then(resp => resp.data);
  
};



module.exports= Users;