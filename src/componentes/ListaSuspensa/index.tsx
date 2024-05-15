import './ListaSuspensa.css'

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void,
    label: string,
    valor: string,
    obrigatorio: boolean,
    itens: string[]
}

const ListaSuspensa = ({ aoAlterado, label, valor, obrigatorio, itens} : ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento =>aoAlterado(evento.target.value)} required={obrigatorio} value={valor}>
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa