import './Product.component.css';

import ProductDescriptionComponent from './Description/ProductDescription.component';
import SpecificationGroupListComponent from './SpecificationGroupList/SpecificationGroupList.component';
import { getProduct } from '../../types';
import { IBaseProductDescription } from './types';



function ProductComponent(props: any) {
    const product = props.product;

    const baseProductDescripton: IBaseProductDescription = {
        sku: product.sku,
        title: product.title,
        description: product.description,
        onHand: product.onHand,
        price: product.price
    };

    const specificationGroups = product.specificationGroups;

    function addToCart() {
        alert("Added + 1");
    }

    function deleteFromCart() {
        alert("Deleted - 1");
    }

    return (
        <div className="product">
            <div className="product__top-wrapper">
                <div className="product__img product__left">
                    <img src={product.images[0]} />
                </div>

                <div className="product__right">
                    <ProductDescriptionComponent baseProductDescription={baseProductDescripton} className="product__description"/>

                    { product.onHand === 0 ? null : (<button className="product__buy-button-bt" onClick={() => addToCart()}> Buy </button>)}
                    
                </div>
            </div>

            <SpecificationGroupListComponent specificationGroups={specificationGroups} className="product__specification"/>
        </div>
    )
}

export default ProductComponent;