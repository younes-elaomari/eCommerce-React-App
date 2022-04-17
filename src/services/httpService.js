import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedErrors) {
    toast("An unexpected error uccured");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
};
