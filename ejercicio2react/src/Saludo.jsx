import { useState } from 'react';

function Saludo({nombre}) {
    const [mostrado, setMostrado] = useState(true);

    return (
        <div>
            <h2> {mostrado ? `Hola, ${nombre}` : `No estoy` }</h2>
            <button onClick={() => setMostrado(!mostrado)}>
                {mostrado ? `Ocultar` : `Mostrar` } Saludo
            </button>
        </div>
    );
}

export default Saludo;