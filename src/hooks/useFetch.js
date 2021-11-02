import { useState, useEffect } from 'react'
function useFetch(endPoint) {
    const [loading, setLoading] = useState("no");
    const [error, setError] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        // notify the state that we've started an API call
        setLoading("yes");
        fetch(endPoint)
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(
                json => {
                    // save the data if everything is ok
                    setData(json);

                }).catch(error => {
                    // notify the state that there's an error
                    setError(error.message);
                }).finally(() => {
                    // notify the state that we've finished loading
                    // regardless of any error
                    setLoading("no");
                });
    }, [endPoint])

    return { loading, error, data };
}

export default useFetch
