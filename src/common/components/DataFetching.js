import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const DataFetching = ({ endPoint }) => {
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
    return (
        <ul>
            {
                data.map(element => (
                    <li key={element.timestamp}>{element.timestamp}-{element.amount}</li>
                ))
            }
        </ul>
    )
}

DataFetching.propTypes = {
    endPoint: PropTypes.string.isRequired
}

export default DataFetching
