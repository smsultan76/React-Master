function ListGroup() {
    let area = ['Dhaka', 'Rangpur', 'Barishal', 'Rajshahi', 'Khulna', 'Sylhet', 'Mymenshingh'];

    area =[];

    return <>
        <h1>List Items</h1>
        {area.length == 0 && <p>No Item Found</p>}
        <div className="list-group">
            {area.map(items => <a key={items} href="#" className="list-group-item list-group-item-action">{items}</a>)}
        </div>
    </>;
}
export default ListGroup;