import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TareaForm from "../components/TareaForm";



const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  // useEffect hook to check if the user is logged in
  useEffect(() => {
    if (!user) {
      navigate("/login"); // if the user is not logged in, redirect to the login page
    }
  }, [user, navigate]);

  return (
    <>
      <section className="heading">
        <h3>Bienvenido { user?.name }</h3>
        <p>Dasboard tareas</p>
      </section>
      <section>
        <TareaForm />
      </section>
    </>
    
  )
};

export default Dashboard;
