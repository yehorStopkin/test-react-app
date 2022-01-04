import './Category.component.css';

import CategoryListComponent from './CategoryList/CategoryList.component';
import CategoryHeaderComponent from './CategoryHeader/CategoryHeader.component';
import ProductListComponent from './ProductList/ProductList.component';
import React, { useState } from 'react';
import { CATEGORY } from '../../types/mocks/productMock';
import { ICategory } from '../../types';

function CategoryComponent(props: any) {
    const categories = props.categories;

    const [currentCategoryId, setCurrentCategoryId] = useState(CATEGORY.PHONE);

    const currentCategory: ICategory = categories.find((x: ICategory) => x.id === currentCategoryId);

    const dataWasRecived = categories.length > 0; // Почему без этой проверки страница не загружается? 

    const products = currentCategory?.products || []; 

    function selectCategoryHandler(categoryId: CATEGORY): any {
        setCurrentCategoryId(() => categoryId);
    }

    return (
        <React.Fragment>
            {dataWasRecived ?
                <div className="category">
                    <CategoryListComponent onSelectCategory={selectCategoryHandler} categories={categories} />

                    <CategoryHeaderComponent category={currentCategory} />

                    <ProductListComponent products={products} />
                </div> : null
            }

        </React.Fragment>

    )
}

export default CategoryComponent;