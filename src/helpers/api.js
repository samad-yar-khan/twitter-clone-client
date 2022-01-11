import axios from 'axios';

export default axios.create({
  baseURL: `https://micro-blogging-platform-server.herokuapp.com/api/v1/`
});

