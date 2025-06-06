'use client'

import { useState, useEffect } from "react"
import { getData, setData } from "../data"

function Row({title, state, index, onDelete}) {
    return (
        <div className="v-centered">
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title-input" defaultValue={title}/>
            </div>
            <div>
                <label htmlFor="state">State</label>
                <input type="text" name="state" id="state-input" defaultValue={state}/>
            </div>
            <button onClick={() => onDelete(index)}>Delete</button>
        </div>
    )
}

function SetStatusPage({password}) {
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
        setDataState(newData);
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
        
        setData(newData, password)
        fetchData();
    }

    const handleDelete = async (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setDataState(newData);
    };

    return (
        <main>
            <div id="rows">
                {
                    data.map((e, i) => <Row key={i} title={e.title} state={e.state} index={i} onDelete={handleDelete}/>)
                }
            </div>
            <div>
                <button id="add-row" onClick={addRow}>Add row</button>
                <button id="update" onClick={update}>Update</button>
            </div>
        </main>
    )
}

export default function setStatus() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = async (event) => {
        event && event.preventDefault && event.preventDefault();
        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password })
        });

        const data = await response.json();

        if (data.authenticated) {
            setIsAuthenticated(true);
            localStorage.setItem('password', password)
        } else {
            alert('Incorrect password');
        }
    };

    useEffect(() => {
        const storedPassword = localStorage.getItem('password');
        if (storedPassword) {
            setPassword(storedPassword);
        }
    }, []);

    if (!isAuthenticated) {
        return (
            <main>
                <h1>Password Required</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </main>
        );
    }

    return (
        <SetStatusPage password={password}/>
    );
}