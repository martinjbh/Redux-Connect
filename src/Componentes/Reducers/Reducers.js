
const initialState = {
    "movies": [
        // { "name": "Volver al Futuro", "priceDay": 200, "priceNight": 300 },
        // { "name": "Stars Wars", "priceDay": 200, "priceNight": 300 },
        // { "name": "Carrozas de Fuego", "priceDay": 200, "priceNight": 300 },
        // { "name": "Titanic", "priceDay": 200, "priceNight": 300 },
        // { "name": "Tonto y re Tonto", "priceDay": 200, "priceNight": 300 },

    ],
    data:[]
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "AGREGAR_PELICULA": {
            return ({
                ...state, movies: [...state.movies, action.movieNew]
            })
        }
        case "MODIFICAR_PRECIOS": {
            return ({
                ...state, movies: state.movies.map((e, i) => {
                    if (i + 1 == action.id.id) {
                        e.priceDay = parseInt(action.id.priceDayModificar)
                        e.priceNight = parseInt(action.id.priceNightModificar)
                    }
                    return e
                })
            })
        }
        case "BORRAR_PELICULA": {
            return ({
                ...state, movies: state.movies.filter((e, i) => i + 1 != action.id),
            })
        }
        case "GET_MOVIES": {
            return ({
                ...state, movies: action.data
            })
        }
        default:
            return state
    }
}

// todo: state.todoV
// [action.id.id, action.id.priceDayModificar, action.id.priceNightModificar]
//  ...state, movies: state.movies.filter((e,i)=> i+1 != action.id.id)