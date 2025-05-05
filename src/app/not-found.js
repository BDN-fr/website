'use client'

import { useEffect } from 'react'
import './not-found.css'

export default function Page() {
    useEffect(() => {
        var [diffX, diffY] = [0, 0]

        // Made with the help of this post https://stackoverflow.com/a/9334106

        document.getElementById('message').addEventListener('mousedown', mouseDown, false)
        window.addEventListener('mouseup', mouseUp, false)

        function mouseUp() {
            window.removeEventListener('mousemove', divMove, true)
        }

        function mouseDown(e) {
            window.addEventListener('mousemove', divMove, true)
            var divBCR = document.getElementById('message').getBoundingClientRect()
            diffX = e.clientX - divBCR.x
            diffY = e.clientY - divBCR.y
        }

        function divMove(e){
            var div = document.getElementById('message')
            var divBCR = document.getElementById('message').getBoundingClientRect()
            var bodyBCR = document.body.getBoundingClientRect()
            var [newX, newY] = [e.clientX - diffX, e.clientY - diffY + scrollY]
            if (divBCR.right >= bodyBCR.width) {
                newX = bodyBCR.width - divBCR.width - 0.1
            }
            if (newX < 0) {
                newX = 0
            }
            console.log(bodyBCR.bottom)
            if (divBCR.bottom >= bodyBCR.bottom) {
                newY = bodyBCR.height - divBCR.height
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