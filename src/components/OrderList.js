import Order from "./Order";

function OrderList({ orders, filters }) {
    
    return (
        <div>
            <div className="row">
                <h2 className="col-md-8">Order Time Line</h2>
            </div>
            {
                orders.length > 0 ? orders.map((order, index) => (
                    <Order order={order} key={index} />
                )) : 'No orders'
            }    
        </div>
    );
}

export default OrderList;
