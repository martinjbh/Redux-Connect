import './ShowMovies.scss'
import { connect } from 'react-redux';
import { useState } from 'react'
const ShowMovies = (state) => {
    const [ver, setVer] = useState(true)
    const cerrar = () => {
        setVer(false)
    }
    return (
        <div className='ShowMovies-Container-Movies'>
            <div className='ShowMovies-Container-Movies-map'>
                {state.movies.map((v, index) => {
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
export default connect(mapStateToProps)(ShowMovies);