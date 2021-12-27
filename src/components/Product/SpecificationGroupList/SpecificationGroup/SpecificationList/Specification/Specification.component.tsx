import { ICharacteristic } from "../../../../../../types";
import "./Specification.component.css";

function SpecificationComponent(props: any) {
    const specification: ICharacteristic = props.specification;

    const values = specification.values.map((value: string) => {
        return (
            <div key={value}>{value}</div>
        )
    });

    return (
        <div className="specification">
            <div>
                {specification.title}
            </div>

            <div>
                {values}
            </div>
        </div>
    )
}

export default SpecificationComponent;