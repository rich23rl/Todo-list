import { useState } from "react";

export default function TareaInput({ agregar }) {
    const [titulo, setTitulo] = useState("");

    const guardarTarea = (e) => {
        e.preventDefault();
        agregar(titulo); 
        setTitulo("");
    }
    return (
        <form onSubmit={guardarTarea}>
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Escribir una Tarea">
            </input>
            <buttom type="submit">
                +
            </buttom>
        </form>
    );
}



