import React from 'react'

export default function Pagination({itemsPerPage, totalItems, paginate}) {
    const pageNumbers = [];
    console.log(totalItems);
    console.log(itemsPerPage);
    
    for(let i=1; i<=Math.ceil(totalItems/itemsPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers);
    
  return (
      <div style={{margin:'0 auto', width: '12%'}}>
        <nav style={{alignContent:'center', justifyContent:'center', margin: '0 auto', alignItems: 'center', alignSelf:"center"}}>
        <ul className="pagination">
            {pageNumbers.map((number) => {
                return(
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                )
                
            })}
        </ul>
        </nav>
      </div>
        
  )
}
