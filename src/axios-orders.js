import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-3567e.firebaseio.com/",
});

export default instance;
