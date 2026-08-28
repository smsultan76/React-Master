import { useState } from "react";

interface Props{
    area: string[];
    heading: string;
}
function ListGroup({area, heading}: Props) {

    const disable = 3;
    const [select, setSelect] = useState(-1);
    return <>
        <h1>{heading}</h1>
        {area.length == 0 && <p>No Item Found</p>}
        <div className="list-group">
            {area.map((items, index) => (
                <a key={items} href="#"
                    className={select == index ? 'list-group-item list-group-item-action active' : disable == index ? 'list-group-item list-group-item-action disabled' : 'list-group-item list-group-item-action'}
                    onClick={() => {setSelect(index)}}>{items}
                </a>
            ))}
        </div>
    </>;
}
export default ListGroup;