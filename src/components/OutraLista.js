function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de copisas boas</h3>
            {
                itens.length > 0 ? (
                    itens.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))) : (
                    <p>Não há intens na lista</p>
                )
            }

        </>
    )
}

export default OutraLista