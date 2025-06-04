'use client'

import { useEffect } from "react"
import './MovingMessageBox.css'

export default function MovingMessageBox({left='', top='', children}) {
    useEffect(() => {
        setTimeout(() => {
            document.getElementById('move-icon').classList.add('disapear')
        }, 5000)

        var [diffX, diffY] = [0, 0]

        // Made with the help of this post https://stackoverflow.com/a/9334106

        document.getElementById('message').addEventListener('mousedown', mouseDown, false)
        document.getElementById('message').addEventListener('mouseup', mouseUp, false)

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

            let newX = e.clientX - diffX;
            let newY = e.clientY - diffY + scrollY;

            if (newX < 0) {
                newX = 0;
            } else if (newX + divBCR.width > bodyBCR.width) {
                newX = bodyBCR.width - divBCR.width;
            }

            if (newY < 0) {
                newY = 0;
            } else if (newY + divBCR.height > bodyBCR.height) {
                newY = bodyBCR.height - divBCR.height;
            }

            div.style.left = newX + 'px'
            div.style.top = newY + 'px'
        }
    })

    return (
        <div className="bordered no-select" id='message' style={{left:left, top:top}}>
            <div id='move-icon'/>
            {children}
        </div>
    )
}