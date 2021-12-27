import { IBaseProductDescription } from '../types';
import './ProductDescription.component.css';

function ProductDescriptionComponent(props: any) {
    const productDescription: IBaseProductDescription = props.baseProductDescription;

    return (
        <div className="product-description">
            <div className="product-title">
                {productDescription.title}
            </div>
            
            <div className="product-old-price">
                old price: {productDescription.price.oldPrice}
            </div>

            <div className="product-current-price">
                current price: {productDescription.price.currentPrice}
            </div>

            <div className="product-sku">
                {productDescription.sku}
            </div>

            <div className="product-description-description">
                {productDescription.description}
            </div>

            <div className="product-on-hand">
                {productDescription.onHand}
            </div>
        </div>
    )
}

export default ProductDescriptionComponent;