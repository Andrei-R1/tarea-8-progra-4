import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function Estudiante() {
  const [data, setData] = useState([]);
  let { idEstudiante } = useParams();

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axios({
          method: "get",
          url: `https://cors-anywhere.herokuapp.com/https://tarea7-backend.herokuapp.com/estudiante/${idEstudiante}`,
        });
        setData(data);
        console.log(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [idEstudiante]);
  return (
    <div className="bg-dark text-white">
      <h1>Informacion del estudiante</h1>
      <div className="text-center p-5">
      <p>Nombre: {data.nombre}</p>
      <p>Apellido: {data.apellido}</p>
      <p>Edad: {data.edad}</p>
      <p>Pais: {data.pais}</p>
      <p>Carrera: {data.carrera}</p>
      <p>Deuda: {data.deuda_ciclo_actual}</p>
      <p>Id de Facultad: {data.facultad_id}</p>
      </div>
    </div>
  );
}

export function Estudiantes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axios({
          method: "get",
          url: `https://cors-anywhere.herokuapp.com/https://tarea7-backend.herokuapp.com/estudiante`,
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
    <div className="bg-dark text-white">
      <h1>Lista de Estudiantes</h1>
      <div className="row">
      {data.map((estudiante) => (
        <div className="col-md-4 text-center p-5" key={estudiante.id}>
          <p>Nombre: {estudiante.nombre}</p>
          <p>Apellido: {estudiante.apellido}</p>
          <p>Edad: {estudiante.edad}</p>
          <p>Pais: {estudiante.pais}</p>
          <p>Carrera: {estudiante.carrera}</p>
          <p>Deuda: {estudiante.deuda_ciclo_actual}</p>
          <p>Id de Facultad: {estudiante.facultad_id}</p>
        </div>
      ))}
      </div>
    </div>
  );
}
