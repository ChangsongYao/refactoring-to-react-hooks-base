import React from 'react'
import PropTypes from 'prop-types'
import useRequest from './useRequest'
import Loading from './Loading'

const DataFetching = ({ endPoint }) => {
    const { data, loading, error } = useRequest(endPoint);

    return (
        <>
            {loading ? <Loading /> : null}
            {!error ? <h5>Oop! Something went wrong!</h5> : null}

            <ul>
                {
                    data.map(element => (
                        <li key={element.timestamp}>{element.timestamp}-{element.amount}</li>
                    ))
                }
            </ul>
        </>
    )
}

DataFetching.propTypes = {
    endPoint: PropTypes.string.isRequired
}

export default DataFetching
