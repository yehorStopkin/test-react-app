import { ICharacteristicGroup } from '../../../types';
import './Specification.component.css';

function SpecificationComponent(props: any) {
    const characteristicGroups: Array<ICharacteristicGroup> = props.characteristicGroups;

    return (
        <div className="product-specification">
            <div>
                {characteristicGroups[0].title}
            </div>
        </div>
    )
}

export default SpecificationComponent;