import axios from 'axios';

const fetchData = (url) => {
  return axios
    .get(`https://api.github.com/users/${url}`)
    .then(res => {
      console.log('fetch info for ',url, 'here>>',res.data)
      return (res.data);
    })
    .catch(err => {
      console.log(err.response)
      debugger;
    })
}

export default fetchData;