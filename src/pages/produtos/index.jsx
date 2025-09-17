const produtos = () => {

// Objeto da lista de pizzas 
const pizzas = [
    'Pizza Muçarela',
    'Pizza Calabresa',
    'Pizza Portuguesa', 'Pizza Baiana', 'Pizza Frita'
    ]

    // Interação da lista de pizzas - pizza a pizza (um a um)
    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)
    return(
        <div>
            <h3>Listagem de Produtos</h3>
            <ul>
                {listaPizzas}
                <li>Pizza de Calabresa</li>
                <li>Pizza de Muçarela</li>
                <li>Pizza de Muçarela</li>
                <li>Pizza Dois Queijos</li>
            </ul>
        </div>
    )
}

export default Produtos
