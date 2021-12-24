import './Product.component.css';

import ProductDescriptionComponent from './Description/ProductDescription.component';
import SpecificationComponent from './Specification/Specification.component';

function ProductComponent() {
    return (
        <div className="product">
            <div>
                Картинка
            </div>

            <ProductDescriptionComponent />

            <div>
                Кнопка "Купить"
            </div>

            <SpecificationComponent />
        </div>
    )
}

export default ProductComponent;