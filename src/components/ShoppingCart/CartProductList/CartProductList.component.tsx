import './CartProductList.component.css';

import CartProductListItem from './CartProductListItem/CartProductListItem.component';

function CartProductListComponent() {
    return (
        <div className="cart-product-list">
            <CartProductListItem />
            <CartProductListItem />
            <CartProductListItem />
            <CartProductListItem />
        </div>
    )
}

export default CartProductListComponent;