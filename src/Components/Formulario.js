import React from 'react'

const Formulario = () => {
    const[nome, setNome] = React.useState('');
    const[email, setEmail] = React.useState('');
    const [mensagem, setMensagem] = React.useState('');
    const [select, setSelect] = React.useState('');
    const [radio, setradio] = React.useState('');

    
    function handleradio(event){
        setradio(event.target.value);
    }

    return (
        <div>
            <h2> Formularios reativos </h2>
            <p> forms reativos serao sempre assim </p>
            <form>
                <label htmlFor="nome"> 1 - Nome </label>
                <input 
                    id="nome"
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)} />
                <br />
                <label htmlFor="email"> 2 - Email </label>
                <input 
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} />
                <br />
                <textarea 
                    placeholder="3 - Digite algo"
                    id="mensagem" 
                    value={mensagem}
                    onChange={(event) => setMensagem(event.target.value)}
                />
                <br />
                <label for="produtos">4 - Escolha um produtpo </label>
                <select
                   value={select}
                   onChange={(event) => setSelect(event.target.value)}
                >
                    <option value=""> Selecione</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Notebook">Notebook</option>
                    <option value="Tv">Tv</option>
                    <option value="PlayStation">PlayStation</option>
                </select>
                <br />
                <label>
                    <input 
                    type="radio"
                    name="produto"
                    value='notebook'
                    checked = {radio === 'notebook'}
                    onChange={handleradio}
                    />
                    
                    Smartphone
                </label>

            </form>
            <hr />
            <p> 1 - Nome: {nome} </p>
            <p> 2 -Email: {email} </p>
            <p> 3 - Mensagem: {mensagem} </p>
            <p> 4 - Selecionado: {select} </p>
            <p> 5 - dois jeitos funcionam com 'grupos name' ou 'checked' {radio}: <small> no caso de radio e checkbox oq importa é o checked e não o value q é estatico </small> </p>
            <b> a ideia é utlizar cada campo input como um component para trabalhar de forma facil e simples, fazendo q inputs texts seja um unico componente</b>
        </div>
    )
}

export default Formulario
