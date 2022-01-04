import { ICategory } from '../../../types';
import './CategoryHeader.component.css';

function CategoryHeaderComponent(props: any) {
    const category = props.category as ICategory;

    const title = category.title;

    const numberOfProducnts = category.products.length;

    return (
        <div className="category-header">
            <div>{title}</div>

            <div>В данной категории найдено {numberOfProducnts} товаров</div>
        </div>
    )
}

export default CategoryHeaderComponent;