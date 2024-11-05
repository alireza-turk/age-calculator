import {createContext, useContext, useReducer} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'changeDay':
            if (isNaN(Number(action.payload)) || action.payload.length > 2) return {...state};
            return {...state, inputDay: action.payload ? Math.floor(action.payload) : action.payload};
        case 'changeMonth':
            if (isNaN(Number(action.payload)) || action.payload.length > 2) return {...state};
            return {...state, inputMonth: action.payload ? Math.floor(action.payload) : action.payload};
        case 'changeYear':
            if (isNaN(Number(action.payload)) || action.payload.length > 4) return {...state};
            return {...state, inputYear: action.payload ? Math.floor(action.payload) : action.payload};
        case 'submitForm':
            let newState = {...state, answerDate: null, errorDay: null, errorMonth: null, errorYear: null};
            const dateNow = new Date();
            const yearNow = dateNow.getFullYear();
            const monthNow = dateNow.getMonth();
            const dayNow = dateNow.getDate();

            if (state.inputDay === '') newState = {...newState, errorDay: 'the day input is empty'};
            if (state.inputMonth === '') newState = {...newState, errorMonth: 'the month input is empty'};
            if (state.inputYear === '') newState = {...newState, errorYear: 'the year input is empty'};
            if (+state.inputDay > 31) newState = {...newState, errorDay: 'please enter a valid day'};
            if (+state.inputMonth > 12) newState = {...newState, errorMonth: 'please enter a valid month'};
            if (+state.inputYear > yearNow) newState = {...newState, errorYear: 'please enter a valid year'};

            if (newState.errorDay || newState.errorMonth || newState.errorYear) return {...newState, answerDate: null};

            const answerDay = ((dayNow) + (monthNow * 30) + (yearNow * 365)) - ((state.inputDay) + (state.inputMonth * 30) + (state.inputYear * 365));
            return {
                ...newState,
                answerDate: `${Math.floor(answerDay / 365)}/${Math.floor((answerDay / 30) % 12)}/${answerDay % 365 % 30}`
            };
        default:
            throw new Error("Unknown reducer action type");
    }
}

const initialState = {
    inputDay: '',
    inputMonth: '',
    inputYear: '',
    answerDate: null,
    errorDay: null,
    errorMonth: null,
    errorYear: null,
}
const ContextForm = createContext();

function ContextApp({children}) {
    const [{
        inputDay,
        inputMonth,
        inputYear,
        answerDate,
        errorDay,
        errorMonth,
        errorYear
    }, dispath] = useReducer(reducer, initialState);
    return <ContextForm.Provider value={{
        inputDay,
        inputMonth,
        inputYear,
        errorDay,
        errorMonth,
        errorYear,
        answerDate,
        dispath
    }}>
        {children}
    </ContextForm.Provider>;
}

function useContextApp() {
    const context = useContext(ContextForm);
    return context;
}

export {ContextApp, useContextApp};