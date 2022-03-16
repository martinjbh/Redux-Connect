import './BorrarMovie.scss'
import { connect } from "react-redux"
import * as actionsCreators from '../Actions/Actions'
import { useState } from 'react'
import { Borrando } from "../Actions/Actions"

const BorrarMovie = ({ movies, Borrando }) => {
    const [borrar, setBorrar] = useState()
    const Enviar = () => {
        Borrando(borrar)
        document.getElementById("in").value = ""
    }
    return (
        <div className='BorrarMovie-container' >
            <h2>BorrarMovie</h2>
            <input id="in" type='Number' onChange={event => setBorrar(event.target.value)} placeholder="ID Borrar"></input>
            <button onClick={Enviar}>Borrar</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        movies: state
    }
};
export default connect(mapStateToProps, { Borrando })(BorrarMovie)

