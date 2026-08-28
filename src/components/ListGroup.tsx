import type { MouseEvent } from "react";
function ListGroup() {
    let area = ['Dhaka', 'Rangpur', 'Barishal', 'Rajshahi', 'Khulna', 'Sylhet', 'Mymenshingh'];

    const select = 0;
    const disable = 3;
    const handleCLick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault;
        console.log(event)
    };
    return <>
        <h1>List Items</h1>
        {area.length == 0 && <p>No Item Found</p>}
        <div className="list-group">
            {area.map((items, index) => (
                <a key={items} href="#"
                    className={select == index ? 'list-group-item list-group-item-action active' : disable == index ? 'list-group-item list-group-item-action disabled' : 'list-group-item list-group-item-action'}
                    onClick={handleCLick}>{items}
                </a>
            ))}
        </div>
    </>;
}
export default ListGroup;