import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const initialState = {
    competitions: []
};

const Appstate = ({ children }) => {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        fetch('http://api.football-data.org/v2/competitions/', {
            headers: { 'X-Auth-Token': '05c269e55b8645d7a548b1f608b5fa4c' },
            method: 'GET',
		})
            .then(res => res.json())
            .then(result => {
                setState(prevValue => {
                    return {
                        ...prevValue,
                        competitions: result.competitions,
                    };
                });
            })
            .catch((error) => {
                throw new Error(error);
            });
    }, [])
    
    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
}
 
export default Appstate;