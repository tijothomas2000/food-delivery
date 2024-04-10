import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

export default function FoodItem(props) {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={props.image} alt="" className="food-item-image" />
                {
                    !cartItems[props.id] ? <img className='add' onClick={() => addToCart(props.id)} src={assets.add_icon_white} /> :
                        <div className='food-item-counter'>
                            <img onClick={() => removeFromCart(props.id)} src={assets.remove_icon_red} />
                            <p>{cartItems[props.id]}</p>
                            <img onClick={() => addToCart(props.id)} src={assets.add_icon_green} />
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{props.name}</p>
                    <img src={assets.rating_starts}></img>
                </div>
                <p className="food-item-desc">{props.description}</p>
                <p className="food-item-price">${props.price}</p>
            </div>
        </div>
    )
}
