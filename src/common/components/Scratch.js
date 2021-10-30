import React, { useState, useEffect } from "react"

import { createServer } from "miragejs"

import { sales, subscriptions } from '../../mocks/index'
import { BASE_URL } from '../../utils/url'

// console.log(BASE_URL, sales, subscriptions)

createServer({
    routes() {
        this.get(BASE_URL + "/sales/", () => sales);
        this.get(BASE_URL + "/subscriptions/", () => subscriptions)
    }
})

export function Scratch({ slectedIndex }) {
    let [sales, setSales] = useState([])

    useEffect(() => {
        let url = "";
        switch (slectedIndex) {
            case 0:
                setSales([]);
                return;
            case 1:
                url = BASE_URL + "/sales/"
                break;
            case 2:
                url = BASE_URL + "/subscriptions/"
                break;
            default:
                setSales([]);
                break;
        }

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                setSales(json)
            })
    }, [slectedIndex])

    return (
        <ul>
            {sales.map((sale) => (
                <li key={sale.timestamp}>{sale.timestamp}-{sale.amount} </li>
            ))}
        </ul>
    )
}