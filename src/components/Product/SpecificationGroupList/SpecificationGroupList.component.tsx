import './SpecificationGroupList.component.css';

import SpecificationGroupComponent from './SpecificationGroup/SpecificationGroup.component';
import { ICharacteristicGroup } from '../../../types';

function SpecificationGroupListComponent(props: any) {
    const characteristicGroups: Array<ICharacteristicGroup> = props.characteristicGroups;

    const specificationGroupComponents = characteristicGroups.map((characteristicGroup: ICharacteristicGroup) => {
        return (
            <SpecificationGroupComponent characteristicGroup={characteristicGroup} key={characteristicGroup.title} />
        )
    });

    return (
        <div className="specification-group-list">
            {specificationGroupComponents}
        </div>
    )
}

export default SpecificationGroupListComponent;