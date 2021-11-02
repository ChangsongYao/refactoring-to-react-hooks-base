import { useState, useEffect } from 'react'
function useFetch(endPoint) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(endPoint)
            .then(response => {
                // console.log(response)
                return response.json();

            })
            .then(
                json => {
                    // console.log(json)
                    setData(json);

                }
            )
    }, [endPoint])

    return data
}

export default useFetch
