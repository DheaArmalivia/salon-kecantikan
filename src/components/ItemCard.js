import React from 'react'
import { Card, CardBody } from 'reactstrap'

export default function ItemCard() {
  return (
    <>
      <div style={{border: '2px solid black', height:270, width:200, margin:10, padding:5}}>
        <div style={{border: '1px solid grey', height: 160, width:180, margin:'0 auto'}}>
            
        </div>
        <div>
            <span>Judul produk</span><br/>
        </div>
        <div>
            <span>Kategori produk</span><br/>
        </div>
        <div>
            <span>Harga</span><br/>
        </div>
        <div>
            <span>Rating</span><br/>
        </div>
        
        
      </div>
    </>
  )
}
