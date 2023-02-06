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
    const [{ cart }, dispatch] = useStateValue();

    const navigate = useNavigate();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    
    const elements = useElements();

    let address;

    useEffect(() => {
        const getClientSecret = async () => {

            console.log("Sending request to backend")

            console.log(address)

            // console.log(elements.getElement(CardElement))

            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });

            console.log("Done")

            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [cart])

    console.log(clientSecret)

    const appearance = {
        theme: 'flat'
    };

    const options = {
        clientSecret: clientSecret,
        // Fully customizable with appearance API.
        appearance: appearance
    };

    // Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 3
    // const element = stripe.elements(options);


    // const paymentElement = element.create('payment');
    // paymentElement.mount('#Payment');
        
    // "sk_test_51L70F7LkNFBBMaUynWNJ9dD9vzkMMAsCrwBrNzLgqSNkok70geu8Idm6o3fP3065xdDILHZbx0EY2VK98nWeWKkw00cJnu7kul"

    const handleSubmit = async(e) => {
        e.preventDefault();
        setProcessing(true);

        // const addressElement = elements.getElement('address');
        // const {complete, value} = await addressElement.getValue();

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
            // shipping: {
            //     address: value.Address,
            //     name: value.name
            // }

        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            // db
            //   .collection('users')
            //   .doc(user?.uid)
            //   .collection('orders')
            //   .doc(paymentIntent.id)
            //   .set({
            //       basket: basket,
            //       amount: paymentIntent.amount,
            //       created: paymentIntent.created
            //   })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_CART'
            })

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
                            {/* <AddressElement options={{
                                mode: 'shipping', 
                                allowedCountries: ['US'],
                                blockPoBox: true,
                                fields: {
                                    phone: 'always',
                                },
                                autocomplete: {
                                    mode: "automatic"
                                },
                                layout: "tabs"
                            }} onChange={(event) => {
                                if (event.complete) {
                                    // Extract potentially complete address
                                    address = event.value.address;
                                }
                            }} id="address-element" /> */}
                            <CardElement onChange={handleChange} id="payment-element" options={{layout: "tabs"}} />
                            {/* <PaymentElement onChange={handleChange} id="payment-element" options={options} /> */}

                            <div id="Payment">

                            </div>

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

                                <button onClick={handleSubmit} disabled={processing || disabled || succeeded}>
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