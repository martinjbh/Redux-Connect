import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionsCreators from '../Actions/Actions'

const Async = () => {
    const [dataNueva, setDataNueva] = useState()
    useEffect(() => {
        fetch('http://192.168.0.12:3001/api')
            .then(response => response.json())
            .then(data => setDataNueva(data.movies[0].name));
    });
    return (
        <div>
         {/* {dataNueva} */}
        </div>
    )
}

export default connect(null,actionsCreators)(Async)