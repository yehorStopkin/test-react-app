import React, { useEffect } from 'react';

import LayoutComponent from './components/Layout/Layout.component';
import LoginComponent from './components/Login/Login.component';
import CategoryComponent from './components/Category/Category.component';
import ProductComponent from './components/Product/Product.component';
import ShoppingCartComponent from './components/ShoppingCart/ShoppingCart.component';
import PersonalCabinetComponent from './components/PersonalCabinet/PersonalCabinet.component';
import NotFoundComponent from './components/NotFound/NotFound.component';
import { ICategory, IProduct } from './types';
import { getCategories } from './types/mocks/categoryMock';

function App() {
    const [currentPage, setCurrentPage] = React.useState<PAGE | null>(PAGE.CATEGORY);
    const [categories, setCategories] = React.useState<Array<ICategory>>([]);

    useEffect(() => {
        const categories = getCategories();
        setCategories(categories);
    }, []);

    const product = getRandomProduct(categories || []);

    let currentComponent = getCurrentPage(currentPage, categories, product);

    function clickHandler(page: PAGE | null): any {
        setCurrentPage(() => page);
    }

    return (
        <React.Fragment>
            <div>
                <button onClick={() => clickHandler(PAGE.LOGIN)}>Login</button>
                <button onClick={() => clickHandler(PAGE.CATEGORY)}>Category</button>
                <button onClick={() => clickHandler(PAGE.PRODUCT)}>Product</button>
                <button onClick={() => clickHandler(PAGE.SHOPPING_CART)}>ShoppingCart</button>
                <button onClick={() => clickHandler(PAGE.PERSONAL_CABINET)}>PersonalCabinet</button>
                <button onClick={() => clickHandler(null)}>NotFound</button>
            </div>

            <div>
                {currentComponent}
            </div>
        </React.Fragment>
    );
}

enum PAGE {
    LOGIN,
    CATEGORY,
    PRODUCT,
    SHOPPING_CART,
    PERSONAL_CABINET
}

export default App;


function getCurrentPage(page: PAGE | null, categories: Array<ICategory>, product: IProduct): any {
    let currentPage = null;

    switch (page) {
        case PAGE.LOGIN: {
            currentPage = (<LoginComponent />);
            break;
        }
        case PAGE.CATEGORY: {
            currentPage = (
                <LayoutComponent>
                    <CategoryComponent categories={categories || []} />
                </LayoutComponent>
            );
            break;
        }
        case PAGE.PRODUCT: {
            currentPage = (
                <LayoutComponent>
                    <ProductComponent product={product} />
                </LayoutComponent>
            );
            break;
        }
        case PAGE.SHOPPING_CART: {
            currentPage = (
                <LayoutComponent>
                    <ShoppingCartComponent />
                </LayoutComponent>
            );
            break;
        }
        case PAGE.PERSONAL_CABINET: {
            currentPage = (
                <LayoutComponent>
                    <PersonalCabinetComponent />
                </LayoutComponent>
            );
            break;
        }
        default: {
            currentPage = (<NotFoundComponent />);
        }
    }

    return currentPage;
}

function getRandomProduct(categories: Array<ICategory>): IProduct {
    let products: Array<IProduct> = [];

    for (const category of categories) {
        const categoryProducts = category.products;

        products = [...products, ...categoryProducts];
    }

    const numberOfProducts = products.length;

    const index = Math.trunc(Math.random() * numberOfProducts);


    return products[index];
}
