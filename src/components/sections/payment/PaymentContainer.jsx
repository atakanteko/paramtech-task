import {Col, Row, Skeleton} from "antd";
import CompletePayment from "./CompletePayment";

function PaymentContainer({packageItems}){
    return(
        <Row gutter={
            [
                { xs: 16, sm: 20, md: 24, lg: 28 },
                { xs: 16, sm: 20, md: 24, lg: 28 }
            ]}
             className="payment"
        >
            <Col xs={24} lg={18}>
                <div className="payment-card">
                    sdf
                </div>
            </Col>
            <CompletePayment packageItems={packageItems}/>
        </Row>
    )
}

export default PaymentContainer;