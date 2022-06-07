import './Card.css'
import Funitures from './data';
import { useCart } from 'react-use-cart';
import Cart from '../Cart/Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCartPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const handleCart = () => {
    document.getElementById('hey').classList.toggle('activeCart')
}

const TheCard = (props) => {
    const { addItem } = useCart()
    return ( 
        <div className = "card">
            <div id = 'name'>
                <h3>{props.name}</h3>
            </div>
            <div className = 'img' >
                <img src = { props.img }/>
            </div>
            <div className = "details" >
                <div id = 'inner'>
                    <h4> { props.price }</h4>
                    <button onClick = { () => addItem(props.item) } >Buy Now</button>
                </div>
            </div>
        </div>
    )
}


const Card = () => {
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
    const empty = ()=>{
        if (isEmpty) return (<h1 className='empty'>cart is empty {totalItems}</h1>)
    }
    return ( 
        <div className = "container"  id='products'>
            <div className = 'cartIcon' > 
                <span >{ totalUniqueItems } </span>
                <FontAwesomeIcon icon={faCartPlus} id='cart' onClick = { handleCart } />
            </div >
            <div id = 'hey' >
                <i onClick = { handleCart } > <FontAwesomeIcon icon={faTimes}/> </i> 
                <section>
                    <Cart />
                    <div id='empty'>
                        {empty}
                    </div>
                </section>
            </div>
            <h1 > Products </h1> 
            <div className = 'cards' > 
                {
                    Funitures.map((funiture, index) => ( <
                        TheCard style = {
                            { funiture }
                        }
                        name = { funiture.name }
                        price = { funiture.price }
                        img = { funiture.img }
                        key = { index }
                        item = { funiture }
                        />
                    ))
                } 
            </div> 
        </div>
        );
    }

export  default  Card;