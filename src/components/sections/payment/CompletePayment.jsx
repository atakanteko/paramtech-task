import {Col, Skeleton} from "antd";

function CompletePayment({packageItems}){
    return(
        <Col xs={24} lg={6}>
            <div className="payment-card">
                {
                    packageItems.length === 0
                        ? (<Skeleton />)
                        : <div className="payment-completed">
                            <h4>Sepetteki Paketler</h4>
                            {
                                packageItems.map((item) =>{
                                    return(
                                        <div key={item.id} className="product-info">
                                            <h5>{item.name}</h5>
                                            <h5><b>{item.amount}₺</b></h5>
                                        </div>
                                    )
                                })
                            }
                            <div className="pt-button">
                                <span>Ödeme Yap</span>
                            </div>
                        </div>
                }
            </div>
        </Col>
    )
}

export default CompletePayment;