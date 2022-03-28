import './ShowMovies.scss'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreators from '../Actions/Actions'
import React, { useState, useEffect } from 'react'
const ShowMovies = ({ movies, FetchMovie }) => {

    useEffect(() => {
        FetchMovie()     //traigo FectHMovie  es un actionCreator 
    }, [])               // q trae todas las pelis de la api a redix

    return (
        <div className='ShowMovies-Container-Movies'>
            <div className='ShowMovies-Container-Movies-map'>
                {movies.map((v, index) => {
                    return (
                        <div key={index} className='ShowMovies-Componente-Muestra'>
                            <h4>{v.name}</h4>
                            <p>id:{index + 1}</p>
                            <p>priceDay: {v.priceDay}</p>
                            <p>priceNight: {v.priceNight}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionsCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowMovies);