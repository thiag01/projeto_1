import React from 'react';
import Carrinho from './Components/Carrinho';
import Comentarios from './Components/Comentarios';
import Formulario from './Components/Formulario';
import Header from './Components/Header';
import Home from './Components/Home';
import Produtos from './Components/Produtos';



function Teste() {
  
  return <p> condição para mostrar esse componente (true && false) </p>
}

function App() {
  const [dados, setDados] = React.useState(false)

  document.title = 'Projeto 1';

  let Pagina;
  
  const { pathname } = window.location;
  if(pathname === '/Produtos'){
      Pagina = Produtos;
  }
  else{
    Pagina = Home;
  }

  return(
    <>
      <Carrinho />
      <hr />
      <Header />
      <Pagina />
      <hr />
      { dados && <Teste /> }
      <button onClick={() => setDados(!dados)}> toggle effect </button>
      <hr />
      <Comentarios />
      <hr />
      <Formulario />
    </>

  ); 
}

export default App;
