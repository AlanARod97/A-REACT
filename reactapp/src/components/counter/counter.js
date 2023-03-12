import {useState} from 'react';

const Counter = (props) => {

    const [count, setCount] = useState(props.initial)
    const [message, setMessage] = useState('')

    const increment = () =>{
        setMessage('')
       if(count < props.stock){
        setCount(count +1)
       }
       else{
        setMessage('No hay mas stock!')
       }       
    }

    const decrement =() =>{
        setMessage('')
       if(count > 1 ){
        setCount(count -1)
       }
       else{
        setMessage ("No se puede comprar menos de un producto")
       }

       
        
    }

    const reset= () =>{
        setCount(0)
        setMessage('')
    }
    
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{count}</h2>
            <button className="btn btn-success m-2" onClick={increment}>Añadir</button>
            <button className="btn btn-danger m-2" onClick ={decrement}>Quitar</button>
            <button className="btn btn-dark m-2" onClick ={reset}>Reset</button>
            <h2 style={{color: "red"}}>{message}</h2>
        </div>
    )
}

export default Counter