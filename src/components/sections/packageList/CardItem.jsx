import {useState} from "react";
import {Col} from "antd";
import { Divider } from 'antd';

function CardItem({ id, amount, currency, details, imagePath, name, tags }) {
    const [applyStyle, setApplyStyle] = useState(false)

    const selectPackage = (selectedItemId, selectedItemAmount) =>{
        if(id === selectedItemId){
            setApplyStyle(!applyStyle)
        }
    }
    console.log(applyStyle)
    return(
        <Col xs={24} lg={12}>

            <div className={`card-container ${applyStyle && 'selected-card'}`}  onClick={()=>{selectPackage(id, amount)}}>
                <figure>
                    <img src={imagePath} alt={name}/>
                </figure>
                <div className="card-info">
                    <div className="card-title">
                        <h3>{name}</h3>
                        <h3>{amount}{currency}</h3>
                    </div>
                    <div className="card-detail">
                        {
                            details.map((detail, index) => {
                                return(
                                    <h5 key={index}>{detail}</h5>
                                )
                            })
                        }
                    </div>
                    <Divider className="card-divider"/>
                    <div className="card-tag">
                        {
                            tags.map((tag, index) => {
                                return(
                                    <h5 key={index}>{tag}</h5>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default CardItem;