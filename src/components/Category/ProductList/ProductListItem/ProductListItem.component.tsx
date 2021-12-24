import './ProductListItem.component.css';

function ProductListItemComponent() {
    return (
        <div className="product-list-item"> 
            <div>
                Название товара
            </div>

            <div>
                Код
            </div>

            <div>
                Картинка
            </div>

            <div>
                Описание
            </div>

            <div>
                Цена
            </div>

            <div>
                Остатки
            </div>

            <div>
                Купить
            </div>
        </div>
    )
}

export default ProductListItemComponent;