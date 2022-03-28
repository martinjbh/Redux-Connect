import './ModificarPrecios.scss'
import React, { useState, useEffect } from 'react'

import { store } from '../Store/Store'
import { ModificadorDePrecios } from '../Actions/Actions'
import * as actionsCreators from '../Actions/Actions'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const ModificarPrecios = ({ ModificadorDePrecios }) => {  //siempre con llavess!!
    const [modificar, setModificar] = useState({
        "id": "",
        "priceDayModificar": 0,
        "priceNightModificar": 0
    })
    const EnviarCambios = () => {
        ModificadorDePrecios(modificar)

        document.getElementById("ide1").value = ""
        document.getElementById("ide2").value = ""
        document.getElementById("ide3").value = ""
    }
    return (
        <div className='ModificarPrecios-container-Principal'>
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>ModificarPrecios</h2>
                <input type="Number" id='ide1' onChange={event => setModificar({ ...modificar, "id": event.target.value })} placeholder="id"></input>
                <input type="Number" id='ide2' onChange={event => setModificar({ ...modificar, "priceDayModificar": event.target.value })} placeholder="PriceDay"></input>
                <input type="Number" id='ide3' onChange={event => setModificar({ ...modificar, "priceNightModificar": event.target.value })} placeholder="PriceNight"></input>
                <button type="submit" onClick={EnviarCambios}>Modificar</button>
            </form>

        </div>
    )
}
// const mapStateToProps = (state) => ({
//   movi:state.movies
// })
const mapDispatchToProps = {
    ModificadorDePrecios: ModificadorDePrecios

}
export default connect(null, mapDispatchToProps)(ModificarPrecios)