import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

export default function SideCart() {

  return <ProductConsumer>
    {value => {
      const {cartOpen,closeCart,cart}=value;
      return <CartWrapper show={cartOpen} onClick={closeCart} >
        hello cart
      </CartWrapper>
    }}
  </ProductConsumer>
}
const CartWrapper = styled.div`
  position: fixed;
  top:60px;
  right:0;
  width:100%;
  height:100%;
  background:var(--mainGrey);
  z-index:1;
  border-left:4px solid var(--primaryColor);
  transition:var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  
  @media(min-width:576px){
    width:20rem;
  }
`