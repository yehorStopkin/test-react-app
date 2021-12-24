import CategoryListItemComponent from "./CategoryListItem/CategoryListItem.component";
import './CategoryList.component.css';

function CategoryListComponent() {
    return (
        <div className="category-list">
            <CategoryListItemComponent />
            <CategoryListItemComponent />
            <CategoryListItemComponent />
        </div>
    )
}

export default CategoryListComponent;