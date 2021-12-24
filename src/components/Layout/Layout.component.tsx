import './Layout.component.css';

import TopBarComponent from "../Common/TopBar/TopBar.component";


function LayoutComponent(props: any) {
    return (
        <div className="layout">
            <TopBarComponent className="layout__top-bar" />
            
            <div className="layout__body">
                {props.children}
            </div> 
        </div>
    )
}

export default LayoutComponent;

/**
 * 1) Добавить какой-то фон для этого компонента, который будет общей темой для сайта
 * 
 * 2*) TopBarComponent зафиксировать, чтобы он всегда был в шапке, даже когда пользователь скроллит страницу вниз.
 * Это задание со звёздочкой, потому что className="layout__top-bar" не работает. 
 * Нужно знать, как в реакте указывать классы для пользовательских компонентов.
 */