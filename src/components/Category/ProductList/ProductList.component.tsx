import ProductListItemComponent from "./ProductListItem/ProductListItem.component";
import './ProductList.component.css';

function ProductListComponent() {
    return (
        <div className="product-list">
            <ProductListItemComponent />
            <ProductListItemComponent />
            <ProductListItemComponent />
            <ProductListItemComponent />
        </div>
    )
}

export default ProductListComponent;