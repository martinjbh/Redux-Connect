import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionsCreators from '../Actions/Actions'
import { FetchMovie } from '../Actions/Actions'


const Async = ({ state, FetchMovie }) => {
    // useEffect(() => {
    //     FetchMovie()
    // }, []);
// console.log(state.data)
    return (
        <div>
            {/* {state.movies.map((e, i) => {
                return (
                    <p key={i}>{e.name}</p>
                )
            })} */}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps, { FetchMovie })(Async)



