import react from "react"; 

export default function Tareas({tarea,activar}){
    return(
        <li>
            <div>
                <input type="checkbox" checked={tarea.completada} onChance={() => activar(tarea.id)}>
                </input>
                <span>
                {tarea.titulo}
                </span>
            </div>
        </li>
    );
}