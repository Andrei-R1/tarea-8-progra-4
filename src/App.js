import { Header } from "./Components/Header";

function App () {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="bg-dark text-white text-center">
        <h3 className="p-5">Bienvenido</h3>
        <p className="p-5">Las 4 rutas disponibles ofrecen buscar la informacion de cualquiera de ellas por un id especifico, solo es necesario poner en la url /+id</p>
        <p className="p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestias consectetur laudantium nulla quisquam soluta at vitae illum id deleniti? Molestiae, neque ipsa? Perspiciatis repudiandae molestias adipisci nemo, laborum architecto suscipit? Ullam facilis tenetur excepturi culpa voluptas neque! Et, sunt non. Explicabo provident sed officiis fuga, accusantium maiores quam nulla.</p>
      </div>
    </div>
  );
}

export default App;