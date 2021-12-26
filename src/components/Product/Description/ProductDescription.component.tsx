import { IBaseProductDescription } from '../types';
import './ProductDescription.component.css';

function ProductDescriptionComponent(props: any) {
    const productDescription: IBaseProductDescription = props.baseProductDescription;

    return (
        <div className="product-description">
            <div>
                {productDescription.title}
            </div>
            
            <div>
                {productDescription.sku}
            </div>

            <div>
                {productDescription.description}
            </div>

            <div>
                {productDescription.onHand}
            </div>
        </div>
    )
}

export default ProductDescriptionComponent;