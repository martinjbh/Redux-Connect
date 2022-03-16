import { createStore , applyMiddleware} from "redux";
import { reducer } from "../Reducers/Reducers";
import  ThunkMiddleware  from "redux-thunk";   //asyncronico!

// export const store = createStore(reducer)

export const store =createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // esto es para q ande la herramienta devtool en browser
    // applyMiddleware(ThunkMiddleware)  //nos permite despacahr acciones asyncronas
    )

    