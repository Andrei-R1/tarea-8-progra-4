export function Header() {
  return (
    <header>
      <div className="bg-black d-flex justify-content-between align-items-center">
        <a href='/' className="btn text-white fs-3">Inicio</a>
        <a href='facultad' className="btn text-white fs-3">Facultades</a>
        <a href='materia' className="btn text-white fs-3">Materias</a>
        <a href='profesor'className="btn text-white fs-3">Profesores</a>
        <a href='estudiante' className="btn text-white fs-3">Estudiantes</a>
      </div>
    </header>
  )
}