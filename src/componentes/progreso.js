import react from "react";

export default function Avance({ total, completadas }) {
    let mensaje = "Agrega tu primera tarea";
    if (total > 0) {
        if (completadas === 0) mensaje = "A por la primera!";
        else if (completadas < total / 2) mensaje = "sigue asi!";
        else if (completadas < total) mensaje = "casi listo!";
        else mensaje = "Genial terminado!";
    }
    return (
        <div className="progreso">
            <p className="tituloProgreso">Tareas Completadas</p>
            <p className="p2">
                {mensaje}
            </p>
            <div className="circulo">
                <p className="p1">
                    {completadas}/{total}
                </p>
            </div>
        </div>
    )
}