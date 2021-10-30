import React, { useState } from 'react'
import Select from '../../common/components/Select'
import DataFetching from '../../common/components/DataFetching'

if (process.env.NODE_ENV === "development") {
    console.log("development")
    const { Server } = require("miragejs");
    const { sales, subscriptions } = require("../../mocks");
    // console.log(sales, subscriptions)
    new Server({
        routes() {
            this.namespace = process.env.REACT_APP_BASE_URL;
            this.get("sales/", () => sales);
            this.get("subscription/", () => subscriptions);
        }
    })
}
function DataFetchingContainer() {
    const [selectedEndpoint, setSelectedEndpoint] = useState("");
    const optionsForSelect = [
        { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
        { label: "Subscription", value: `${process.env.REACT_APP_BASE_URL}/subscription/` }
    ];
    function handleSelect(event) {
        console.log(event.target.value)
        setSelectedEndpoint(event.target.value);
    }


    return (
        <>
            <Select
                handleChange={handleSelect}
                label="Please, select a chart"
                id="select-chart"
                options={optionsForSelect}
            />
            {selectedEndpoint ? <DataFetching endPoint={selectedEndpoint} /> : null}
        </>
    )
}

export default DataFetchingContainer
