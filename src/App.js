import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import TareaInput from "./componentes/agregarTarea";
import Tareas from './componentes/listaTarea';
import CargaStorage from './hooks/localStorage';
import Avance from './componentes/progreso';

function App() {
  const [tareas, setTareas] = CargaStorage("tareas", []);
  const [codigo, setCodigo] = useState("001");

  const interruptor = (id) => {
    setTareas(tareas.map((item) =>
      item.id === id ? { ...item, completada: !item.completada } : item)
    );
  };

  const agregarTarea = (titulo) => {
    generarCodigo();
    setTareas([...tareas, { id: codigo, titulo: titulo, completada: false }]);
  }

  const generarCodigo = () => {
    const nuevoCodigo = Math.floor(1000 + Math.random() * 9000);
    setCodigo(nuevoCodigo);
  };

  const editarTarea = (id, titulo) => {
    setTareas(
      tareas.map((item) =>
        item.id === id ? { ...item, titulo: titulo } : item
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(
      tareas.filter((item) => item.id !== id)
    );
  };

  const tareasCompletadas = tareas.filter((item) => item.completada).length;

  return (
    <div className="App">
      <div className="contenedor">
          <h1>
            Lista de Tareas
          </h1>
          <Avance total={tareas.length} completadas={tareasCompletadas} />
        <TareaInput agregar={agregarTarea} />
        <ul className="lista">
          {tareas.map((item) => (
            <Tareas
              key={item.id}
              tarea={item}
              activar={interruptor}
              editar={editarTarea}
              eliminar={eliminarTarea}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
