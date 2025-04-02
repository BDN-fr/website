'use client'

import './mouseFollowingGradient.css'

import { useEffect, useState } from "react";

// export function MouseFollowingGradient() {
//     useEffect(() => {
//         var gradient = document.createElement('div')
//         gradient.id = 'mouse-following-gradient'
//         document.body.appendChild(gradient)
        
//         document.onmousemove = function(e) { 
//             var x = e.clientX; 
//             var y = e.clientY; 
//             document.getElementById('mouse-following-gradient').style.left  = x+"px";
//             document.getElementById('mouse-following-gradient').style.top  = y+"px";
//         }
//     }, []);
// }

export function MouseFollowingGradient() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            id="mouse-following-gradient"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
}