import React, { useContext, useState  } from 'react' 
const Appcontext = React.createContext();
const AppProvider = ({children}) => {
    const [myList , setMyList] = useState([]) ;
    return <Appcontext.Provider value={{myList , setMyList}} >{children}</Appcontext.Provider>
} ;

const useGlobalcontext = () => {
    return useContext(Appcontext) ;
}
export{Appcontext, AppProvider , useGlobalcontext};
