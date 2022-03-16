import './Administrador.scss'
import React, { useState, useEffect } from 'react'

import { AgregarMovie } from '../Actions/Actions';

import * as actionsCreators from '../Actions/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const Administrador = ({ movies, AgregarMovie }) => {
    const [movie, setMovie] = useState({
        "name": "",
        "priceDay": 0,
        "priceNight": 0,
    })
    const CambiarObj = () => {
        if (movie.name.length > 0) {
            AgregarMovie(movie)
        } else {
            alert("vacio")
        }
        document.getElementById("ide").value = ""
        document.getElementById("ide22").value = ""
        document.getElementById("ide33").value = ""
    }
    return (
      
        <div className='Administrador-container-Principal'>
            <h2>AgregarMovie</h2>
            <input id='ide' placeholder='Nueva Pelicula' onChange={event => setMovie({ ...movie, name: event.target.value })}></input>
            <input id='ide22' type="Number" placeholder='PriceDay' onChange={event => setMovie({ ...movie, "priceDay": event.target.value })}></input>
            <input id='ide33' type="Number" placeholder='PriceNight' onChange={event => setMovie({ ...movie, "priceNight": event.target.value })}></input>
            <button onClick={CambiarObj}>Agregar</button>
        </div>
    )
}


const mapStateToProps = (state) => ({
    movies: state,
})

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actionsCreators, dispatch)
// }

export default connect(mapStateToProps, { AgregarMovie })(Administrador)