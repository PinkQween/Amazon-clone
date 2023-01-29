import React from 'react'
import CurrencyFormat from 'react-currency-format'
import styled from 'styled-components'
import { useStateValue } from '../../StateProvider'
import { getCartTotal } from '../../reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const [{cart}] = useStateValue();

    const navigate = useNavigate();

    console.log(cart)
    console.log(getCartTotal(cart))

    return (
        <Container>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p style={{marginBottom: "-18px"}}>
                            items:
                            <strong>{` ${cart.length}`}</strong>
                        </p>
                        <p>
                            Subtotal:
                            <strong>{` ${value}`}</strong>
                            {/* <strong>{value}</strong> */}
                        </p>
                        <Gift>
                            <input type="checkbox" />
                            This order contains a gift
                        </Gift>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
        </Container>
    )
}

export default Subtotal

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 160px;
    padding: 15px;
    padding-top: 5px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 6px;
    margin-left: 15px;

    button {
        background-color: #f0c14b;
        border-radius: 8px;
        width: 100%;
        height: 30px;
        border: 1px solid;
        margin-top: 10px;
        border-color: #a88734 #9c7e31  #846a29;
        color: #111;
    }
`

const Gift = styled.small`
    display: flex;
    align-items: center;
    margin-top: -10px;

    input {
        margin-right: 5px;

        &:after {
            background-image: linear-gradient(135deg, #B1B6BE 0%, #FFF 100%);
        }
    }
`