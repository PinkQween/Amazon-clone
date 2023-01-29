import React from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import './Product.css'
import { useStateValue } from '../../StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();
    
    const RemoveFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return (
        <Container>
            <Wrap>
                <p>{title}</p>
                <Price>
                    <small>$</small>
                    <strong>{price}</strong>
                </Price>
                <Rating>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon className='Product__Star' />
                    ))}
                </Rating>
                <ProductImage src={image} />
                <Button onClick={RemoveFromCart}>Remove from Cart</Button>
            </Wrap>
        </Container>
    )
}

export default Product

const Container = styled.div`
    /* display: flex; */
    z-index: 100;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 95%;
    /* max-height: 1000px; */
    min-width: 100px;
    z-index: 1;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 4px;

    img {
        max-height: 200px;
        width: 100%;
        object-fit: contain;
        margin-bottom: 15px;
    }
`

const Wrap = styled.div`
    margin-bottom: 15px;
    /* display: flex; */
    z-index: 100;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
    width: 100%;
    min-width: 100px;
    z-index: 1;
    padding-top: 0px;
    align-items: center;
    display: flex;
`

const Rating = styled.div`
`

const Price = styled.p`
    margin-top: 5px;
`

const Button = styled.button`
    background-color: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    border: none;
    height: 3vh;
    width: 15vw;
    color: #111111;
    border-radius: 50px;

    &:hover {
        background-color: #c9a23e;
    }

    &:active {
        background-color: #9c7d30;
    }
`

const ProductImage = styled.img`
    padding-top: 13px;
`