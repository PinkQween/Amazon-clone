import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import Product from './components/Product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import './Home.css';
import { data } from './../data'

function Home() {
    const timerRef = useRef();
    const isLongPress = useRef();

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        navButtonsAlwaysInvisible: true
    };

    const redirect = (location) => {
        if (!isLongPress.current) {
            window.open(location, '_blank');
        }
    }

    const handleOnMouseDown = () => {
        startPressTimer();
    }

    const handleOnMouseUp = () => {
        clearTimeout(timerRef.current);
    }

    const startPressTimer = () => {
        isLongPress.current = false;

        timerRef.current = setTimeout(() => {
            isLongPress.current = true;
        }, 125);
    }

    for (var i = 0; i < data.length; i++) {
        console.log(data.forEach(keyValuePair => {console.log(keyValuePair)}))
    }

    return (
        <Container>
            <MainWrap>
                <Carousel {...settings}>
                    <SliderWrap onMouseUp={handleOnMouseUp} onTouchEnd={handleOnMouseUp} onMouseDown={handleOnMouseDown} onTouchStart={handleOnMouseDown} onClick={() => redirect("https://www.amazon.com/PlayStation-5-Console/dp/B0BCNKKZ91/ref=sr_1_1?keywords=ps5&qid=1675301920&sr=8-1")} >
                        <ImgBackground src='https://cdn.videogamesblogger.com/wp-content/uploads/2020/10/PS5-Galaxy-Banner.jpg' />
                    </SliderWrap>
                    <SliderWrap onMouseUp={handleOnMouseUp} onTouchEnd={handleOnMouseUp} onMouseDown={handleOnMouseDown} onTouchStart={handleOnMouseDown} onClick={() => redirect("https://www.amazon.com/Orolay-Womens-Jacket-Winter-Windproof/dp/B08G4MZ8MK/ref=sr_1_6?keywords=black+long+coat+with+fur&qid=1675534854&sr=8-6")}>
                        <ImgBackground src='https://floridaleatherfactory.com/wp-content/uploads/2022/07/Womens-Banner-2-1.png' />
                    </SliderWrap>
                </Carousel>
                {/* <OuterWrap> */}
                    <Wrap>
                        {data.map(item => {
                            console.log("Created element")
                            console.log(item.image)
                            return (
                                <Product
                                id={item.id}
                                title={item.title}
                                class={item.class}
                                rating={item.rating}
                                price={item.price}
                                image={item.image}
                                link={item.link}
                                />
                            );
                        })}
                    </Wrap>
                {/* </OuterWrap> */}
            </MainWrap>
        </Container>
    )
}

export default Home

const Container = styled.div`
    overflow-x: auto;
    min-height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    overflow-x: hidden;
`

const MainWrap = styled.div`
    min-height: calc(100vh - 100px);
    /* display: flex;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    overflow-x: auto; */
    overflow-y: hidden;
    align-items: center;
`

const ImgBackground = styled.img`
    z-index: -100;
    mask-image: linear-gradient(to top, #EAEDFD00, #EAEDFD00, #EAEDFDFF, #EAEDFDFF, #EAEDFDFF, #131921FF);
    /* height: 55vh; */
    width: 100%;
    /* aspect-ratio: 2/1; */
`

const Wrap = styled.div`
    display: grid;
    z-index: 100000;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: -10vh;
    box-sizing: border-box;
    padding: 0 auto;
    margin: 0 auto;
    max-width: calc(100vw - 2px);
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    align-content: center;
    grid-template-rows: auto;
    justify-items: center;
    overflow: none;
    margin-right: 15px;
    padding-left: 5px;
    padding-top: 0;
    margin-top: 0;
    /* grid-auto-flow: column; */
    grid-auto-columns: 1fr;
`

const SliderWrap = styled.div`
    all: unset;
    overflow: visible;
`

const OuterWrap = styled.div`
    /* width: calc(100vw - 10px); */
    display: inline-block;
`

const Carousel = styled(Slider)`
    /* z-index: 1000; */
    margin-bottom: -200px;
    padding: 0;

    button {
        display: none;
        opacity: 0;
    }
`