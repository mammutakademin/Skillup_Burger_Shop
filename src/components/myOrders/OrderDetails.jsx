// Write all the code here

const OrderDetails = () => {
    return (
        <div className="orderDetails">
            <main>
                <h1>ORDER DETAILS</h1>
                <div>
                    <h1>SHIPPING</h1>
                    <p>
                        <b>Address</b>
                        {'sjda 12-32ss dsad'}
                    </p>
                </div>
                <div>
                    <h1>CONTACT</h1>
                    <p>
                        <b>Name</b> 
                        {'Stuart'}
                    </p>
                    <p>
                        <b>Phone</b>
                        {2131232123}
                    </p>
                </div>
                <div>
                    <h1>STATUS</h1>
                    <p>
                        <b>Order Status</b>
                        {'Processing'}
                    </p>
                    <p>
                        <b>Placed At</b> 
                        {'23-02-2002'}
                    </p>
                    <p>
                        <b>Delivered At</b>
                        {'23-02-2003'}
                    </p>
                </div>
                <div>
                    <h1>PAYMENT</h1>
                    <p>
                        <b>Payment Method</b>
                        {'COD'}
                    </p>
                    <p>
                        <b>Payment Reference</b>
                        {'#asdasdasdasd'}
                    </p>
                    <p>
                        <b>Paid At</b>
                        {'23-02-2003'}
                    </p>
                </div>
                <div>
                    <h1>AMOUNT</h1>
                    <p>
                        <b>ItemsTotal</b>
                        {'₹2132'}
                    </p>
                    <p>
                        <b>Shipping Charges</b>
                        {'₹200'}
                    </p>
                    <p>
                        <b>Tax</b>
                        {'₹232'}
                    </p>
                    <p>
                        <b>Total Amount</b>
                        {'₹2364'}
                    </p>
                </div>

                <article>
                    <h1>ORDERED ITEMS</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <div>12 x 232</div>
                    </div>
                    <div>
                        <h4>Veg Cheese Burger</h4>
                        <div>10 x 500</div>
                    </div>
                    <div>
                        <h4>Burger Fries</h4>
                        <div>10 x 1800</div>
                    </div>
                    <div>
                        <h4 style={{fontWeight: 600}}>Sub Total</h4>
                        <div style={{fontWeight: 500}}>₹2132</div>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default OrderDetails;