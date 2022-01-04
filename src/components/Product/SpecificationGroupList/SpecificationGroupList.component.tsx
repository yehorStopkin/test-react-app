import './SpecificationGroupList.component.css';

import SpecificationGroupComponent from './SpecificationGroup/SpecificationGroup.component';
import { ISpecificationGroup } from '../../../types';

function SpecificationGroupListComponent(props: any) {
    const specificationGroups: Array<ISpecificationGroup> = props.specificationGroups;
    const outerClass = props.className;

    const specificationGroupComponents = specificationGroups.map((specificationGroup: ISpecificationGroup) => {
        return (
            <SpecificationGroupComponent specificationGroup={specificationGroup} key={specificationGroup.title} />
        )
    });

    return (
        <div className={`${outerClass} specification-group-list`}>
            {specificationGroupComponents}
        </div>
    )
}

export default SpecificationGroupListComponent;