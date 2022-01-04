import { CATEGORY } from "../../../../types/mocks/productMock";

function CategoryListItemComponent(props: any) {
    const clickHandler = props.onSelectCategory;

    const title: string = props.title;
    const id: CATEGORY = props.id;
    
    return (
        <div className="category-list-item" onClick={() => clickHandler(id)}>
            {title}
        </div>
    )
}

export default CategoryListItemComponent;