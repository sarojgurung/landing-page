import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all'
import './Whatwedo.scss'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

export default function Whatwedo(){

    const el = useRef();
    const whatWeDoContainer = gsap.utils.selector(el);

    const path = {
        curviness: 1,
        values: [
        {x:100, y: 0},
        {x:600, y: 100},
        {x:300, y: 200},
        {x:800, y: 300},
        {x:600, y: 400},
        {x:900, y: 500},
        {x:200, y: 1500},
        // {x: window.innerWidth - 100, y: 0},
    ]};

    const tl = useRef();

    useEffect(() => {

        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: whatWeDoContainer('.animatedIcon'),
                markers: true,
                start: 'top center',
                scrub: 1
            }
        })
        .to(whatWeDoContainer(".animatedIcon"), {
            duration: 5,
            ease: 'none',
            motionPath: {
                path: path.values,
                curviness: path.curviness,
                autoRotate: true
            }
        })
    });

    return(
        <div>
            <div ref = {el} className="whatwedoContainer container">
                <div className="randomSection"></div>
                <div className="animatingContent">
                    <div className="animatedIconContainer">
                        <div className="animatedIcon">
                            <svg viewBox="0 0 100 100" class="content"><path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="randomSection"></div>
            </div>
        </div>
    )
}