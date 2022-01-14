import {createContext, useReducer} from 'react'

export const AppContext = createContext();

function reducer(appstate, action) {
    // create a copy of state
    let stateCopy = { ...appstate };

    // set the name on state copy to action
    stateCopy.action = action;

    if (action.type === "VIEW_COMPETITIONS"){
        stateCopy.viewCompetitions = action.payload;
    }
    
    if (action.type === "VIEW_STANDINGS"){
        stateCopy.viewStandings = action.payload;
    }

    if( action.type === "VIEW_MATCHES"){
        stateCopy.viewMatches = action.payload;
    }

    return stateCopy;
}

const initialState = {
    competitions: [],
	matches: [],
    standings: [],
};


export default function StateProvider({ children }) {
    const [appstate, dispatch] = useReducer(reducer, initialState);

    const contextObject = {
        state: appstate,
        dispatch: dispatch,
    };

    return (
        <AppContext.Provider value={contextObject}>{children}</AppContext.Provider>
    );
}
