import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, register } from '../features/auth/authSlice'
import Spinner from "../components/Spinner";

/* 
  // Register component is a functional component that allows the user to register
     a new account in the app and store the values
  // it uses the useState and useEffect hooks to store the values of the form
  // it is used on the input tab using value={name}
*/
const Register = () => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  // destructuring the values from the formData
  const { name, email, password, password2 } = formData;

  // using the useNavigate hook to navigate to the login page
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // destructuring the auth global state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  /* 
    // onCHange function allows us to write in the input fields and show the value
       in the console react components
    // it is used on the input tag using: onChange={onChange}
  */
  const onChange = (e) => {
    setFormdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  /* 
    // onSubmit function prevents the page from refreshing when the form is submitted
       preventing the leak of data in the url 
    // it is used on the form tag using: onSubmit={onSubmit}
  */
  const onSubmit = (e) => {
    e.preventDefault();
    // if the password and the confirm password are not the same, show an error message
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        email,
        name,
        password,
      };
      // dispatch the register action and pass the userData
      dispatch(register(userData));
    }
  };

  // useEffect hook to show the error message if the user is not created 
  // Show a success message if the user is created successfully and navigate to the login page
  useEffect(() => {
    if(isError){
      toast.error(message)
    }
    if(isSuccess){
      toast.success("User created successfully")
      navigate('/login')
    }
    dispatch(reset()) // reset the state
  }, [user, isSuccess, isError, message, navigate, dispatch]); // pass the user, isSuccess, isError, message, navigate and dispatch as dependencies

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      <section className="heading">
        <h3>
          <FaUser></FaUser> Registrar Usuario
        </h3>
        <p>Por favor crea un usuario</p>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Por favor ingresa tu nombre"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Por favor ingresa tu correo"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Por favor ingresa tu password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Confirma tu password</label>
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Por favor confirma tu password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Crear
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
