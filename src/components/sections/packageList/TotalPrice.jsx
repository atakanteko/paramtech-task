import {Col, Row} from "antd";

function TotalPrice(){
    return(
        <Row
            className="total-price"
        >
            <Col xs={24} lg={18}>
                <h3>Seçilen Paket Tutarı: <b>631₺</b> </h3>
            </Col>
            <Col xs={24} lg={6}>
                <div className="pt-button">
                    <span>Devam Et</span>
                </div>
            </Col>
        </Row>
    )
}

export default TotalPrice;