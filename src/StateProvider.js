import React, {createContext, useContext, useReducer} from 'react'

//creates the data Layer
export const StateContext = createContext();



export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, inintailState)}>
    {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);