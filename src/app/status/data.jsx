'use client'

export async function setData(newData, password) {
    await fetch('/api/status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'password': password // Good security issue but why not
        },
        body: JSON.stringify(newData)
    });
}

export async function getData() {
    const res = await fetch('/api/status');
    return await res.json();
}