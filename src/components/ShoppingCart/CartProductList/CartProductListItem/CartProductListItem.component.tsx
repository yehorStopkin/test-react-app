import './CartProductListItem.component.css';

function CartProductListItem() {
    return (
        <div className="cart-product-list-item">
            <div>
                Картинка
            </div>

            <div>
                Название
            </div>

            <div>
                Код
            </div>

            <div>
                Цена за 1шт
            </div>

            <div>
                Количество
            </div>

            <div>
                Суммарная цена
            </div>

            <div>
                Удалить
            </div>
        </div>
    )
}

export default CartProductListItem