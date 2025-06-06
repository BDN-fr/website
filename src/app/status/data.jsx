export async function setData(newData) {
    await fetch('/api/status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    });
}

export async function getData() {
    const res = await fetch('/api/status');
    return await res.json();
}