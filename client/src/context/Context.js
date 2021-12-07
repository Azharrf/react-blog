import { createContext, useReducer } from "react"
import Reducer from "./Reducer";

const INTIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
}

export const Context = createContext(INTIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INTIAL_STATE);

    return(
        <ContextProvider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
            {children}
        </ContextProvider>
    )
}