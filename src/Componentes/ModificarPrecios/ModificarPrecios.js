import './ModificarPrecios.scss'
import React, { useState, useEffect } from 'react'

import { store } from '../Store/Store'
import { ModificadorDePrecios } from '../Actions/Actions'
import * as actionsCreators from '../Actions/Actions'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const ModificarPrecios = ( {ModificadorDePrecios} ) => {  //siempre con llavess!!
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
            <h2>ModificarPrecios</h2>
            <input id='ide1' onChange={event => setModificar({ ...modificar, "id": event.target.value })} placeholder="id"></input>
            <input id='ide2' onChange={event => setModificar({ ...modificar, "priceDayModificar": event.target.value })} placeholder="PriceDay"></input>
            <input id='ide3' onChange={event => setModificar({ ...modificar, "priceNightModificar": event.target.value })} placeholder="PriceNight"></input>
            <button onClick={EnviarCambios}>Modificar</button>
        </div>
    )
}

// const mapStateToProps = (state) => ({
//   movi:state.movies
// })

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actionsCreators, dispatch)
// }

export default connect(null, { ModificadorDePrecios })(ModificarPrecios)