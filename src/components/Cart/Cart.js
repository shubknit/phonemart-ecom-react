import React from 'react';
import { Title } from '../Title';
import { CartColumn } from './CartColumn';
import { ProductConsumer } from '../../context';
import { EmptyCart } from './EmptyCart';
import { CartList } from './CartList';
import { CartTotals } from './CartTotals';

export const Cart = () => {
  return(  
    <ProductConsumer>
      {(value) => {
        const { cart } = value;
        if(cart.length > 0 ){
          return (
            <section className = 'container-fluid'>
              <Title name = "our" title = "cart"/>
              <CartColumn/>
              <CartList cardData = { cart } value = { value }/>
              <CartTotals value = { value }/>
            </section>
          )
        }
        else {
          return (
          <EmptyCart/>
          )
        }
      }}
    </ProductConsumer>
  ) 
}

