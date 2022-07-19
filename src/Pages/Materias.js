import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Components/Header";

export function Materia() {
  const [data, setData] = useState([]);
  let { idMateria } = useParams();

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axios({
          method: "get",
          url: `https://cors-anywhere.herokuapp.com/https://tarea7-backend.herokuapp.com/materia/${idMateria}`,
        });
        setData(data);
        console.log(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [idMateria]);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="bg-dark text-white">
        <h1>Informacion del estudiante</h1>
        <div className="text-center p-5">
          <p>Nombre: {data.nombre}</p>
          <p>Codigo: {data.codigo}</p>
          <p>Creditos: {data.creditos}</p>
          <p>Carrera: {data.carrera}</p>
          <p>Id del Profesor: {data.profesor_id}</p>
          <p>Id de la Facultad: {data.facultad_id}</p>
        </div>
      </div>
    </div>
  );
}
export function Materias() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axios({
          method: "get",
          url: `https://cors-anywhere.herokuapp.com/https://tarea7-backend.herokuapp.com/materia`,
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
        <h1>Lista de Materias</h1>
        <div className="row">
          {data.map((materia) => (
            <div className="col-md-4 text-center p-5" key={materia.id}>
              <p>Nombre: {materia.nombre}</p>
              <p>Codigo: {materia.codigo}</p>
              <p>Creditos: {materia.creditos}</p>
              <p>Carrera: {materia.carrera}</p>
              <p>Id del Profesor: {materia.profesor_id}</p>
              <p>Id de la Facultad: {materia.facultad_id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
