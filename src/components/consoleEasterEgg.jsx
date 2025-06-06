'use client'

import { useEffect } from "react"

export default function ConsoleEaterEgg() {
    useEffect(() => {
        console.log(`Hi dear console oppener or source code explorer, have a great day :3`)
        setTimeout(() => {
            console.log('You\'re still there ? There is not much to see to be honest...')
        }, 30000);
    })
    return <></>
}