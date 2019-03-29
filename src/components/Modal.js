import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ProductConsumer } from '../context';
import { ButtonContainer } from './styled/Button';

export const Modal = () => {
  return (
    <ProductConsumer>
        {(value) => {
            const { modalOpen, closeModal } = value;
            const { img, price, title } = value.modalProduct;
            if(!modalOpen){
                return null;
            }
            else {
                return(
                    <ModalWrapper>
                        <div className="container">
                            <div className="row">
                            <div className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                              id="modal">
                            <h5> Item added to cart </h5>
                            <img src = {img} alt = 'product image' className="img-fluid"/>
                            <h5>{title}</h5>
                            <h5 className="text-muted">price : ${price}</h5>
                            <Link to = '/'>
                                <ButtonContainer onClick = {
                                    () =>  closeModal()
                                }> Continue Shopping
                                </ButtonContainer>
                            </Link>
                            <Link to = '/cart'>
                                <ButtonContainer cart = {true} onClick = {
                                    () =>  closeModal() 
                                }> Go to cart
                                </ButtonContainer>
                            </Link>
                        </div>
                       </div>
                      </div>
                    </ModalWrapper> 
             
                )
            }
        }}
    </ProductConsumer>
  )
}

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
    background: var(--mainWhite);
    }
`;