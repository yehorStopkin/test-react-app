import './SpecificationGroupList.component.css';

import SpecificationGroupComponent from './SpecificationGroup/SpecificationGroup.component';
import { ISpecificationGroup } from '../../../types';

function SpecificationGroupListComponent(props: any) {
    const specificationGroups: Array<ISpecificationGroup> = props.specificationGroups;

    const specificationGroupComponents = specificationGroups.map((specificationGroup: ISpecificationGroup) => {
        return (
            <SpecificationGroupComponent specificationGroup={specificationGroup} key={specificationGroup.title} />
        )
    });

    return (
        <div className="specification-group-list">
            {specificationGroupComponents}
        </div>
    )
}

export default SpecificationGroupListComponent;