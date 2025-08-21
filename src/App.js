import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import TareaInput from "./componentes/agregarTarea";
import Tareas from './componentes/listaTarea';

function App() {
  const [tareas, setTareas] = useState([]);
  const [codigo, setCodigo] = useState("001"); 
  const interruptor = (id) => {
    setTareas(tareas.map((item) => 
      item.id === id ?{...item,completada: !item.completada}: item)
    );
  };
  
  const agregarTarea = (titulo) => {
    generarCodigo();
    setTareas([...tareas, {id:codigo, titulo:titulo, completada:false}]);
  }
  
  const generarCodigo = () => {
    const nuevoCodigo = Math.floor(1000 + Math.random() * 9000);
    setCodigo(nuevoCodigo);
  };
  return (
    <div className="App">
      <h1>
        Lista de Tareas
      </h1>
      <TareaInput agregar={agregarTarea}/>
      <ul>
        {tareas.map((item) => (
          <Tareas 
           key = {item.id}
           tarea={item}
            activar={interruptor}
          />
        ))}
      </ul>
      
    </div>
  );
}

export default App;
