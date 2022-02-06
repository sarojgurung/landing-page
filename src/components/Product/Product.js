import React from 'react'
import './Product.scss'

export default function Product(props){
    console.log(props.data.id);
    return(
        <div>
            <div className="product-browser-look">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <a href={props.data.link} target="_blank">
                <img className="product-image" src={props.data.img} alt="Product Image" />
            </a>
        </div>
    )
}