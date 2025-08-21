import {useEffect, useState} from "react"; 

export default function CargaStorage(key, value){
    const [valor, setValor] = useState (() => {
        const storage = localStorage.getItem(key);
        return storage ? JSON.parse(storage) : value; 
    });

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(valor));
    }, [key, valor]);
    return [valor, setValor]; 
}
