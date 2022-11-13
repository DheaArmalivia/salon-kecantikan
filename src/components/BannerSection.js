import React from 'react'
import './BannerSection.css';

export default function BannerSection() {
    const bannerImg = require("../assets/banner-img.jpg")
  return (
    <>
      <div className="banner-container">
        <img src={bannerImg} alt="" style={{width: '100%', height: 'auto'}} />
        <div className="banner-text-wrapper">
          <h1>Selamat Datang di Salon Nuni!</h1>
          <p>Kami menyajikan pelayanan yang terbaik demi kepuasan pelanggan. Dengan harga terbaik dan terjangkau oleh semua kalangan pelanggan.</p>
        </div>
      </div>
    </>
  )
}
