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
        onHand: product.onHand,
        price: product.price,
    }

    const characteristicGroups = product.characteristicGroups;

    return (
        <div className="product">
            <div className="product-img">
                <img src={product.images[0]} />
            </div>

            <ProductDescriptionComponent baseProductDescription={baseProductDescripton} className="product-description"/>

            <div className="product-buy"> 
                Кнопка "Купить"
            </div>

            <SpecificationComponent characteristicGroups={characteristicGroups} className="product-specification"/>
        </div>
    )
}

export default ProductComponent;