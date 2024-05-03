const { useContext, useReducer, createContext } = require("react");


const ProgressContext = createContext(null);

function ProgressReducer(state, action){
    switch(action.type){
        default:
            return state;
    }
}

const initialState = {
    name: "Juan Perez",
    nick: "El Pepe",
    userName: "pepe2k",
    weight : 170,
    height : 6,
    age : 20,
    timeWorkingOut : 2
}


export function ProgressProvider({children}){
    const [data, dataActions] = useReducer(ProgressReducer, initialState);

    return(
        <ProgressContext.Provider value={{data, dataActions}}>{children}</ProgressContext.Provider>
    );

}

export default ProgressContext;