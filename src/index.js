import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Estudiante, Estudiantes } from "./Pages/Estudiantes";
import { Profesor, Profesores } from "./Pages/Profesores";
import { Materia, Materias } from "./Pages/Materias";
import { Facultad, Facultades } from "./Pages/Facultades";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="facultad" element={<Facultades/>} />
      <Route path='facultad/:idFacultad' element={<Facultad/>}></Route>
      <Route path='estudiante' element={<Estudiantes/>}></Route>
      <Route path='estudiante/:idEstudiante' element={<Estudiante/>}></Route>
      <Route path='profesor' element={<Profesores/>}></Route>
      <Route path='profesor/:idProfesor' element={<Profesor/>}></Route>
      <Route path='materia' element={<Materias/>}></Route>
      <Route path='materia/:idMateria' element={<Materia/>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
