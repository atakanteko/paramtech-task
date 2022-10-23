import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { paymentThunk } from "../../../features/payment/paymentSlice";
import { Col, Skeleton, Spin } from "antd";

function CompletePayment({packageItems}){
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { isValid,debitCardInfo, isLoading, isPaymentSuccessful } = useSelector((store) => store.payment)
    const { selectedPackages, totalPrice,  } = useSelector((store) => store.package)

    useEffect(() =>{
        if (isPaymentSuccessful){
            navigate('/payment-status')
        }
    }, [isPaymentSuccessful])

    const handlePayment = () =>{
        const reqBody = {
            packageIds: [...selectedPackages],
            ...debitCardInfo,
            totalAmount: totalPrice
        }
        dispatch(paymentThunk(reqBody))
    }


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
                            <div className={`pt-button ${(!isValid || isLoading) ? 'disable-btn' : ''}`} onClick={()=>{handlePayment()}}>
                                {
                                    isLoading ? <Spin /> : <span>Ödeme Yap</span>
                                }
                            </div>
                        </div>
                }
            </div>
        </Col>
    )
}

export default CompletePayment;