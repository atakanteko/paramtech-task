import { Col, Row } from "antd";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo } from "react";
import { setTotal } from "../../../features/package/packageSlice";

let total = 0

function TotalPrice(){
    const dispatch = useDispatch()

    const { selectedPackages, packages } = useSelector((store) => store.package)
    const [totalPrice, setTotalPrice] = useState(0)

    useMemo(() => {
        if (selectedPackages.length === 0) {
            setTotalPrice(0)
        } else {
            packages.forEach((item) => {
                selectedPackages.forEach((x) => {
                    if (item.id === x){
                        total += item.amount;
                        setTotalPrice(total)
                        dispatch(setTotal(total))
                    }
                })
            })
            total = 0;
        }
    },[selectedPackages])
    
    return(
        <Row
            className="total-price"
        >
            <Col xs={24} lg={18}>
                <h3>Seçilen Paket Tutarı: <b>{totalPrice}₺</b> </h3>
            </Col>
            <Col xs={24} lg={6}>
                <Link to="/payment" className={`pt-button ${selectedPackages.length === 0 && 'disable-btn'}`}>
                    <span>Devam Et</span>
                </Link>
            </Col>
        </Row>
    )
}

export default TotalPrice;