import axios from "axios";

export default class ApiService {
  #token;

  constructor() {
    this.#token = localStorage.getItem("token");
  }

  getToken() {
    return this.#token;
  }

  setToken(token) {
    this.#token = token;

    return this;
  }

  getConfig() {
    const config = { headers: {} };

    if (this.#token) {
      config.headers.Authorization = `bearer ${this.#token}`;
    }

    return config;
  }

  get(url) {
    return axios.get(url, this.getConfig());
  }

  async post(url, content) {
    const { data } = await axios.post(url, content, this.getConfig());
    return data;
  }

  patch(url, content) {
    return axios.patch(url, content, this.getConfig());
  }

  put(url, content) {
    return axios.put(url, content, this.getConfig());
  }

  delete(url) {
    return axios.delete(url, this.getConfig());
  }
}
