import React, { useState, useEffect } from 'react';
import '../components/ServiceList.css';

const obj = [{
  "id": 1,
  "idCategory": "1",
  "name": "",
  "description": "",
  "detail": "",
  "price": 499000
}]

export default function ServicesList({source, onShow}) {
  const img1 = require("../assets/slider-1.jpg")
  const img2 = require("../assets/slider-2.jpg")
  const img3 = require("../assets/slider-6.jpg")
  const img4 = require("../assets/slider-5.jpg")
  const img = require("../assets/slider-4.jpg")
  const [data, setData] = useState(obj)

  useEffect(() => {
    console.log(data);
    
    setData(source)
  })

  return (
    <div style={{padding:20}}>
      {
        data.map((item, i) => {
        const url = (item.idCategory == "1") ? img1 : 
                    (item.idCategory == "2") ? img2 :
                    (item.idCategory == "3") ? img3 :
                    (item.idCategory == "4") ? img4 : img;
        return (
          <div className="item-card-wrapper" key={i} onClick={() => onShow(item)}>
            <img className="image-wrapper" src={url} />
            <div className="text-wrapper">
              <span>{item.name}</span>
            </div>
          </div>
        )
        
        })
      }
      
    </div>
  )
}
