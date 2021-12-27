import { ICharacteristic } from "../../../../../types";
import "./SpecificationList.component.css";

import SpecificationComponent from "./Specification/Specification.component";

function SpecificationListComponent(props: any) {
    const specificationList: Array<ICharacteristic> = props.specificationList;

    const specificationComponents = specificationList.map((specification: ICharacteristic) => {
        return (
            <SpecificationComponent specification={specification} key={specification.title} />
        )
    });

    return (
        <div className="specification-list">
            {specificationComponents}
        </div>
    );
}

export default SpecificationListComponent