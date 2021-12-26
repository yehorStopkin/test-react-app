import './Product.component.css';

import ProductDescriptionComponent from './Description/ProductDescription.component';
import SpecificationComponent from './Specification/Specification.component';
import { getProduct } from '../../types';
import { IBaseProductDescription } from './types';



function ProductComponent() {
    const product = getProduct();

    const baseProductDescripton: IBaseProductDescription = {
        sku: product.sku,
        title: product.title,
        description: product.description,
        onHand: product.onHand
    }

    return (
        <div className="product">
            <div>
                <img src={product.images[0]} />
            </div>

            <ProductDescriptionComponent baseProductDescription={baseProductDescripton} />

            <div>
                Кнопка "Купить"
            </div>

            <SpecificationComponent />
        </div>
    )
}

export default ProductComponent;