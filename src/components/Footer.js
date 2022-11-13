import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className="footer-container">
          <div className="row">
              <div className="col">
                  <div className="logo-wrapper">
                    <Link to="/" className="footer-logo">
                    SalonNuni
                    </Link>
                  </div>
                
              </div>
              <div className="col">
                  <div className="item-wrapper">
                  <h4>Our Social Media</h4>
                  <div className="item-text-wrapper">
                    <span>Instagram : </span>
                    <a href="/#">@SalonNuni</a>
                  </div>
                  <div className="item-text-wrapper">
                    <span>Facebook : </span>
                    <a href="/#">Salon Nuni</a>
                  </div>
                  <div className="item-text-wrapper">
                    <span>Website : </span>
                    <a href="/#">www.salonnuni.com</a>
                  </div>
                  </div>
              </div>
              <div className="col">
                  <div className="item-wrapper">
                    <h4>Operational Hour</h4>
                    <div>
                        <div className="item-text-wrapper">Senin : 10.00 - 21.00</div>
                        <div className="item-text-wrapper">Selasa : 10.00 - 21.00</div>
                        <div className="item-text-wrapper">Rabu : 10.00 - 21.00</div>
                        <div className="item-text-wrapper">Kamis : 10.00 - 21.00</div>
                        <div className="item-text-wrapper">Jumat : 10.00 - 21.00</div>
                        <div className="item-text-wrapper">Sabtu : 10.00 - 21.00</div>
                        <div className="item-text-wrapper">Minggu : 10.00 - 21.00</div>
                    </div>
                  </div>
                  
              </div>
          </div>
      </div>
    </>
  )
}
