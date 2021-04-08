import axios from "axios";

const clientApiService = axios.create({
  baseURL: "https://my-json-server.typicode.com/joelkarh/fakeJs",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});
export default {
  getEvents() {
    return clientApiService.get('/events');
  },
  getEvent(id) {
    return clientApiService.get('/events/' + id);
  },
};
