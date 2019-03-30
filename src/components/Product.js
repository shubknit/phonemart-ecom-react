import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import { ProductConsumer } from '../context';

export const Product =  (props) => {
    const { id, price, title, img, inCart } = props.productData;
    return (
      <ProductWrapper className = 'col-9 col-md-6 col-lg-3 mx-auto my-3'>
        <ProductConsumer>
          { value => (
             <div className = 'card'>
             <div className = 'img-container p-5' onClick = {() => value.handleDetail(id)}>
                 <Link to = '/detail'>
                     <img className = 'card-img-top' src = { img } alt = 'product image'/> 
                 </Link>
                 <button className = 'cart-btn'  disabled = { inCart } 
                  onClick = { async (e) => {
                    e.stopPropagation(); 
                    await value.addToCart(id); 
                    value.openModal(id);
                   }}>
                  { inCart ? (<p className = 'text-capitalize mb-0'> in Cart</p>) : (<i className = 'fas fa-cart-plus'></i>) }
                 </button> 
             </div>
             <div className = 'card-footer d-flex justify-content-between'>
                 <p className = 'align-self-center mb-0'> { title } </p>
                 <h5 className = 'text-blue font-italic mb-0'> 
                 <span className  = 'mr-1'> ${ price } </span> </h5>
             </div>
           </div>
          )}
        </ProductConsumer>  

      </ProductWrapper>
    )
}

Product.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    inCart: PropTypes.bool
  }).isRequired
  
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
