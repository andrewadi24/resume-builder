import { useState, useContext, createContext } from "react";

const detailsContext = createContext(null);

export function DetailsProvider({children}) {
    const [details, setDetails] = useState("details");
    return (<detailsContext.Provider value = {
        {
            details : details,
            func : (x) =>setDetails(x),
        }
    
    
    }>
        {children}
    </detailsContext.Provider>)
}
export function useDetails(){
    return useContext(detailsContext);
}