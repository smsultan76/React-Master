function ListGroup() {
    const area = ['Dhaka', 'Rangpur', 'Barishal', 'Rajshahi', 'Khulna', 'Sylhet', 'Mymenshingh'];

    return <>
        <h1>List Items</h1>
        <div className="list-group">
            {area.map(items => <a href="#" className="list-group-item list-group-item-action">{items}</a>)}
        </div>
    </>;
}
export default ListGroup;