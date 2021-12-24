import './ShoppingCart.component.css';

import CartProductListComponent from './CartProductList/CartProductList.component';
import CartConfirmationComponent from './CartConfirmation/CartConfirmation.component';

function ShoppingCartComponent() {
    return (
        <div className="shopping-cart">
            <CartProductListComponent />

            <CartConfirmationComponent />
        </div>
    )
}

export default ShoppingCartComponent;