import { ICharacteristicGroup } from "../../../../types";
import "./SpecificationGroup.component.css";

import SpecificationListComponent from "./SpecificationList/SpecificationList.component";

function SpecificationGroupComponent(props: any) {
    const characteristicGroup: ICharacteristicGroup = props.characteristicGroup;

    return (
        <div className="specification-group">
            <div>
                {characteristicGroup.title}
            </div>

            <div>
                <SpecificationListComponent specificationList={characteristicGroup.characteristics} />
            </div>
        </div>
    )
}

export default SpecificationGroupComponent;
