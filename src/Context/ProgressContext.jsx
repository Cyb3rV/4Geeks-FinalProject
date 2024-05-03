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
    timeWorkingOut : 2,
    weightHistory: [
        { time: '2024-01-01', value: 182 },
        { time: '2024-01-15', value: 181 },
        { time: '2024-02-01', value: 180 },
        { time: '2024-02-15', value: 178 },
        { time: '2024-03-01', value: 176 },
        { time: '2024-03-15', value: 179 },
        { time: '2024-04-01', value: 175 },
        { time: '2024-04-15', value: 173 },
        { time: '2024-05-01', value: 170 },
    ]
}


export function ProgressProvider({children}){
    const [data, dataActions] = useReducer(ProgressReducer, initialState);

    return(
        <ProgressContext.Provider value={{data, dataActions}}>{children}</ProgressContext.Provider>
    );

}

export default ProgressContext;