
import React from 'react'

const Comentarios = () => {
    const [comentarios, setComentarios] = React.useState([]);
    const [input, setInput] = React.useState('');
    const inputElement = React.useRef();


    function handleclick(){
        setComentarios([...comentarios, input]);

        setInput('');
        inputElement.current.focus();

    }
    
    function limpa(){
       setComentarios([])
    }
    return (
        <div>
            <h2> Comentários </h2> 
            <p> aqui esta puxando os comentarios do useState que é um array </p>
            <ul>
                {comentarios.map((comentario) => <li key={comentario}> {comentario} </li>)}
                <br />
            </ul>
            <input 
              required
              ref={inputElement}
              type="text" 
              value={input} 
              onChange={({target}) => setInput(target.value)}
              />
              <button onClick={handleclick}> Adicionar </button>
              <div>
                  <button onClick={limpa}> limpar lista </button>
                  <button onClick={() => setComentarios([...comentarios].sort())}> ordenar </button>
              </div>
              
        </div>
    )
}

export default Comentarios
