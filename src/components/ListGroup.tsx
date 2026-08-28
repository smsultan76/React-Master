import { useState } from "react";

function ListGroup() {
    let area = ['Dhaka', 'Rangpur', 'Barishal', 'Rajshahi', 'Khulna', 'Sylhet', 'Mymenshingh'];

    const disable = 3;
    const [select, setSelect] = useState(-1);
    return <>
        <h1>List Items</h1>
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