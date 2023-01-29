import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './components/CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom'
import { useElements, useStripe, AddressElement, CardElement, PaymentElement } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from './../reducer'
import axios from './../axios'

function Payment() {
    const [{ cart }] = useStateValue();

    const navigate = useNavigate();
    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            })
            
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [cart])

    const appearance = {
        theme: 'flat'
    };
        
    // "sk_test_51L70F7LkNFBBMaUynWNJ9dD9vzkMMAsCrwBrNzLgqSNkok70geu8Idm6o3fP3065xdDILHZbx0EY2VK98nWeWKkw00cJnu7kul"

    const stripe = useStripe();
    
    const elements = useElements();

    const handleSubmit = async(e) => {
        e.preventDefault();
        e.setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceded(true);
            setError(null)
            setProcessing(false)

            navigate('/', { replace: true })
        })
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")
    }
  
    return (
        <Container>
            <Wrap>
                <h1>
                    Checkout (<Link to="/checkout" style={{textDecoration: 'none', color: '#111'}}>{cart?.length} items</Link>)
                </h1>
                <Section>
                    <Title>
                        <h3>Shipping Address</h3>
                    </Title>
                    <Address>
                        <p>Hanna Skairipa</p>
                        <p>123 React Street</p>
                        <p>Seoul, South Korea</p>
                    </Address>
                </Section>
                <Section>
                    <Title>
                        <h3>Review items</h3>
                    </Title>
                    <Items>
                        {cart.map(item => (
                            <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                        ))}
                    </Items>
                </Section>
                <Section>
                    <Title>
                        <h3>Payment Details</h3>
                    </Title>
                    <PaymentDetails>
                        <PaymentForm onSubmit={handleSubmit}>
                            <AddressElement options={{
                                mode: 'shipping', 
                                allowedCountries: ['US'],
                                blockPoBox: true,
                                fields: {
                                    email: 'always',
                                },
                                autocomplete: {
                                    mode: "automatic"
                                },
                                layout: "tabs"
                            }} />
                            <CardElement onChange={handleChange} id="payment-element" options={{layout: "tabs"}} />

                            <PriceContainer>
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"} />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </PriceContainer>

                            {error && <div>{error}</div>}
                        </PaymentForm>
                    </PaymentDetails>
                </Section>
            </Wrap>
        </Container>
    )
}

export default Payment

const Container = styled.div`
    background-color: #fafafa;
    min-height: calc(100vh - 65px);
`

const Wrap = styled.div`    
    h1 {
        text-align: center;
        padding: 10px;
        font-weight: 400;
        /* background: #dddfe0; */
        background-color: #efefef;
        border-bottom: 1px solid lightgray;
        margin-top: -5px;
    }
`

const Section = styled.div`
    display: flex;
    padding: 20px;
    margin: 0 20px;
    border-bottom: 1px solid lightgray;
`

const Title = styled.div`
    flex: 0.2;
`

const Address = styled.div`
    flex: 0.8;
`

const Items = styled.div`
    flex: 0.85;
`

const PaymentDetails = styled.div`
    flex: 0.8;
`

const PaymentForm = styled.div`
    /* flex: 0.8; */
`

const PriceContainer = styled.div`
    /* flex: 0.8; */
`