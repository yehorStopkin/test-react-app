import { IProduct } from '../../../../types';
import './ProductListItem.component.css';

function ProductListItemComponent(props: any) {
    const product: IProduct = props.product;

    return (
        <div className="product-list-item"> 
            <div>
                {product.title}
            </div>

            <div>
                Код товара: {product.sku}
            </div>

            <div>
                Картинка
            </div>

            <div>
                {product.description}
            </div>

            <div>
                Текущая цена: {product.price.currentPrice} 
            </div>

            <div>
                Прошлая цена: {product.price.oldPrice} 
            </div>


            <div>
                Доступно: {product.onHand}
            </div>

            <div>
                Купить
            </div>
        </div>
    )
}

export default ProductListItemComponent;