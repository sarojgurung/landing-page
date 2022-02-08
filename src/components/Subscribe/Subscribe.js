import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Subscribe.scss'

gsap.registerPlugin(ScrollTrigger);

export default function Timestamp(){

    const el = useRef();
    const subscribeContainer = gsap.utils.selector(el);

    useEffect(() =>{
        // Animating both the elements at the same time
        // Passing the elements as array
        gsap.from([subscribeContainer(".subscribe-title"), subscribeContainer(".input-group")], {
                yPercent: 130,
                stagger: .1,
                delay: 1,
                scrollTrigger: {
                    trigger: el.current,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse',
                    // markers: true
                }
            })
    });
    return(
        <div ref={el} className='subscribe-container'>
            <div className="container">
                <div className="row ">
                    <div className="col subscribe-title-container">
                        <p className='subscribe-title'>Subscribe</p>
                    </div>
                </div>
                <div className="row subscribe-input-group">
                    <div className="col subscribe-input-div">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control subscribe-input" placeholder="Your email here, please" aria-label="Recipient's username"/>
                        <button class="btn btn-outline-secondary btn-subscribe" type="button">Join!</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}