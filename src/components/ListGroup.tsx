function ListGroup() {
    let area = ['Dhaka', 'Rangpur', 'Barishal', 'Rajshahi', 'Khulna', 'Sylhet', 'Mymenshingh'];

    area =[];
    if(area.length == 0){
        return <>
        <h1>List Items</h1>
        <p>No Item Found</p>
        </>
    }

    return <>
        <h1>List Items</h1>
        <div className="list-group">
            {area.map(items => <a key={items} href="#" className="list-group-item list-group-item-action">{items}</a>)}
        </div>
    </>;
}
export default ListGroup;