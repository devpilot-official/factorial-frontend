function Order({ order }) {
    
    return (
        <div>
            <div className="qa-message-list" id="wallmessages">
                <div className="message-item" id="m16">
                    <div className="message-inner">
                        <div className="message-head clearfix">
                            <div className="user-detail">
                                <h5 className="handle">{ order.name } - { order.orderValue }</h5>
                                <div className="post-meta">
                                    <div className="asker-meta">
                                        <span className="qa-message-what"></span>
                                        <span className="qa-message-when">
                                            <span className="qa-message-when-data">{ order.createdAt }</span>
                                        </span>
                                        {/* <span className="qa-message-who">
                                            <span className="qa-message-who-pad"> by </span>
                                            <span className="qa-message-who-data">{ order.time }</span>
                                        </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Order;
