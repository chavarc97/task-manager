import axios from "axios";

const API_URL = "https://zany-rose-meerkat-tie.cyclic.app/api/tareas/";

// create backend petition to create a new task
const crearTarea = async (tareaData, token) => {
  // create the headers to send the token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.post(API_URL, tareaData, config)

  return response.data
};

//create object to export the function to create a new task
const tareaService = {
  crearTarea,
};

export default tareaService;
