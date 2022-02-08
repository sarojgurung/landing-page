import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Product from '../Product/Product'
import './ProductList.scss'

import {data} from '../../data'

gsap.registerPlugin(ScrollTrigger);

export default function ProductList(){
    
    //Referencing the elements
    const el = useRef();
    const productsContainer = gsap.utils.selector(el);

    const tl = useRef();

    useEffect(() =>{

        //Timeline to animate different divs at different time
        //Always use One Scroll Trigger
        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: el.current,
                start: 'top center+=200',
                end: 'bottom 50%',
                toggleActions: 'play reverse play reverse',
                // markers: true
            }
        })
        .from(productsContainer(".products-text"), {
            yPercent: 175,
            stagger: .1,
            delay: .5
        }, .2)
        .from(productsContainer(".products-listing-container .product-listing"), {
            autoAlpha: 0,
            y: 100,
            stagger: .1,
            delay: .5
        }, .5)

        // Animating only one conent i.e. with the same class name
        // This does not require the usage of gsap.timeline()
        // gsap.from(productsContainer(".products-text"), {
        //     yPercent: 175,
        //     stagger: .1,
        //     delay: 1,
        //     scrollTrigger: {
        //         trigger: el.current,
        //         start: 'top center',
        //         toggleActions: 'play none none reverse',
        //         markers: true
        //     }
        // }, .2)
    });

    return(
        <div ref={el} className="container products-container">
            <div className="row g-0 flex-column products-text-area">
                <div className="col products-title">
                    <h2 class="products-text">Products <span>Ioniq</span></h2>
                </div>
                <div className="col products-description">
                    <p class="products-text">Some of the valuable products we provide to our customers.</p>
                </div>
            </div>
            <div className="row g-0 d-flex flex-wrap products-listing-container">
                {data.map((item) =>(
                    <div key={item.id} className="col-lg-3 col-md-4 p-4 product-listing">
                        <div className="product"><Product data={item}/></div>
                    </div>
                ))}
            </div>
        </div>
    )
}