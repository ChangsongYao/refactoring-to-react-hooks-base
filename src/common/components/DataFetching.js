import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../hooks/useFetch'

const DataFetching = ({ endPoint }) => {
    const data = useFetch(endPoint)
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
