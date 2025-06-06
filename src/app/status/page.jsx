'use client'

import {getData} from './data'
import { useState, useEffect } from 'react';

export default function Status() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const initialData = await getData();
            setData(initialData);
        }
        fetchData();
    }, []);

    return (
        <main className="fully-centered">
            <div>
                {
                    data.map((e, i) =>
                        <p key={i}>{e.title}: {e.state}</p>
                    )
                }
            </div>
        </main>
    )
}
