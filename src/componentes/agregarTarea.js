import { useState } from "react";

export default function TareaInput({ agregar }) {
    const [titulo, setTitulo] = useState("");

    const guardarTarea = (e) => {
        e.preventDefault();
        agregar(titulo); 
        setTitulo("");
    }
    return (
        <form onSubmit={guardarTarea} className="formulario">
            <input className="txtAgregar" type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Escribir una Tarea">
            </input>
            <button type="submit" className="btnAgregar" > + </button>
        </form>
    );
}



