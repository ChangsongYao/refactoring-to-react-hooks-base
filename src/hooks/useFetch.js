import { useState, useEffect, useReducer } from 'react'

const initialState = {
    loading: false,
    error: "",
    data: []
};

function apiReducer(state, action) {
    switch (action.type) {
        case "FETCH_DATASET_START":
            return { ...state, loading: true };
        case "FETCH_DATASET_ERROR":
            return { ...state, loading: false, error: action.payload };
        case "FETCH_DATASET_SUCCESS":
            return { ...state, loading: false, error: "", data: action.payload };
        case "FETCH_DATASET_FINISH":
            return { ...state, loading: false };
        default:
            return state;
    }
}
function useFetch(endpoint) {


    const [state, dispatch] = useReducer(apiReducer, initialState);

    useEffect(() => {
        // Don't call the API if endpoint is null or empty
        if (!endpoint) return;

        dispatch({ type: "FETCH_DATASET_START" });
        fetch(endpoint)
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            }).then(json => {
                // save the data if everything is ok
                dispatch({ type: "FETCH_DATASET_SUCCESS", payload: json });

            }).catch(error => {
                // notify the state that there's an error
                dispatch({ type: "FETCH_DATASET_ERROR", payload: error.message });
            }).finally(() => {
                // notify the state that we've finished loading
                // regardless of any error
                dispatch({ type: "FETCH_DATASET_FINISH" });
            });
    }, [endpoint])

    return state;
}

export default useFetch
