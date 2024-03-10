import axios from "axios";

const API_URL = "https://zany-rose-meerkat-tie.cyclic.app/api/users/";

// create backend petition to register a new user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  return response.data;
};

//Creamos la peticion al backend para logear un usuario
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  // if i have a response, store the user data in the local storage
  if (response.data) {
    // store the user data in the local storage using stringify
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Logout the user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
