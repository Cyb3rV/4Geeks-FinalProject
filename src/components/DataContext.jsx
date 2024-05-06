// const { useReducer, createContext, useEffect } = require("react");



// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://ijnhfoehgzuzlkriaoak.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlqbmhmb2VoZ3p1emxrcmlhb2FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MTgxNjAsImV4cCI6MjAzMDI5NDE2MH0.cTpLh8D93_WcIl3uo1qwoFbdi9T96lF_fe7BFJnQV6w';
// // Create a single supabase client for interacting with your database
// const supabase = createClient(supabaseUrl, supabaseKey);



// const DataContext = createContext(null);

// async function DataReducer(state, action){
//     switch(action.type){
//         case "add":                       
//             try{          
//                 await supabase.from(action.payload.table).insert(action.payload.data)
//                 return { ...state, error: false };

//             } catch(error){
//                 console.error("Error inserting data:", error.message);
//                 return { ...state, error: true };
//             }


//         default:
//             return state;
//     }
// }

// const initialState = {
//     user: "",
//     password: "",
//     email: "",
//     error: false
// }


// export function DataProvider({children}){
//     const [data, dataActions] = useReducer(DataReducer, initialState);

//     useEffect(() => {
//         console.log(data.error);
//       },[]);
    
//     //   useEffect(() => {
//     //     console.log(data.error);
//     //   },[data]);

//     return(
//         <DataContext.Provider value={{data, dataActions}}>{children}</DataContext.Provider>
//     );

// }

// export default DataContext;





const { useReducer, createContext, useEffect } = require("react");



import { createClient } from '@supabase/supabase-js'
import { act } from 'react';

const supabaseUrl = 'https://ijnhfoehgzuzlkriaoak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlqbmhmb2VoZ3p1emxrcmlhb2FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MTgxNjAsImV4cCI6MjAzMDI5NDE2MH0.cTpLh8D93_WcIl3uo1qwoFbdi9T96lF_fe7BFJnQV6w';
// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);



const DataContext = createContext(null);

async function DataReducer(state, action){
    switch(action.type){
        case "add":                       
            try{          
                await supabase.from(action.payload.table).insert(action.payload.data)
                return state;

            } catch(error){
                console.error("Error inserting data:", error.message);
                return state;
            }
        // case "get_excercises":
        //     try{
        //         const { data } = await supabase.from("exercises_list").select("*");
        //         console.log(data)

        //         // return { ...state, excercises: data, error: false };
        //     } catch(error){
        //         console.error("Error getting excercises:", error.message);
        //         return { ...state, error: true };
        //     }

        case "consult":
            try{
                const { data } = await supabase.from(action.payload.table).select("*");
                console.log(data)            
                
                return data;

                // return { ...state, excercises: data, error: false };
            } catch(error){
                console.error("Error getting excercises:", error.message);
                return state;
            }



            
        case "consultWithCondition":

            let query = supabase.from(action.payload.table).select('*');

            for (const key in action.payload.data) {
                const value = action.payload.data[key];            
                query = query.eq(key, value);
                
                //console.log(`Nombre de la propiedad: ${key}, Valor: ${value}`);
            }   
        
        try{
                    // const { data } = await supabase.from(action.payload.table).select("*").eq("email", "pepe@gmail.com");
                    const { data } = await query;
                    console.log(data)
    
                    return data;
                } catch(error){
                    console.error("Error getting excercises:", error.message);
                    return state;
                }
    

        default:
            return state;
    }
}

// const initialState = {
//     user: "",
//     password: "",
//     email: "",
//     error: false
// }


export function DataProvider({children}){
    const [data, dataActions] = useReducer(DataReducer, null);

    // useEffect(() => {
    //     console.log(`entro desde context ${data}`);
    //   },[data]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const resolvedData = await data;
    //        console.log(resolvedData);
    //       console.log("Datos desde el contexto:", JSON.stringify(resolvedData));
    //     };
    //     fetchData();
    //   }, [data]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const resolvedData = await data;
    //       if (resolvedData && resolvedData.length > 0) {
    //         console.log(resolvedData);
    //         resolvedData.forEach(item => {
    //           const id = item.id; // Obtiene el valor de la clave "id" de cada objeto
    //           console.log("ID del usuario:", id);
    //         });
    //       }
    //     };
    //     fetchData();
    //   }, [data]);
      
      
    
    //   useEffect(() => {
    //     console.log(data.error);
    //   },[data]);

    return(
        <DataContext.Provider value={{data, dataActions}}>{children}</DataContext.Provider>
    );

}

export default DataContext;