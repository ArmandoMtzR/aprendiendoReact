import Saludo from './Saludo'

function App() {
  const [contador, setContador ] = useState(0);

  return (
    <div>
      <h1>Props y Estados</h1>
      <p>El valor actual es: {contador} </p>
      <Saludo nombre = "PROTECSA"></Saludo>
    </div>
  );
}

export default App;
