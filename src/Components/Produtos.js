import React from 'react'
import Produto from './Produto'

const Produtos = () => {
    document.title = 'Produtos';

    const produtos = [
        {nome: 'Notebook', propriedades: ['16gb ram', '512gb']  },
        {nome: 'Smartphone', propriedades: ['2gb ram', '128gb']  },
        {nome: 'iPhone', propriedades: ['2gb ram', '128gb']  }
    ]
    
         
    return (
        <div>
            <h1> Produtos </h1>
            <p> sou um componente a parte que traz produtos </p>
            <ul>
                {produtos.map((produto) => <Produto key={produto.nome} {...produto}/>)}
            </ul>
        </div>
    )
}

export default Produtos
