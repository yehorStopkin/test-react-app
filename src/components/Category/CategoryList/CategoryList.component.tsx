import CategoryListItemComponent from "./CategoryListItem/CategoryListItem.component";
import './CategoryList.component.css';
import { ICategory } from "../../../types";

function CategoryListComponent(props: any) {
    const selectCategoryHandler = props.onSelectCategory;
    const categories = props.categories;

    const categoryListItemComponents = categories.map((category: ICategory) => {
        return <CategoryListItemComponent
            key={category.id}
            id={category.id}
            title={category.title}
            onSelectCategory={selectCategoryHandler}
        />
    })

    return (
        <div className="category-list">
            {categoryListItemComponents}
        </div>
    )
}

export default CategoryListComponent;