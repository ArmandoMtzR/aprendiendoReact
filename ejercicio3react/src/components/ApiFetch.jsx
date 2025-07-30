import React, { useEffect, useState } from "react";

export default function ApiFetch() {
    const [catFact, setCatFact] = useState("");

    const fetchCatFact = () => {
        fetch("https://catfact.ninja/fact")
            .then((resp) => resp.json())
            .then((data) => { console.log(data); setCatFact(data.fact); })
            .catch((error) => console.log("Error al cargar"));
    };

    useEffect(() => {
        fetchCatFact();
    }, []);

    return (
        <div>
            <button onClick={fetchCatFact}>Give me a random fact</button>
            <p>{catFact}</p>
        </div>
    );
}
