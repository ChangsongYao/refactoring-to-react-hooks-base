import React, { useState } from 'react'
import { Scratch } from './Scratch'

export const SelectContext = React.createContext()


function Select({ options, setSelecteIndex }) {
    let [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div>
            <select onChange={e => {
                setSelectedIndex(e.target.selectedIndex)
                console.log(e.target.selectedIndex)
            }}>
                <option value="--">--</option>
                {
                    options.map((option, index) => {
                        return <option key={option} value={option}>{option}</option>
                    })
                }
            </select>
            <Scratch slectedIndex={selectedIndex} />
        </div>
    )
}

export default Select
