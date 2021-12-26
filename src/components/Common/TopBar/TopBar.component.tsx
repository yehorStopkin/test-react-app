import './TopBar.component.css';

function TopBarComponent(props: any) {

    return (
        <div className="top-bar">
            <div className="top-bar__left">
                <div className="top-bar__categories top-bar__action">
                    Ссылка на страницу категорий
                </div>
            </div>

            <div className="top-bar__right">
                <div className="top-bar__cart top-bar__action" >
                    <i className="fa fa-shopping-cart"></i>
                </div>

                <div className="top-bar__login top-bar__action top-bar__button">
                    Кнопка логина {/** Если пользователь не авторизирован */}
                </div>

                <div className="top-bar__personal-cabinet top-bar__action">
                    Ссылка на личный кабинет {/**Если пользователь авторизирован */}
                </div>

                <div className="top-bar__logout top-bar__action top-bar__button">
                    Кнопка логаута {/** Если пользователь авторизирован */}
                </div>
            </div>
        </div>
    )
}

export default TopBarComponent;

/**
 * Этот компонент должен быть в одну строку, ссылка на категории слева, корзина и остальное — справа.
 */