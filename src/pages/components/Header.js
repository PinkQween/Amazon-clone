import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import { useStateValue } from '../../StateProvider';
import { auth } from './../../firebase'

function Header() {
    const [{cart, user }, dispatch] = useStateValue();

    const handleAuth = () => {
        console.log(user)

        if (user) {
            console.log("signing out")
            auth.signOut();
        }
    }

    // while (1 == 1) {
    //     if (window.location.pathname != '/login') {
            return (
                <Nav>
                    {/* <Link to="/">
                        <Logo src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                    </Link> */}
                    <SearchBar>
                        <InputField type="text" placeholder=' Search Anything' />
                        <SearchIcon className="Header__search" />
                    </SearchBar>
                    {/* <NavMenu> */}
                        {/* <Link style={{textDecoration: 'none'}} to={!user && "/login"} >
                            <div onClick={handleAuth}>
                                <Login>{user ? 'LOGOUT' : 'LOGIN'}</Login>
                            </div>
                        </Link> */}
                        {/* <a>
                            <Orders>ORDERS</Orders>
                        </a>
                        <Link style={{textDecoration: 'none'}} to="/checkout" >
                            <Cart><span>CART</span><p className='Header__amount'>{cart?.length}</p></Cart>
                        </Link>
                    </NavMenu> */}
                    {/* <ProfileIcon src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/70D1C2E35B62D55C4C917AF30957AF9BE8D60FC2089B90C131B275E86EFD0553/scale?width=280&aspectRatio=1.00&format=png" /> */}
                </Nav>
            )
        // } else {
        //     return null;
        // }
    // }
}

export default Header

const Nav = styled.nav`
    height: 65px;
    background-color: #131921;
    display: flex;
    align-items: center;
    padding: 0 36px;
    position: sticky;
    top: 0;
    overflow-x: hidden;
    z-index: 100000000;
    min-width: calc(100vw - 1px);
`

const Logo = styled.img`
    width: 100px;
    cursor: pointer;
    object-fit: contain;
    margin: 0 -10px;
    margin-right: -7px;
    margin-top: 18px;
    /* padding-top: 40px; */
`

const NavMenu = styled.div`
    display: flex;
    margin-left: 10px;
    margin-right: -15px;
    width: calc(100vw + 5px);

    a {
        color: white;
        display: flex;
        align-items: center;
        padding: 0 8px;
        cursor: pointer;
        align-items: center;
        
        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

// const ProfileIcon = styled.img`
//     width: 48px;
//     height: 48px;
//     border-radius: 50%;
//     cursor: pointer;
// `

const SearchBar = styled.div`
    display: flex;
    flex: 1;
    /* margin-left: 25px; */
    border: none;
`

const InputField = styled.input`
    display: flex;
    flex: 1;
    align-items: center;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: none;
    width: 100%;
`

const Cart = styled.span`font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;
    display: flex;
    align-items: center;

    span {
        &:after {
            content: "";
            height: 2px;
            background-color: white;
            position: absolute;
            left: 3px;
            right: 0;
            bottom: -6px;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(1, 0.69, 0.25, 1.5) 0s;
            transform: scaleX(0);
        }
    }

    span {
        padding-right: 3px;
    }
`

const Orders = styled.span`
    &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 3px;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(1, 0.69, 0.25, 1.5) 0s;
        transform: scaleX(0);
    }
`

const Login = styled.span`
    &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 3px;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(1, 0.69, 0.25, 1.5) 0s;
        transform: scaleX(0);
    }
`