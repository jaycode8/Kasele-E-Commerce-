import { CartProvider } from 'react-use-cart';
import  Card from './Card/Card'

const Products = () => {
    return (
        <div>
            <CartProvider>
                <Card/>
            </CartProvider>
        </div>
    );
};

export default Products;