import React from 'react'

const Carrinho = () => {
    const [carrinho, setCarrinho] = React.useState(0);
    const [notificacao, setNotificacao] = React.useState(null);
    const timeoutRef = React.useRef();

    function handleClick(){
        setCarrinho(carrinho + 1)
        setNotificacao('item adicionado ao carrinho');

        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setNotificacao(null);
            console.log('teste');
        }, 2000)
    }

    return (
        <div>
            <p> {notificacao} {carrinho} </p>
            <button onClick={handleClick}> Adicionar no carrinho  </button>
        </div>
    )
}

export default Carrinho
