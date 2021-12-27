import { ISpecificationGroup } from "../../../../types";
import "./SpecificationGroup.component.css";

import SpecificationListComponent from "./SpecificationList/SpecificationList.component";

function SpecificationGroupComponent(props: any) {
    const specificationGroup: ISpecificationGroup = props.specificationGroup;

    return (
        <div className="specification-group">
            <div>
                {specificationGroup.title}
            </div>

            <div>
                <SpecificationListComponent specificationList={specificationGroup.specifications} />
            </div>
        </div>
    )
}

export default SpecificationGroupComponent;
