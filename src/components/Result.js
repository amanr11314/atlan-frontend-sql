import React, { useState, useEffect } from 'react'
import TableOutput from '../components/TableOutput'
import * as d3 from "d3-fetch";
const Result = ({ appState }) => {
    const [records, setRecords] = useState([]);
    const [keys, setKeys] = useState([]);
    useEffect(() => {
        const loadCSV = async (url) => {
            d3.csv(url).then(
                data => {
                    setRecords(data);
                    setKeys(Object.keys(data[0]));
                }
            );
        }
        // if(appState.queries)
        const tableIndex = appState.currentTab % 4
        loadCSV(`/tables/${appState.result[tableIndex]}.csv`)
    }, [appState]);
    return (
        < TableOutput records={records} keys={keys} />
    )
}

export default Result