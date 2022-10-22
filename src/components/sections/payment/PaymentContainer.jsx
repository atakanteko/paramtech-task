import {Row} from "antd";
import CompletePayment from "./CompletePayment";
import DebitCard from "./DebitCard";

function PaymentContainer({packageItems}){
    return(
        <Row gutter={
            [
                { xs: 16, sm: 20, md: 24, lg: 28 },
                { xs: 16, sm: 20, md: 24, lg: 28 }
            ]}
             className="payment"
        >
            <DebitCard />
            <CompletePayment packageItems={packageItems}/>
        </Row>
    )
}

export default PaymentContainer;