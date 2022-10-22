import {Col} from "antd";
import MockImage from '../../../assets/images/mockImage.png';
import { Divider } from 'antd';

function CardItem() {
    return(
        <Col xs={24} lg={12} >
            <div className="card-container selected-card">
                <figure>
                    <img src='http://placeimg.com/640/480/business' alt="mock"/>
                </figure>
                <div className="card-info">
                    <div className="card-title">
                        <h3>Paket Adi 1</h3>
                        <h3>220₺</h3>
                    </div>
                    <div className="card-detail">
                        <h5>ipsa</h5>
                        <h5>excepturi</h5>
                        <h5>dolorem</h5>
                    </div>
                    <Divider className="card-divider"/>
                    <div className="card-tag">
                        <h5>ipsa</h5>
                        <h5>excepturi</h5>
                        <h5>dolorem</h5>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default CardItem;