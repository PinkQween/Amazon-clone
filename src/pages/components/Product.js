import React from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import './Product.css'
import { useStateValue } from '../../StateProvider';

function Product({ id, title, image, price, rating, link }) {
    const [{ cart }, dispatch] = useStateValue();
    
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    const open = () =>{
        window.open(link, '_blank')
    }

    return (
        <Container>
            <Wrap>
                <p>{title}</p>
                <ProductImage src={image} />
                <Price>
                    <small>$</small>
                    <strong>{price}</strong>
                </Price>
                <Rating>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon className='Product__Star' />
                    ))}
                </Rating>
                <Button onClick={open}>Shop now</Button>
            </Wrap>
        </Container>
    )
}

export default Product

const Container = styled.div`
    /* display: flex; */
    z-index: 10000000000;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-left: 10px;
    /* padding: 20px; */
    width: 100%;
    /* max-height: 1000px; */
    min-width: 100px;
    z-index: 1;
    background-color: white;
    border: 1px solid #dedede;
    border-radius: 8px;
    /* margin-right: -10px; */
    /* height: 400px; */
    /* display: flex; */
    /* align-items: center; */
    
    img {
        height: 200px;
        width: 100%;
        object-fit: contain;
        margin-bottom: 15px;
    }
`

const Wrap = styled.div`
    z-index: 10000000000;
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
    text-align: center;
    padding-top: -5px;
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
    /* width: 10vw; */
    color: #111111;
    border-radius: 50px;
    padding-left: 10px;
    padding-right: 10px;

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