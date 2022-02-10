import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Intro.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Intro(){
    //Referencing the elements
    let el = useRef();
    const introContainer = gsap.utils.selector(el);
    
    useEffect(() => {

        const scrollAmount = el.current.scrollWidth - el.current.offsetWidth;
        

        // Horizontal Animation
        gsap.to(introContainer(".intro-background-container"), {
            x: () => -scrollAmount,
            ease: 'none',
            scrollTrigger: {
                trigger: el.current,
                duration: .5,
                scrub: 1,
                pin: true,
                start: 'top top',
                end: () => "+=" + scrollAmount,
                snap: 1 / 3 //dividing by the number of div containers minus 1 - hardcoding not the best practise
            }
        });
    }, [])

    return (
        <div>
            <div ref={el} className="intro">
                <div className="intro-background-container">
                    <div className="intro-background intro-background-1">
                        <div className="intro-text-content intro-text-1">
                            <p className="intro-title-text">Modern</p>
                            <span className="intro-subtitle-text">Helping build the community. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam veritatis consequatur illum accusantium. Culpa, consequuntur illo nesciunt doloremque eligendi ut architecto delectus ratione maxime?</span>
                            <div className="intro-btn-group">
                                <button className="intro-btn">Read More</button>
                                <button className="intro-btn">Contact</button>
                            </div>
                        </div>
                    </div>
                    <div className="intro-background intro-background-2">
                        <div className="intro-text-content intro-text-2">
                            <p className="intro-title-text">Subtle</p>
                            <span className="intro-subtitle-text">Sapiente laboriosam veritatis consequatur illum accusantium. Culpa, consequuntur illo nesciunt doloremque eligendi ut architecto delectus ratione.</span>
                        </div>
                    </div>
                    <div className="intro-background intro-background-3">
                        <div className="intro-text-content intro-text-3">
                            <p className="intro-title-text">powerful</p>
                            <span className="intro-subtitle-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam veritatis consequatur illum accusantium. Culpa, consequuntur illo nesciunt doloremque eligendi ut architecto delectus ratione maxime?</span>
                            <div className="intro-btn-group">
                                <button className="intro-btn">Read More</button>
                                <button className="intro-btn">Contact</button>
                            </div>
                        </div>
                    </div>
                    <div className="intro-background intro-background-4">
                        <div className="intro-text-content intro-text-4">
                            <video playsinline autoplay="autoplay" muted loop="loop" id="myvideo">
                                <source src="https://www.tesla.com/xNVh4yUEc3B9/performance_video_desktop.mp4" type="video/mp4" />
                            </video>
                            <h1>All new Landing Page <span>Ioniq</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}