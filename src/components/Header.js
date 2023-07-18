import React from "react";

const Header = (props)=> {
    console.warn("home",props.cartData);
    return(
        <div className="home-container">
            <div className="add-to-cart">
                <span>{props.cartData.length}</span>
                <img src="https://www.pngitem.com/pimgs/m/517-5172399_pink-shopping-cart-icon-red-shopping-cart-logo.png"/>
            </div>
        </div>
    )
}

export default Header;