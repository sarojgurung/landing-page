import React, {useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.scss'

//Images without api
import heroImage from '../../img/about-hero-image.png'
import galleryImage1 from '../../img/illu-1.png'
import galleryImage2 from '../../img/illu-2.png'
import galleryImage3 from '../../img/illu-3.png'

gsap.registerPlugin(ScrollTrigger);

export default function About(){

    const el = new useRef();
    const aboutContainer = gsap.utils.selector(el);

    const timelineAbout = new useRef();
    
    useEffect(() =>{
        // Timeline usage for multiple elements to be animated on scroll
        timelineAbout.current = gsap.timeline({
            scrollTrigger: {
                trigger: el.current,
                start: 'top center+=100',
                end: 'bottom 50%',
                toggleActions: 'play reverse play reverse',
                // markers: true
            }
        })
        .from(aboutContainer(".about-hero-img-container"), {
            y: 50,
            repeat: -1,
            duration: 2,
            yoyo: true,
        })
        .from(aboutContainer(".about-sub-title"),{
            xPercent: 150,
            autoAlpha: 0,
            duration: 2
        }, ".2")
        .from(aboutContainer(".about-title"),{
            xPercent: 150,
            autoAlpha: 0,
            duration: 2
        }, ".5")
        .from(aboutContainer(".about-description"),{
            xPercent: 150,
            autoAlpha: 0,
            duration: 2
        }, ".75")
        .from(aboutContainer(".about-btn"),{
            x: 100,
            autoAlpha: 0,
            duration: 1
        }, ".5")
        .from(aboutContainer(".about-gallery-list"),{
            y: 150,
            autoAlpha: 0,
            duration: 1
        }, "1")
    });

    return(
        <div>
            <div ref={el} className="container-fluid g-0 about-container">
                <div className="row">
                    <div className="col-lg-6 g-0 about-hero-img-container">
                        <img src={heroImage} alt="About Us Hero Image" />
                    </div>
                    <div className="col-lg-6 g-0 about-desc-container">
                        <h5 className="about-sub-title">About <span>Landing-page</span></h5>
                        <h2 className="mb-5 about-title"><span class="about-bar"></span><span>Dynamic &</span><span>Lightweight Study</span><span>2000</span></h2>
                        <p className="mb-5 about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam veritatis consequatur illum accusantium. Culpa, consequuntur illo nesciunt doloremque eligendi ut architecto delectus ratione maxime?</p>
                        <button className="btn about-btn">Details</button>
                        <div className="about-gallery-list">
                            <a src="#" className="gallery-image">
                                <img src={galleryImage1} alt="Galler Images" />
                            </a>
                            <a src="#" className="gallery-image">
                                <img src={galleryImage2} alt="Galler Images" />
                            </a>
                            <a src="#" className="gallery-image">
                                <img src={galleryImage3} alt="Galler Images" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}