import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Components/Header";

export function Profesor() {
  const [data, setData] = useState([]);
  let { idProfesor } = useParams();

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axios({
          method: "get",
          url: `https://tarea7-backend.herokuapp.com/profesor/${idProfesor}`,
        });
        setData(data);
        console.log(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [idProfesor]);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="bg-dark text-white">
        <h1>Informacion del Profesor</h1>
        <div className="text-center p-5">
          <p>Nombre: {data.nombre}</p>
          <p>Apellido: {data.apellido}</p>
          <p>Id de Facultad: {data.facultad_id}</p>
        </div>
      </div>
    </div>
  );
}
export function Profesores() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axios({
          method: "get",
          url: `https://tarea7-backend.herokuapp.com/profesor`,
        });
        setData(data);
        console.log(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="bg-dark text-white">
        <h1>Lista de Profesores</h1>
        <div className="row">
          {data.map((profesor) => (
            <div className="col-md-4 text-center p-5" key={profesor.id}>
              <p>Nombre: {profesor.nombre}</p>
              <p>Apellido: {profesor.apellido}</p>
              <p>Id de Facultad: {profesor.facultad_id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
