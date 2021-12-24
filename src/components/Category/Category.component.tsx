import './Category.component.css';

import CategoryListComponent from './CategoryList/CategoryList.component';
import CategoryHeaderComponent from './CategoryHeader/CategoryHeader.component';
import ProductListComponent from './ProductList/ProductList.component';

function CategoryComponent() {
    return (
        <div className="category">
            <CategoryListComponent />

            <CategoryHeaderComponent />

            <ProductListComponent />
        </div>
    )
}

export default CategoryComponent;