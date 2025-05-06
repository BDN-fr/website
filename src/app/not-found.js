'use client'

import { useEffect } from 'react'
import './not-found.css'

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
                    document.body.style.backgroundImage = `url(${b64})`
                }
            })
        })

        var [diffX, diffY] = [0, 0]

        // Made with the help of this post https://stackoverflow.com/a/9334106

        document.getElementById('message').addEventListener('mousedown', mouseDown, false)
        window.addEventListener('mouseup', mouseUp, false)

        function mouseUp() {
            window.removeEventListener('mousemove', divMove, true)
            var divBCR = document.getElementById('message').getBoundingClientRect()
            fixCoords(divBCR.x, divBCR.y + scrollY)
        }

        function mouseDown(e) {
            window.addEventListener('mousemove', divMove, true)
            var divBCR = document.getElementById('message').getBoundingClientRect()
            diffX = e.clientX - divBCR.x
            diffY = e.clientY - divBCR.y
        }

        function divMove(e){
            fixCoords(e.clientX - diffX, e.clientY - diffY + scrollY)
        }

        function fixCoords(oldX, oldY) {
            var div = document.getElementById('message')
            var divBCR = document.getElementById('message').getBoundingClientRect()
            var bodyBCR = document.body.getBoundingClientRect()
            var [newX, newY] = [oldX, oldY]
            if (divBCR.right >= bodyBCR.width) {
                newX = bodyBCR.width - divBCR.width - 0.1
            }
            if (newX < 0) {
                newX = 0
            }
            if (divBCR.bottom >= bodyBCR.bottom) {
                newY = bodyBCR.height - divBCR.height - 0.1
            }
            if (newY < 0) {
                newY = 0
            }
            div.style.left = newX + 'px'
            div.style.top = newY + 'px'
        }
    })

    return (
        <main className="fully-centered">
            <div className="bordered" id='message'>
                <h1>404</h1>
                <p>Oops... You're lost... <br/>
                but you found a cat picture !</p>
                <p><a href="/">Homepage</a></p>
                <p><a href=''>Refresh the page<br/>(you will have another cat)</a></p>
            </div>
        </main>
    )
}