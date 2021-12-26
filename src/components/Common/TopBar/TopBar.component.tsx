import React from 'react';
import './TopBar.component.css';

function TopBarComponent(props: any) {
    const [needLogin, setNeedLogin] = React.useState<boolean>(false);

    function login() {
        setNeedLogin(false);
    }

    function logout() {
        setNeedLogin(true);
    }

    function openPersonalCabinet() {
        alert('Personal cabinet is opened!');
    }

    function openCart() {
        alert('Shopping cart is opened!');
    }

    function openCategories() {
        alert('Page with categories is opened!');
    }

    return (
        <div className="top-bar">
            <div className="top-bar__left">
                <div
                    onClick={() => openCategories()}
                    className="top-bar__categories top-bar__action"
                >
                    <i className="fa fa-list" /> 
                    <span> Categories </span>
                </div>
            </div>

            <div className="top-bar__right">
                {needLogin ? null :
                    <div
                        onClick={() => openPersonalCabinet()}
                        className="top-bar__personal-cabinet top-bar__action"
                        title="Personal cabinet"
                    >
                        <i className="fa fa-user" />
                    </div>
                }

                <div
                    onClick={() => openCart()}
                    className="top-bar__cart top-bar__action"
                >
                    <i className="fa fa-shopping-cart"></i>
                </div>

                {needLogin ?
                    <div
                        onClick={() => login()}
                        className="top-bar__login top-bar__action"
                        title="Login"
                    >
                        <i className="fa fa-sign-in" />
                    </div>
                    :
                    <div
                        onClick={() => logout()}
                        className="top-bar__logout top-bar__action"
                        title="Logout"
                    >
                        <i className="fa fa-sign-out" />
                    </div>
                }


            </div>
        </div>
    )
}

export default TopBarComponent;

/**
 * Этот компонент должен быть в одну строку, ссылка на категории слева, корзина и остальное — справа.
 */