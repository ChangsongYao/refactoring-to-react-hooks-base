import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../hooks/useFetch'
import Loading from './Loading'

const DataFetching = ({ endPoint }) => {
    const { loading, error, data } = useFetch(endPoint)
    return loading ? (<Loading />) : (
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
