'use client'

import { useEffect } from 'react'
import './not-found.css'
import MovingMessageBox from '@/components/MovingMessageBox'

export default function Page() {
    useEffect(() => {
        fetch('https://cataas.com/cat', {
            "cache": "no-cache"
        }).then(res => {
            res.blob().then(blob => {
                var reader = new FileReader()
                reader.readAsDataURL(blob)
                reader.onloadend = () => {
                    var b64 = reader.result
                    document.querySelector('main').style.backgroundImage = `url(${b64})`
                    document.getElementById('message').classList.add('message-animation')
                }
            })
        })
    })

    return (
        <main className="h-centered">
            <MovingMessageBox top='5px'>
                <h1>404</h1>
                <p>Oops... You're lost... <br/>
                but you found a cat picture !</p>
                <p><a href="/">Homepage</a></p>
                <p><a href=''>Refresh the page<br/>(you will have another cat)</a></p>
            </MovingMessageBox>
        </main>
    )
}