import React from 'react';

import LoginComponent from './components/Login/Login.component';
import CategoryComponent from './components/Category/Category.component';
import ProductComponent from './components/Product/Product.component';
import ShoppingCartComponent from './components/ShoppingCart/ShoppingCart.component';
import NotFoundComponent from './components/NotFound/NotFound.component';

function App() {
    let selectedPage = getPage();

    function getPage(): PAGE | null {
        return PAGE.CATEGORY;
    }

    let currentComponent = null;

    switch (selectedPage) {
        case PAGE.LOGIN: {
            currentComponent = (<LoginComponent />);
            break;
        }
        case PAGE.CATEGORY: {
            currentComponent = (<CategoryComponent />);
            break;
        }
        case PAGE.PRODUCT: {
            currentComponent = (<ProductComponent />);
            break;
        }
        case PAGE.SHOPPING_CART: {
            currentComponent = (<ShoppingCartComponent />);
            break;
        }
        default: {
            currentComponent = (<NotFoundComponent />);
        }
    }

    return currentComponent;
}

enum PAGE {
    LOGIN,
    CATEGORY,
    PRODUCT,
    SHOPPING_CART
}

export default App;
