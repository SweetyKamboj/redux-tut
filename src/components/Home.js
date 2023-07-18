import React from "react";

const Home = (props)=> {
    //console.warn("home",props);
    return(
        <div className="home-container">
            <h1>Home</h1>
            <div className="cart-wrapper">
                <div className="image-wrapper item">
                    <img src="../products/apple-iphone-13.jpg"/>
                </div>
                <div className="text-wrapper item">
                   <span>I-Phone</span>
                   <span>Price: $1000.00</span>
                </div>
                <div className="add-btn-wrapper item">
                   <button className="add" onClick={()=>props.addDataToHandler({price:1000, name:'IPhone 11'})}>Add To Cart</button>
                </div>
                <div className="remove-btn-wrapper">
                <button className="remove" onClick={()=>props.removeToCartHandler()}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;