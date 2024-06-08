import DataContext from "./DataContext";

const { useContext, useReducer, createContext, useState, useEffect } = require("react");


const ProfileContext = createContext(null);


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


export function ProfileProvider({children}){
    const [profileData, setProfileData] = useState({});
    // const {data, dataActions} = useContext(DataContext);

    
    useEffect(() => {
        console.log(profileData);
    }, [profileData])

    // useEffect(() => {
    //     const fetchData = async () => {
    //     try {
    //         await  dataActions(
    //         {type: "consult",
    //         payload: {
    //         table : "weight_record"
    //         }});
    //     } catch (error) {
    //         console.error("Error al enviar los datos:", error);            
    //     }};
    //     fetchData();
    // }, []);

    return(
        <ProfileContext.Provider value={{profileData, setProfileData}}>{children}</ProfileContext.Provider>
    );

}

export default ProfileContext;