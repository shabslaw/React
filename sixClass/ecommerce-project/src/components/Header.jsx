import axios from "axios";
import { NavLink, useNavigate, useSearchParams } from "react-router";
import { useState, useEffect } from "react";
import logoWhite from '../assets/images/logo-white.png';
import mobileLogoWhite from '../assets/images/mobile-logo-white.png';
import searchIcon from '../assets/images/icons/search-icon.png';
import cartIcon from '../assets/images/icons/cart-icon.png';
import "./Header.css"


function Header({cart}) {
    let totalQuantity = 0;
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [searchData, setSearchData] = useState([]);


    const search = searchParams.get("search")
    // console.log(search);
    

    useEffect(()=>{
        const getSearchData = async ()=>{
            const response = await axios.get(`/api/products?search=${search}`)
            setSearchData(response.data)
        }

        search && getSearchData();
    }, [search])

    cart.forEach((cartItem)=>{
        totalQuantity += cartItem.quantity;
    })

    const searchBarInput = (event)=>{
        setSearchInput(event.target.value)
    }

    const searchBarButton = ()=>{
        navigate(`/?search=${searchInput}`)
        // console.log(searchInput);
    }

    console.log(searchData);
    

    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo"
                        src={logoWhite} />
                    <img className="mobile-logo"
                        src={mobileLogoWhite} />
                </NavLink>
            </div>

            <div className="middle-section">
                <input 
                    className="search-bar" 
                    type="text" 
                    placeholder="Search" 
                    onChange={searchBarInput}
                />

                <button 
                    className="search-button"
                    onClick={searchBarButton}
                >
                    <img className="search-icon" src={searchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={cartIcon} />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    );
}


export default Header;