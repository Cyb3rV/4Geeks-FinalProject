import DataContext from "./DataContext";

const { useContext, useReducer, createContext, useState, useEffect } = require("react");


const ProgressContext = createContext(null);


const initialState = {
    email:"",
    account_id: "",
    name: "Juan Perez",
    nick: "El Pepe",
    userName: "pepe2k",
    weight : 170,
    height : 6,
    age : 20,
    timeWorkingOut : 2
}


export function ProgressProvider({children}){
    const [data, dataActions] = useState(initialState);
    const [dbData, dbdataActions] = useContext(DataContext);

    

    useEffect(() => {
        const fetchData = async () => {
        try {
            await  dbdataActions(
            {type: "consult",
            payload: {
            table : "weight_record"
            }});
        } catch (error) {
            console.error("Error al enviar los datos:", error);            
        }};
        fetchData();
    }, []);

    return(
        <ProgressContext.Provider value={{data, dataActions}}>{children}</ProgressContext.Provider>
    );

}

export default ProgressContext;