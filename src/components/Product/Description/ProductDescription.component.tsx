import { IBaseProductDescription } from '../types';
import './ProductDescription.component.css';

function ProductDescriptionComponent(props: any) {
    const productDescription: IBaseProductDescription = props.baseProductDescription;
    const outerClass = props.className;
    const stockBalances = productDescription.onHand;

    return (
        <div className={`${outerClass} product-description`}>
            <div className="product-description__title">
                {productDescription.title}
            </div>
            
            <div className="product-description__sku-wrapper">
                <span className="product-description__sku-title">product #</span>
                <span className="product-description__sku-value"> 
                    {productDescription.sku} 
                </span>
            </div>

            <div className="product-description__prices-wrapper">
                <div className="product-description__old-price-wrapper">
                    <span className="product-description__old-price-title"> Old price:  </span>
                    
                    <span className="product-description__old-price-value">
                        {productDescription.price.oldPrice}
                    </span>
                    
                </div>

                <div className="product-description__current-price-wrapper">
                    <span className="product-description__current-price-title"> Current price:  </span>
                    
                    <span className="product-description__current-price-value">
                        {productDescription.price.currentPrice}
                    </span>
                </div>
            </div>

            <div className="product-description__description"> 
                <blockquote>{productDescription.description}</blockquote>
            </div>

            <div className="product-description__on-hand-wrapper">
                {
                    stockBalances === 0 ? (<span className="product-description__on-hand-stock-status"> Sorry to say you, but our stock is empty now: </span>): null
                }
            
                <span className="product-description__on-hand-full-stock-value">{stockBalances}</span>
                <span className="product-description__on-hand-full-stock-end"> things in the stock </span>
            </div>
        </div>
    )
}

export default ProductDescriptionComponent;