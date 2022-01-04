import ProductListItemComponent from "./ProductListItem/ProductListItem.component";
import './ProductList.component.css';
import { IProduct } from "../../../types";

function ProductListComponent(props: any) {
    const products: Array<IProduct> = props.products;

    const productListItemComponents = products.map((product: IProduct) => {
        return <ProductListItemComponent key={product.sku} product={product} />
    });

    return (
        <div className="product-list">
            {productListItemComponents}
        </div>
    )
}

export default ProductListComponent;