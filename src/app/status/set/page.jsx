'use client'

import { useState, useEffect } from "react"
import { getData, setData } from "../data"

function Row({title, state, index, onDelete}) {
    return (
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title-input" defaultValue={title}/>
            <label htmlFor="state">State</label>
            <input type="text" name="state" id="state-input" defaultValue={state}/>
            <button onClick={() => onDelete(index)}>Delete</button>
        </div>
    )
}

function SetStatusMenu() {
    const [data, setDataState] = useState([]);

    async function fetchData() {
        const initialData = await getData();
        setDataState(initialData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function addRow() {
        const newData = [...data, {title: 'New Title', state: 'New State'}];
        await setData(newData);
        fetchData();
    }

    async function update() {
        var newData = [];
        const rowsDiv = document.getElementById('rows');
        if (rowsDiv) {
            Array.from(rowsDiv.children).forEach(el => {
                const titleInput = el.querySelector('#title-input');
                const stateInput = el.querySelector('#state-input');
                if (titleInput && stateInput) {
                    newData.push({title: titleInput.value, state: stateInput.value});
                } else {
                    newData.push({title:'Title', state:'State'});
                }
            });
        }
        await setData(newData);
        fetchData();
    }

    const handleDelete = async (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setDataState(newData);
    };

    return (
        <div id="menu">
            <div id="rows">
                {
                    data.map((e, i) => <Row key={i} title={e.title} state={e.state} index={i} onDelete={handleDelete}/>)
                }
            </div>
            <button id="add-row" onClick={addRow}>Add row</button>
            <button id="update" onClick={update}>Update</button>
        </div>
    )
}

export default function setStatus() {
    return (
        <main>
            <SetStatusMenu/>
        </main>
    )
}