import React from 'react'
import styled from 'styled-components'
import Subtotal from './components/Subtotal'
import CheckoutProduct from './components/CheckoutProduct'
import { useStateValue } from '../StateProvider'

function Checkout() {
    const [{ cart }] = useStateValue();

  return (
    <Container>
        <Left>
            <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' />
            <div>
                <h2>Your cart</h2>
                {cart.map(item => (
                    <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                ))}
            </div>
        </Left>
        <Right>
            <Subtotal />
        </Right>
    </Container>
  )
}

export default Checkout

const Container = styled.div`
    display: flex;
    padding: 20px;
    background: #fafafa;
    height: max-content;
    justify-content: center;
    min-height: calc(100vh - 65px);
`

const Left = styled.div`
    max-width: 75vw;

    img {
        width: 100%;
        margin-bottom: 10px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 6px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 6px;
    }

    div {
        h2 {
            margin-right: 10px;
            padding: 10px;
            border-bottom: 1px solid lightgray;
        }
    }
`

const Right = styled.div`

`