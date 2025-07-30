import Saludo from "./Saludo.jsx";

function App() {
  const usuarios = [
    {id: 'usr1', nombre: 'Bob'},
    {id: 'usr2', nombre: 'Luis'},
    {id: 'usr3', nombre: 'Jose'}
  ];

  const mostrarLista = true;

  return(
    <div>
      <h1>Renderizado condicional y listas</h1>

      {mostrarLista ? (
        <ul>
          {usuarios.map(usuario => (
            <li key={usuario.id}>
              <Saludo nombre = {usuario.nombre}/>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay usuarios</p>
      )}
    </div>
  )

}

export default App;