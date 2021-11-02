import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../hooks/useFetch'
import Loading from './Loading'

const DataFetching = ({ endPoint }) => {
    const { loading, error, data } = useFetch(endPoint)
    /*
    1. show the loading indicator while loading
    2. if not loading and errored, show an error message
    3. if not loading and not errored show the list
   */
    const buildUI = () => {
        if (loading) return <Loading />;
        if (loading || error) return <p>Ops! Something went wrong: {error}</p>;
        if (!loading && !error)
            return (
                <ul>
                    {data.map(element => (
                        <li key={element.timestamp}>
                            {element.timestamp} - {element.amount}
                        </li>
                    ))}
                </ul>
            );
    };

    return buildUI();
}

DataFetching.propTypes = {
    endPoint: PropTypes.string.isRequired
}

export default DataFetching
