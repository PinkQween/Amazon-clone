import styled from 'styled-components'
import React from 'react'
import Product from './components/Product'

function Home() {
  return (
    <Container>
        <MainWrap>
            <ImgBackground src='https://m.media-amazon.com/images/I/61mebnaH78L._SX3000_.jpg' />
            <Wrap>
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
            </Wrap>
            <Wrap>
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
            </Wrap>
            <Wrap>
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
            </Wrap>
            <Wrap>
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating="5" />
            </Wrap>
            <Wrap>
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
                <Product id="3606520062" title="Samsung Lg Roku Tcl TV" price={299.99} image="https://m.media-amazon.com/images/I/61NKcVXbBzL._AC_UY218_.jpg" rating={5} />
            </Wrap>
        </MainWrap>
    </Container>
  )
}

export default Home

const Container = styled.div`
    overflow-x: auto;
    min-height: calc(100vh - 100px);
    max-width: 100vw;
    display: flex;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    overflow-y: hidden;
`

const MainWrap = styled.div`
    min-height: calc(100vh - 100px);
    /* display: flex;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    overflow-x: auto; */
    overflow-y: hidden;
    max-width: 100vw;
`

const ImgBackground = styled.img`
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to top, #EAEDFD00, #EAEDFD);
`

const Wrap = styled.div`
    display: flex;
    z-index: 1;
    margin-right: 5px;
    margin-left: 5px;
`