import React from 'react'

export const CartColumn = () => {
  return (
    <div className = 'container-fluid text-center d-none d-lg-block'>
        <div className = 'row'>
            <div className = 'text-capitalize col-10 mx-auto col-lg-2'>
                Products
            </div>
            <div className = 'text-capitalize col-10 mx-auto col-lg-2'>
                Name of product
            </div>
            <div className = 'text-capitalize col-10 mx-auto col-lg-2'>
                price 
            </div>
            <div className = 'text-capitalize col-10 mx-auto col-lg-2'>
                Quantity
            </div>
            <div className = ' text-capitalize col-10 mx-auto col-lg-2'>
                remove  
            </div>
            <div className = 'text-capitalize col-10 mx-auto col-lg-2'>
                total
            </div>
        </div>
      
    </div>
  )
}
