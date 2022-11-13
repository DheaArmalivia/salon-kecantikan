import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function ImageCarousel() {

    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };

    const [settings, setSettings] = useState(setting)

    useEffect(() => {

    }, [])

    return (
        <div className="container" style={{backgroundColor:'#604935'}}>
            <Slider {...settings}>
                <div className="item">
                    <img src={require("../assets/slider-1.jpg")} style={{ width: '23rem', height: 'auto' }} />
                </div>
                <div className="item">
                    <img src={require("../assets/slider-2.jpg")} style={{ width: '23rem', height: 'auto' }} />
                </div>
                <div className="item">
                    <img src={require("../assets/slider-3.jpg")} style={{ width: '23rem', height: 'auto' }} />
                </div>
                <div className="item">
                    <img src={require("../assets/slider-4.jpg")} style={{ width: '23rem', height: 'auto' }} />
                </div>
                <div className="item">
                    <img src={require("../assets/slider-5.jpg")} style={{ width: '23rem', height: 'auto' }} />
                </div>
                <div className="item">
                    <img src={require("../assets/slider-6.jpg")} style={{ width: '23rem', height: 'auto' }} />
                </div>
            </Slider>
        </div>
    )
}
