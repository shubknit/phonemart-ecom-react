import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from "./styled/Button";

export const ProductDetail = () =>  {
  return (
    <ProductConsumer>
      {(value) => {
        const { id, title, img, price, company, info, inCart } =  value.detailProduct;
        return (
         <div className = 'container py-5'>
          {/* Title */}
          <div className = 'row'>
            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
            </div>
          </div>
          { /* End of Tile */ } 
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img src={img} className="img-fluid" alt="" />
            </div>
            {/* prdoduct info */}
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <h1>model : {title}</h1>
              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                made by : <span className="text-uppercase">{company}</span>
              </h4>
              <h4 className="text-blue">
                <strong>
                  price : <span>$</span>
                  {price}
                </strong>
              </h4>
              <p className="text-capitalize font-weight-bold mt-3 mb-0">
                some info about product :
              </p>
              <p className="text-muted lead">{info}</p>
              <div >
                <Link to = '/'> 
                  <ButtonContainer>
                    back to products
                  </ButtonContainer>
                </Link>
                <ButtonContainer cart = {true} disabled = { inCart }  
                  onClick = {() => { 
                    value.addToCart(id);
                    value.openModal(id);
                    }}>
                  { inCart ? 'inCart' : 'Add to cart' }
                </ButtonContainer>
              </div>
            </div>
           
          </div> 
         </div>
        )
      }}
      </ProductConsumer>
   )
} 
