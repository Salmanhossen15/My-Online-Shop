import { useContext } from "react"
import "./CSS/ShopCategory.css"
import { ShopContext } from "../Context/ShopContext"
import dropDownicon from "../Components/Assets/dropdown_icon.png"
import Item from "../Components/Item/Item"

export const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext);

  return (

    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span>Out Of 36 Product
        </p>
        <div className="shopCategory-sort">
          Sort By <img src={dropDownicon} alt="" />

        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            ></Item>
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadMore">
        Explore More
      </div>
    </div>
  )
}
