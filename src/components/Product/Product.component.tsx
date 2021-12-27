import './Product.component.css';

import ProductDescriptionComponent from './Description/ProductDescription.component';
import SpecificationGroupListComponent from './SpecificationGroupList/SpecificationGroupList.component';
import { getProduct } from '../../types';
import { IBaseProductDescription } from './types';



function ProductComponent() {
    const product = getProduct();

    const baseProductDescripton: IBaseProductDescription = {
        sku: product.sku,
        title: product.title,
        description: product.description,
        onHand: product.onHand,
        price: product.price
    };

    const specificationGroups = product.specificationGroups;

    return (
        <div className="product">
            <div>
                <img src={product.images[0]} />
            </div>

            <ProductDescriptionComponent baseProductDescription={baseProductDescripton} />

            <div>
                Кнопка "Купить"
            </div>

            <SpecificationGroupListComponent specificationGroups={specificationGroups} />
        </div>
    )
}

export default ProductComponent;