import "./ProductDisplay.css"

import starIcon from "../Assets/star_icon.png"
import starDullIcon from "../Assets/star_dull_icon.png"
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";



const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className="productDisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplayRight-start">
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starDullIcon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productDisplayRight-prices">
                    <div className="productDisplayRight-oldPrice">
                        ${product.old_price}
                    </div>
                    <div className="productDisplayRight-newPrice">
                        ${product.new_price}
                    </div>


                </div>
                <div className="productDisplayRight-description">
                    A lightweight , usually knitted ,pullover shirt ,close fitting Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis unde exercitationem enim. Dolores eligendi sunt voluptatum suscipit fugiat, itaque ipsum.
                </div>
                <div className="productDisplayRight-size">
                    <h1>Select Size</h1>
                    <div className="productDisplayRight-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>

                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productDisplayRight-category"><span>Category :</span> Women, T-shirt ,Crop Top</p>
                <p className="productDisplayRight-category"><span>Tags :</span> Modern ,Latest</p>

            </div>
        </div>
    );
};

export default ProductDisplay;