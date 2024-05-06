const { useReducer, createContext, useEffect } = require("react");
import { createClient } from '@supabase/supabase-js'


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
        case "consult":
            try{
                const { data } = await supabase.from(action.payload.table).select("*");
                console.log(data);
                return data;
            } catch(error){
                console.error("Error getting data:", error.message);
                return state;
            }



            
        case "consultWithCondition":

            let query = supabase.from(action.payload.table).select('*');

            for (const key in action.payload.data) {
                const value = action.payload.data[key];            
                query = query.eq(key, value);
            }   
        
            try{
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


export function DataProvider({children}){
    const [data, dataActions] = useReducer(DataReducer, null);

    return(
        <DataContext.Provider value={{data, dataActions}}>{children}</DataContext.Provider>
    );

}

export default DataContext;