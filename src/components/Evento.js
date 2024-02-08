import Button from './evento/Button'


function Evento() {
    function meuEvento() {
        console.log(`Ativando meu primeiro evento`)
    }

    function segundoEvento() {
        console.log(`Ativando meu segundo evento`)
    }

    return (
        <div>
           <p>Clique para disparar evento:</p>
           <Button event={meuEvento} text="Primeiro evento" />
           <Button event={segundoEvento} text="segundo evento" />
        </div>
    )
}

export default Evento