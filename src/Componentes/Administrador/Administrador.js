import './Administrador.scss'
import React, { useState, useEffect } from 'react'
import * as actionsCreators from '../Actions/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

const Administrador = ({ movies, AgregarMovie }) => {
    const [movie, setMovie] = useState({
        "name": "",
        "priceDay": 0,
        "priceNight": 0,
    })
    const stado = useSelector((stado) => stado) //aca puedo ver el estado de redux

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
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>AgregarMovie</h2>
                <input id='ide' placeholder='Nueva Pelicula' onChange={event => setMovie({ ...movie, name: event.target.value })}></input>
                <input id='ide22' type="Number" placeholder='PriceDay' onChange={event => setMovie({ ...movie, "priceDay": event.target.value })}></input>
                <input id='ide33' type="Number" placeholder='PriceNight' onChange={event => setMovie({ ...movie, "priceNight": event.target.value })}></input>
                <button onClick={CambiarObj}>Agregar</button>
            </form>

        </div>
    )
}
const mapStateToProps = (state) => ({  //aca mando como props al estado de redux con el nombre movie
    movies: state,
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionsCreators, dispatch) ///De esta manera traigo
}                                                      ////todas las acctions de el action creator

export default connect(mapStateToProps, mapDispatchToProps)(Administrador)