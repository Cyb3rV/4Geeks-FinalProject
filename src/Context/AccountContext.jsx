import React, { useContext, createContext, useEffect, useReducer } from "react";

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ijnhfoehgzuzlkriaoak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlqbmhmb2VoZ3p1emxrcmlhb2FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MTgxNjAsImV4cCI6MjAzMDI5NDE2MH0.cTpLh8D93_WcIl3uo1qwoFbdi9T96lF_fe7BFJnQV6w';
// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);


const AccountContext = createContext(null);



async function AccountReducer(state, action){
    switch(action.type){
      case "add":                       
        try{          
            await supabase.from("account_list").insert(action.payload.data)
            return state;

        } catch(error){
            console.error("Error inserting data:", error.message);
            return state;
        }  
      
      case "remove":                       
        try{          
            let query = supabase.from('account_list').delete();

            for (const key in action.payload.data) {
                const value = action.payload.data[key];            
                query = query.eq(key, value);
            } 

        } catch(error){
            console.error("Error deleting data:", error.message);
            return state;
        }  
        case "getData":
          //LoadData(action.payload);

          console.log("Consultando datos");

          let query = supabase.from("account_list").select('*').eq("email", action.payload.email).eq("password", action.payload.password);
       
          try{
              const { data } = await query;
              console.log("aun consultando", data)
              return data;
          } 
          
          catch(error){
              console.error("Error getting excercises:", error.message);
              return state;
          }

        case "setData":
            console.log("enviando datos");
            return action.payload;
                    
        default:
            return state;
    }
}


export function AccountProvider({ children }) {

  const [accountData, accountDataActions] = useReducer(AccountReducer, null);


const LoadDataAccount = async () => {

    accountDataActions({type: "getData", payload: {
        actions: accountDataActions,
        //account_id: profileData.account_id
    }})

    setTimeout(function() {
        console.log("desde time out", accountData);}
        
        
        , 4000)

}

  useEffect(() => {
    console.log("hook", accountData);
  }, [accountData]);


  return (
    <AccountContext.Provider value={{ accountData, accountDataActions, LoadDataAccount }}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountContext;
