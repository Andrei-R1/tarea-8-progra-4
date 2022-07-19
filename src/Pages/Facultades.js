import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Components/Header";

export function Facultad() {
  const [data, setData] = useState([]);
  let { idFacultad } = useParams();

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axios({
          method: "get",
          url: `https://cors-anywhere.herokuapp.com/https://tarea7-backend.herokuapp.com/facultad/${idFacultad}`,
        });
        setData(data);
        console.log(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [idFacultad]);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="bg-dark text-white">
        <h1>Informacion de la Facultad</h1>
        <div className="text-center p-5">
          <p>Nombre: {data.nombre}</p>
          <p>Abreviacion: {data.abreviacion}</p>
        </div>
      </div>
    </div>
  );
}

export function Facultades() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axios({
          method: "get",
          url: `https://cors-anywhere.herokuapp.com/https://tarea7-backend.herokuapp.com/facultad`,
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
        <h1>Lista de Facultades</h1>
        <div className="row">
          {data.map((facultad) => (
            <div className="col-md-4 text-center p-5" key={facultad.id}>
              <p>Nombre: {facultad.nombre}</p>
              <p>Abreviacion: {facultad.abreviacion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
