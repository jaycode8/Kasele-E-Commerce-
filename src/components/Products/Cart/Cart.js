import React from 'react';
import './Cart.css'
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart()
    if (isEmpty) return (<h1 className='empty'>cart is empty </h1>)
    return (
        <div className='bag' id='cart'>
            <table className="table1">
                <tbody>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quality</th>
                        <th>Subtotal</th>
                    </tr>
                    {
                        items.map((item, index) => (
                            <tr key={index} className='jay'>
                                <td>
                                    <div className="cart-info">
                                        <img src={item.img}  className='pic'/>
                                        <div className="textt">
                                            <h4>{item.name}</h4>
                                            <button onClick={() => removeItem(item.id)} id='remove'>Remove</button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h3>{item.price}</h3>
                                </td>
                                <td className='btns'>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                    <h3>{item.quantity}</h3>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                </td>
                                <td id="cash">{item.price*item.quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="totals">
                <table className="table2">
                    <tr>
                        <td>Totals</td>
                        <td>{cartTotal}</td>
                    </tr>
                    <tr id='ray'>
                        <button onClick={() => emptyCart()}>Clear Cart</button>
                        <button>Buy Now</button>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Cart;