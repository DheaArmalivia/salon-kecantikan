import React from 'react'
import './Home.css';
import BannerSection from '../BannerSection';
import ImageCarousel from '../ImageCarousel';
import ServicesSection from '../ServicesSection';

const Home = () => {
  return (
    <>
      <BannerSection></BannerSection>
      <div className="description-section">
        <p>SalonNuni merupakan salon kecantikan yang beralamatkan di Jl. Mawar 4 Jember. Salon Nuni menyediakan layanan yang beragam mulai dari layanan perawatan rambut, perawatan wajah, perawatan tubuh dan perawatan kaki dan tangan. </p>
      </div>
      <div style={{backgroundColor:'#604935', padding: 20}}>
        <ImageCarousel></ImageCarousel>
      </div>
      <div  style={{backgroundColor: "#604935", height: '20px'}}>
      </div>
      <div className="services-section">
        <ServicesSection></ServicesSection>
      </div>
      <div>
        
      </div>
      
    </>
  )
}

export default Home;