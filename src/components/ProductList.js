import React from 'react';
import { ProductConsumer } from '../context';
import { Product } from './Product';
import { Title } from './Title';


export const ProductList = () => {
  return (
      <React.Fragment>
        <div className = 'py-5'>
          <div className = 'container'>
           <Title name = "our" title = "products"/> 
           <div className = 'row'>
            <ProductConsumer>
              { value => {
                  return value.products.map(product => 
                    <Product key = { product.id } productData = { product } />
                  )
                }
              }
             </ProductConsumer>
            </div>
          </div>
        </div> 
       
      </React.Fragment>
    )
}
