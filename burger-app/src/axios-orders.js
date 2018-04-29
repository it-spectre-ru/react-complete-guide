import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-stts.firebaseio.com/'
});

export default instance;