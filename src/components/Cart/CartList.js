import React from 'react'
import { CartItem } from './CartItem';
export const CartList = (props) => {
  const { cardData , value }  = props;
  return (
    <div>
     { cardData.map(item => 
         <CartItem key = { item.id } item = {item } value = {value}/>
     )}    
     </div>
  )
}
